# Animations

You can do either view-based animations, or layer based animations.

Layer-based animations are more customizable (you can do 3d effects), but are harder to work with as a result.

## View-Based

As of iOS 10, the new preferred way to do view-based animations is to use the [`UIViewPropertyAnimator`](https://developer.apple.com/documentation/uikit/uiviewpropertyanimator) class.

## Layer-Based

There are at least 3 ways to animate CALayer properties.

1. Implicit animations.
2. Implicit with [`CATransaction`](https://developer.apple.com/documentation/quartzcore/catransaction)
3. Explicit with [`CAAnimation`](https://developer.apple.com/documentation/quartzcore/caanimation)


### Implicit Animations

Implicit animations are fairly magical - set desired property on the layer to what you want it to be, and CoreAnimation will figure out how to animate the layer to reflect that.

This has the downside of being far less configurable, as well as being less obvious that an animation is actually happening.

You can also group animations using [`CATransaction`](https://developer.apple.com/documentation/quartzcore/catransaction), which also allows you to specify things like duration and such. It appears that [`CATransaction`](https://developer.apple.com/documentation/quartzcore/catransaction) need to be wrapped inside of UIView animations.

`CATransaction` works by wrapping implicit animations up, and allowing you to modify their properties

You can call `CATransaction.setDisableActions()` with `true` in order to disable animations.

For testing reasons, even if animations are disabled, you still need to spin the runloop in order for the completion block to be called. Just call `RunLoop.main.run(until: Date(timeIntervalSinceNow: 1e-3))`.

### Explicit Animations

[`CAAnimation`](https://developer.apple.com/documentation/quartzcore/caanimation) is a cruftier API for handling animations. Most of CA hasn't really been updated for recent objective-C, or even swift happenings.

For the most part, you're going to use [`CABasicAnimation`](https://developer.apple.com/documentation/quartzcore/cabasicanimation), for which you can specify a keypath to animate.

Note that the delegate for a [`CAAnimation`](https://developer.apple.com/documentation/quartzcore/caanimation) [is retained by the animation object](https://developer.apple.com/documentation/quartzcore/caanimation/1412490-delegate). That is, it's a strong reference, not a weak one (as others are). Be careful with that.

This does provide the nice benefit of adding block-based end notifications, with the following bit of code:

```swift
class BlockAnimationDelegate: NSObject, CAAnimationDelegate {
    private let onComplete: (Bool) -> Void
    func animationDidStop(_ anim: CAAnimation, finished flag: Bool) {
        self.onComplete(flag)
    }

    init(onComplete: @escaping (Bool) -> Void) {
        self.onComplete = onComplete
        super.init()
    }
}

// [...]

let animation: CAAnimation // [...]
animation.delegate = BlockAnimationDelegate { finished in
    [...]
}
```

#### Maintaining Position Post-Animation

One of the things noted in the [CAAnimation Documentation](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreAnimation_guide/CreatingBasicAnimations/CreatingBasicAnimations.html#//apple_ref/doc/uid/TP40004514-CH3-SW1) is that the layer's data model is not updated as part of the animation.
This means that, by default, once the animation finishes, it'll immediately go back to it's starting position.

Fixing this is interesting, you can tell the animation to stick around for a bit, but why?

as [Ole notes](https://oleb.net/blog/2012/11/prevent-caanimation-snap-back/), you should instead set the fromValue property, so that the animation knows where to animate from, instead of letting it figure that out from the data layer.

For example:

```swift
let originalState = layer.position.y
let desiredState = CGFloat(50)

layer.position.y = desiredState

let animation = CABasicAnimation(keyPath: "position.y")
animation.toValue = desiredState
animation.fromValue = desiredState
layer.add(animation, forKey: "position")
```