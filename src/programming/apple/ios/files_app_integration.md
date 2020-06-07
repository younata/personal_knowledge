# Files App Integration

iOS 11 brought the Files app. Integrating with it is relatively simple. Writing a document provider (i.e. something like dropbox, or [secure shellfish](https://secureshellfish.app)) is much more involved.

## On-Device Integration

Mostly copied from what [Big Nerd Ranch wrote](https://www.bignerdranch.com/blog/working-with-the-files-app-in-ios-11/). This is really two things you need to add to your info.plist:

- Set `UIFileSharingEnabled` (Application supports iTunes file sharing) to `YES`
- Set `LSSupportsOpeningDocumentsInPlace` (Supports opening documents in place) to `YES`.

And that's pretty much it.

Note that setting this will make ALL of the contents of `$APP_ROOT/Documents` visible to the files app, so any private files you kept there will also be visible. These should instead be moved to the Application Support folder.

## Additional Links

- [AppCoda lists some more things you can do, such as using a `UIDocumentBrowser`](https://www.appcoda.com/files-app-integration/)
- [Little Bites of Cocoa has a bite on opening files from the files app](https://littlebitesofcocoa.com/321-opening-files-from-the-files-app)
