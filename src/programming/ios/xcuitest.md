# UI Testing with iOS Devices.

XCUITest, introduced in iOS 9, is a technology for automating acceptance tests. It works by running your app in a separate process from the test, with the test communicating to the app using a form of IPC (Inter-Process-Communication). Elements are identified via accessibility IDs/values.

[A pretty decent introduction/reminder of what all is involved](https://medium.com/@jchen_77520/accessibility-and-ui-testing-in-ios-3eb0822a17fb).

## Predicates

You can fetch a group of elements matching a predicate by calling [`element(matching:)`](https://developer.apple.com/documentation/xctest/xcuielementquery/1500768-element) on any XCUIElementQuery. Most objects in XCUITest are XCUIElementQuery's.

Anything that conforms to [`XCUIElementAttribute`](https://developer.apple.com/documentation/xctest/xcuielementattributes) can be queried as part of one of these queries.

## Queries

- [Finding text on a Cell](https://shoptimizerapp.wordpress.com/2017/01/15/conveniently-finding-uitableviewcells-in-xcuitest/)  
  Honestly, I had more luck with `app.tables.cells.element(boundBy: 0).firstMatch.staticText[LABEL_ACCESSIBILITY_ID]`.
