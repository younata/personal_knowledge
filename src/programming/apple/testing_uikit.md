# Testing UIKit

It is possible to unit test UIKit components. It's annoying and in a lot of places undocumented. However, in my experience, it is significantly faster and more reliable to test UI from what xcode describes as a unit test perspective vs. using [`XCUITest`]({{#path_for UI Testing}}).

As far as this document is concerned, a unit-testing perspective means that the tests run in the same process the code being tested runs in. For example, in a UI Testing Bundle, there are 2 separate processes running: The app itself is running in one process, and the tests are running in a second process. They communicate via IPC.

---

- Most APIs work fine without being in a window hierarchy.
  - The main exception here is the [`UIViewController`](https://developer.apple.com/documentation/uikit/uiviewcontroller) presentation APIs, such as:
    - [`present(_:animated:completion:)`](https://developer.apple.com/documentation/uikit/uiviewcontroller/1621380-present)
    - [`dismiss(animated:completion:)`](https://developer.apple.com/documentation/uikit/uiviewcontroller/1621505-dismiss)
    - [`show(_:sender:)`](https://developer.apple.com/documentation/uikit/uiviewcontroller/1621377-show)
    - [`showDetailViewController(_:sender:)`](https://developer.apple.com/documentation/uikit/uiviewcontroller/1621432-showdetailviewcontroller)
  - Additionally, most of the standard ViewController containers also need to be inside of window hierarchies, such as:
    - [`UINavigationController`](https://developer.apple.com/documentation/uikit/uinavigationcontroller)
    - [`UITabBarController`](https://developer.apple.com/documentation/uikit/uitabbarcontroller)
    - [`UISplitViewController`](https://developer.apple.com/documentation/uikit/uisplitviewcontroller)

- A lot of views work just fine when they are size 0. Views that don't work fine include:
  - [`UITableView`](https://developer.apple.com/documentation/uikit/uitableview) (if you access the [`visibleCells`](https://developer.apple.com/documentation/uikit/uitableview/1614896-visiblecells) and related apis)
  - [`UICollectionView`](https://developer.apple.com/documentation/uikit/uicollectionview) (if you access the [`visibleCells`](https://developer.apple.com/documentation/uikit/uicollectionview/1618056-visiblecells) and related apis)
