# Fastlane

[Fastlane](https://fastlane.tools) is a set of ruby tooling to make mobile development suck a lot less. I use it to automate a lot of the shitty parts of [iOS development](../programming/apple/ios/index.md).

## Scan

[Fastlane Scan](https://docs.fastlane.tools/actions/scan/) essentially wraps `xcodebuild | xcpretty`, with additional properties.

Flags:

- the `-s` flag specifies a scheme to use when building and running tests
- the `-q` flag allows you to specify the configuration to use when building the app.
- the `-a` flag allows you to specify a device to run the tests on
- the `--only_testing` allows you to specify a list of test bundles to run. It takes a comma-separated list of strings (e.g. `fastlane scan --only_testing "foo,bar,baz"`)

## Notarize

[Fastlane Notarize](https://docs.fastlane.tools/actions/notarize/) handles the mac app notarization process. As of macOS Catalina, you need to notarize apps in order to not get a scary warning about how Apple can't check the app for malicious code.

There's a bit of setup here, especially for those, like me, who are unfamiliar with distributing mac apps. The release configuration needs to be signed with a developer ID (this can be generated from [Fastlane Match](https://docs.fastlane.tools/actions/match/) with the `developer_id` type).

Once you have an App bundle built and correctly signed, you can call `notarize` with the path to the package, the build id of the package, and the username of the apple id to sign it with. Additionally, you need to create an application specific password for that apple id, and set that to the `FASTLANE_APPLE_APPLICATION_SPECIFIC_PASSWORD` environment variable. Do this even if you have the App Store Connect API key set up. For example, this is what you could have in your `Fastfile`: `notarize(package: "$PACKAGE_PATH", bundle_id: "$BUNDLE_ID", username: "$APPLE_ID")`

Hopefully, it should work! If you run into any issues, then you can set the `print_log` and `verbose` flags to `true` to get logs out. Also be sure to call fastlane with the `--verbose` flags. Yes, you need both for `notarize`. At this point, it's not very well integrated with the rest of Fastlane
