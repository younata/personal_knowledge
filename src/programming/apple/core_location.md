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

Using a [`CLGeocoder`](https://developer.apple.com/documentation/corelocation/clgeocoder) to convert between human-friendly location representations and latitude and longitude coordinates.

Don't even use `CLGeocoder` for geocoding (string -> `CLLocation`), use [`MKLocalSearch`](https://developer.apple.com/documentation/mapkit/mklocalsearch) for that.

### Getting an address from a `CLLocation`

Also known as "reverse-geocoding".

`CLGeocoder` has two methods for reserve geocoding:

- [`reversGeocodeLocation(_:preferredLocale:completionHandler:)`](https://developer.apple.com/documentation/corelocation/clgeocoder/2908779-reversegeocodelocation) takes a `CLLocation` object, an optional [`Locale`](https://developer.apple.com/documentation/foundation/locale) argument (pass `nil` to use `Locale.current`), and a callback. Note that this callback **will** be called off the main queue, so be sure to go back to the main queue before you update any UI as a result of the call.
  - Use the `preferredLocale` call when you want the location data returned in a format different from the user's set locale. For example, if you have an American user looking at addresses in France, you might want to set `preferredLocale` to a french locale.
- [`reverseGeocodeLocation(_:completionHandler:)`](https://developer.apple.com/documentation/corelocation/clgeocoder/1423621-reversegeocodelocation). takes a `CLLocation` object and a callback. This method is effectively the same as the newer `reversGeocodeLocation(_:preferredLocale:completionHandler:)` call when `preferredLocale` is nil.

Either case, the completion handler is called **off the main queue** with either the list of placemarks or the error. The placemarks is a list of [`CLPlacemark`](https://developer.apple.com/documentation/corelocation/clplacemark) objects, and the error is a type-erased `CLError`.

Despite the method signature, these arguments optional-ness is mutually exclusive - you will never have a case where both `placemarks` and `error` are non-nil, nor will you have a case where both of them are nil.

You should only send one reverse-geocode request at a time, you can check whether a geocoding is making a request via the [`isGeocoding`](https://developer.apple.com/documentation/corelocation/clgeocoder/1423765-isgeocoding) property. You can also cancel an ongoing geocoding request by calling the [`cancelGeocode()`](https://developer.apple.com/documentation/corelocation/clgeocoder/1423562-cancelgeocode) method.

A snippet for handling reverse geocoding looks like this. Note that it assumes that you only ask for geocoding as soon as you actually need it. This is also untested.

```swift
import CoreLocation

enum GeocoderError {
    case canceled
    case noResult
    case partialResult
    case network
    case unknown
}

class ReverseGeocoder {
    let geocoder: CLGeocoder
    private var previousPlacemarks: [(CLLocation, [CLPlacemark])] = [] // not a dictionary because we want fuzzy matching of locations.

    func reverseGecode(_ location: CLLocation, callback: @escaping Result<[CLPlacemark], GeocoderError> -> Void) {
        if let placemarks = self.cachedPlacemarks(for: location) {
            callback(.success(placemarks))
        }

        self.geocoder.reverseGeocodeLocation(location) { (placemarks, error) in
            if let error = error as? CLError {
                let geocoderError: GeocoderError
                if let errorCode = CLError.Code(error.errorCode) {
                    switch errorCode {
                    case .network: geocoderError = .network
                    case .geocodeCanceled: geocoderError = .canceled
                    case .geocodeFoundNoResult: geocoderError = .noResult
                    case .geocodeFoundPartialResult: geocoderError = .partialResult
                    default: geocoderError = .unknown
                    }
                } else {
                    geocoderError = .unknown
                }
                request.callback(.failure(geocoderError))
            } else if let error = error {
                request.callback(.failure(.unknown))
            }
            if let placemarks = placemarks {
                self.previousPlacemarks.append((location, placemarks))
                request.callback(.success(placemarks))
            }
        }
    }

    private func cachedPlacemarks(for location: CLLocation) -> [CLPlacemark]? {
        let accuracy: CLLocationAccuracy = 1e-4 // https://knowledge.rachelbrindle.com/programming/location.html
        for (existingLocation, placemarks) in self.previousPlacemarks {
            if abs(location.coordinate.longitude - existingLocation.coordinate.longitude) < accuracy && abs(location.coordinate.latitude - existingLocation.coordinate.latitude) < accuracy {
                return placemarks
            }
        }
        return nil
    }
}
```
