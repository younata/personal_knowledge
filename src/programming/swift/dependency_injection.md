# Dependency Injection

The 5th letter of SOLID refers to the usage of Dependency Injection. Or providing an instance with all of the things it needs to do its job - instead of having that instance having to reach out to other things for methods/functions.

DI is great. It's what enables you to follow the rest of SOLID. It greatly eases tests (instead of using a real thing, you can use a test double), and it cleans up your code.

This page is meant to be an examination of DI strategies in Swift that I'm aware of.

I'm familiar with and have used [Blindside](https://github.com/jbsf/blindside) (which is Objective-C, but the same principles apply), [Swinject](https://github.com/Swinject/Swinject), [Swift-dependencies](https://github.com/pointfreeco/swift-dependencies), as well as various proprietary approaches.

## Liskov Substitution, but for Packages

One App architecture opinion I strongly hold is that no third-party dependencies should be made integral to your app. For example, if you build your app on Core Data, and weave it throughout the app, you will have a very hard time if you ever decide to switch ORMs (even if it's to, say, Swift Data, which uses Core Data under the hood), let alone databases. This is essentially Liskov Substitution, but applied to Packages.

This same principle applies to my opinions of DI frameworks. In my opinion, the best way to do DI is to have functions or initializers take in protocols for what they use, and elsewhere, use a DI framework to create instances use those initializers.

For example:

```swift
protocol AProtocol { ... }
protocol BProtocol { ... }

struct AStruct: AProtocol {
    let b: BProtocol
    init(b: BProtocol) { self.b = b }
}

// elsewhere

final class DependencyProvider {
    func a() -> AProtocol {
        AStruct(b: b())
    }
    
    func b() -> BProtocol { ... }
}
```

In my own projects, the `DependencyProvider` is actually a custom async-aware fork of Swinject.

## Handling Makers

Sometimes, an instance needs to be able to make another instance. For example, needing to make the view model for the next view in a hierarchy. These should be injected as closures that take any dynamic dependencies. In other words, the Factory pattern.

For example:

```swift
import SwiftUI

protocol ViewModel {
    associatedtype View: SwiftUI.View
    var view: Self.View { get }
}

protocol AViewModelProtocol: ViewModel {
    associatedtype BViewModel: ViewModel
    var bViewModelFactory: (String) -> BViewModel { get }

    func bView(_ arg: String) -> BViewModel.View
}

final class AViewModel<BViewModel: ViewModel>: ViewModel, AViewModelProtocol {
    let bViewModelFactory: (String) -> BViewModel

    init(bViewModelFactory: @escaping (String) -> BViewModel) {
        self.bViewModelFactory = bViewModelFactory
    }

    var view: some View { AView(viewModel: self) }

    func bView(_ arg: String) -> BViewModel.View {
        bViewModelFactory(arg).view
    }
}

struct AView<ViewModel: AViewModelProtocol>: View {
    @State var viewModel: ViewModel
    var body: some View {
        VStack {
            NavigationLink("Hello") {
                viewModel.bView("hello")
            }
            NavigationLink("Goodbye") {
                viewModel.bView("goodbye")
            }
        }
    }
}
```

This is, admittedly, a lot of boilerplate just to deal with the generics.

You might think it might be worth it to wrap the `(String) -> BViewModel` closure syntax in a type. But, really, you're only saving a small amount of characters, in exchange for the boilerplate of creating yet another type to essentially shuffle a closure around. If Swift had Objective-C's frankly horrific closure syntax, then creating a separate type to wrap that would be worth it. But thankfully, Swift has relatively sane closure syntax.