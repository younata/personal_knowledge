# Patterns and Pattern Matching

Last Update: Swift 5

[Pattern](https://docs.swift.org/swift-book/ReferenceManual/Patterns.html) refers to "the structure of a single value or composite value". Here are the list of patterns

## Wildcard Pattern (Underscore)

This is what `_` means. It matches and ignores any value.

```swift
for _ in 1...3 {
    // do something three times
}
```

## Identifier Pattern

This is the basic assignment pattern. `let someValue = 42` is an example, `someValue` is an identifier pattern that matches the value `42` of type `Int`.

## Value-Binding Pattern

Value-Binding is something on top fo identifier, it's one of the first cases of pattern matching you might find, e.g.

```swift
let someTuple = (4, 5) // Tuple Pattern
switch someTuple {
    case let (x, y): // Binds x and y to the elements of someTuple
        // do something with x and y
        break
}
```

## Tuple Pattern

Refers to "a comma-separated list of zero or more patterns, enclosed in parentheses."
Note that parentheses around a single element are effectively ignored.

The following are valid example of Tuple Patterns:

```swift
let aTuple = (1, 2)
let (a, b) = (3, 4)
let (a) = 2 // Not a Tuple Pattern
```

