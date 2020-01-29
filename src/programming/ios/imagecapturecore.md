# ImageCaptureCore

[`ImageCaptureCore`](https://developer.apple.com/documentation/imagecapturecore) is an api for allowing you to browse and control connected external cameras and (on macOS) scanners.

The API documentation is rather sparse, making it really easy to overlook some important parts in it.

## ICDeviceBrowser

[`ICDeviceBrowser`](https://developer.apple.com/documentation/imagecapturecore/icdevicebrowser) is the object you use to find any connected external cameras. Set the browser's delegate first before you do anything (or else, `start` is a no-op). Also, don't try to be smart about telling it to `stop` looking for devices. Per the documentation, when you call `stop` it'll deallocate all unused devices. Better to keep it running until you're out of the "need to talk to a camera" mode.
