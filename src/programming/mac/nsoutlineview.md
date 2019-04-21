# `NSOutlineView` and `NSTreeController`

View nested lists easily!

[`NSOutlineView`](https://developer.apple.com/documentation/appkit/nsoutlineview) is a subclass of [`NSTableView`](https://developer.apple.com/documentation/appkit/nstableview) that provides a way to display hierarchical data. For example, file hierarchies (though, you'd actually use an [`NSBrowser`](https://developer.apple.com/documentation/appkit/nsbrowser) object for a file hierarchy).

[`NSTreeController`](https://developer.apple.com/documentation/appkit/nstreecontroller) is a [controller](https://developer.apple.com/documentation/appkit/nsobjectcontroller) that works with [`NSOutlineView`](https://developer.apple.com/documentation/appkit/nsoutlineview) and [`NSBrowser`](https://developer.apple.com/documentation/appkit/nsbrowser) to manage the data that they display.

In cocoa, controllers are super powerful because they allow you to bypass implementing a lot of the really boring delegate/datasource stuff that you're forced to do in iOS.

## Bindings

[This is a much better explanation of how to set up bindings correctly than I'm currently able to do.](https://en.atjason.com/Cocoa/Outline%20With%20Controller.html)


