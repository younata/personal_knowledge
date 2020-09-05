# ImageCaptureCore

[`ImageCaptureCore`](https://developer.apple.com/documentation/imagecapturecore) is an api for allowing you to browse and control connected external cameras and (on macOS) scanners.

The API documentation is rather sparse, making it really easy to overlook some important parts in it.

## `ICDeviceBrowser`

[`ICDeviceBrowser`](https://developer.apple.com/documentation/imagecapturecore/icdevicebrowser) is the object you use to find any connected external cameras. Set the browser's delegate first before you do anything (or else, `start` is a no-op). Also, don't try to be smart about telling it to `stop` looking for devices. Per the documentation, when you call `stop` it'll deallocate all unused devices. Better to keep it running until you're out of the "need to talk to a camera" mode.

## PTP Events

[Picture Transfer Protocol](https://en.wikipedia.org/wiki/Picture_Transfer_Protocol) is an ISO standard governing transferring images from digital cameras to computers and otherwise controlling them.

Note that, in iOS, you need to be running at least iOS 13.4 in order for PTP callbacks to actually happen.

You can directly send PTP events using [`ICCameraDevice.requestSendPTPCommand(_:outData:completion:)`](https://developer.apple.com/documentation/imagecapturecore/iccameradevice/3393298-requestsendptpcommand). Constructing these events is a pain as there is very little documentation on how to do this. I mostly figured this out by referencing various open source usages of ImageCaptureCore (still less effort to re-implement them than it is to port them to iOS's ImageCaptureCore).

- Integer values are in [little-endian](https://en.wikipedia.org/wiki/Endianness) format. Meaning that the least significant byte is first (e.g. 0x1234 is stored as 0x34, 0x12)

### Permissions

As of iOS 13.4 Beta 2, in order to make PTP requests, you need to specify a value for `NSCameraUsageDescription` in your app's info.plist.

As of iOS 14, Apple added permission request APIs along the lines of `CoreLocation`'s permissions apis. These are on [`ICDeviceBrowser`](https://developer.apple.com/documentation/imagecapturecore/icdevicebrowser), and they are:

- [`-contentsAuthorizationStatus()`](https://developer.apple.com/documentation/imagecapturecore/icdevicebrowser/3650391-contentsauthorizationstatus) returns the current authorization status for getting saved photos from an external camera.
- [`-controlAuthorizationStatus()`](https://developer.apple.com/documentation/imagecapturecore/icdevicebrowser/3650392-controlauthorizationstatus) returns the current authorization status for using an external camera to take photos (or to otherwise control it).
- [`-requestContentsAuthorizationStatus(completion:)`](https://developer.apple.com/documentation/imagecapturecore/icdevicebrowser/3650393-requestcontentsauthorization) is used to request authorization to get saved photos/files from an external camera.
- [`-requestControlAuthorizationStatus(completion:)`](https://developer.apple.com/documentation/imagecapturecore/icdevicebrowser/3650394-requestcontrolauthorization) is used to request authorization to control an external camera.

Both of the `requestAuthorizationStatus` take a callback block, which will be called with the appropriate value for [`ICAuthorizationStatus`](https://developer.apple.com/documentation/imagecapturecore/icauthorizationstatus).

As of Beta 6, if you attempt to request authorization status before the screen has started to render `viewDidAppear`, then the app seems to hang, for no apparent reason. I have yet to discern why that is.
