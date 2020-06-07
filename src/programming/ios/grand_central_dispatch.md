# Grand Central dispatch

The low-level API to handle parallelism and concurrent operation. (Use Operation Queues whenever possible, though)

## Executing in Parallel

[`DispatchQueue.concurrentPerform`](https://developer.apple.com/documentation/dispatch/dispatchqueue/2016088-concurrentperform) is a class-level func that takes the amount of iterations, and a block for the work to do. It blocks the calling thread and executes that block as much as possible. It works as an efficient parallel for-loop.

When possible, use a large amount of iteration, so as to use as much of the system as possible.

## Concurrency

Use system trace in instruments to debug concurrency performance.

e.g. too many threads trying to aquire the same lock.

- Look using an unfair lock [`os_unfair_lock`](https://developer.apple.com/documentation/os/1646466-os_unfair_lock_lock), instead of something like [`DispatchQueue.sync`](https://developer.apple.com/documentation/dispatch/dispatchqueue/1452870-sync) (which is a fair lock). unfair locks are subject to waiter starvation, wheras fair locks aren't.
- Look at lock priorization, make sure that e.g. the main thread isn't waiting on access to a resource locked by a lower priority thread.

## How `DispatchQueue.sync` works

Given the following lines of code, what happens? What is printed?

```
let queue = DispatchQueue(label: "myLabel")

print("a")
queue.async { print("1") }
print("b")
queue.async { print("2") }
print("c")
queue.sync { print("3") }
print("d")
```

So, what happens is that the thread will execute, print `a`, enqueue the first operation to the queue, print `b`, enqueue the second operation to the queue, print `c`, enqueue a placeholder for the third operation and wait until the queue is drained.  
Now, some async worker thread comes along and runs the first two operations. (`1` and `2` are printed). Then, it transfers ownership of the queue to the calling thread and runs the third operation ( `3` is printed). Finally, the block caused by calling `queue.sync` is resolved and `d` is printed.

So, this is what's printed:

```
a
b
c
1
2
3
d
```

## Monitoring Events

Use [`DispatchSource`](https://developer.apple.com/documentation/dispatch/dispatchsource).