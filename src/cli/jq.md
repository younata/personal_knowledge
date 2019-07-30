# jq

[sed for json data](https://stedolan.github.io/jq/).

The [tutorial](https://stedolan.github.io/jq/tutorial/) will cover most use cases.

Color the json input: `curl $JSON_PRODUCING_URL | jq`.

Get first item in a list: `echo $JSON_LIST | jq '.[0]'`

Get specific item from a list: `echo $JSON_LIST | jq '.[].foo' `

You can even convert that to other json objects: `echo $JSON_LIST | jq '.[] | {foo: .bar.foo, baz: .bar.baz}'`. Don't forget to use `'` so that the `|` character gets sent to jq and isn't interpreted by the shell.
