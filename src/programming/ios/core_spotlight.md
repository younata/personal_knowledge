# Core Spotlight

Making app content searchable!

In general, you should prefer to batch update the index. However, keep in mind that the [`default()`](https://developer.apple.com/documentation/corespotlight/cssearchableindex/1620341-default) index doesn't support batching - you'll need to create your own.

## Indexing

Add items with [`indexSearchableItems(:completionHandler:)`](https://developer.apple.com/documentation/corespotlight/cssearchableindex/1620333-indexsearchableitems), and remove them with one of the deletion methods.

