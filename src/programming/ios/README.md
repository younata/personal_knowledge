# iOS Development

## SplitViews

[`UISplitViewController`](https://developer.apple.com/documentation/uikit/uisplitviewcontroller) is a really neat class that can do both the neat "on ipad, show the main/detail paradigm", and showing the regular "navigation controller with main, then go to detail if you tap somewhere".

On iPad, to get both the main and the detail to show up, set the `preferredDisplayMode` property to `.allVisible`.

You should also make sure you're displaying a navigation controller in your detail, so you can include the UISplitView `displayModeButtonItem` there.

## TableView/ScrollView

On iOS, a UITableView is a subclass of a UIScrollView. While I understand why this is the case (99% of the time, you want a scrolling tableview), I've been starting to think that the OSX/cocoa approach of having them be [separate classes is actually a better approach](https://blog.rachelbrindle.com/2015/08/08/osx-programming-programmatic-scrolling-tableview/#scrolling). But, I can see that this might have made the implementation of UITableView much easier to just always assume it's in a ScrollView.

### Dismiss keyboard on scroll

The old (pre iOS 7) way of dismissing the keyboard when you scroll is to use UIScrollViewDelegate methods to be notified when the scrollview scrolled, and then call `-resignFirstResponder` from the scrollview.

The new way is to set the [`keyboardDismissMode`](https://developer.apple.com/documentation/uikit/uiscrollview/1619437-keyboarddismissmode) property to either [`.onDrag`](https://developer.apple.com/documentation/uikit/uiscrollview/keyboarddismissmode/ondrag) on [`.interactive`](https://developer.apple.com/documentation/uikit/uiscrollview/keyboarddismissmode/interactive)
