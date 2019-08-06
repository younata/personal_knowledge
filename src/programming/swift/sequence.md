# Sequence and Array

Reminding myself to think outside the `map`, `reduce`, and `filter` boxes.

## `allSatisfy(_:)`

[`allSatisfy(_:)`](https://developer.apple.com/documentation/swift/array/2994715-allsatisfy) works like python's [`all`](https://docs.python.org/3/library/functions.html#all). Returns `true` if each and every item in the array passes the given block.

## `contains(_:)` and `contains(where:)`

[`contains(_:)`](https://developer.apple.com/documentation/swift/array/2297359-contains) is available only if the `Element` conforms to `Equatable`. This effectively is the same as calling `contains { $0 == element }`, though I imagine the implementation is slightly more optimized than that.

[`contains(where:)`](https://developer.apple.com/documentation/swift/array/2297359-contains) works like python's [`any](https://docs.python.org/3/library/functions.html#any). It takes in a block, and returns true if that block returns true for least one item in the receiving array or sequence.
