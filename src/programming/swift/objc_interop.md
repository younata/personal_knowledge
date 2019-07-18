# Swift and Objective-C

## `NS_REFINED_FOR_SWIFT`

[`NS_REFINED_FOR_SWIFT`](https://developer.apple.com/documentation/swift/objective-c_and_c_code_customization/improving_objective-c_api_declarations_for_swift) is a macro that helps you write "swifty" API for objective-c code.

In the header file, you tag the method declaration with this macro, and in a swift extension, you write a swift implementation that uses it. This method prepends two underscores (`myMethod:whatever:` -> `__myMethod(_: whatever:)`) to most methods, though in the case of initializers, it appends to the first argument label.

## `NS_SWIFT_NAME`

[`NS_SWIFT_NAME`](https://developer.apple.com/documentation/swift/objective-c_and_c_code_customization/renaming_objective-c_apis_for_swift) is a macro that lets you specify the swift name for an objective-c method.

In the header file, you tag the method declaration with this macro, giving it the swift method name as it's argument, e.g.: `-setFoo:(Foo *)foo NS_SWIFT_NAME(set(foo:));`
