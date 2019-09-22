# ARKit

Introduced in iOS 11, and massively improved with basically each new major release (and a few minor releases) since then. Apple has been promoting ARKit heavily, much to the chagrin of developers, who haven't really found a use case for it apart from the [sherlock'd](https://en.wikipedia.org/wiki/Sherlock_(software)#Sherlocked_as_a_term)-in-iOS 12 "use ARKit as a ruler".

As for actually using it, the easiest way is to place an [`ARView`](https://developer.apple.com/documentation/realitykit/arview) (requires iOS 13) in your view hierarchy, and tell it's associated [`session`](https://developer.apple.com/documentation/arkit/arsession) to run with an [`ARConfiguration`]().

Be sure to update your info.plist with an appropriate string for `NSCameraUsageDescription`, e.g.:

```xml
<key>NSCameraUsageDescription</key>
<string>ARKit uses the camera</string>
```

Alternatively, if you don't use the camera, you can set the [`cameraMode`](https://developer.apple.com/documentation/realitykit/arview/3255305-cameramode) property on the [`ARView`](https://developer.apple.com/documentation/realitykit/arview) to [`.nonAR`](https://developer.apple.com/documentation/realitykit/arview/cameramode).

## Integrating with SceneKit

[`ARView`](https://developer.apple.com/documentation/realitykit/arview), by default, integrates well with SceneKit, with it also hosting an [`SCNScene`](https://developer.apple.com/documentation/scenekit/scnscene).

### Rending UIViews in SceneKit

You can set a UIView as the [`contents`](https://developer.apple.com/documentation/scenekit/scnmaterialproperty/1395372-contents) of a [`SCNMaterialProperty`](https://developer.apple.com/documentation/scenekit/scnmaterialproperty) (specifically, the [`diffuse`](https://developer.apple.com/documentation/scenekit/scnmaterial/1462589-diffuse) material property of the node's [`SCNMaterial`](https://developer.apple.com/documentation/scenekit/scnmaterial). This isn't supported all that well - the view needs to be the view for a `UIViewController` in order to work, and a number of things don't work well if you do this. Perhaps in a later iOS version this will be better supported.

## Placing objects relative to the camera

Placing something relative to the camera is done easily enough. Possibly in response to a tap on the view, you first get the transform for the camera is in the scene, and then multiply it by a matrix for where you want the object placed, as well as possibly rotating for whether the device is portrait or landscape. Something like this generates the transform:

```swift
guard let camera = self.arView.session.currentFrame?.camera else { return }

var translation = matrix_identity_float4x4
translation.columns.3.z = -1

let rotation = matrix_float4x4(SCNMatrix4MakeRotation(Float.pi/2, 0, 0, 1))

let objectTransform = matrix_multiply(camera.transform, matrix_multiply(translation, rotation))
```

You then use the `objectTransform` matrix as the [`simdWorldTransform`](https://developer.apple.com/documentation/scenekit/scnnode/2881868-simdworldtransform) of the [`SCNNode`](https://developer.apple.com/documentation/scenekit/scnnode) you're adding to the scene (assuming SceneKit))

## Demos

[Made With ARKit](https://www.madewitharkit.com) is a blog featuring some of the really cool things people have done with ARKit. Sadly, it hasn't seen an update since December 2017.
