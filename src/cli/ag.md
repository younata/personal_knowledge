# The Silver Searcher

Install on OSX using brew, with `brew install the_silver_searcher`.

A code-specific searching tool similar to ack, but faster. [`ag`](https://www.github.com/ggreer/the_silver_searcher).

By default, you can use it to search for a given pattern in all files under a directory tree.

You can modify it with `-g` to search for files with names matching the given pattern (similar to `find | grep`, but much faster). `ag -g '.+swift'` returns all files ending in "swift".

You can modify it with '-G' to search for pattern in all files with names matching a pattern. `ag -G '.+swift' Foo` searches for the pattern 'Foo' only in files ending in "swift".
