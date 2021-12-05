# Availability Attribute

The `@available` attribute. Not the `#available` attribute.

The `@available` attribute is used to denote the availability of a given class/struct or method.

In the simplest form, we can use it to denote that a component is available starting at a given OS version:

```swift
@available(iOS 15, *)
class MyClass {} // MyClass is only available on iOS 15 and above.
```

If you try to use `MyClass` in an app targeting iOS 14 or lower, you'll get a compiler error, and get asked to wrap the section that uses it in a `#available` check.

You can specify other platforms and versions as well, the following are available:

- `iOS`
- `iOSApplicationExtension`
- `macOS`
- `macOSApplicationExtension`
- `macCatalyst`
- `macCatalystApplicationExtension`
- `watchOS`
- `watchOSApplicationExtension`
- `tvOS`
- `tvOSApplicationExtension`
- `swift` (e.g. specifying the version of swift this component requires)

## Deprecating & Obsoleting

You can mark a component as deprecated by specifying the `deprecated` argument (which takes an optional version number). Similarly, you can also specify when it was obsoleted by specifying the `obsoleted` argument (which also takes an optional version number). Using a deprecated component will trigger a compiler warning when targeting the version the component was deprecated on (or all, if you specified `deprecated: *`), while using an obsoleted component will trigger a compiler error when targeting the version the component was obsoleted on.

```swift
@available(iOS, deprecated: 13, obsoleted: 14)
class MyDeprecatedAndObsoletedComponent {}

@available(*, deprecated)
class MyDeprecatedComponent {}
```

## Message and Replacement

You can also have the compiler present a custom message as the error, and even provide a nice fix-it button if you have simply renamed it.. Use the `message` argument to provide a message, and a `renamed` argument for a new component to replace it with.

```swift
@available(*, obsoleted, renamed: "MyNewComponent")
struct MyOldComponent {}
```

```swift
@available(*, obsoleted, message: "Use MyNewComponent with some other component.")
struct MyOldComponent {}
```
