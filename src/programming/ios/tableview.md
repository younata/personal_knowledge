# UITableView

`UITableView`-specific things.

## Section Titles

Section titles are asserted by checking the [`headerView(forSection:)`](https://developer.apple.com/documentation/uikit/uitableview/1614965-headerview). You can then check the [`textLabel.text`](https://developer.apple.com/documentation/uikit/uitableviewheaderfooterview/1624912-textlabel) properties to get the displayed text.

Actually setting this is done by implementing the [`tableView(_:titleForHeaderInSection:)`](https://developer.apple.com/documentation/uikit/uitableviewdatasource/1614850-tableview) method on the [dataSource](https://developer.apple.com/documentation/uikit/uitableviewdatasource).

