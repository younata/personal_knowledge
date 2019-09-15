# WKWebView

[`WKWebView`](https://developer.apple.com/documentation/webkit/wkwebview) is the view you should use to display web content inside of an app.

## Delegates

[`WKWebView`](https://developer.apple.com/documentation/webkit/wkwebview) is somewhat unique in that it has two delegate methods and protocols - [`uiDelegate`](https://developer.apple.com/documentation/webkit/wkwebview/1415009-uidelegate) and [`navigationDelegate`](https://developer.apple.com/documentation/webkit/wkwebview/1414971-navigationdelegate)

### WKNavigationDelegate

Implement a [`WKNavigationDelegate`](https://developer.apple.com/documentation/webkit/wknavigationdelegate) to respond to url navigations - starting a navigation, authentication issues, errors, etc.

#### Don't open links.

Say, for example, you don't want clicked links to be opened in the webview. You'd implement [`webView(_:decidePolicyFor:decisionHandler:)`](https://developer.apple.com/documentation/webkit/wknavigationdelegate/1455641-webview) to detect if it's a link, and then call the handler with `.deny`, like so:

```swift
func webView(_ webView: WKWebView, decidePolicyFor action: WKNavigationAction, decisionHandler: @escaping (WKNavigationActionPolicy) -> Void) {
    switch action.navigationType {
    case .linkActivated:
        decisionHandler(.cancel)
    default:
        decisionHandler(.allow)
    }
}
```

You might instead choose to open the link elsewhere.

### WKUIDelegate

Implement a [`WKUIDelegate`](https://developer.apple.com/documentation/webkit/wkuidelegate) to respond to UI requests - javascript UI panels, upload panels, force touch.

#### Context Menus

In iOS 13, we got context menus. These replace the previous `WKPreviewItem`-based delegate methods, instead with 4 (currently undocumented) callbacks to implement:

- [`-webView(:contextMenuConfigurationForElement:completionHandler:)`](https://developer.apple.com/documentation/webkit/wkuidelegate/3335220-webview)
- [`-webView(:contextMenuDidEndForElement:)`](https://developer.apple.com/documentation/webkit/wkuidelegate/3335221-webview)
- [`-webView(:contextMenuForElement:willCommitWithAnimator:)`](https://developer.apple.com/documentation/webkit/wkuidelegate/3335222-webview)
- [`-webView(:contextMenuWillPresentForElement:)`](https://developer.apple.com/documentation/webkit/wkuidelegate/3335223-webview)

If you do nothing, when you long/force-press on a link, the view will present an `SFSafariViewController` configured to show that link, along with a few items. When that view controller is commited, the user is taken out of your app and into the Safari app.

Otherwise, to intercept that behavior, you only need to implement [`-webView(:contextMenuConfigurationForElement:completionHandler:)`](https://developer.apple.com/documentation/webkit/wkuidelegate/3335220-webview) and [`-webView(:contextMenuForElement:willCommitWithAnimator:)`](https://developer.apple.com/documentation/webkit/wkuidelegate/3335222-webview).

[`-webView(:contextMenuConfigurationForElement:completionHandler:)`](https://developer.apple.com/documentation/webkit/wkuidelegate/3335220-webview) is used to decide what to show to the user. If you call the callback with nil, then it defaults back to the default action previously mentioned. Otherwise, you can use the `linkURL` property on the given `WKContextMenuElementInfo` object to get the link, and then call the callback with a custom `UIContextMenuConfiguration` configured for whatever view controller you want.

[`-webView(:contextMenuForElement:willCommitWithAnimator:)`](https://developer.apple.com/documentation/webkit/wkuidelegate/3335222-webview) is then used to commit that view controller into your stack. Be sure to present the view controller as part of a `completion` for the animator. Otherwise, your app gets stick in an infinite loop as it tries to present a view controller even when one is already being presented.

For example, if you wanted to present a `SFSafariViewController`, but keep the user in the app (that is, present that view controller in your UI), then you might implement these methods like:

```swift
extension MyViewController: WKUIDelegate {
    func webView(_ webView: WKWebView, contextMenuConfigurationForElement elementInfo: WKContextMenuElementInfo,
                        completionHandler: @escaping (UIContextMenuConfiguration?) -> Void) {
        guard let url = elementInfo.linkURL else {
            return completionHandler(nil)
        }

        let configuration = UIContextMenuConfiguration(
            identifier: url as NSURL,
            previewProvider: { return SFSafariViewController(url: url) },
            actionProvider: { elements in
                guard elements.isEmpty == false else { return nil }
                return UIMenu(title: "", image: nil, identifier: nil, options: [], children: elements)
            }
        )
        completionHandler(configuration)
    }

    func webView(_ webView: WKWebView, contextMenuForElement elementInfo: WKContextMenuElementInfo,
                        willCommitWithAnimator animator: UIContextMenuInteractionCommitAnimating) {
        guard let viewController = animator.previewViewController else { return }
        animator.addCompletion {
            self.present(viewController, animated: true, completion: nil)
        }
    }
}
```
