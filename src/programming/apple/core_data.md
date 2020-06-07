# Core Data

[Core Data Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreData/index.html#//apple_ref/doc/uid/TP40001075-CH2-SW1)

## Setting up

[Apple's documentation seems to be fine](https://developer.apple.com/documentation/coredata/setting_up_a_core_data_stack/setting_up_a_core_data_stack_manually).

[Persistent Store types are here](https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/persistent_store_types), you'll mostly be using `NSSQLStoreType` or `NSInMemoryStoreType` (for testing).

## Concurrency

[`NSManagedObjectContext`](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext) is the way to read/write objects to/from core data. Create a managed object context with a given concurrency type (either [`mainQueueConcurrencyType`](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontextconcurrencytype/mainqueueconcurrencytype) or [`privateQueueConcurrencyType`](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontextconcurrencytype/privatequeueconcurrencytype)), and only operate on it within blocks passed to [`perform(_:)`](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/1506578-perform) or [`performAndWait(_:)`](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/1506364-performandwait) calls. Be sure to only have one managed object context for your persistent store coordinator, or you'll encounter strange crashes.

Additionally, keep in mind that [`NSManagedObject`](https://developer.apple.com/documentation/coredata/nsmanagedobject) subclasses are not thread-safe (there are only a [handful of properties/methods](https://developer.apple.com/documentation/coredata/nsmanagedobject#1653939) that are safe to access outside of a [`perform(_:)`](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/1506578-perform) or [`performAndWait(_:)`](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/1506364-performandwait) call). Instead of passing instances of [`NSManagedObject`](https://developer.apple.com/documentation/coredata/nsmanagedobject), pass around the object's [`NSManagedObjectID`](https://developer.apple.com/documentation/coredata/nsmanagedobjectid) (obtained from the managed object's [`objectID`](https://developer.apple.com/documentation/coredata/nsmanagedobject/1506848-objectid) property.

My preferred approach for accessing core data is to convert the [`NSManagedObject`](https://developer.apple.com/documentation/coredata/nsmanagedobject) instance into another, thread-safe model object. This has the advantage of not leaking implementation details and concerns about my database layer to other layers of my app. Which, in addition to being [good design](https://en.wikipedia.org/wiki/Separation_of_concerns), also means that I can switch out (or ignore) databases as makes sense for what I'm trying to do.

## Storing Records

In my experience, using `MyNSManagedObjectSubclass(managedObjectContext: context); context.insert(myCreatedObject)` doesn't work. Instead, use the older [`NSEntityDescription.insertNewObject(forEntityName:into:)`](https://developer.apple.com/documentation/coredata/nsentitydescription/1425093-insertnewobject) to create and insert new objects.

## Fetch Requests

### Fetching by property with type URI

I ran into issues figuring this out. The approach you want is:

```swift
fetchRequest.predicate = NSPredicate("url.absoluteString = %@", urlToFetch.absoluteString)
```

## Errors

### Multiple NSEntityDescriptions claim an NSManagedObjectContext subclass

I encountered this in tests, where I was initiating up the Core Data stack from scratch with each test. Turns out that, because CoreData creates new classes when you bring up the context, you'll end up seeing this warning with every new test.

The solution is to not create so many ManagedObjectModels - that is, instead of bringing up a new stack with each test, bring it up once, and then delete every object between run.
