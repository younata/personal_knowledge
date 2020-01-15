# Shell

Bash shell, Z Shell, etc.

- [Logical Operators](https://stackoverflow.com/questions/6270440/simple-logical-operators-in-bash)

## Basic Math

From [this stackoverflow answer](https://stackoverflow.com/questions/6348902/how-can-i-add-numbers-in-a-bash-script), to add two numbers and set the result to another, you use `$(())` syntax, e.g.

```bash
BAZ=$(($FOO + $BAR))

# Incrementing a number
A=$(($A + 1))
```

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

## Checking if a command exists

You can check whether a command exists by checking if `command -v ${COMMAND_TO_CHECK} >/dev/null 2>/dev/null` returns 0 (it exists) or non-zero (does not exist)

```bash
if [ ! command -v my_special_script >/dev/null 2>&1 ]; then
    echo "my_special_script not found"
fi
```

## Checking if a string is a number

You can use the `-eq` operator to verify if something is a number: `if ! [ "${some_number}" -eq "${some_number}"] 2>/dev/null; then "${some_number} is not a number"; fi`

You can similarly use the `-ge` to determine if something is a positive number.

## Traps

You can use the `trap` command to run code when the shell script exits (or any signal occurs), like so:

```bash
function on_end {
    echo "woohoo"
}

trap on_end exit
```

which will print "woohoo" to stdout when the script exits.

