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

## Context Menus

In iOS 13, we get context menus. These replaced the previous "listen to 3d touch events on the entire table view, and from there figure out which cell was pressed" stuff we had to do before (or at least, had to do in iOS 9 - when I last implemented that behavior).

The minimum delegate methods required to implement this behavior are:

- [`-tableView(:contextMenuConfigurationForRowAt:point:)`](https://developer.apple.com/documentation/uikit/uitableviewdelegate/3295956-tableview)
- [`-tableView(:willPerformPreviewActionForMenuWith:animator:`](https://developer.apple.com/documentation/uikit/uitableviewdelegate/3375810-tableview)

[`-tableView(:contextMenuConfigurationForRowAt:point:)`](https://developer.apple.com/documentation/uikit/uitableviewdelegate/3295956-tableview) is used to set up the menu for that item (what happens when you long/force press on the tableView). It returns an optional `UIContextMenuConfiguration`, which is used to set up the view controller to show, and a `UIMenu` to show with it.

[`-tableView(:willPerformPreviewActionForMenuWith:animator:`](https://developer.apple.com/documentation/uikit/uitableviewdelegate/3375810-tableview) is then used to commit that.

For example, see this example from my rss reader:

```swift
extension ArticleListController: UITableViewDelegate {
    // ...
    public func tableView(_ tableView: UITableView, contextMenuConfigurationForRowAt indexPath: IndexPath,
                          point: CGPoint) -> UIContextMenuConfiguration? {
        guard ArticleListSection(rawValue: indexPath.section) == .articles else { return nil }

        let article = self.articleForIndexPath(indexPath)
        return UIContextMenuConfiguration(
            identifier: article.link as NSURL,
            previewProvider: { return self.articleViewController(article) },
            actionProvider: { elements in
                return UIMenu(title: article.title, image: nil, identifier: nil, options: [],
                              children: elements + self.menuActions(for: article))
        })
    }

    public func tableView(_ tableView: UITableView,
                          willPerformPreviewActionForMenuWith configuration: UIContextMenuConfiguration,
                          animator: UIContextMenuInteractionCommitAnimating) {
        guard let articleController = animator.previewViewController as? ArticleViewController else { return }
        animator.addCompletion {
            self.markRead(article: articleController.article, read: true)
            self.showArticleController(articleController, animated: true)
        }
    }
}
```