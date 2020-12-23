# Styling iOS Apps

[Apple's HIG on color for iOS apps](https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/color/).

[New in iOS 13: Semantic Colors](https://developer.apple.com/documentation/uikit/uicolor/ui_element_colors)

## UIAppearance

For multiple themes in an app, I like using a `ThemeRepository` paradigm. When I only care for a single theme, then that's overkill, and I'll use [`UIAppearance`](https://developer.apple.com/documentation/uikit/uiappearance) as much as I can.

## Styling UINavigationBar

```swift
UINavigationBar.appearance().barTintColor = navColor
UINavigationBar.appearance().titleTextAttributes = [.foregroundColor: textColor]
UINavigationBar.appearance().tintColor = navButtonColor
```

## Styling the Status Bar

Note: This is deprecated as of iOS 9.

```swift
UIApplication.shared.statusBarStyle = .lightContent
```
