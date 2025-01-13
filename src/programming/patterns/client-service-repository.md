# Client-Service-Repository Pattern

I've known of this pattern since 2015 at least, and it's one manifestation of the <a href="https://martinfowler.com/eaaCatalog/repository.html" data-proofer-ignore>Repository Pattern</a> as described in Domain Driven Design.

```
+------------+
| Controller |
+------------+
      |
    (one)
      V
+------------+
| Repository |
+------------+
      |
    (many)
      V
+-----------+
|  Service  |
+-----------+
      |
    (one)
      V
+------------+
|   Client   |
+------------+
```

In this example, the Controller is any code calling into your data domain.

In this pattern the Client is the thing that handles the "raw" transaction with whatever/wherever the data store is. For example, you might implement (or specify) an HTTPClient, which talks over HTTP to access resources at a remote server. Or this could be something like a SQLiteClient, which can access SQLite databases and make queries to it.

The Client is used by the Service. The service handles making specific requests, such as accessing a specific URL, or making specific queries to your SQL db. The Service also has the responsibility of converting between decoded and encoded objects. Such as by parsing data from your SQL db and converting it to types that can be used elsewhere in the program. Services tend to be fairly tightly coupled to the kind of Client: you can't really use a Service meant for dealing with URL requests with a client that speaks SQLite.

Last is the Repository. In this pattern, Repositories add caching to this setup. One way to do this is by combining multiple Services with the same signatures, such as falling back to a service backed by SQL when the service backed by HTTP fails. Another way is to just use raw in-memory caching by maybe storing the last result from the service.

Note that Repositories aren't always necessary: if you don't need caching or you don't need to combine services that return the same object, then your Controller should just call into a Service.