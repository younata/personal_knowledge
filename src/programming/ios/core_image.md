# Core Image

## CIKernel

- [Metal Shading Language for Core Image Kernels](https://developer.apple.com/metal/MetalCIKLReference6.pdf)
- [Metal Shading Language Specification](https://developer.apple.com/metal/Metal-Shading-Language-Specification.pdf)

## Handling RAW Formats

You can read RAW formatted images by invoking either the [`init(imageURL:options:)`](https://developer.apple.com/documentation/coreimage/cifilter/1438096-init) or the [`init(imageData:options:)`](https://developer.apple.com/documentation/coreimage/cifilter/1437879-init) [`CIFilter`](https://developer.apple.com/documentation/coreimage/cifilter) initializers. You can then read the image by asking for the `outputImage`.

Note that, at least for iOS 13 beta 1, the simulator can't read some (all? I only tried with Canon RAW format files) RAW images. However, using macOS allows this to work.

### RAW Format Options

With the RAW format CIFilter initializers, you can optionally pass a dictionary of how to read the image. The documentation for those keys is [here](https://developer.apple.com/documentation/coreimage/cifilter/raw_image_options).

## Filters

Fun with Filters

### Color Control (Brightness, Contrast, Saturation)

The [`CIColorControls`](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Reference/CoreImageFilterReference/index.html#//apple_ref/doc/filter/ci/CIColorControls) filter allows you to adjust the brightness, contrast, and saturation of an image. These are done with 3 different input parameters (in addition to the `inputImage` parameter), which are, respectively: `inputBrightness` (float, between -1 and +1, default is 0), `inputContrast` (float, default is 1), and `inputSaturation` (float, between 0 and 1, default is 1)

### Histogram

You can generate a histogram of an image by using the [`CIAreaHistogram`](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Reference/CoreImageFilterReference/index.html#//apple_ref/doc/filter/ci/CIAreaHistogram) filter. You give it the image (`inputImage`), the region of interest (`inputExtent`), the number of buckets to create (`inputCount`), and a scaling factor (`inputScale`). That filter then produces an `inputCount` wide by 1 pixel high image, with each pixel representing the amount of pixels in the `inputImage` that fit in that particular bucket.

You can then pass the `outputImage` from that filter into a [`CIHistogramDisplayFilter`](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Reference/CoreImageFilterReference/index.html#//apple_ref/doc/filter/ci/CIHistogramDisplayFilter) filter. This takes an image as produced by `CIAreaHistogram` and computes a histogram image. The histogram image is the same width as the number of buckets given to your `CIAreaHistogram` filter, with the height being given as a parameter to the filter. The parameters to the filter are: `inputImage`, `inputHeight` (the height of the produced image. Float, between 1 and 200), `inputHighLimit` (float, between 0 and 1, default 1), and `inputLowLimit` (float, between 0 and 1, default 0).

You can combine these two filters like so, to produce a histogram image of the given input image:

```swift
func histogram(of image: CIImage, width: CGFloat, height: CGFloat) -> CIImage {
    let histogram = image.applyingFilter("CIAreaHistogram", parameters: ["inputExtent": image.extent, "inputCount": width, "inputScale": 1])
    return histogram.applyingFilter("CIHistogramDisplayFilter", parameters: ["inputHeight": height])
}
```
