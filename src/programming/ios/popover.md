# UIPopoverPresentationController

[UIPopoverPresentationController](https://developer.apple.com/documentation/uikit/uipopoverpresentationcontroller) is the new (as of iOS 8) way to do a popover. This replaces the older UIPopoverController, and should be used for anything recent.

## Arrow Directions

If you only ever want to show your popover from a given direction, you can control this with the `permittedArrowDirections` property. According to the documentation, you can only do this when configuring, not after it's been presented[^haven't tried]. As the name suggests, this controls where the arrow on the popover shows, not where the popover is relative to the `sourceRect`/`sourceView`.

## When the device rotates

You can also control where the popover comes from by updating the `sourceRect`/`sourceView`. This can be done after receiving [`viewWillTransition(to:with:)`](https://developer.apple.com/documentation/uikit/uicontentcontainer/1621466-viewwilltransition) on the presenting view controller. Be sure to call `view.layoutIfNeeded()` on the presenting view controller before updating this, otherwise the `sourceRect` might be outdated[^sourceView unknown].

[^haven't tried]: I haven't tested this myself to see what happens if you do try to change that property after it's been presented.

[^sourceView unknown]: I'm unsure if you have to call `layoutIfNeeded()` if you use `sourceView` instead of `sourceRect`.
