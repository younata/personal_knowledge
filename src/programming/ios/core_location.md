# Core Location

Core Location is the framework for getting location information.

## Getting the User's location

Before we begin, you need to first verify that location services are even enabled. This is done by calling the [`CLLocationManager.locationServicesEnabled()`](https://developer.apple.com/documentation/corelocation/cllocationmanager/1423648-locationservicesenabled) class method. This returns a boolean, if `false` then you don't need to go further - tell the user to enable location services so they can use that particular piece of your app.

Next, is to check whether the user has already granted your app location permissions, this is done with the [`CLLocationManager.authorizationStatus()`](https://developer.apple.com/documentation/corelocation/cllocationmanager/1423523-authorizationstatus) class method. This returns a [`CLAuthorizationStatus`](https://developer.apple.com/documentation/corelocation/clauthorizationstatus), where the various options boil down to:

- `notDetermined`: The user has not been asked whether to grant your app location services.
- `restricted`: The system has denied your app location services (i.e. parental controls)
- `denied`: The user has denied permissions for your app (or they're globally disabled in settings)
- `authorizedAlways`: The user has allowed permissions for your app to get location at any time.
- `authorizedWhenInUse`: The user has only authorized your app to get location when it is in the foreground.

If the response is restricted, then you should silently handle that because the user likely can't go enable location services.
If the user has denied permissions, then you might throw up some copy saying "hey, we need location services to do X, please go enable it in settings".

For the rest, you'll actually need to create a [`CLLocationManager`](https://developer.apple.com/documentation/corelocation/cllocationmanager) and keep a reference to it. You also will need to assign something to be the locationManager's [delegate](https://developer.apple.com/documentation/corelocation/cllocationmanager/1423792-delegate).

If the user hasn't yet granted permissions, then you need to request the appropriate permission, using either [`CLLocationManager.requestWhenInUseAuthorization()`](https://developer.apple.com/documentation/corelocation/cllocationmanager/1620562-requestwheninuseauthorization) (when in use) or [`CLLocationManager.requestAlwaysAuthorization`](https://developer.apple.com/documentation/corelocation/cllocationmanager/1620551-requestalwaysauthorization). This will prompt the user to grant you permission. Once the user has interacted with that modal, the location manager's will call it's delegate's [`locationManager(_:didChangeAuthorization:)`](https://developer.apple.com/documentation/corelocation/cllocationmanagerdelegate/1423701-locationmanager) method. If the user has granted, then proceed ahead. Otherwise, handle the error and display the appropriate copy. Note that all delegate methods can be called off the main thread, so you should go back to the main thread when you update your UI.

Be sure to configure the location manager with the your desired accuracy, by setting the [`desiredAccuracy`](https://developer.apple.com/documentation/corelocation/cllocationmanager/1423836-desiredaccuracy) property.

Once you have permission to get the user's location, decide whether you need the user's movement as they use the device, or just once.

If you need the user's movement throughout your app session, then call [`startUpdatingLocation()`](https://developer.apple.com/documentation/corelocation/cllocationmanager/1423750-startupdatinglocation) on the location manager. Otherwise, call [`requestLocation()`](https://developer.apple.com/documentation/corelocation/cllocationmanager/1620548-requestlocation) on the locationManager. If you do use `startUpdatingLocation`, remember to call [`stopUpdatingLocation`](https://developer.apple.com/documentation/corelocation/cllocationmanager/1423695-stopupdatinglocation) when you're done to save the user's battery.

Either call will start up the GPS/location calculator and, assuming everything goes right, the location manager will eventually call [`locationManager(_:didUpdateLocations:)`](https://developer.apple.com/documentation/corelocation/cllocationmanagerdelegate/1423615-locationmanager) on it's delegate. If things go wrong, then it'll call [`locationManager(_:didFailWithError:)`](https://developer.apple.com/documentation/corelocation/cllocationmanagerdelegate/1423786-locationmanager) on it's delegate.

This is a snippet I use which handles 90% of my location manager usages (getting the user's current or most recent location) in a testable manner (the `CLLocationManager` is wrapped by a protocol, in test use a `FakeLocationManager` to simulate a `CLLocationManager`.):

```swift
import CoreLocation

enum LocationError: Error {
    case unavailable // location services disabled
    case unauthorized // location services denied
}

protocol LocationRetriever {
    func currentLocation(callback: @escaping (Result<CLLocation, LocationError>) -> Void)
}

protocol LocationManager: class {
    var delegate: CLLocationManagerDelegate? { get set }
    var desiredAccuracy: CLLocationAccuracy { get set }
    func locationServicesEnabled() -> Bool
    func authorizationStatus() -> CLAuthorizationStatus
    func requestWhenInUseAuthorization()
    func requestLocation()
}

extension CLLocationManager: LocationManager {
    func locationServicesEnabled() -> Bool { return CLLocationManager.locationServicesEnabled() }
    func authorizationStatus() -> CLAuthorizationStatus { return CLLocationManager.authorizationStatus() }
}

final class AppleLocationRetriever: NSObject, LocationRetriever {
    private let logger: Logger
    private let mainQueue: OperationQueue
    private let locationManager: LocationManager

    private var locationCallbacks: [(Result<CLLocation, LocationError>) -> Void] = []

    init(logger: Logger, mainQueue: OperationQueue, locationManager: LocationManager) {
        self.logger = logger
        self.mainQueue = mainQueue
        self.locationManager = locationManager
        super.init()

        self.locationManager.delegate = self
        self.desiredAccuracy = kCLLocationAccuracyNearestTenMeters
    }

    func currentLocation(callback: @escaping (Result<CLLocation, LocationError>) -> Void) {
        guard self.locationManager.locationServicesEnabled() else {
            return callback(.failure(.unavailable))
        }

        switch self.locationManager.authorizationStatus() {
        case .denied, .restricted:
            return callback(.failure(.unauthorized))
        case .notDetermined:
            self.locationCallbacks.append(callback)
            self.locationManager.requestWhenInUseAuthorization()
        case .authorizedWhenInUse, .authorizedAlways:
            self.locationCallbacks.append(callback)
            self.locationManager.requestLocation()
        @unknown default:
            break
        }

    }

    private func resolveLocationCallbacks(with value: Result<CLLocation, LocationError>) {
        let callbacks = self.locationCallbacks
        self.locationCallbacks = []

        self.mainQueue.addOperation {
            callbacks.forEach { $0(value) }
        }
    }
}

extension AppleLocationRetriever: CLLocationManagerDelegate {
    func locationManager(_ manager: CLLocationManager, didChangeAuthorization status: CLAuthorizationStatus) {
        switch status {
        case .denied, .restricted:
            return self.resolveLocationCallbacks(with: .failure(.unauthorized))
        case .notDetermined:
            self.logger.warning(message: "CLAuthorizationStatus updated with not determined. Wat?")
            return self.resolveLocationCallbacks(with: .failure(.unauthorized))
        case .authorizedWhenInUse, .authorizedAlways:
            locationManager.requestLocation()
        @unknown default:
            break
        }
    }

    func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
        guard let location = locations.last else {
            self.logger.warning(message: "LocationManager(:didUpdateWithLocations:) was called with no locations")
            self.resolveLocationCallbacks(with: .failure(.unavailable))
            return
        }

        self.resolveLocationCallbacks(with: .success(location))
    }

    func locationManager(_ manager: CLLocationManager, didFailWithError error: Error) {
        self.logger.error(message: "Location manager failed to get location with error: \(error)")
        self.resolveLocationCallbacks(with: .failure(.unavailable))
    }
}
```

### Permissions Strings

In addition to calling [`requestAlwaysAuthorization`](https://developer.apple.com/documentation/corelocation/cllocationmanager/1620551-requestalwaysauthorization) or [`requestWhenInUseAuthorization`](https://developer.apple.com/documentation/corelocation/cllocationmanager/1620562-requestwheninuseauthorization) on your [`CLLocationManager`](https://developer.apple.com/documentation/corelocation/cllocationmanager), you also need to modify your app's `Info.plist` file to include a string for `NSLocationAlwaysUsageDescription` (always) or `NSLocationWhenInUseUsageDescription` (when in use). This text is the localized string displayed to the user when they are prompted to grant location permissions.

## Using a `CLGeocoder`

### Getting an address from a `CLLocation`

Also known as "reverse-geocoding".

