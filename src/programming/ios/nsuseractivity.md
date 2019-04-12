# NSUserActivity

[`NSUserActivity`](https://developer.apple.com/documentation/foundation/nsuseractivity) is a class to facilitate deeplinking into your app. The original (public) purpose was for handoff, it's now been adapted for facilitating search and siri integration.

## Setting up activities

You create one with an appropriate activity type, set the title, enable other properties as it makes sense, then finally call [`becomeCurrent()`](https://developer.apple.com/documentation/foundation/nsuseractivity/1413665-becomecurrent).

Note that if you assign a user activity instance to a [`UIViewController`'s](https://developer.apple.com/documentation/uikit/uiviewcontroller) or [`UIResponder`'s](https://developer.apple.com/documentation/uikit/uiresponder) [`userActivity`](https://developer.apple.com/documentation/uikit/uiresponder/1621089-useractivity) property, then you don't need to worry about calling the `becomeCurrent` or `resignCurrent` methods - these are handled for you.

### Activity Types

These are strings, usually in reverse-DNS style, that describe the domain and the particular type of activity - e.g. `com.rachelbrindle.second_brain.read_chapter` describes opening/reading a chapter for `com.rachelbrindle.second_brain`. The activity types your app supports MUST also be mentioned in the `Info.plist` file, see [NSUserActivityTypes](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW28).

### Handoff

Set the [`isEligibleForHandoff`](https://developer.apple.com/documentation/foundation/nsuseractivity/1410971-iseligibleforhandoff) property to `true`.

### Search

This allows spotlight to present more optimized results to the user, as well as allowing the user to search for an activity they were previously engaging in.

Set the [`isEligibleForSearch`](https://developer.apple.com/documentation/foundation/nsuseractivity/1417761-iseligibleforsearch) property to `true`. If you want to help search results for other users, you can set [`isEligibleForPublicIndexing`](https://developer.apple.com/documentation/foundation/nsuseractivity/1414701-iseligibleforpublicindexing) to `true`.

Note that your app must maintain a strong reference to any activity objects used for search results. Also, don't use this to index all the app's contents, that's what the much more power core spotlight apis are for.

## Continuing from a deeplink

(This only covers handoff, search and siri might be different)

The simplest way to continue from a deeplink is to implement [`application(_:continue:restorationHandler:)`](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/1623072-application) on your [app delegate](https://developer.apple.com/documentation/uikit/uiapplicationdelegate). Optionally, if your app might take a while to set things up (e.g. need to retrieve data from the network), then implementing and having your app delegate respond to [`application(_:willContinueUserActivityWithType:)`](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/1622919-application) will provide a nicer user experience.

