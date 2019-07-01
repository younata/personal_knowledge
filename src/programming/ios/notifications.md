# Notifications

Local and Remote (push) Notifications, not NSNotifications.

This is going to describe the newer [UserNotifications framework](https://developer.apple.com/documentation/usernotifications) introduced in iOS 10, instead of the older UIKit-based way of doing notifications.

## Content

[`UNNotificationContent`](https://developer.apple.com/documentation/usernotifications/unnotificationcontent) provides read-only access to information shown to the user about a specific notification. For setting information (e.g. when preparing to send a local notification), you'd use the [`UNMutableNotificationContent`](https://developer.apple.com/documentation/usernotifications/unmutablenotificationcontent) class.

## Actions

Either kind of notification can be an [actionable notification](https://developer.apple.com/documentation/usernotifications/declaring_your_actionable_notification_types).

## Triggers

As of iOS 12, there are four kinds of notification: [Calendar](https://developer.apple.com/documentation/usernotifications/uncalendarnotificationtrigger), [Time](https://developer.apple.com/documentation/usernotifications/untimeintervalnotificationtrigger), [Location](https://developer.apple.com/documentation/usernotifications/unlocationnotificationtrigger), and [Push](https://developer.apple.com/documentation/usernotifications/unpushnotificationtrigger). The first 3 are used with local notifications, while the last is only used for push notifications.

- Calendar triggers for a specific date: "Today at 7 pm", or "every day at 8 am".
- Time triggers in a set time from now: In 30 seconds, or every 30 seconds.
- Location[^location-trigger-permissions] triggers when the user either exits or enters a specific [region](https://developer.apple.com/documentation/corelocation/clregion). You can set to send the notification for both entry and exit.
- Push is used to detect whether the notification you received is a push notification or not.

## Types of Notifications

### Local Notifications

Local Notifications are notifications generated entirely on the device. These would be things that appear when you enter or leave an area, at a certain time, etc.

The way to send a local notification is to create a [`UNNotificationRequest`](https://developer.apple.com/documentation/usernotifications/unnotificationrequest), with an identifier, [content](https://developer.apple.com/documentation/usernotifications/unmutablenotificationcontent), and a [trigger](https://developer.apple.com/documentation/usernotifications/unnotificationtrigger), then ask the [`current`](https://developer.apple.com/documentation/usernotifications/unusernotificationcenter/1649510-current) [`UNUserNotificationCenter`](https://developer.apple.com/documentation/usernotifications/unusernotificationcenter) to [`add(_:withCompletionHandler:)`](https://developer.apple.com/documentation/usernotifications/unusernotificationcenter/1649508-add) the request.

### Remote Notifications

Also called Push Notifications. Push notifications are sent from some external server to your app.

As of iOS 7, you can also send "silent" or "content-available" notifications. These notifications do not present an alert to the user and instead wake up your app so that you can do something in response to the notification (usually update your content cache so when the user next opens the app they already have up to date information). See [this apple documentation](https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/pushing_updates_to_your_app_silently).

#### Sending Push Notifications

Push notifications need to be signed in order to be sent. There are two ways to do this: with a certificate pre-installed or with a jwt.

[This script is a simple curl-based script for sending test notifications](https://thrysoee.dk/apns/). It requires modifications for your specific key and such, and you should change the `$curl` variable to us what you got from running `brew install curl-openssl`.

[^location-trigger-permissions]: This requires location permissions, but not always permissions. Apparently, this is due to the system handling the monitoring as opposed to the app. I've never tried this, though.
