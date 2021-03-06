# react-tabletrim

[![NPM](https://img.shields.io/npm/v/react-tabletrim.svg)](https://www.npmjs.com/package/react-tabletrim) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![ponysmith](https://circleci.com/gh/ponysmith/react-tabletrim.svg?style=shield)](<https://app.circleci.com/github/ponysmith/react-tabletrim/pipelines>)



**TableTrim** makes data tables more responsive by allowing you to "trim" the table at smaller widths. When the table is trimmed, the table is reduced to two columns. The **sticky** column is always shown and is always printed as the first column. The second column is the **active** column. The active column can be changed via several optional built-in control elements or by manually setting/updating the `activeCol` prop on the `TableTrim` component.

Visit [http://tabletrim.ponysmith.com](http://tabletrim.ponysmith.com) for more documentation and examples.

## Install

```bash
npm install --save react-tabletrim
```

## Usage
The only required prop to use **TableTrim** is the `data` prop. See below in the docs for the required shape of the `data` object. Additional optional props can be set as well. The additional options are referenced below in the docs as well.

### Basic Usage
```jsx
import React from 'react'
import TableTrim from 'react-tabletrim'

const data = {
  // Properly formatted data object. See docs.
}

const App = () => {
  return (
    <React.Fragment>
      <TableTrim data={data} />
    </React.Fragment>
  )
}
```

### Data object format
The required `data` prop should be an object with the following format:

```javascript
const data = {
  header: {
    cells: [
      { content: "Col 1" },
      { content: "Col 2" },
      { content: "Col 3" },
      { content: "Col 4" }
    ]
  },
  body: {
    rows: [
      { 
        cells: [
          { content: "Col 1" },
          { content: "Col 2" },
          { content: "Col 3" },
          { content: "Col 4" }
        ]
      },
      // Additional rows
    ]
  }
}
```

For **TableTrim** to function properly, both the `header` and `body` objects must be present and properly formatted. In addition, the number of columns in the `header` object should match the number of columns in all rows of the `body` object. In other words, there is no way for **TableTrim** to support HTML constructs like `colspan` and `rowspan`.


### Optional `props`
In addition to the required `data` prop, **TableTrim** supports a handful of optional props to customize the behavior of the component. The optional props are detailed below:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isTrimmed` | `bool` | `false` | Sets whether the table is currently trimmed |
| `stickyCol` | `int` | `0` | Set the column index which should always be visible when the table is trimmed. |
| `activeCol` | `int` | `1` | Sets the default active column, or changes the currently active column. |
| `autoTrimEnabled` | `bool` | `true` | If `true` the width of the table will be checked (including on resize). If the table width is less than or equal to `autoTrimWidth`, the table will be trimmed. If the width is greater, the table will be untrimmed |
| `autoTrimWidth` | `int` | `640` | Width for auto-trimming. References the width of the table, not the window |
| `showActiveTitle` | `bool` | `false` | Should the title of the active header be rendered? |
| `showSelectControl` | `bool` | `true` | Should the `select` control be rendered in the active column? |
| `showPrevControl` | `bool` | `false` | Should the **Previous** button control be rendered in the active column? |
| `showNextControl` | `bool` | `false` | Should the **Next** button control be rendered in the active column? |
| `customPrevControl` | `React Component` | `null` | Custom React component for the **Previous** control element |
| `customNextControl` | `React Component` | `null` | Custom React component for the **Next** control element |
| `activeColCallback` | `function` | `null` | Callback function to fire any time the internal `activeCol` state is updated. Takes a single argument (`activeCol` index) |
| `isTrimmedCallback` | `function` | `null` | Callback function to fire any time the internal `isTrimmed` state is updated. Takes a single argument (new `isTrimmed` value) |


## Styling
**TableTrim** does not include any styling. It does, however, set multiple classes on the various elements that you can tie your own custom CSS to if you wish.

| Classes       | Applies to |
|---------------|------------------|
| `.tt-table`   | The `table` element |
| `.tt-head`    | The `thead` element |
| `.tt-body`    | The `tbody` element |
| `.tt-tr`      | All `tr` elements (regardless of whether the parent is `thead` or `tbody` |
| `.tt-th`      | All cells in the `thead`. All cells in the `tbody` that are in the sticky column |
| `.tt-td`      | All cells in the `tbody` that are **not** in the sticky column |
| `.tt-sticky`  | All cells (`td` and `th`) that are in the sticky column |
| `.tt-active`  | All cells (`td` and `th`) that are in the active column |
| `.tt-title`   | The title in all header cells |
| `.tt-select`  | The select control in the active column header |
| `.tt-prev`    | The previous column button control |
| `.tt-next`    | The next column button control |
