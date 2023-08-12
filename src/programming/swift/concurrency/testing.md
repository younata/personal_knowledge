# Testing Concurrent Code

There's enough differences between testing code using Swift Concurrency (async/await) and testing more traditional, callback-based asynchronous code. This page intends to document some of what I've learned.

## Make Fakes Threadsafe

Because Swift Concurrency will run your code concurrently, you are at much higher risk of running into concurrent access problems. Especially if you use something like Nimble's `toEventually` behavior. Which you almost have to use if you want to be able to test the in progress state of concurrent code.

I've found that, where possible, making fakes be Actors is the best way to handle this. Actors implicitly conform to Sendable, and they handle concurrent access by only allowing one thread of work to access it at a time. However, you can also make fakes threadsafe by using tools like locks. If you don't do this, then you'll run into annoying common and hard to diagnose test crashes.

## Pre-resolve Concurrent Fakes

One of the assumptions in Swift Concurrency is that threads will never be blocked. Which was a problem because my preferred approach for testing asynchronous code essentially blocks the running thread of work until the test resolves it (and sometimes the test only ever tests the in-progress state, so doesn't need to resolve). This end up resulting in incredibly high test flakiness until I realized it's better to pre-resolve concurrent functions - or, basically, treat them like they're synchronous functions.

For example, consider this given bit of code:

```swift
protocol SomeDependencyProtocol {
    func method(_ callback: @escaping (Int) -> Void)
}

struct SubjectUnderTest {
    let dependency: SomeDependencyProtocol

    func perform(_ callback: @escaping (String) -> Void) {
        dependency.method {
            callback(String(describing: $0))
        }
    }
}

// Sample Fake Implementation.
// For brevity, ignoring thread-safety concerns.
final class FakeSomeDependencyProtocol {
    private(set) var methodCalls = [(Int) -> Void]()
    func method(_ callback: @escaping (Int) -> Void) {
        methodCalls.append(callback)
    }
}
```

Traditionally, I would test it almost in an Act Arrange Assert matter.

```swift
var subject: SubjectUnderTest!
var dependency: FakeSomeDependencyProtocol!

describe("perform(_:)") {
    var result: String? = nil
    beforeEach {
        result = nil
        
        subject.perform {
            result = $0
        }
    }

    // ...

    describe("when the dependency returns") {
        beforeEach {
            dependency.methodCalls.last?(1)
        }

        it("calls the callback with the stringified value") {
            expect(result).to(equal("1"))
        }
    }
}
```

Instead, I learned that it's significantly more reliable to pre-resolve the async dependencies, like so, like so:

```swift
protocol SomeDependencyProtocol {
    func method() async -> Int
}

struct SubjectUnderTest {
    let dependency: SomeDependencyProtocol

    func perform() async -> String {
        String(describing: await dependency.method())
    }
}

// Sample Fake Implementation.
actor FakeSomeDependencyProtocol {
    var methodStub = 0
    func setMethodStub(_ stub: Int) {
        methodStub = stub
    }
    func method() async -> Int {
        methodStub
    }
}
```

With a test, using `justBeforeEach` to allow the same structure as before:

```swift
var subject: SubjectUnderTest!
var dependency: FakeSomeDependencyProtocol!

describe("perform(_:)") {
    var task: Task<String, Never>?
    justBeforeEach {
        task = Task { [subject] in await subject!.perform() }
    }

    afterEach {
        task?.cancel()
        task = nil
    }

    // ...

    describe("when the dependency returns") {
        beforeEach {
            await dependency.setMethodStub(1)
        }

        it("returns the stringified value") {
            await expect { await task!.value }.to(equal("1"))
        }
    }
}
```

For the unfamiliar, in Quick, using `justBeforeEach` means the passed-in closure will run after the other `beforeEach` closures in a test. So, in this example, the `await dependency.setMethodStub(1)` line will run before the `task = Task { ... }` line.
