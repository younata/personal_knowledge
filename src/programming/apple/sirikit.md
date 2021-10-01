# Sirikit

## Siri Media Intents

Intents:

- `INPlayMediaIntent`
  - "Play $SONG_NAME in my app"
- `INAddMediaIntent`
  - "Add this to $PLAYLIST in my app"
- `INUpdateMediaAffinityIntent`
  - "I like this song"
- `INSearchForMediaIntent`
  - "Find $SEARCH_TERM in my app"

Look at `INMediaSearch` for full list of supported search terms.

### Processing Media Intents

WWDC talks:

- Introducing Sirikit
- Making Great Sirikit experiences
- [Design high quality Siri media interactions](https://developer.apple.com/videos/play/wwdc2020/10060)

Resolve, Confirm, Handle.

Resolve is where you identify the items.
 - This is where you create the INMediaItems, return it in the IN*MediaItemResolutionResult.
 - Must be implemented for Media intents.
 - in watchOS: Use on-device cache if at all possible.
Don't bother confirming it.
Handle is where the thing as actually handled.
 - For play, you use "handle in app". Don't need to pass in a user activity for this case.
   - handle in app calls `application(_:handle:completionHandler:)` on the `AppDelegate`.
   - This is where you parse the IN*MediaIntent and handle it (e.g. re-find the song to play, and play item)

Test in Carplay (lol) or when wearing headphones.

in `AppDelegate`, implement `application(_:handle:completionHandler:)`

Always populate title, artist, and type in INMediaItem in the resolve method.

"Play my app" will have no media items. You can do what you want there, but don't ask them what to play.

Playback can have repeat, shuffle, speed, and queue locations.

Errors: INPlayMediaMediaItemUnsupportedReason

Look at INMediaSortOrder for "new" or "best" or recommended items.

Searching by currently playing (INMediaReferenceCurrentlyPlaying). May also contain MPNowPlayingInfoPropertyExternalContentIdentifier from MPNowPlayingInfoCenter, which will be the INMediaSearchItem's identifier property.

Can give siri the vocabulary of the catalog.
- Don't include the entire catalog.
- Only the entities specific customer.
- Order it with most relevant info for the customer.
- Types available (amongst others):
  - PlaylistTitle
  - MusicArtistName
  - AudiobookTitle
  - AudiobookAuthor
  - ShowTitle
- Look at global vocabulary support.
