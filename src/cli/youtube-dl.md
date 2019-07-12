# youtube-dl

[youtube-dl](https://ytdl-org.github.io/youtube-dl/) is a python program for downloading videos from youtube and other sites.

## Video Formats 

To get a list of video formats to download, pass the `-F` flag, this returns an ascii table of available formats. It looks like so:

```bash
$ youtube-dl -F https://www.youtube.com/watch\?v\=9pBmNcv0Mlw
[youtube] 9pBmNcv0Mlw: Downloading webpage
[youtube] 9pBmNcv0Mlw: Downloading video info webpage
[info] Available formats for 9pBmNcv0Mlw:
format code  extension  resolution note
249          webm       audio only DASH audio   82k , opus @ 50k, 118.66MiB
250          webm       audio only DASH audio   97k , opus @ 70k, 151.06MiB
171          webm       audio only DASH audio  138k , vorbis@128k, 251.62MiB
140          m4a        audio only DASH audio  148k , m4a_dash container, mp4a.40.2@128k, 297.95MiB
251          webm       audio only DASH audio  161k , opus @160k, 293.26MiB
160          mp4        256x144    144p  137k , avc1.4d400c, 30fps, video only, 159.66MiB
278          webm       256x144    144p  228k , webm container, vp9, 30fps, video only, 263.76MiB
242          webm       426x240    240p  229k , vp9, 30fps, video only, 304.18MiB
133          mp4        426x240    240p  233k , avc1.4d4015, 30fps, video only, 229.71MiB
243          webm       640x360    360p  408k , vp9, 30fps, video only, 510.55MiB
134          mp4        640x360    360p  528k , avc1.4d401e, 30fps, video only, 406.49MiB
244          webm       854x480    480p  735k , vp9, 30fps, video only, 743.27MiB
135          mp4        854x480    480p  969k , avc1.4d401f, 30fps, video only, 606.68MiB
247          webm       1280x720   720p 1511k , vp9, 30fps, video only, 2.20GiB
302          webm       1280x720   720p60 1752k , vp9, 60fps, video only, 1.82GiB
136          mp4        1280x720   720p 2244k , avc1.4d401f, 30fps, video only, 2.12GiB
298          mp4        1280x720   720p60 2515k , avc1.4d4020, 60fps, video only, 1.11GiB
248          webm       1920x1080  1080p 2658k , vp9, 30fps, video only, 3.95GiB
137          mp4        1920x1080  1080p 3138k , avc1.640028, 30fps, video only, 3.46GiB
299          mp4        1920x1080  1080p60 3941k , avc1.64002a, 60fps, video only, 3.69GiB
303          webm       1920x1080  1080p60 4417k , vp9, 60fps, video only, 6.10GiB
18           mp4        640x360    medium , avc1.42001E, mp4a.40.2@ 96k, 1.17GiB
43           webm       640x360    medium , vp8.0, vorbis@128k, 1.80GiB
22           mp4        1280x720   hd720 , avc1.64001F, mp4a.40.2@192k (best)
```

The format code (first column in the list) is the code you pass along with the `-f` flag to download a specific format.

E.g. downloading the above 1280x720 format is:

```bash
youtube-dl -f 22 https://www.youtube.com/watch\?v\=9pBmNcv0Mlw
```

