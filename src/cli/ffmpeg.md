# ffmpeg

[ffmpeg](https://ffmpeg.org) is a CLI programming for editing and manipulating videos.

## Resizing Video Frame Size

[From this stackoverflow question](https://unix.stackexchange.com/questions/28803/how-can-i-reduce-a-videos-size-with-ffmpeg), resizing the video frame size is an easy and fast way to reduce video file size. I've found it especially useful for reducing file size of screencasts from my phone.

`ffmpeg -i input.mkv -vf "scale=iw/2:ih/2" half_the_frame_size.mkv` will reduce a 2x retina-sized video down to non-retina size.
`ffmpeg -i input.mkv -vf "scale=iw/3:ih/3" a_third_the_frame_size.mkv` will reduce a 3x retina-sized video down to non-retina size.

## Creating a video from images

This is awesome. [From this stackoverflow question](https://stackoverflow.com/questions/24961127/how-to-create-a-video-from-images-with-ffmpeg), it's more-or-less a combination of the `-framerate $X` and `-r $Y` to get what you want. You can also use `-vf fps=$X` to specify the fps of the video.

## Creating a gif from a video

[This post from giphy engineering](https://engineering.giphy.com/how-to-make-gifs-with-ffmpeg/) describes how to do that. It's essentially:

`ffmpeg -i $INPUT_VIDEO -filter_complex "[0:v] fps=30,split [a][b];[a] palettegen=stats_mode=single [p];[b][p] paletteuse=new=1" $OUTPUT.gif`
