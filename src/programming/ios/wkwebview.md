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
