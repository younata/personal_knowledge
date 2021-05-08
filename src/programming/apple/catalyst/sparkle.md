# Embedding Sparkle

[Sparkle](https://sparkle-project.org) is the de-facto standard framework for updating mac apps. This documents what I did in May 2021 to use it in catalyst version of [AstroGraph](https://astrograph.app).

<a href="https://github.com/sparkle-project/Sparkle/issues/1482" data-proofer-ignore>This github issue</a> documents the current state of using Sparkle with Mac apps. Basically, because Sparkle relies heavily on AppKit, and there are large parts of AppKit that are closed off to catalyst apps, you can't directly embed Sparkle in your mac app. [One of the comments](https://github.com/sparkle-project/Sparkle/issues/1482#issuecomment-590299762) suggests embedding Sparkle in a [plugin](https://www.highcaffeinecontent.com/blog/20190607-Beyond-the-Checkbox-with-Catalyst-and-AppKit), then dynamically loading that plugin and running sparkle that way. There are speedbumps and other gotchas involved doing this, but it does work.

Create the bundle, and then set a principal class for it. In the main app, we're going to dynamically load the bundle and principle class, call a single selector in the principal class, and that will handle everything else.

## Loading the Plugin

So, to dynamically load the plugin, I added the following code to my AppDelegate:

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    // [...]
    if let pluginUrl = Bundle.main.builtInPlugInsURL?.appendingPathComponent("update.bundle"),
       let updateBundle: Bundle = Bundle(url: pluginUrl),
       updateBundle.load() {
        checkForUpdates()
    }
    // [...]
}

// [...]

@objc private func checkForUpdates() {
    if let pluginUrl = Bundle.main.builtInPlugInsURL?.appendingPathComponent("update.bundle"),
       let updateBundle: Bundle = Bundle(url: pluginUrl),
       let Updater: AnyClass = updateBundle.principalClass {
        let NSUpdater: NSObject.Type? = Updater as? NSObject.Type
        let selector = NSSelectorFromString("checkForUpdate")
        if NSUpdater?.responds(to: selector) == true {
            _ = NSUpdater?.perform(selector)
        }
    }
}
```

This does find the bundle twice, which isn't ideal, but it's not that expensive. I do this because I also added a keyboard shortcut to the app menu to check for updates.

Once you have the bundle loaded, and you call the `checkForUpdate` static function, then the App code is done. Let's go look at how the bundle implements this code.

I am not that well versed in writing plugins, or really writing mac apps in general. I aim to improve that, but I'm really only basic at best when it comes to this.

## Plugin Code

My plugin is very simple. I placed everything in 1 file, and it's as follows:

```swift
import Sparkle

@objc class Updater: NSObject {
    @objc public class func checkForUpdate() {
        SUUpdater.shared().checkForUpdatesInBackground()
    }
}
```

That's it.

You do need to configure sparkle, which is done by modifying the main app's info.plist.

## Modifying the info.plist

The main differences from an AppKit's usage of Sparkle is that catalyst apps can't display update notes. This is because Sparkle tries to embed and use the AppKit version of `WKWebView` (which is an `NSView`), but the plugin will only receive the UIKit version of `WKWebView` (which is a `UIView`). So, we set the `SUShowReleaseNotes` key to false in the main app's info.plist. After that, we only have to add the `SUFeedURL` key and the `SUPublicEDKey` key, as described in the [getting started documentation](https://sparkle-project.org/documentation/)

```xml
	<key>SUFeedURL</key>
	<string>$APPCAST_URL</string>
	<key>SUPublicEDKey</key>
	<string>$PUBLIC_EDKEY</string>
	<key>SUShowReleaseNotes</key>
	<false/>
```
