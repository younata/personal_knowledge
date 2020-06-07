# UICollectionView

## Supplementary views

Procuring a supplementary view is the responsibility of the collection view's data source. However, actually init'ing one of those supplementary views (which must be subclasses of `UICollectionReusableView`) MUST be done by the collection view, via the [`dequeueReusableSupplemantyrView(ofKind:withReuseIdentifier:for:)`](https://developer.apple.com/documentation/uikit/uicollectionview/1618068-dequeuereusablesupplementaryview). It's better to `fatalError()` than it is to return a `UICollectionReusableView()` - at least the error is easier to track when you `fatalError()`.

If you decide you don't want to show a view for that particular indexPath, instead have your layout object not create attributes for that view, OR create the view, and then set the `isHidden` property to 0, or set the `alpha` property to 0. Alternatively, if you have a `UICollectionViewFlowLayout` as the collection view's layout, then have the appropriate method on the delegate (either [`collectionView(:layout:referenceSizeForHeaderInSection:)`](https://developer.apple.com/documentation/uikit/uicollectionviewdelegateflowlayout/1617702-collectionview) or [`collectionView(:layout:referenceSizeForFooterInSection:)`](https://developer.apple.com/documentation/uikit/uicollectionviewdelegateflowlayout/1617713-collectionview)) return `CGSize.zero`.

Either approach is valid and will work.

## 2-finger multiple selection

New in iOS 13, for both UICollectionView and UITableView.

See the [apple documentation](https://developer.apple.com/documentation/uikit/uitableviewdelegate/selecting_multiple_items_with_a_two-finger_pan_gesture).
