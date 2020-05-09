# Mac

Setting up a mac from scratch, how I do it.

## System Settings

Open System Preferences.

### Keyboard Settings

- Key Repeat: Fastest
- Delay Until Repeat: Shortest

Check "Use F1, F2, etc. keys as standard function keys"
Click "Modifier Keys", remap Caps Lock to escape on all keyboards.

### Setting the Hostname

Open Sharing, set the hostname for the system there.

### Sound

Open Sound, go to the Sound Effects tab, make sure "Play feedback when volume is changed" is checked.

## Apps and Other Utilities

Go to the App Store, install xcode. Go wait for it to install.

Open Safari, go to [`brew.sh`](https://brew.sh), and follow it's instructions to install homebrew.

Once that's done, run the following commands:

```sh
brew cask install iterm2 shiftit alfred flycut macdown
brew install rbenv node tig the_silver_searcher

# Set up rbenv
rbenv init | tail -1 >> ~/.zshrc

# Get the latest ruby.
LATEST_RUBY=$(rbenv install -l | sed -n '/^[[:space:]]*[0-9]\{1,\}\.[0-9]\{1,\}\.[0-9]\{1,\}[[:space:]]*$/ h;${g;p;}')
rbenv install ${LATEST_RUBY}
rbenv global ${LATEST_RUBY}
gem install bundler

# mdspell
npm i markdown-spellcheck -g # For spellchecking the knowledge repo.
```

These install [iterm2](https://iterm2.com) (terminal emulator), [shiftit](https://github.com/fikovnik/ShiftIt) (keyboard-based window manager), [alfred](https://www.alfredapp.com) (quick launcher, amongst other responsibilities), [flycut](https://github.com/TermiT/Flycut) (pasteboard manager), [macdown](https://macdown.uranusjr.com) (markdown editor)

They also install and set up rbenv (ruby environment), node, tig (git tree viewer), ag (Very fast file searcher)

### Rust

This is an interactive script. Go to [`rustup.rs`](https://rustup.rs), and copy the command they give and run it.

Install `mdbook-generate-summary` with `cargo install mdbook-generate-summary` once you're done.

### Xcode

Open Xcode, open Settings. (cmd+,)
Go to the 'Text Editing' section.

- UNder the "Show" section, make sure "Code folding ribbon" is checked.
- Under the "While Editing" section, make sure both "Automatically trim trailing whitespace" and "Including whitespace-only lines" are checked.

#### Quick Snippets

adding `desc`, `qit`, etc. to xcode.

Clone the [Quick Snippets repository], run `install.sh`, then restart xcode.

```sh
git clone https://github.com/younata/QuickSnippets
cd QuickSnippets
bash install.sh
cd -
```
