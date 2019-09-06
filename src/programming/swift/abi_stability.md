# ABI Stability in libraries

AKA the `@frozen` attribute.

Per [Swift Evolution 260](https://github.com/apple/swift-evolution/blob/master/proposals/0260-library-evolution.md), you can enable "library evolution mode" (with the `-enable-library-evolution` command-line argument), which will make it a non-ABI-breaking change to modify fields in a struct or add new enum cases. (These are "resilient" types).

Also, on a per-type basis, you can specify structs and enums to be `@frozen`, which means that the stored instance properties of a struct will not be changed (added, removed, reordered), nor will the cases of an enum change (add, remove, reorder). `@frozen` only really applies if library evolution is enabled, and is assumed to be the default if not (however, libraries compiled without library evolution mode enabled are not ABI-stable).
