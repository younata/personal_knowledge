# Unix Tooling & System Administration

Doing things in the shell and managing systems.

This covers the following command line tools:

- [`ag`]({{#path_for The Silver Searcher}}) is like a combination of `find` and `grep`. It allows you to use regexes to search in or for files in a file tree.
- [AirCrack]({{#path_for aircrack-ng}}) is a wifi-sampling (and, if you have the right and enough information, allows you to break into wifi networks) program, but can be used for other, really cool things.
- [`ffmpeg`]({{#path_for ffmpeg}}) allows you to manipulate video and audio files from the command line. It's very full featured, especially considering it's a command line program.
- [`git`]({{#path_for git}}) covers some of the less-used (for me, as someone who uses `git` almost entirely from the command line) git commands.
- [`jq`]({{#path_for jq}}) is a tool for manipulated json data, providing an `xpath`-esque syntax for doing so.
- [`pandoc`]({{#path_for pandoc}}) allows converting between different document types. (markdown to latex, markdown to pdf, etc.)
- [`youtube-dl`]({{#path_for youtube-dl}}) is a neat program for downloading from and querying various video hosting sites. Including the namesake youtube.
- Lastly, [shell]({{#path_for Shell}}) is a list of recipes for doing various things in the common shell scripting languages. Whether or not you should write shell scripts that are that complex is not at all covered (You probably shouldn't).

On the System Administration side, this section covers:

- [Backups]({{#path_for backups}}) covers backing up different systems and how to do that.
- [Linode]({{#path_for linode}}) discusses how I use Linode, the cloud hosting provider I use.
- [SystemD]({{#path_for systemd}}) has some information for setting up and using systemd services.
- [ZNC]({{#path_for ZNC}}) covers a little bit of setting up and using the IRC bouncer, znc.

## Network Monitoring

- [`bandwhich`](https://github.com/imsnif/bandwhich) is a network monitor tool written in rust. It displays current network utilization by process, connection and remote IP/hostname.
