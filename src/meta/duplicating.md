# Creating your own mdBook-based Knowledge Repository

I maintain a second knowledge repository for work-specific things, these are the instructions I used for setting that one up.

## Machine Setup

[mdBook](https://github.com/rust-lang-nursery/mdBook) is requires rust to use, so we first install rust. This is done via [rustup](https://rustup.rs).

- `curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh`

Next, we install mdbook itself: `cargo install mdbook`.

Optionally, we can install my [mdbook-generate-summary](https://github.com/younata/mdbook-generate-summary) tool, which means we don't have to maintain the `SUMMARY.md` file that mbdook requires. If you don't want to install that, then you also need to add an entry to the SUMMARY.md file each time you create or move files around.

- `cargo install mdbook-generate-summary`

This is all that's required to setup the machine.

## Setting up the Repository

To set up the repository itself, you need to create a `book.toml` file, an initial `src/README.md` file, and (if not using `mdbook-generate-summary`) a `src/SUMMARY.md` file.

For reference, this repository's book.toml file is: 

```
{{#include ../../book.toml}}
```

The only special thing is that this repository also uses my [`mdbook-api`](https://github.com/younata/mdbook-api) backend, in order to export things for use with my [client side tooling](tooling.md).

## Building the Repository

If you want to view the repository locally, you can use `mdbook build`, and open `book/index.html` in your web browser. If you're doing interactive work, then you can use `mdbook watch`.

Note that if you're using `mdbook-generate-summary`, you should run that every time you create, delete, or move a page.

