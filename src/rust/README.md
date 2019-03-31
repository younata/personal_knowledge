# Rust

Rust is a language that I've been in love with for ages.

It's also one of the most frustrating languages I've ever used. This is because I've never written enough rust to actually be good at it.

It also has the best documentation of any language.

## Serializing json in rust.

Follow [this guide using serde](https://serde.rs/derive.html).

Essentially:

Add to `Cargo.toml`'s `[Dependencies]` section:

```toml
serde = { version = "1.0", features = ["derive"] }
serde_json = "1.0"
```

Make your struct derive `Serialize`, and pass it to `serde_json::to_string()`

```rust
#[derive(Serialize)]
struct Thing {
    x: i32
}

fn main() {
    let thing = Thing { a: 1 }
    println!("{}", serde_json::to_string(&thing).unwrap());
}
```

## Links

- [Too Many Lists](https://rust-unofficial.github.io/too-many-lists/index.html) - a learn rust thing that's really well written and actually fun.
- [structopt](https://docs.rs/structopt/0.2.15/structopt/) is a way to do typed command line arguments.
- [Rust cookbook](https://rust-lang-nursery.github.io/rust-cookbook/about.html).
- [Command Line Apps in Rust](https://rust-lang-nursery.github.io/cli-wg/index.html) is a small book that serves as a great intro to CLI apps in rust.
  - [Publishing CLI apps](https://rust-lang-nursery.github.io/cli-wg/tutorial/packaging.html).
