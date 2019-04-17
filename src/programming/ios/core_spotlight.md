# Core Spotlight

Making app content searchable!

In general, you should prefer to batch update the index. However, keep in mind that the [`default()`](https://developer.apple.com/documentation/corespotlight/cssearchableindex/1620341-default) index doesn't support batching - you'll need to create your own.

## Indexing

Add items with [`indexSearchableItems(:completionHandler:)`](https://developer.apple.com/documentation/corespotlight/cssearchableindex/1620333-indexsearchableitems), and remove them with one of the deletion methods.

## Opening an item that was searched for

Once you have your stuff in the index, you need to handle what happens when the user searches for and selects one of those items.

Doing this is the same codepath as [continuing from a deeplink](nsuseractivity.md#continuing-from-a-deeplink). Only, this time, the activity type will be `CSSearchableItemActionType`, with the item identifier (you should have picked one that actually refers to your item) as value for the `CSSearchableItemActivityIdentifier` key under the `userInfo` property. [See Apple's documentation on doing this](https://developer.apple.com/library/archive/documentation/General/Conceptual/AppSearch/AppContent.html#//apple_ref/doc/uid/TP40016308-CH7-SW11).
