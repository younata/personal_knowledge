# Objective-C Metaprogramming

## Getting the list of classes

Used to be that you'd use `objc_getClassList`, but that's now deprecated in favor of `objc_copyClassList`. However, you can't easily enumerate over that returned array in swift, so use the following code:

```swift
var count: UInt32 = 0
let classList = objc_copyClassList(&count)!
defer { free(UnsafeMutableRawPointer(classList)) }
let classes = UnsafeBufferPointer(start: classList, count: Int(count))
for cls in classes {
    print(String(cString: class_getName(cls)))
}
```

