# HTML

## `table`

Used to represent tabular data, the [`<table>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table) element can display a 2 dimensional table of data.

Permitted elements are, in order:

- `<caption>` (0 or 1)
- `<colgroup>` (0 or more)
- `<thead>` (0 or 1)
- Either of:
  - `<tbody>` (0 or more)
  - `<tr>` (1 or more)
- `<tfoot>` (0 or 1)

### `caption`

The [`<caption>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption) is used to provide a title or caption for a table. It should always be the first child of a `<table>`. Styling and physical position can be adjusted using the CSS [`caption-side`](https://developer.mozilla.org/en-US/docs/Web/CSS/caption-side) and [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align) properties.

### `colgroup`

The [`<colgroup>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup) element allows you to define columns inside of a table. You can then place [`<col>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col) elements inside to define those specific column groups. It should appear after `<caption>`, but before other child elements of the `<table>`.
