# Astrophotography

Taking pictures of the sky!

See [Cafuego's page](https://cafuego.net/2017/02/05/astrophotography-mac-os-x) on software for osx.

See also the [Mac Observatory site](https://www.macobservatory.com).

I use the following software:

- <a href="http://www.cloudmakers.eu/astrodslr/" data-proofer-ignore>AstroDSLR</a> for capturing from my DSLR.
- [Nebulosity](https://www.stark-labs.com/nebulosity.html) for stacking images.

## Theory and Books

The standard recommended reading is [The Deep-sky Imaging Primer](https://www.amazon.com/Deep-sky-Imaging-Primer-Second/dp/0999470906).

- [A bunch of other useful links for beginners](https://www.cloudynights.com/topic/22488-useful-links-for-beginning-imagers/). Though, the whole [cloudy nights](https://www.cloudynights.com/forum/80-beginning-and-intermediate-imaging/) forum is super useful.
- [Other useful threads for beginning imaging on cloudy nights](https://www.cloudynights.com/topic/97172-best-threads-in-beginning-imaging/)
- <a href="http://www.astropix.com/html/i_astrop/toc_ap.html" data-proofer-ignore>Jerry Lodriguss's astrophotography techniques</a>


## Finding a site

[Find a local dark sky site](https://darksitefinder.com/maps/world.html). In LA, I like [Joshua Tree National Park](https://darksitefinder.com/placemarks/joshua-tree-national-park-california-united-states/).
However, being able to easily access far-away dark sky sites is one of my primary reasons for learning to fly.

## Equipment

You can get away at a bare minimum with just a camera and a tripod. My equipment checklist is:

- Camera
- 50 mm lens, because wide field shots are fun.
- Telescope[^selecting a telescope]
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

<a href="http://www.astropix.com/html/i_astrop/beginner_equipment.html" data-proofer-ignore>Jerry's list of beginner equipment for astrophotography</a>, which is a potential source for expansion.

## Actually Taking Photos

Regardless of how you use it, be sure to write down what you're taking a photo of when you do it.
Even if you know what the constellation/body you're photographing is anyway.

Also, for stacking[^stacking] reasons, the more photos you take, the better it is, but it does have diminishing returns[^stacking returns].

### Using a computer

Use AstroDSLR from computer to control the camera.
Keep the camera in bulb mode to allow the software to control exposure time.
Otherwise follow <a href="http://www.astropix.com/html/i_astrop/settings.html" data-proofer-ignore>these instructions</a>.

Make a different folder for each different set of photos you take.

#### Drift measurement with AstroDSLR

Copied from their website:

> For polar alignment by the drift method or for the validation of the guiding you can use drift measurement helper panel.
>
> The scale of the graph is adjusted automatically. Blue curve represents drift in X and red curve in Y direction. Blue value in lower left corner is drift per image in X direction and red value in lower right corner is drift per image in Y direction.
>
> To use the panel for polar alignment, rotate camera (to align RA/Dec axes along X/Y directions), start preview in endless loop, select accordingly bright star and use drift method.
>
> Please note, that the graph is cleared every time you select the star in the preview image.

### Without a computer

Put the camera in manual mode, and have it set to average.

### Star Trails

Sometimes you're going for that really cool effect, othertimes you're not.

<a href="http://www.astropix.com/index.html" data-proofer-ignore>Here's an article</a> from Jerry Lodriguss on how to deal with star trails.

## PostProcessing

Nebulosity doesn't read the color information from your raw files. Convert them to jpeg, because that's still better than grayscale images.

```shell
for i in *.cr2; do sips -s format jpeg "$i" --out "${i%.*}.jpg"; done
```

From Nebulosity, open batch -> align and combine images. Select "Translation + Rotation + Scale", click "OK", and select the images to stack.
Now, select the same star in each photograph as it prompts you. You're going to go through the sets 3 times (so that it can correct for translation/rotation/scale).
Now, do some manual editing, and save the end result.

Post to instagram[^instagram] or whatever. Use it as your new desktop background.

[^selecting a telescope]: <a href="http://www.astropix.com/html/i_astrop/scopes.html" data-proofer-ignore>Much better advice on how to select one</a>. Though, usually, the best one is the one you already own.

[^f.lux]: or use [f.lux](https://justgetflux.com) to remove as much blue from your screen as possible.

[^stacking]: [How Image Stacking works](https://keithwiley.com/astroPhotography/imageStacking.shtml).

[^stacking returns]: It's essentially an inverse square relation - to get 5x better quality, you need to take 25x more images.

[^instagram]: [flume](https://flumeapp.com) seems to be a decent OSX client for instagram. The pro version is worth it.
