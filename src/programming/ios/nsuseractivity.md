# NSUserActivity

[`NSUserActivity`](https://developer.apple.com/documentation/foundation/nsuseractivity) is a class to facilitate deeplinking into your app. The original (public) purpose was for handoff, it's now been adapted for facilitating search and siri integration.

## Setting up deeplinks

You create one with an appropriate activity type, set the title, enable other properties as it makes sense, then finally call [`becomeCurrent()`](https://developer.apple.com/documentation/foundation/nsuseractivity/1413665-becomecurrent).

### Activity Types

These are strings, usually in reverse-DNS style, that describe the domain and the particular type of activity - e.g. `com.rachelbrindle.second_brain.read_chapter` describes opening/reading a chapter for `com.rachelbrindle.second_brain`. The activity types your app supports MUST also be mentioned in the `Info.plist` file, see [NSUserActivityTypes](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW28).

### Handoff

Set the [`isEligibleForHandoff`](https://developer.apple.com/documentation/foundation/nsuseractivity/1410971-iseligibleforhandoff) property to `true`.

### Search

This allows spotlight to present more optimized results to the user, as well as allowing the user to search for an activity they were previously engaging in.

Set the [`isEligibleForSearch`](https://developer.apple.com/documentation/foundation/nsuseractivity/1417761-iseligibleforsearch) property to `true`. If you want to help search results for other users, you can set [`isEligibleForPublicIndexing`](https://developer.apple.com/documentation/foundation/nsuseractivity/1414701-iseligibleforpublicindexing) to `true`.

Note that your app must maintain a strong reference to any activity objects used for search results. Also, don't use this to index all the app's contents, that's what the much more power core spotlight apis are for.

