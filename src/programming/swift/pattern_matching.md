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

## Enumeration Case Pattern (Enum)

It matches the case of an existing enum type. They appear in `switch` case labels, as well as `if`, `while`, `guard`, and `for-in` statements.

Using this enum:

```swift
enum AnEnum {
    case foo
    case bar
    case baz
}

let myEnum = AnEnum.bar
```

switch statement:

```swift
switch myEnum {
    case .foo:
        // do something
        break
    case .bar:
        break
    default:
        break
}
```

if statement:

```swift
if case .foo = myEnum {
    // do something.
}
```

while statement:

```swift
while case .bar = myEnum {
    // do something
}
```

guard statement:

```swift
guard case .baz = myEnum else {
    return
}
```

## Optional Pattern

This matches optional values. Uses the `?` syntax sugar to match things.

e.g.

```swift
let someOptional: Int? = 32

// Matches using enumeration case.
if case .some(let x) = someOptional {
    // do something with x
}

// Matches using the optional pattern.
if case let x? = someOptional {
    // do semithng with x
}
```

This also works with for-in, and switch statements:

for-in:

```swift
let arrayOfOptionals: [Int?] = [1, nil, 3, nil, 5]
for case let number? in arrayOfOptionalInts {
    print("\(number)")
}
// prints "1", "3", "5"
```

switch:

```swift
let someOptional: Int? = 32

switch someOptional {
    case 32?:
        // something.
        break
    default:
        // something else.
}
```

## Type-Casting Patterns

This is the `is` and `as` patterns. `is` is used as a conditional (`if foo is Int`), or in switch statement case labels (`case foo is Int: // do something with foo as an Int`). `as` is used to change type to a related one, as needed (`foo as String`).

## Expression Pattern

This represents the value of an expression. These appear only in switch statement case labels.

e.g.:

```swift
let point = (1, 2)
switch point {
case (0, 0):
    break
case (-2...2, -2...2):
    break
default:
    break
}
```

You can also overload the `~=` operator to provide a custom expression matching beavior.

```swift
func ~= (pattern: String, value: Int) -> Bool {
    return pattern == "\(value)"
}

switch 3 {
case "3":
    print("This actually matches")
default:
    break
}
```
