# Core Graphics

## CGFloat

CGFloat is a word-size agnostic way to express a floating point number (on 32 bit devices, it's a float. On 64 bit devices, it's a double).

[`CGFloat.leastNormalMagnitude`](https://developer.apple.com/documentation/coregraphics/cgfloat/1845209-leastnormalmagnitude) is effectively the same as `FLT_MIN` (or `DBL_MIN`, depending on the device). It is less than or equal to all positive "normal" numbers. Subnormal means that "they are represented with less precision than normal numbers". Note that zeros and negative numbers are also less than `CGFloat.leastNormalMagnitude`.
