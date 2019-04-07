# Core Data

[Core Data Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreData/index.html#//apple_ref/doc/uid/TP40001075-CH2-SW1)

## Setting up

[Apple's documentation seems to be fine](https://developer.apple.com/documentation/coredata/setting_up_a_core_data_stack/setting_up_a_core_data_stack_manually).

[Persistent Store types are here](https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/persistent_store_types), you'll mostly be using `NSSQLStoreType` or `NSInMemoryStoreType` (for testing).

## Concurrency

[`NSManagedObjectContext`](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext) is the primary way to read/write objects to/from core data. Concurrency with them works on having parent/child relationship. With the parent being in a [`mainQueueConcurrencyType`](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontextconcurrencytype/mainqueueconcurrencytype) and the child having a [`privateQueueConcurrencyType`](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontextconcurrencytype/privatequeueconcurrencytype). This way, you can read/write to the private queue as much as you want, but it won't get saved until you update the parent context.

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
