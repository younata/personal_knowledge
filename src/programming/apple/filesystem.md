# FileSystem, FileManager, and FileTypes

## Determining the type of a file

Adapted from [this medium post](https://medium.com/@francishart/swift-how-to-determine-file-type-4c46fc2afce8)

This uses the "universal" type indicators, introduced back in Mac OS X 10.4.

```swift
import MobileCoreServices // Only for iOS/Catalyst

extension URL {
    func isTypeOfFile(_ uttype: CFString) -> Bool {
        guard let uti = UTTypeCreatePreferredIdentifierForTag(kUTTagClassFilenameExtension, self.pathExtension as CFString, nil) else {
            return false
        }

        return UTTypeConformsTo(uti.takeRetainedValue(), uttype)
    }
}
```

Use as `url.isTypeOfFile(kUTTypeImage)`
