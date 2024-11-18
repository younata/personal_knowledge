# Argument Parser

Using [swift-argument-parser](https://github.com/apple/swift-argument-parser).

## Synchronous and Asynchronous Commands

Use the `ParsableCommand` and `AsyncParsableCommand` protocols to define commands that use synchronous and async. Considering things nowadays, you'll probably end up only using `AsyncParsableCommand`.

Both protocols declare the `run` method.

`ParsableCommand` declares it as `mutating func run() throws { ... }`

`AsyncParsableCommand` declares it as `mutating func run() async throws { ... }`

You can describe additional configuration such as the name of the command using the static `configuration` property.

### Composing Commands / Creating Subcommands

[Apple's Documentation](https://swiftpackageindex.com/apple/swift-argument-parser/main/documentation/argumentparser/commandsandsubcommands).

You can create multiple commands (though, only one - the root command - can be tagged with `@main`). These then create this tree of commands using the static `configuration` property on the `ParsableCommand`.

Subcommands can 

```swift
struct MyCommand: ParsableCommand {
    static let configuration = CommandConfiguration(
        subcommands: [Command1.self, Command2.self, ...],
        defaultSubcommand: Command1.self
    )
}
```

The ArgumentParser documentation is unclear what happens if you create a command that has subcommands and also a `run` method.

## Defining Parameters

### Argument / Order-specific untagged parameters

Use the `@Argument` property wrapper to describe order-specific parameters to a command:

```swift
@main struct MyCommand: ParsableCommand {
    @Argument var foo: String
    
    mutating func run() throws {
        print(foo)
    }
}
```

```text
$ swift run something
something
```

ArgumentParser is capable of doing type-conversion and will throw an error during argument parsing if it runs into the wrong type.

You can also specify an array of values, and by default ArgumentParser will just append extra arguments to that array.

```swift
@main struct MyCommand: ParsableCommand {
    @Argument var components: [String]
    
    mutating func run() throws {
        print(components.joined(separator: " "))
    }
}
```

```text
$ swift run something or other
something or other
```

As of this writing, I'm unsure what happens if you have multiple `@Arguments` that both take in arrays.

### Option / tagged parameters

Use the `@Option` property wrapper to describe tagged/named parameters to a command.

```swift
@main struct MyCommand: ParsableCommand {
    @Option var foo: String
    
    mutating func run() throws {
        print(foo)
    }
}
```

```text
$ swift run --foo whatever
whatever
```

### Flag / Boolean & incremental parameters

Use the `@Flag` for boolean or incrementing parameters.

```swift
@main struct MyCommand: ParsableCommand {
    @Flag var aFlag: Bool
    @Flag var value: Int
    
    mutating func run() throws {
        print("aFlag: \(aFlag). value: \(value)")
    }
}
```

```text
$ swift run --a-flag --value --value
aFlag: true. value: 2
```

You can also specify enum flags, provided the enum conforms to the [`EnumerableFlag` protocol](https://swiftpackageindex.com/apple/swift-argument-parser/main/documentation/argumentparser/enumerableflag).

Using code taken from the ArgumentParser documentation:

```swift
enum CacheMethod: String, EnumerableFlag {
    case inMemoryCache
    case persistentCache
}

enum Color: String, EnumerableFlag {
    case pink, purple, silver
}


struct Example: ParsableCommand {
    @Flag var cacheMethod: CacheMethod
    @Flag var colors: [Color] = []


    mutating func run() throws {
        print(cacheMethod)
        print(colors)
    }
}
```

```text
$ swift run --in-memory-cache --pink --silver
.inMemoryCache
[.pink, .silver]
$ swift run
Error: Missing one of: '--in-memory-cache', '--persistent-cache'
```

### Grouping Shared Arguments Between Commands

You can create a struct conforming to the [`ParsableArguments` protocol](https://swiftpackageindex.com/apple/swift-argument-parser/main/documentation/argumentparser/parsablearguments). This struct can have parameters specified on it using the `@Argument`, `@Option`, and `@Flag` property wrappers.

You then use this with Commands using the [`@OptionGroup` property wrapper](https://swiftpackageindex.com/apple/swift-argument-parser/main/documentation/argumentparser/optiongroup).

```swift
struct SharedArguments: ParsableArguments {
    @Argument var values: [Double]
}

@main struct Add: ParsableCommand {
    @OptionGroup var input: SharedArguments
    
    mutating func run() throws {
        print(input.values.reduce(0, +))
    }
}
```

```text
$ swift run 1 3 5 7
16
```

As of version 1.5.0, values in an `OptionGroup` are always splatted onto the Argument. If you want to apply prefixing, you'll need to do it manually in the `ParsableArguments`. `OptionGroup` takes in a `title` initializer argument, but that's only used in grouping options when outputting help.

```swift
enum Output: String, EnumerableFlag {
    case decimal, hexadecimal
}

struct SharedArguments: ParsableArguments {
    @Argument var values: [Double]
    
    @Flag var output: Output = .decimal
}

@main struct Add: ParsableCommand {
    @OptionGroup(title: "shared") var input: SharedArguments
    
    mutating func run() throws {
        let sum = input.values.reduce(0, +)
        switch input.output {
        case .decimal: print(sum)
        case .hexadecimal: print(String(format:"%02X", sum))
        }
    }
}
```

```text
$ swift run Add --hexadecimal 1 3 5 7
10
$ swift run Add --decimal 1 3 5 7
16
```

### Parsing Custom Types

Apply the `ExpressibleByArgument` protocol to custom types to get them to parse. Additionally, the `Argument` and `Option` property wrappers both have initializers that take in a `transform` argument, which is a closure of form `(String) throws -> T` to let you specify the argument parsing in line.

Note that `ExpressibleByArgument` doesn't give you an option to specify custom error messaging if the conversion fails, thanks to being a failable initializer:

```swift
struct MyCustomType: ExpressibleByArgument {
    init?(argument: String) {
        // return nil if unable to parse.
    }
}
```
