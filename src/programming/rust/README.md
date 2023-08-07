# Rust

Rust is a language that I've been in love with for ages.

It's also one of the most frustrating languages I've ever used. This is both because it has a very steep learning curve, and I've never written enough rust to actually be good at it.

It also has the best documentation of any language.

## Swift/iOS Interop

Follow [this article](https://medium.com/visly/rust-on-ios-39f799b3c1dd)

Add the iOS architectures to `rustup`, as well as the tools for building universal iOS binaries (`cargo-lipo`) and C headers from rust (`cbindgen`).

```bash
rustup target add aarch64-apple-ios armv7-apple-ios armv7s-apple-ios x86_64-apple-ios i386-apple-ios
cargo install cargo-lipo
cargo install cbindgen
```

## Serializing json in rust.

Follow [this guide using serde](https://serde.rs/derive.html).

Essentially:

Add to `Cargo.toml`'s `[Dependencies]` section:

```toml
serde = { version = "1.0", features = ["derive"] }
serde_json = "1.0"
```

Make your struct derive `Serialize`, and pass it to `serde_json::to_string()`

```rust,ignore
#[derive(Serialize)]
struct Thing {
    x: i32
}

fn main() {
    let thing = Thing { a: 1 }
    println!("{}", serde_json::to_string(&thing).unwrap());
}
```

## Rust on an AVR microcontroller

Source-ish: [Rust on Arduino](https://dev.to/creativcoder/how-to-run-rust-on-arduino-uno-40c0).

You can also use this to abstract for pretty much any AVR microcontroller. I have enough bare microcontrollers to last me a lifetime.

!!!https://github.com/Rahix/avr-hal/issues/124,https://github.com/rust-lang/rust/issues/82104,https://github.com/rust-lang/compiler-builtins/issues/400

There's a bug in the rust compiler right now and you can't use a rust toolchain after 2021-01-07. To mitigate this, add the following to your project's `Cargo.toml`:

```toml
[toolchain]
channel = "nightly-2021-01-07"
components = ["rust-src"]
```

!!!

Also check out [`avr-rust/ruduino`](https://github.com/avr-rust/ruduino) for a library that provides reusable components for an arduino uno/atmega 328p.

## Links

- [Too Many Lists](https://rust-unofficial.github.io/too-many-lists/index.html) - a learn rust thing that's really well written and actually fun.
- [structopt](https://docs.rs/structopt/0.2.15/structopt/) is a way to do typed command line arguments.
- [Rust cookbook](https://rust-lang-nursery.github.io/rust-cookbook/about.html).
- [Command Line Apps in Rust](https://rust-lang-nursery.github.io/cli-wg/index.html) is a small book that serves as a great intro to CLI apps in rust.
  - [Publishing CLI apps](https://rust-lang-nursery.github.io/cli-wg/tutorial/packaging.html).
- [Rust Koans](https://users.rust-lang.org/t/rust-koans/2408) offers a humorous explanation at some of the language paradigms.
- [Rust Cheatsheet](https://cheats.rs).
- [Rust by example](https://doc.rust-lang.org/stable/rust-by-example/)
  - [Formatting strings, including coloring strings](https://doc.rust-lang.org/rust-by-example/hello/print/fmt.html)
  - [Reading lines from a file](https://doc.rust-lang.org/stable/rust-by-example/std_misc/file/read_lines.html)
