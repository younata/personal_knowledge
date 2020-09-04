# Common Crashes

Common crashes and what they mean.

## `unrecognized selector sent to instance 0x8000000000000000`

At first glance, the crash log will read like you tried to access an object that had already been deallocated. However, the giveaway is that `0x8000000000000000` address. This suspicious address tells you that you have a concurrent write bug. Somewhere, you have a race condition with multiple threads writing to the exact same address at the same time.
