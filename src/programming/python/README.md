# Python

[![Required xkcd comic on python](https://imgs.xkcd.com/comics/python.png)](https://xkcd.com/353/)

I have a special place in my heart for python. One of the first programming languages I learned, and I still use it for a bunch of small-but-more-complex-than-a-shell-script programs.

Python has many issues, of course. The very free-form, whitespace-based syntax makes refactoring very difficult. The dynamic type system makes it much harder for me to reason about a program - to the point where all programs I write use [type annotations](https://docs.python.org/3/library/typing.html) to mitigate the issue. The syntax of the language makes it hard to write an [rspec-like](https://rspec.info) testing framework (it's possible, but you have to use lots of `with` boilerplate).

## Inline Execution from the Command Line

You can call python with the `-c` argument to execute an inline script in the command line, e.g.

```bash
python -c 'print("hello")'
```
