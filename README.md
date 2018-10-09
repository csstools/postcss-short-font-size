# PostCSS Short Font Size [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS" width="90" height="90" align="right">][postcss]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Support Chat][git-img]][git-url]

[PostCSS Short Font Size] lets you define `line-height` within the `font-size`
property in CSS.

```pcss
body {
  font-size: 125%/1.5;
}

/* becomes */

body {
  line-height: 1.5;
  font-size: 125%;
}
```

## Usage

Add [PostCSS Short Font Size] to your project:

```bash
npm install postcss-short-font-size --save-dev
```

Use [PostCSS Short Font Size] to process your CSS:

```js
const postcssShortFontSize = require('postcss-short-font-size');

postcssShortFontSize.process(YOUR_CSS /*, processOptions, pluginOptions */);
```

Or use it as a [PostCSS] plugin:

```js
const postcss = require('postcss');
const postcssShortFontSize = require('postcss-short-font-size');

postcss([
  postcssShortFontSize(/* pluginOptions */)
]).process(YOUR_CSS /*, processOptions */);
```

[PostCSS Short Font Size] runs in all Node environments, with special
instructions for:

| [Node](INSTALL.md#node) | [PostCSS CLI](INSTALL.md#postcss-cli) | [Webpack](INSTALL.md#webpack) | [Create React App](INSTALL.md#create-react-app) | [Gulp](INSTALL.md#gulp) | [Grunt](INSTALL.md#grunt) |
| --- | --- | --- | --- | --- | --- |

## Options

#### prefix

The `prefix` option defines a prefix required by properties being transformed.
Wrapping dashes are automatically applied, so that `x` would transform
`-x-font-size`.

```js
postcssShortFontSize({ prefix: 'x' });
```

```pcss
body {
  -x-font-size: 125%/1.5;
}

/* becomes */

body {
  line-height: 1.5;
  font-size: 125%;
}
```

#### skip

The `skip` option defines the skip token used to ignore portions of the
shorthand.

```js
postcssShortFontSize({ skip: '-' });
```

```pcss
body {
  color: -/125%;
}

/* becomes */

body {
  font-size: 125%;
}
```

Note: If the skip token is made to be a space then certain values with
`!important` may not work properly, such as `font-size: 200% !important 1.5`.

[cli-img]: https://img.shields.io/travis/jonathantneal/postcss-short-font-size.svg
[cli-url]: https://travis-ci.org/jonathantneal/postcss-short-font-size
[git-img]: https://img.shields.io/badge/support-chat-blue.svg
[git-url]: https://gitter.im/postcss/postcss
[npm-img]: https://img.shields.io/npm/v/postcss-short-font-size.svg
[npm-url]: https://www.npmjs.com/package/postcss-short-font-size

[PostCSS]: https://github.com/postcss/postcss
[PostCSS Short Font Size]: https://github.com/jonathantneal/postcss-short-font-size
