# View Controllers

[`UIViewController`](https://developer.apple.com/documentation/uikit/uiviewcontroller) is one of the most-used APIs in iOS.

## Lifecycle

A common interview question, if simple.

- `init`
- `awakeFromNib` (if available)
- `viewDidLoad`
- `viewWillAppear`
- `viewDidLayoutSubviews` (And any subsequent times the view's subviews are laid out)
- `viewDidAppear`

Ending:

- `viewWillDisappear`
- `viewDidDisappear`
- `deinit/dealloc`


## Transitions

Adding custom transitions, specifically.

### Theory

- Set the controller's [`modalPresentationStyle`](https://developer.apple.com/documentation/uikit/uiviewcontroller/1621355-modalpresentationstyle) property to [`.custom`](https://developer.apple.com/documentation/uikit/uimodalpresentationstyle/custom).
- Set the [`transitioningDelegate`](https://developer.apple.com/documentation/uikit/uiviewcontroller/1621421-transitioningdelegate) on your view controller. Leaving it unset will use the default.
- Have the [`transitioningDelegate`](https://developer.apple.com/documentation/uikit/uiviewcontroller/1621421-transitioningdelegate)'s [`animationController(forPresented:presenting:source:)`](https://developer.apple.com/documentation/uikit/uiviewcontrollertransitioningdelegate/1622037-animationcontroller) and [`animationController(forDismissed:)`](https://developer.apple.com/documentation/uikit/uiviewcontrollertransitioningdelegate/1622047-animationcontroller) methods return an appropriate [`UIViewControllerAnimatedTransitioning`](https://developer.apple.com/documentation/uikit/uiviewcontrolleranimatedtransitioning).
	- This object needs to implement [`transitionDuration(using:)`](https://developer.apple.com/documentation/uikit/uiviewcontrolleranimatedtransitioning/1622032-transitionduration) and [`animateTransition(using:)`](https://developer.apple.com/documentation/uikit/uiviewcontrolleranimatedtransitioning/1622061-animatetransition).
	- [`transitionDuration(using:)`](https://developer.apple.com/documentation/uikit/uiviewcontrolleranimatedtransitioning/1622032-transitionduration) return the length of the animation.
	- [`animateTransition(using:)`](https://developer.apple.com/documentation/uikit/uiviewcontrolleranimatedtransitioning/1622061-animatetransition) actually does the animation.
		- You do not implement a [`UIViewControllerContextTransitioning`](https://developer.apple.com/documentation/uikit/uiviewcontrollercontexttransitioning), this is passed in by the system.

### Example

Because these are all objective-c protocols, they need to be `NSObject` subclasses, so:

```swift
class PageCurlAnimatedTransitioning: NSObject, UIViewControllerAnimatedTransitioning {
	func transitionDuration(using context: UIViewControllerContextTransitioning?) -> TimeInteral {
	    return 0.25
	}
	
	func animateTransition(using context: UIViewControllerContextTransitioning) {
		guard let fromVC = context.viewController(forKey: .from),
			let toVC = context.viewController(forKey: .to),
			let snapshot = toVC.view.snapshotView(afterScreenUpdates: true) else {
				return
			}
		let containerView = context.containerView
		let startFrame = context.initialFrame(for: fromVC)
		let finalFrame = context.finalFrame(for: toVC)
		
		snapshot.frame = startFrame
		
		containerView.addSubview(toVC.view)
		containerView.addSubview(snapshot)
		toVC.view.isHidden = true
		
		UIView.animate(
			withDuration: self.transitionDuration(using: context),
			delay: 0,
			options: [.transitionCurlUp, .preferredFramesPerSecond60],
			animations: {
				snapshot.frame = finalFrame
		},
			completion: { _ in
				snapshot.removeFromSuperview()
				toVC.view.isHidden = false
		})
	}
}

class MyTransitioningDelegate: NSObject, UIViewControllerTransitioningDelegate {
    func animationController(forPresented presented: UIViewController, presenting: UIViewController, source: UIViewController) -> UIViewControllerAnimatedTransitioning? {
    	return PageCurlAnimatedTransitioning()
    }
}
```

And these would be used like so:

```swift
self.transitioner = MyTransitioningDelegate() // hold a strong reference to this.
let viewControllerToPresent = // ...
viewControllerToPresent.modalPresentationStyle = .custom
viewControllerToPresent.transitioningDelegate = self.transitioner
vc.present(viewControllerToPresent, animated: true, completion: nil)
```
