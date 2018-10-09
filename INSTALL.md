# Installing PostCSS Short Font Size

[PostCSS Short Font Size] runs in all Node environments, with special instructions for:

| [Node](#node) | [PostCSS CLI](#postcss-cli) | [Webpack](#webpack) | [Create React App](#create-react-app) | [Gulp](#gulp) | [Grunt](#grunt) |
| --- | --- | --- | --- | --- | --- |

## Node

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

## PostCSS CLI

Add [PostCSS CLI] to your project:

```bash
npm install postcss-cli --save-dev
```

Use [PostCSS Short Font Size] in your `postcss.config.js` configuration file:

```js
const postcssShortFontSize = require('postcss-short-font-size');

module.exports = {
  plugins: [
    postcssShortFontSize(/* pluginOptions */)
  ]
}
```

## Webpack

Add [PostCSS Loader] to your project:

```bash
npm install postcss-loader --save-dev
```

Use [PostCSS Short Font Size] in your Webpack configuration:

```js
const postcssShortFontSize = require('postcss-short-font-size');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          { loader: 'postcss-loader', options: {
            ident: 'postcss',
            plugins: () => [
              postcssShortFontSize(/* pluginOptions */)
            ]
          } }
        ]
      }
    ]
  }
}
```

## Create React App

Add [React App Rewired] and [React App Rewire PostCSS] to your project:

```bash
npm install react-app-rewired react-app-rewire-postcss --save-dev
```

Use [React App Rewire PostCSS] and [PostCSS Short Font Size] in your
`config-overrides.js` file:

```js
const reactAppRewirePostcss = require('react-app-rewire-postcss');
const postcssShortFontSize = require('postcss-short-font-size');

module.exports = config => reactAppRewirePostcss(config, {
  plugins: () => [
    postcssShortFontSize(/* pluginOptions */)
  ]
});
```

## Gulp

Add [Gulp PostCSS] to your project:

```bash
npm install gulp-postcss --save-dev
```

Use [PostCSS Short Font Size] in your Gulpfile:

```js
const postcss = require('gulp-postcss');
const postcssShortFontSize = require('postcss-short-font-size');

gulp.task('css', () => gulp.src('./src/*.css').pipe(
  postcss([
    postcssShortFontSize(/* pluginOptions */)
  ])
).pipe(
  gulp.dest('.')
));
```

## Grunt

Add [Grunt PostCSS] to your project:

```bash
npm install grunt-postcss --save-dev
```

Use [PostCSS Short Font Size] in your Gruntfile:

```js
const postcssShortFontSize = require('postcss-short-font-size');

grunt.loadNpmTasks('grunt-postcss');

grunt.initConfig({
  postcss: {
    options: {
      use: [
       postcssShortFontSize(/* pluginOptions */)
      ]
    },
    dist: {
      src: '*.css'
    }
  }
});
```

[Gulp PostCSS]: https://github.com/postcss/gulp-postcss
[Grunt PostCSS]: https://github.com/nDmitry/grunt-postcss
[PostCSS]: https://github.com/postcss/postcss
[PostCSS CLI]: https://github.com/postcss/postcss-cli
[PostCSS Loader]: https://github.com/postcss/postcss-loader
[PostCSS Short Font Size]: https://github.com/jonathantneal/postcss-short-font-size
[React App Rewire PostCSS]: https://github.com/csstools/react-app-rewire-postcss
[React App Rewired]: https://github.com/timarney/react-app-rewired
