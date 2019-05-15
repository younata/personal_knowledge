# Vapor

Vapor is one of two swift web frameworks to have gained traction (the other is Kitura, from IBM). It appears that vapor has slightly more documentation available that Kitura does, so I use vapor.

However, Vapor still has PLENTY of rough edges that make it a pain in the ass to develop against.

## Specify the http status error

To the best of my knowledge, there are two easy ways to return a custom http status error: throw an `AbortError`, or return a `Response`. (The other way is to create your own type that conforms to `ResponseDecodable`, and have it set the http status in `encode(status:headers:for:)`)

### AbortError

AbortError is a protocol, which means you have to create your own instance of it in order to return one. Simple enough, but still annoying. Your custom implementation needs to have 3 properties: `status`, `reason`, and `identifier`. As the name indicates, you throw your error from the request handler.

### Return a Response

From your asynchronous request handler, you can chain on `.encode(status:for:)` to set the status. (The second parameter is the request object your request handler was called with).

## Testability

I haven't gotten around to writing a microframework to do this, but here's my Application extension I add to every vapor project I do:

```swift
import Vapor

@testable import App

extension Application {
    static func testable() throws -> Application {
        var config = Config.default()
        var services = Services.default()
        var env = Environment.testing
        try App.configure(&config, &env, &services)
        let app = try Application(config: config, environment: env, services: services)
        try App.boot(app)

        return app
    }

    func sendRequest<Body>(to path: String, method: HTTPMethod, headers: HTTPHeaders = .init(), body: Body?) throws -> Response where Body: Content {
        let httpRequest = HTTPRequest(method: method, url: URL(string: path)!, headers: headers)
        let wrappedRequest = Request(http: httpRequest, using: self)
        if let body = body {
            try wrappedRequest.content.encode(body)
        }
        let responder = try make(Responder.self)

        return try responder.respond(to: wrappedRequest).wait()
    }
}
```

This is used as:

```swift
let subject = try Application.testable()

let response = try subject.sendRequest(to: "/my/path", method: .PUT, body: Optional<String>.none)
```
