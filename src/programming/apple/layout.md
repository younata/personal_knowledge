# Layout 

There are 2 system ways to do layout in iOS.

1. Frame-based
2. AutoLayout

Don't use frame based layouts unless you have to. Especially when it comes to supporting multiple size classes and such, that's way more effort than it's worth.

In general, I prefer this for laying out code:

1. Nibs w/ AutoLayout
2. Code w/ AutoLayout
3. Code w/ frames

## AutoLayout

From NSLayoutConstraint's api:

> Each constraint is a linear equation with the following format:
> `item1.attribute1 = multiplier * item2.attribute2 + constant`

### Apple-Provided APIs

- [`NSLayoutConstaint`](https://developer.apple.com/documentation/uikit/nslayoutconstraint) is the underlying api for specifying layout constraint. Everything else essentially gets converted to these when you use them.
- [`NSLayoutAnchor`](https://developer.apple.com/documentation/uikit/nslayoutanchor), introduced in iOS 9, is a factory class that makes it way nicer to specify layout constraints, without having to resort to visual format language.
- [`NSLayoutConstraint` Visual Format Language](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/AutolayoutPG/VisualFormatLanguage.html), is used in a class constructor for `NSLayoutConstraint`.

### Third Party Frameworks

- [PureLayout](https://github.com/PureLayout/PureLayout) provides a declarative interface for creating and installing layout constraints. It works as categories on NS/UIView and NSArray.
