# Astrophotography

Taking pictures of the sky!

See [Cafuego's page](https://cafuego.net/2017/02/05/astrophotography-mac-os-x) on software for osx.

I use the following software:

- AstroDSLR[^astrodslr ssl] for capturing from my DSLR.
- [Nebulosity](https://www.stark-labs.com/nebulosity.html) for stacking images.

## Finding a site

[Find a local dark sky site](https://darksitefinder.com/maps/world.html). In LA, I like [Joshua Tree National Park](https://darksitefinder.com/placemarks/joshua-tree-national-park-california-united-states/).
However, being able to easily access far-away dark sky sites is one of my primary reasons for learning to fly.

## Equipment

You can get away at a bare minimum with just a camera and a tripod. My equipment checklist is:

- Camera
- 50 mm lens, because wide field shots are fun.
- Telescope
    - Telescope camera mount
        - (barlow lens, T-ring, etc.)
    - [Bahtinov mask](https://en.wikipedia.org/wiki/Bahtinov_mask).
- Equatorial Mount
    - Motors for said mount
    - Batteries for the motors
- Computer (Strictly speaking, this isn't necessary - my camera can be set to take a series of photos at once)
    - USB-A to Mini-USB-A (to talk to camera).
- RED flashlight - white will ruin your night sight. You also want low-lumen, for the same reason.
- Water
- Coffee
- Snacks
- Camping chair
- Sleeping pad/bag (even if you plan to stay up all night, bring these).
- Pillow
- Paper and Pen.
- A book or something else to do while the computer does all the work.

Be sure to set the computer to "night shift" mode[^f.lux] before it's dark, as red as possible.

Go there, set up camp. Preferably be set up before dark.

## Actually Taking Photos

Regardless of how you use it, be sure to write down what you're taking a photo of when you do it.
Even if you know what the constellation/body you're photographing is anyway.

Also, for stacking[^stacking] reasons, the more photos you take, the better it is, but it does have diminishing returns[^stacking returns].

### Using a computer

Use AstroDSLR from computer to control the camera.
Keep the camera in bulb mode to allow the software to control exposure time.

Make a different folder for each different set of photos you take.

### Without a computer

Put the camera in manual mode, and have it set to average.

## PostProcessing

Nebulosity doesn't read the color information from your raw files. Convert them to jpeg, because that's still better than grayscale images.

```shell
for i in *.cr2; do sips -s format jpeg "$i" --out "${i%.*}.jpg"; done
```

From Nebulosity, open batch -> align and combine images. Select "Translation + Rotation + Scale", click "OK", and select the images to stack.
Now, select the same star in each photograph as it prompts you. You're going to go through the sets 3 times (so that it can correct for translation/rotation/scale).
Now, do some manual editing, and save the end result.

Post to instagram[^instagram] or whatever. Use it as your new desktop background.

[^astrodslr ssl]: They don't have an up to date ssl cert. Site is at www.cloudmakers.eu/astrodslr/

[^f.lux]: or use [f.lux](https://justgetflux.com) to remove as much blue from your screen as possible.

[^stacking]: [How Image Stacking works](https://keithwiley.com/astroPhotography/imageStacking.shtml).

[^stacking returns]: It's essentially an inverse square relation - to get 5x better quality, you need to take 25x more images.

[^instagram]: [flume](https://flumeapp.com) seems to be a decent OSX client for instagram. The pro version is worth it.