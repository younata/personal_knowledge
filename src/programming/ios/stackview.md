# StackViews

[`UIStackView`](https://developer.apple.com/documentation/uikit/uistackview), introduced in iOS 9, is an incredibly powerful class for managing layouts.

`UIStackView` manages showing either a horizontal or vertical stack of views, applying the autolayout constraints for you. It also takes care of correctly removing hidden views, so that they're not only invisible, but they're actually removed from the view hierarchy.

The 4 main properties for configuring stackviews are the [`axis`](https://developer.apple.com/documentation/uikit/uistackview/1616223-axis) (Vertical or Horizontal), [`distribution`](https://developer.apple.com/documentation/uikit/uistackview/1616233-distribution), [`alignment`](https://developer.apple.com/documentation/uikit/uistackview/1616243-alignment), and [`spacing`](https://developer.apple.com/documentation/uikit/uistackview/1616225-spacing).

The `distribution` property is a [`UIStackView.Distribution`](https://developer.apple.com/documentation/uikit/uistackview/distribution) value, and controls how the views are laid out in the axis of the stackview. It can be any of the following:

- `fill`: Fill available space, shrinking/expanding according to their compression resistance/hugging priority.
- `fillEqually`: Fill available space, resize all views to be the same size.
- `fillProportionally`: Fill available space, resize based on their intrinsic content size relative to the size of the axis (horizontal: width, vertical: height)
- `equalSpacing`: Fill the available space, adjust spacing so that each view is equal apart from each other.
- `equalCentering`: Fill available space, give each view equal center-to-center spacing while respecting the `spacing` property.

The `alignment` property is a [`UIStackView.Alignment`](https://developer.apple.com/documentation/uikit/uistackview/alignment) value, and controls how the views are laid out perpendicular to the stackview's axis. It can be any of the following:

- `fill`: Resize the views so that they fill the available space.
- `leading`: Align leading (horizontal) or top (vertical) edges of the views.
- `firstBaseline`: (Horizontal only): Align the first baseline of the views.
- `Center`: Align the centers of each views together.
- `trailing`: Align the trailing (horizontal) or bottom (vertical) edges of the views.
- `lastBaseline`: (Horizontal only): Align the last baseline of the views.

The `spacing` property is a `CGFloat` and is used to specify the space between views in the given axis.
