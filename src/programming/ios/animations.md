# Animations

You can do either view-based animations, or layer based animations.

Layer-based animations are more customizable (you can do 3d effects), but are harder to work with as a result.

## View-Based

As of iOS 10, the new preferred way to do view-based animations is to use the [`UIViewPropertyAnimator`](https://developer.apple.com/documentation/uikit/uiviewpropertyanimator) class.

## Layer-Based

There are at least 3 ways to animate CALayer properties.

1. Implicit animations.
2. Explicit with [`CAAnimation`](https://developer.apple.com/documentation/quartzcore/caanimation)
3. Explicit with [`CATransaction`](https://developer.apple.com/documentation/quartzcore/catransaction)


### Implicit Animations

Implicit animations are fairly magical - set desired property on the layer to what you want it to be, and CoreAnimation will figure out how to animate the layer to reflect that.

This has the downside of being far less configurable, as well as being less obvious that an animation is actually happening.

### Explicit Animations

[`CAAnimation`](https://developer.apple.com/documentation/quartzcore/caanimation), along with [`CATransaction`](https://developer.apple.com/documentation/quartzcore/catransaction), are two ways of specifying explicit animation.
I'm going to focus more on [`CATransaction`](https://developer.apple.com/documentation/quartzcore/catransaction), as that offers a slightly nicer API.

`CATransaction` works by wrapping implicit animations up, and allowing you to modify their properties

You can call `CATransaction.setDisableActions()` with `true` in order to disable animations.

For testing reasons, even if animations are disabled, you still need to spin the runloop in order for the completion block to be called. Just call `RunLoop.main.run(until: Date(timeIntervalSinceNow: 1e-3))`.
