# Shell

Bash shell, Z Shell, etc.

- [Logical Operators](https://stackoverflow.com/questions/6270440/simple-logical-operators-in-bash)
- [Basic Math](https://stackoverflow.com/questions/6348902/how-can-i-add-numbers-in-a-bash-script)

## Conditionals

You can check if a file exists with `-f`.

```bash
if [ -f "some_file" ]; then
    echo "file at './some_directory' exists and is not a directory!"
fi
```

You can test that a directory exists with `-d`, e.g.:

```bash
if [ -d "some_directory" ]; then
    echo "directory at './some_directory' exists!"
fi
```

You can reverse conditionals with `!`:

```bash
if [ ! -d "some_directory" ]; then
    echo "'./some_directory' does not exist!"
fi
```
