# iOS Development

## SplitViews

[`UISplitViewController`](https://developer.apple.com/documentation/uikit/uisplitviewcontroller) is a really neat class that can do both the neat "on ipad, show the main/detail paradigm", and showing the regular "navigation controller with main, then go to detail if you tap somewhere".

On iPad, to get both the main and the detail to show up, set the `preferredDisplayMode` property to `.allVisible`.

You should also make sure you're displaying a navigation controller in your detail, so you can include the UISplitView `displayModeButtonItem` there.