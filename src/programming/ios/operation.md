# Operation and OperationQueue

## Operation

### Subclassing

As the [docs](https://developer.apple.com/documentation/foundation/operation#1673799) note, there are four things to override for your asynchronous swift subclass:

- `-start()`
- `isAsynchronous`
- `isExecuting`
- `isFinished`

And that you must send KVO notifications for the 2 properties (usually `isAsynchronous` is hardcoded to be true, so sending KVO for that is a non-issue).

Sending KVO means sending `-willChangeValue(forKey:)`, then changing the value, then sending `-didChangeValue(forKey:)`, see the following sample implementation:

```swift
class MyAsyncOperation: Operation {
    override func start() {
        self.willChangeValue(forKey: "isExecuting")

        someAsyncWork {
            self.willChangeValue(forKey: "isExecuting")
            self._isExecuting = false
            self.didChangeValue(forKey: "isExecuting")

            self.willChangeValue(forKey: "isFinished")
            self._isFinished = true
            self.didChangeValue(forKey: "isFinished")
        }

        self._isExecuting = true
        self.didChangeValue(forKey: "isExecuting")
    }

    override var isAsynchronous: Bool { return true }

    private var _isExecuting: Bool = false
    override var isExecuting: Bool { return !self.isFinished && self._isExecuting }

    private var _isFinished: Bool = false
    override var isFinished: Bool { return self._isFinished }
}
```
