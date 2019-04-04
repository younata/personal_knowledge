# URLSession and URLRequest

## Caching

### [`URLCache`](https://developer.apple.com/documentation/foundation/urlcache)

Apple provides a really nice built-in way to do caching, using [`URLCache`](https://developer.apple.com/documentation/foundation/urlcache). You can configure a [`URLSession`](https://developer.apple.com/documentation/foundation/urlsession) object to use your specific cache via [`URLSessionConfiguration.urlCache`](https://developer.apple.com/documentation/foundation/urlsessionconfiguration/1410148-urlcache).

Once configured, all requests through that session will use that cache, though it's possible to override for specific requests, or for all requests from that session.

Note that [`URLSession.shared`](https://developer.apple.com/documentation/foundation/urlsession/1409000-shared) is configured to use [`URLCache.shared`](https://developer.apple.com/documentation/foundation/urlcache/1413377-shared) by default. This is transparent to the user (that is, there's no easy way to determine whether or not the request actually used the network or returned cached data).

### ETag and Manual Caching

Sometimes you want to manually cache responses. Because [`URLSession`](https://developer.apple.com/documentation/foundation/urlsession) uses a cache by default, we have to tell our requests to not do that. There are a few ways to do that:

1. Use a URLSession that isn't backed by a cache (by creating one with the configuration's [`urlCache` property set to nil](https://developer.apple.com/documentation/foundation/urlsessionconfiguration/1410148-urlcache))
2. Use a URLSession with a cache policy that ignores the cache (set the configuration's [`requestCachePolicy`](https://developer.apple.com/documentation/foundation/urlsessionconfiguration/1411655-requestcachepolicy) to [`. reloadIgnoringLocalAndRemoteCacheData`](https://developer.apple.com/documentation/foundation/nsurlrequest/cachepolicy/reloadignoringlocalandremotecachedata)
3. Have all your [`requests`](https://developer.apple.com/documentation/foundation/urlrequest) individually specify [`. reloadIgnoringLocalAndRemoteCacheData`](https://developer.apple.com/documentation/foundation/nsurlrequest/cachepolicy/reloadignoringlocalandremotecachedata) as their [`cachePolicy`](https://developer.apple.com/documentation/foundation/urlrequest/2011593-cachepolicy)

Once you have the caching behavior set, you need to implement manual caching yourself. I'm going to describe using [ETag](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag) because that's better (and what my nginx server did for me).

The [ETag header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag) is one way to determine whether or not a resource has changed from when it was last served. It's essentialy a hash of the resource information (as opposed to using something like [Last-Modified](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Last-Modified) for a time-based approach). You pair this with the [If-None-Match](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match) request header to have the server calculate whether the data has changed (HTTP 200 response) or not (HTTP 304 response).

So, the algorithm for doing this is:

- Make initial request
- Record the value for the `ETag` (or `Etag`) header in the response you send.
- In subsequent requests to the same url, include the `If-None-Match` request header, with value set to whatever you received for that `Etag` header.
    - If you receive a 304:
        - Use the older data you had (no cache update needed).
    - If you receive a 200:
        - Overwrite the etag you had with the newer etag header
        - Use the new data you received in the body of the response.
