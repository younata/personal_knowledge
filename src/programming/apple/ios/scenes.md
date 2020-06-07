# UIScene

New in iOS 13, is scenes.

Can have each scene be entirely independent. Can have each scene be dedicated to a specific task.

This uses `UIWindowScene` and `UISceneSession`.

`UIWindowScene` goes between the `UIScreen` and `UIWindow` level.

Scenes contains UI, created by system on demand, destroyed by system when unused.

Going to adopt `UIWindowSceneDelegate`.

Basically, moving a lot of UIApplicationDelegate methods into UIWindowSceneDelgeate methods.
