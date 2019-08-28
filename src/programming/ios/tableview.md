# UITableView

`UITableView`-specific things.

## Section Titles

Section titles are asserted by checking the [`headerView(forSection:)`](https://developer.apple.com/documentation/uikit/uitableview/1614965-headerview). You can then check the [`textLabel.text`](https://developer.apple.com/documentation/uikit/uitableviewheaderfooterview/1624912-textlabel) properties to get the displayed text. Note that this needs the section header to be within the view in order to be non-nil. Otherwise you need to scroll to show that.

Actually setting this is done by implementing the [`tableView(_:titleForHeaderInSection:)`](https://developer.apple.com/documentation/uikit/uitableviewdatasource/1614850-tableview) method on the [dataSource](https://developer.apple.com/documentation/uikit/uitableviewdatasource).

## Scrolling under test

In order to scroll to a row, you invoke the [`scrollToRow(at:at:animated:)`](https://developer.apple.com/documentation/uikit/uitableview/1614997-scrolltorow) method. You also need the view to be within a visible window. This is also animated, so you'll to wait a bit before you do the next assertion.

```swift
let window = UIWindow(frame: CGRect(x: 0, y: 0, width: 320, height: 480))
window.rootViewController = subject
window.makeKeyAndVisible()

let indexPath = IndexPath(row: 3, section: 1)

subject.tableView.scrollToRow(at: indexPath, at: .middle, animated: false)

expect(subject.tableView.indexPathsForVisibleRows).toEventually(contain(indexPath))
```
