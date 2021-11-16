# macOS & iOS

## Administering

### LaunchD and LaunchAgents

[launchd.info](https://www.launchd.info) is an excellent resource for using launchd and creating launchagents.

### Remotely shutting down

There's essentially two ways to do this from a terminal: `sudo shutdown -r now` will reboot the machine, now. Apps don't get the chance to stop this.

Alternatively, you can use applescript, with commands like:

- `osascript -e 'tell app "System Events" to shut down'` will shutdown the machine.
- `osascript -e 'tell app "System Events" to restart'` will reboot the machine.

All of these can be halted by other apps, though.

See [this stackoverflow answer](https://apple.stackexchange.com/a/103633) for other examples.

### View Hidden Files in Finder

In a finder or open-file window prompt (using the system control), use `command+shift+.` to toggle showing hidden files.

### Audio Skipping Glitch

Sometimes, the audio will "skip" when using headphones. Restarting `coreaudiod` seems to fix it. If not, then restart the machine and that sometimes helps. This only happens to me after running UI tests in an iOS simulator, or when resetting an iOS simulator.

```bash
sudo killall -9 coreaudiod
```
