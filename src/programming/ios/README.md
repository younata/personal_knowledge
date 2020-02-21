# iOS Development

## SplitViews

[`UISplitViewController`](https://developer.apple.com/documentation/uikit/uisplitviewcontroller) is a really neat class that can do both the neat "on ipad, show the main/detail paradigm", and showing the regular "navigation controller with main, then go to detail if you tap somewhere".

On iPad, to get both the main and the detail to show up, set the `preferredDisplayMode` property to `.allVisible`.

You should also make sure you're displaying a navigation controller in your detail, so you can include the UISplitView `displayModeButtonItem` there.

## TableView/ScrollView

On iOS, a UITableView is a subclass of a UIScrollView. While I understand why this is the case (99% of the time, you want a scrolling tableview), I've been starting to think that the OSX/cocoa approach of having them be [separate classes is actually a better approach](https://blog.rachelbrindle.com/2015/08/08/osx-programming-programmatic-scrolling-tableview/#scrolling). But, I can see that this might have made the implementation of UITableView much easier to just always assume it's in a ScrollView.

### Refresh Control

It used to be that you had to use a [`UITableViewController`](https://developer.apple.com/documentation/uikit/uitableviewcontroller) and it's [`refreshControl`](https://developer.apple.com/documentation/uikit/uitableviewcontroller/1614752-refreshcontrol) property to get a pull to refresh behavior. This is no longer the case. As of iOS 10, you can set [`UIScrollView's`](https://developer.apple.com/documentation/uikit/uiscrollview) [`refreshControl`](https://developer.apple.com/documentation/uikit/uiscrollview/2127691-refreshcontrol) property to get a refresh control on any scrollview (and any subclass). Of course, on earlier versions of the OS, you can also add the refreshcontrol as a subview of the scrollview, and it'll still work. This is just less magical in how you do it.

### Dismiss keyboard on scroll

The old (pre iOS 7) way of dismissing the keyboard when you scroll is to use UIScrollViewDelegate methods to be notified when the scrollview scrolled, and then call `-resignFirstResponder` from the scrollview.

The new way is to set the [`keyboardDismissMode`](https://developer.apple.com/documentation/uikit/uiscrollview/1619437-keyboarddismissmode) property to either [`.onDrag`](https://developer.apple.com/documentation/uikit/uiscrollview/keyboarddismissmode/ondrag) on [`.interactive`](https://developer.apple.com/documentation/uikit/uiscrollview/keyboarddismissmode/interactive)

## Preventing device sleep

Set the [`isIdleTimerDisabled`](https://developer.apple.com/documentation/uikit/uiapplication/1623070-isidletimerdisabled) property on the [`UIApplication`](https://developer.apple.com/documentation/uikit/uiapplication) object to true in order to prevent the device from going to sleep due to limited/no interaction. For obvious reasons, be careful with this api as it'll prevent the device from going to sleep.

## Common Crashes

### `unrecognized selector sent to instance 0x8000000000000000`

At first glance, the crash log will read like you tried to access an object that had already been deallocated. However, the giveaway is that `0x8000000000000000` address. This suspicious address tells you that you have a concurrent write bug. Somewhere, you have a race condition with multiple threads writing to the exact same address at the same time.
