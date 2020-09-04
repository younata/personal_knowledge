# Nimble

A better way to handle test assertions.

Compare: `expect(foo).to(equal(bar))` to `XCTAssertEqual(foo, bar)`. The first is much more clear in the intent.

Nimble is comprised of two forms: The expectation, and the matchers. The expectation is the `expect([...]).to` part of the library. It handles getting the value to assert against, getting the file and line the assertion happened on, negating the assertion matchers (expect to equal, expect to not equal), and asynchronous expectations. The matchers are a set of functions that assert on the passed-in value and determine whether the value matches and passes information about why or why not.

## Writing your own matcher

First of all, test them.
