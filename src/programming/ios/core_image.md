# Core Image

## CIKernel

- [Metal Shading Language for Core Image Kernels](https://developer.apple.com/metal/MetalCIKLReference6.pdf)
- [Metal Shading Language Specification](https://developer.apple.com/metal/Metal-Shading-Language-Specification.pdf)

## Handling RAW Formats

You can read RAW formatted images by invoking either the [`init(imageURL:options:)`](https://developer.apple.com/documentation/coreimage/cifilter/1438096-init) or the [`init(imageData:options:)`](https://developer.apple.com/documentation/coreimage/cifilter/1437879-init) [`CIFilter`](https://developer.apple.com/documentation/coreimage/cifilter) initializers. You can then read the image by asking for the `outputImage`.

Note that, at least for iOS 13 beta 1, the simulator can't read some (all? I only tried with Canon RAW format files) RAW images. However, using macOS allows this to work.
