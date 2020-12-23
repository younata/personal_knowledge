# StoreKit and In-App Purchase

This article made possible thanks to the [Engineering Subscriptions](https://developer.apple.com/videos/play/wwdc2018/705/) session at WWDC 2018.

- Add an object conforming to [`SKPaymentTransactionObserver`](https://developer.apple.com/documentation/storekit/skpaymenttransactionobserver) as early in the app lifecycle as possible (i.e. in `application(_:didFinishLaunchingWithOptions:)`).

## Verifying Receipts

There are two ways to do this: On device and server-side. I'm only going to cover server-side.

You upload the app store receipt to your server, and then have your server make a call to the app store to verify the receipt.

The receipt is stored on device at wherever `Bundle.main.appStoreReceiptURL` returns. You are supposed to verify that the file exists and upload the contents of that file to your server as a base-64 encoded string.

E.g.

```swift
if let receiptURL = Bundle.main.appStoreReceiptURL,
   FileManager.default.fileExists(atPath: receiptURL.path),
   let receiptData = try? Data(contentsOf: receiptURL) {
    let base64Data = receiptData.base64EncodedString()
    // upload base64Data to your server.
}
```

Once the receipt data is on your server, you then make a call to the `/verifyReceipt` endpoint on the appstore - either `https://sandbox.itunes.apple.com/verifyReceipt` (sandbox/testing), or `https://buy.itunes.apple.com/verifyReceipt` (production). According to [the documentation](https://developer.apple.com/documentation/storekit/in-app_purchase/validating_receipts_with_the_app_store), try production first, then try sandbox if you get back a `21007` response code (this is NOT the http status code, but the `status` key in the [returned json](https://developer.apple.com/documentation/appstorereceipts/responsebody)). This call is supposed to have the at least two keys: `receipt-data` is the base64 encoded string that was just uploaded, and `password`, is a shared password set up in app store connect. You can also send `exclude-old-transactions` with `true` to exclude older transactions (per the [documentation](https://developer.apple.com/documentation/appstorereceipts/requestbody)).

Once you get a response back with non-zero `status`, check the `receipt.in_app` field (jq syntax), this is an array of json objects for the in app purchases. You can use this to double check that the transaction id and product id's match.

If you have a subscription, you should store the `expires_date` and `original_transaction_id` fields on those `in_app` objects. These are used to verify the user is still subscribed and to also renew transactions.

Once you've validated this server-side, you should call `finishTransaction(:)` with that transaction on the `SKPaymentQueue`.

### Renewing a subscription

When checking the receipt, if you have already stored the `original_transaction_id`, then you should filter the `in_app` list to find the object with the latest `expires_date` for each `original_transaction_id`. If the date is in the past, then the user is not subscribed. Now, update the stored `expires_date` with that latest `expires_date`.

You can also poll the app store for new transactions. To do this, you save the latest version of the base64 receipt data, and then make a new call to `/verifyReceipt` on the app store. This will return with any new transactions that have occurred. This is when you would specify `exclude-old-transactions` as `true`.

You can also get notified when a subscription lapses but renews later (i.e. billing error) by using Server-To-Server Notifications. You set up an endpoint for the app store to make a post request, which has the same `latest_transaction_info` field that `/verifyReceipt` will include.

## Other Notes

- Make subscription available before account creation.
- This gives a better user experience and results in a higher conversion.
- Rely on `original_transaction_id` to associate multiple accounts.
- You can point the customer to edit their billing information and manage subscriptions with the following urls:
  - Editing billing information: `https://apps.apple.com/account/billing`
  - Manage subscriptions: `https://apps.apple.com/account/subscriptions`
