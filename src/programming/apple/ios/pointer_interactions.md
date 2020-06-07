# Pointer Interactions

The new fancy hotness introduced in iPadOS 13.4.

[this PSPDFKit blog post](https://pspdfkit.com/blog/2020/supporting-pointer-interactions/) serves as a good introduction to some of the things you can do.

See Apple's [human interface guidelines page on pointers](https://developer.apple.com/design/human-interface-guidelines/ios/user-interaction/pointers/) for a high level overview of the design elements.

Once you have your app optimized for pointer interactions, then set [`UIApplicationSupportsIndirectInputEvents` to YES in your app's `info.plist` file](https://developer.apple.com/documentation/bundleresources/information_property_list/uiapplicationsupportsindirectinputevents).

There are two ways to handle pointer interactions as of iOS 13.4: setting the [`isPointerInteractionEnabled` property on `UIButton`](https://developer.apple.com/documentation/uikit/uibutton/3538957-ispointerinteractionenabled) to true, and by adding a `UIPointerInteraction` to any view.

## `UIButton`

Life is easier for `UIButton`. Set `isPointerInteractionEnabled` to true, and, for any custom pointer styles, you can also set the button's [`pointerStyleProvider`](https://developer.apple.com/documentation/uikit/uibutton/3543887-pointerstyleprovider) property.

## `UIPointerInteraction`

On non-button views, the way to do this is to add a [`UIPointerInteraction`](https://developer.apple.com/documentation/uikit/uipointerinteraction) to your view. For the default behavior, you don't even need to set a delegate on the pointer.

For custom interactions, implement the delegate.

## Testing

Of course, you also need to verify that you're doing the right thing. Here are some nimble matchers that verify pointer interactions.

Note that, for simplicity, a these matchers expect you to do the simplest thing for the expected behavior, and while it's possible to go out of your way to reimplement the default behavior, that's not the way you should do that, and so the test should fail.

```swift
// Default pointer interactions - use whatever the default behavior is.
func haveTheDefaultPointerInteraction() -> Predicate<UIView> {
    return Predicate { actual -> PredicateResult in
        let message = ExpectationMessage.expectedActualValueTo("have the default pointer interaction")
        guard let view = try actual.evaluate() else {
            return PredicateResult(status: .fail, message: message.appendedBeNilHint())
        }
        if view is UIButton {
            return PredicateResult(status: .doesNotMatch, message: message.appended(details: "set `isPointerInteractionEnabled` to true to support the default pointer interaction on buttons"))
        }
        let pointerInteractions = view.interactions.compactMap { $0 as? UIPointerInteraction }

        // there should be one and only one pointer interaction here.
        guard let interaction = pointerInteractions.first, pointerInteractions.count == 1 else {
            return PredicateResult(status: .doesNotMatch, message: message)
        }
        // I mean, sure, it's possible to test that the delegate's responses returns the expected default values.
        // But that's work I don't care to do, and, honestly, if you're going to THAT much effort just for the default behavior
        // Then you did something wrong and your test SHOULD fail.
        return PredicateResult(bool: interaction.delegate == nil, message: message)
    }
}

func haveTheDefaultPointerInteraction() -> Predicate<UIButton> {
    return Predicate { actual -> PredicateResult in
        let message = ExpectationMessage.expectedActualValueTo("have the default pointer interaction")
        guard let button = try actual.evaluate() else {
            return PredicateResult(status: .fail, message: message.appendedBeNilHint())
        }

        let pointerInteractions = button.interactions.compactMap { $0 as? UIPointerInteraction }

        // there should be one and only one pointer interaction here.
        guard pointerInteractions.count == 1 else { // isPointerInteractionEnabled will add it's own UIPointerInteraction. This is still distinct from you the developer adding your own pointer interaction.
            return PredicateResult(status: .doesNotMatch, message: message.appended(details: "On buttons, it's easier to set `isPointerInteractionEnabled` to true. Use that for the default pointer interaction."))
        }
        // I mean, sure, it's possible to test that the pointerStyleProvider's responses returns the expected default values.
        // But that's work I don't care to do, and, honestly, if you're going to THAT much effort just for the default behavior
        // Then you did something wrong and your test SHOULD fail.
        return PredicateResult(bool: button.isPointerInteractionEnabled == true && button.pointerStyleProvider == nil, message: message)
    }
}
```
