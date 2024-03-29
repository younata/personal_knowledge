# Setting Up Macs

Setting up a mac from scratch, how I do it.

This is mostly used when setting up a work computer. I've been using migration assistant with great success for the past several personal computers.

## System Settings

Open System Preferences.

### Keyboard Settings

- Key Repeat: Fastest
- Delay Until Repeat: Shortest

In macOS Ventura and later, these options are under "Keyboard shortcuts".
- Check "Use F1, F2, etc. keys as standard function keys" (Function Keys submenu)
- Click "Modifier Keys", remap Caps Lock to escape on all keyboards. (Modifier Keys submenu)

### Trackpad Settings

In "Trackpad":

- enable "Tap to click"
- Select "More Gestures", then enable "App Exposé".

In "Accessibility", scroll down to "Pointer Control". Select "Trackpad Options...", check "Enable dragging", and in the dropdown next to it, select "three finger drag".

### Setting the Hostname

Open Sharing, set the hostname for the system there.

### Sound

Open Sound, go to the Sound Effects tab, make sure "Play feedback when volume is changed" is checked.

## Apps and Other Utilities

Go to the App Store, install xcode. Go wait for it to install.

Open Safari, go to [`brew.sh`](https://brew.sh), and follow it's instructions to install homebrew.

Once that's done, run the following commands:

```sh
brew install --cask iterm2 rectangle alfred macdown
brew install rbenv node tig the_silver_searcher jq wget tree

# Set up rbenv
rbenv init 2>&1 | tail -1 >> ~/.zshrc

# Get the latest ruby.
LATEST_RUBY=$(rbenv install -l | sed -n '/^[[:space:]]*[0-9]\{1,\}\.[0-9]\{1,\}\.[0-9]\{1,\}[[:space:]]*$/ h;${g;p;}')
rbenv install ${LATEST_RUBY}
rbenv global ${LATEST_RUBY}
gem install bundler

# mdspell
npm i markdown-spellcheck -g # For spellchecking the knowledge repo.
```

These install [iterm2](https://iterm2.com) (terminal emulator), [rectangle](https://rectangleapp.com) (keyboard-based window manager), [alfred](https://www.alfredapp.com) (quick launcher, amongst other responsibilities), and [macdown](https://macdown.uranusjr.com) (markdown editor)

They also install and set up rbenv (ruby environment), node, tig (git tree viewer), ag (Very fast file searcher), jq (json processor), `wget` (url downloader), <a href="http://mama.indstate.edu/users/ice/tree/" data-proofer-ignore>`tree`</a> (recursive directory listing command)

### Rectangle

Download my [rectangle config file](./RectangleConfig.json).

Open Rectangle, go to Preferences, select the gear icon. Near the bottom-right, select "import". Import the rectangle config you just downloaded.

### Rust

This is an interactive script. Go to [`rustup.rs`](https://rustup.rs), and copy the command they give and run it.

Install `mdbook-generate-summary` with `cargo install mdbook-generate-summary` once you're done.

### Xcode

Open Xcode, open Settings. (cmd+,)
Go to the 'Text Editing' section.

- Under the "Show" section, make sure "Code folding ribbon" is checked.
- Under the "While Editing" section, make sure both "Automatically trim trailing whitespace" and "Including whitespace-only lines" are checked.

#### Quick Snippets

Adding `desc`, `qit`, etc. to xcode.

Clone the [Quick Snippets repository], run `install.sh`, then restart xcode.

```sh
git clone https://github.com/younata/QuickSnippets
cd QuickSnippets
bash install.sh
cd -
```
