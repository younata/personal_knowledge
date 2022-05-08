# Tooling

Some tools I wrote to help make my usage of this repo easier.

## Backends

### mdbook-api

[mdbook-api](https://github.com/younata/mdbook-api) is an mdbook backend I wrote to directly publish the markdown files (after post-processing), for use as consuming an api. While it's still used, I have yet to get around to writing any usable client tooling for this.

## Post-Processors

### mdbook-chapter-path

[mdbook-chapter-path](https://github.com/younata/mdbook-chapter-path) is an mdbook postprocessor I wrote to better facilitate linking within this repository. This avoids the issue of breaking links whenever I reorganize the pages here. For example, when linking to the astronomy page, instead of writing `[Astronomy]({{#path_for astronomy}})`, I can write `[Astronomy]({ {#path_for astronomy} })` (note: spaces between the two `{` is deliberate to illustrate what the raw text is). This way, the mdbook-chapter-path will search for and insert the `{{#path_for astronomy}}` text as the target for me. This even supports linking to anchor tags in the target document as well.

### mdbook-git-atom

[mdbook-git-atom](https://github.com/younata/mdbook-git-atom) is an mdbook postprocessor to automatically generate an atom feed from an mdbook repository, using the git log to note when posts were updated. I wrote this initially for the [Coz-E](https://coz-e.rachelbrindle.com/) build, which, due to the linear nature of the build, follows a more chronological style, but it's still used here.

### mdbook-section-validator

In an effort to avoid accidentally writing information that can become false in the future, I wrote [mdbook-section-validator](https://github.com/younata/mdbook-section-validator). This postprocessor examines a list of links and adds a warning message if all of those links are invalid (i.e. github tickets are all closed). This is currently only used in a couple places.

Because this is written as an mdbook postprocessor, it does mean that this check is only written when the repository is re-built.

## Other Tooling

### mdbook-generate-summary

[mdbook-generate-summary](https://github.com/younata/mdbook-generate-summary) is a tool I wrote to automatically generate a top-level `SUMMARY.md` from a directory structure. It's not a plug-in for mdbook, as it's supposed to be invoked prior to `mdbook` being invoked (because mdbook will throw an error if a `SUMMARY.md` file is not in the appropriate place).

!!!https://github.com/younata/mdbook-generate-summary/issues/1

It has some rough edges. For example, if you don't give each directory a README.md file (with the name of the section), then the generated `SUMMARY.md` file will not be correctly organized. But, it works well enough for my use case, so long as I keep that limitation in mind.
!!!

### Last-updated Annotations

This is simply a script that runs in CI which appends the date of the commit that last updated the file, which has the following contents:

```bash
{{#include ../../scripts/annotate_dates.sh}}
```

### Spellcheck

I use the [markdown-spellcheck](https://www.npmjs.com/package/markdown-spellcheck?activeTab=readme) package to spellcheck all the markdown files.

### HTML-Proofer

In CI, I use the [html-proofer](https://github.com/gjtorikian/html-proofer) gem to validate the generated html of this project. The command looks like:

```bash
DOMAIN="https://knowledge.rachelbrindle.com"
FILE_IGNORES="./print.html,./404.html" # Ignore the 404 page and especially the print page. Print page is simply a all pages consolidated, and it's better to catch broken links as close to the original file as possible
URL_IGNORES: "/github.com\\/younata\\/personal_knowledge/" # Don't error if a link to a not-yet-there file is published.

/usr/local/bundle/bin/htmlproofer \
    --assume-extension \
    --check-img-http \
    --enforce-https \
    --only_4xx \
    --http-status-ignore "401,402,403,415" \
    --file-ignore "$FILE_IGNORES" \
    --url-ignore "$URL_IGNORES" \
    --internal-domains "$DOMAIN" "./book/html"
```

Which is why, if you view source, all of the links to `http` sites have the `data-proofer-ignore` attribute in their anchor tag.
