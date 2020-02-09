# Core Location

Core Location is the framework for getting location information.

## Permission

In addition to calling [`requestAlwaysAuthorization`](https://developer.apple.com/documentation/corelocation/cllocationmanager/1620551-requestalwaysauthorization) or [`requestWhenInUseAuthorization`](https://developer.apple.com/documentation/corelocation/cllocationmanager/1620562-requestwheninuseauthorization) on your [`CLLocationManager`](https://developer.apple.com/documentation/corelocation/cllocationmanager), you also need to modify your app's `Info.plist` file to include a string for `NSLocationAlwaysUsageDescription` (always) or `NSLocationWhenInUseUsageDescription` (when in use). This text is the localized string displayed to the user when they are prompted to grant location permissions.

## Testing

This is the snippet I usually use when testing my usage of the location manager:

```swift
protocol LocationManager {
    var delegate: CLLocationManagerDelegate? { get set }
    func locationServicesEnabled() -> Bool
    func authorizationStatus() -> CLAuthorizationStatus
    func requestWhenInUseAuthorization()
    func startUpdatingLocation()
    func stopUpdatingLocation()
}

extension CLLocationManager: LocationManager {
    func locationServicesEnabled() { return CLLocationManager.locationServicesEnabled() }
    func authorizationStatus() { return CLLocationManager.authorizationStatus() }
}
```

This wraps 90% of my usage of `CLLocationManager` inside of a protocol. I have things which depend upon a `CLLocationManager` depend upon `LocationManager` instead. Then, in actual usage, the passed-in `LocationManager` is a `CLLocationManager`. While in test, I can pass in whatever I want as the `LocationManager`. Thus, I use a `FakeLocationManager` in test to control what to do when the user denies permissions, or location services aren't even available, or the location manager isn't able to get the user's location.
