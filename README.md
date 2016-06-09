# Short Font Size

<a href="https://github.com/postcss/postcss"><img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS Logo" width="80" height="80" align="right"></a>

[![NPM Version][npm-img]][npm] [![Build Status][ci-img]][ci]

[Short Font Size] is a [PostCSS] plugin that extends `font-size` to allow a `line-height` value like the `font` shorthand property.

```css
/* before */

h1 {
    font-size: 125%/1.5;
}

/* after */

h1 {
    font-size: 125%;
    line-height: 1.5;
}
```

## Usage

Follow these steps to use [Short Font Size].

Add [Short Font Size] to your build tool:

```bash
npm install postcss-short-font-size --save-dev
```

#### Node

```js
require('postcss-short-font-size')({ /* options */ }).process(YOUR_CSS);
```

#### PostCSS

Add [PostCSS] to your build tool:

```bash
npm install postcss --save-dev
```

Load [Short Font Size] as a PostCSS plugin:

```js
postcss([
    require('postcss-short-font-size')({ /* options */ })
]);
```

#### Gulp

Add [Gulp PostCSS] to your build tool:

```bash
npm install gulp-postcss --save-dev
```

Enable [Short Font Size] within your Gulpfile:

```js
var postcss = require('gulp-postcss');

gulp.task('css', function () {
    return gulp.src('./css/src/*.css').pipe(
        postcss([
            require('postcss-short-font-size')({ /* options */ })
        ])
    ).pipe(
        gulp.dest('./css')
    );
});
```

#### Grunt

Add [Grunt PostCSS] to your build tool:

```bash
npm install grunt-postcss --save-dev
```

Enable [Short Font Size] within your Gruntfile:

```js
grunt.loadNpmTasks('grunt-postcss');

grunt.initConfig({
    postcss: {
        options: {
            processors: [
                require('postcss-short-font-size')({ /* options */ })
            ]
        },
        dist: {
            src: 'css/*.css'
        }
    }
});
```

## Options

#### `prefix`

Type: `String`  
Default: `null`

Specifies a prefix to be surrounded by dashes before the declaration (e.g. `-x-font-size`).

[ci]:      https://travis-ci.org/jonathantneal/postcss-short-font-size
[ci-img]:  https://img.shields.io/travis/jonathantneal/postcss-short-font-size.svg
[npm]:     https://www.npmjs.com/package/postcss-short-font-size
[npm-img]: https://img.shields.io/npm/v/postcss-short-font-size.svg

[Gulp PostCSS]: https://github.com/postcss/gulp-postcss
[Grunt PostCSS]: https://github.com/nDmitry/grunt-postcss
[PostCSS]: https://github.com/postcss/postcss

[Short Font Size]: https://github.com/jonathantneal/postcss-short-font-size
