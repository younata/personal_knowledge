# Ruby

Really nice, convenient, and powerful programming language.

## Sinatra

Lightweight DSL for creating simple webapps.

- <a href="http://shiroyasha.io/sinatra-app-with-rspec.html" data-proofer-ignore>Setting up with rspec</a>.

### Static files

Sinatra serves up static files from the `./public` directory. This can be changed with: `set :public_filder, File.dirname(__FILE__) + '/static'`.

Note that the `public` name is not included in the URL - e.g. the file at `./public/foo/bar` would be at `http://server/foo/bar`.

### Rendering stuff

When inside of a URL pattern, you can render an [erb](https://ruby-doc.org/stdlib/libdoc/erb/rdoc/ERB.html) with:

```ruby
get '/' do
    erb :index # Renders and returns the .erb file at views/index.erb
end
```

## rspec

[rspec](https://rspec.info) is the original BDD testing framework.

- [rspec mocks, `allow`, `to_receive`](https://relishapp.com/rspec/rspec-mocks/v/2-14/docs/method-stubs)
- [Verifying doubles, instance doubles](https://relishapp.com/rspec/rspec-mocks/docs/verifying-doubles/using-an-instance-double)
