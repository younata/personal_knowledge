# Network Link Conditioner

[NSHipster describes how to install and use this](https://nshipster.com/network-link-conditioner/).

This is a useful tool for seeing how your app works under different network settings.

A side effect of using Network Link Conditioner is that you can also identify when a test is mocking out the network by using a custom [NSURLProtocol](https://developer.apple.com/documentation/foundation/nsurlprotocol). Because those tests will also be affected by the network link conditioner. This is part of why <a href="https://twitter.com/RebeccaSlatkin/status/852627030092939274" data-proofer-ignore>if your unit test makes a network call, it's not a unit test</a>. Even touching the URL loading subsystem is making a network call.

By the way, [NSHipster also has an excellent article on NSURLProtocol](https://nshipster.com/nsurlprotocol/), because it is useful for mocking network requests for integration-style tests and the like.
