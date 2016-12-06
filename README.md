# Font Size Shorthand <a href="https://github.com/postcss/postcss"><img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS Logo" width="90" height="90" align="right"></a>

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Licensing][lic-image]][lic-url]
[![Changelog][log-image]][log-url]
[![Gitter Chat][git-image]][git-url]

[Font Size Shorthand] lets you define `line-height` within the `font-size` property in CSS.

```css
/* before */

.example-1 {
    font-size: 125%/1.5;
}

/* after */

.example-1 {
    font-size: 125%;
    line-height: 1.5;
}
```

## Options

#### `prefix`

Type: `String`  
Default: `""`

Adds an optional prefix to the `font-size` property (e.g. `"x"` for `-x-font-size`). Wrapping dashes (`-`) are automatically applied.

#### `skip`

Type: `String`  
Default: `"*"`

Specifies the skip token used to ignore a length.

## Usage

Add [Font Size Shorthand] to your build tool:

```bash
npm install postcss-short-font-size --save-dev
```

#### Node

```js
require('postcss-short-font-size').process(YOUR_CSS, { /* options */ });
```

#### PostCSS

Add [PostCSS] to your build tool:

```bash
npm install postcss --save-dev
```

Load [Font Size Shorthand] as a PostCSS plugin:

```js
postcss([
	require('postcss-short-font-size')({ /* options */ })
]).process(YOUR_CSS, /* options */);
```

#### Gulp

Add [Gulp PostCSS] to your build tool:

```bash
npm install gulp-postcss --save-dev
```

Enable [Font Size Shorthand] within your Gulpfile:

```js
var postcss = require('gulp-postcss');

gulp.task('css', function () {
	return gulp.src('./src/*.css').pipe(
		postcss([
			require('postcss-short-font-size')({ /* options */ })
		])
	).pipe(
		gulp.dest('.')
	);
});
```

#### Grunt

Add [Grunt PostCSS] to your build tool:

```bash
npm install grunt-postcss --save-dev
```

Enable [Font Size Shorthand] within your Gruntfile:

```js
grunt.loadNpmTasks('grunt-postcss');

grunt.initConfig({
	postcss: {
		options: {
			use: [
				require('postcss-short-font-size')({ /* options */ })
			]
		},
		dist: {
			src: '*.css'
		}
	}
});
```

[npm-url]: https://www.npmjs.com/package/postcss-short-font-size
[npm-img]: https://img.shields.io/npm/v/postcss-short-font-size.svg
[cli-url]: https://travis-ci.org/jonathantneal/postcss-short-font-size
[cli-img]: https://img.shields.io/travis/jonathantneal/postcss-short-font-size.svg
[lic-url]: LICENSE.md
[lic-image]: https://img.shields.io/npm/l/postcss-short-font-size.svg
[log-url]: CHANGELOG.md
[log-image]: https://img.shields.io/badge/changelog-md-blue.svg
[git-url]: https://gitter.im/postcss/postcss
[git-image]: https://img.shields.io/badge/chat-gitter-blue.svg

[Font Size Shorthand]: https://github.com/jonathantneal/postcss-short-font-size
[PostCSS]: https://github.com/postcss/postcss
[Gulp PostCSS]: https://github.com/postcss/gulp-postcss
[Grunt PostCSS]: https://github.com/nDmitry/grunt-postcss
