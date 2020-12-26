# Applescript

Applescript is pretty terrible, but very useful for scripting mac apps. You could use javascript for this, as of 10.11, but there's no documentation for using javascript to script OSX applications.

## Opening Applications

This is simple, you send the `activate` command to it.

E.G.

```applescript
tell application "QuickTime"
	activate
end tell
```

## Concatenating strings

Use the `&` operator to concatenate strings. Unlike `+` as in almost all other languages.

`"Something " & "something else"` -> `"Something something else"`

## Resizing and Moving Windows

Change the `bounds` property of the given window. Unlike with AppKit apps, this has the origin as the top-right.

e.g. to resize the top xcode window to 1920 x 1080 and place it in the top-right corner, use this script:

```applescript
tell application "Xcode"	set bounds of front window to {0, 0, 1920, 1080}end tell
```