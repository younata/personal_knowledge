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

## Plural Strings

This is mostly borrowed from the now-ancient [objc.io article on String Localization](https://www.objc.io/issues/9-strings/string-localization/#plural-and-gender-support).

Essentially, you set up a `Localizable.stringsdict` file with something like the following:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>Processing %d Exposure</key><!-- Name of the key as used by NSLocalizedString -->
	<dict>
		<key>NSStringLocalizedFormatKey</key>
		<string>Processing %#@IMAGE@</string><!-- The string to be replaced, with the %#@IMAGE@ defining `IMAGE` to be a variable. You can have multiple variables. -->
		<key>IMAGE</key><!-- For the image key -->
		<dict>
			<key>NSStringFormatSpecTypeKey</key>
			<string>NSStringPluralRuleType</string><!-- Handling plurals -->
			<key>NSStringFormatValueTypeKey</key>
			<string>d</string><!-- The printf-style (without leading %) key -->
			<key>one</key><!-- Singular -->
			<string>%d Exposure</string>
			<key>other</key><!-- Plural. Note that there are ways to specify 0, two, many, few, etc. -->
			<string>%d Exposures</string>
		</dict>
	</dict>
</dict>
</plist>
```
