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

## Viewing Long Strings

Some languages (German is notorious for this) end up with much longer translations than others. This can cause undesirable ellipsing or clipping of text.

One way to check for this without actually setting the language to German (which you might not have localizations for/be able to read) is to modify the "Arguments Passed On Launch" for your target to include `-NSDoubleLocalizedStrings YES`.

Note that this isn't always reliable, because apple, and it only applies to strings that go through `NSLocalizedString`
