# ffmpeg

[ffmpeg](https://ffmpeg.org) is a CLI programming for editing and manipulating videos.

## Resizing Video Frame Size

[From this stackoverflow question](https://unix.stackexchange.com/questions/28803/how-can-i-reduce-a-videos-size-with-ffmpeg), resizing the video frame size is an easy and fast way to reduce video file size. I've found it especially useful for reducing file size of screencasts from my phone.

`ffmpeg -i input.mkv -vf "scale=iw/2:ih/2" half_the_frame_size.mkv` will reduce a 2x retina-sized video down to non-retina size.
`ffmpeg -i input.mkv -vf "scale=iw/3:ih/3" a_third_the_frame_size.mkv` will reduce a 3x retina-sized video down to non-retina size.
