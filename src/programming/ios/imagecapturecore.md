# ImageCaptureCore

[`ImageCaptureCore`](https://developer.apple.com/documentation/imagecapturecore) is an api for allowing you to browse and control connected external cameras and (on macOS) scanners.

The API documentation is rather sparse, making it really easy to overlook some important parts in it.

## ICDeviceBrowser

[`ICDeviceBrowser`](https://developer.apple.com/documentation/imagecapturecore/icdevicebrowser) is the object you use to find any connected external cameras. Set the browser's delegate first before you do anything (or else, `start` is a no-op). Also, don't try to be smart about telling it to `stop` looking for devices. Per the documentation, when you call `stop` it'll deallocate all unused devices. Better to keep it running until you're out of the "need to talk to a camera" mode.

## PTP Events

[Picture Transfer Protocol](https://en.wikipedia.org/wiki/Picture_Transfer_Protocol) is an ISO standard governing transferring images from digital cameras to computers and otherwise controlling them.

You can directly send PTP events using [`ICCameraDevice.requestSendPTPCommand(_:outData:completion:)`](https://developer.apple.com/documentation/imagecapturecore/iccameradevice/3393298-requestsendptpcommand). Constructing these events is a pain as there is very little documentation on how to do this. I mostly figured this out by referencing various open source usages of ImageCaptureCore (still less effort to re-implement them than it is to port them to iOS's ImageCaptureCore).

- Integer values are in [little-endian](https://en.wikipedia.org/wiki/Endianness) format. Meaning that the least significant byte is first (e.g. 0x1234 is stored as 0x34, 0x12)
