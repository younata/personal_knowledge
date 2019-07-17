# Fastlane

[Fastlane](https://fastlane.tools) is a set of ruby tooling to make mobile development suck a lot less. I use it to automate a lot of the shitty parts of [iOS development](../programming/ios/index.md).

## Scan

[Fastlane Scan](https://docs.fastlane.tools/actions/scan/) essentially wraps `xcodebuild | xcpretty`, with additional properties.

Flags:

- the `-s` flag specifies a scheme to use when building and running tests
- the `-q` flag allows you to specify the configuration to use when building the app.
- the `-a` flag allows you to specify a device to run the tests on
- the `--only_testing` allows you to specify a list of test bundles to run. It takes a comma-separated list of strings (e.g. `fastlane scan --only_testing "foo,bar,baz"`)
