# Localizing

Using localized string and such.

## Testing

Sometimes, there are differences in the different localized versions of your app, and you need to test that in a unit test.

Here's a fairly hacky way to do that:

```swift
private var bundleKey: UInt8 = 0
func setBundleLanguage(_ language: String) {
    let path = Bundle.main.path(forResource: language, ofType: "lproj")
    objc_setAssociatedObject(Bundle.main, &bundleKey, path, .OBJC_ASSOCIATION_RETAIN_NONATOMIC)
    object_setClass(Bundle.main, AnyLanguageBundle.self)
}
```
