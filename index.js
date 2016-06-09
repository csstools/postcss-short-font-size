var postcss = require('postcss');

var importantMatch = /\s*!important$/;

module.exports = postcss.plugin('postcss-short-font-size', function (opts) {
	var prefix = opts && opts.prefix ? '-' + opts.prefix + '-' : '';

	return function (css) {
		css.walkDecls(prefix + 'font-size', function (decl) {
			if (prefix) {
				decl.prop = 'font-size';
			}

			var declValues = postcss.list.split(decl.value, '/');

			if (declValues.length > 1) {
				var fontSize = declValues[0];

				var lineHeight = declValues[1];

				decl.cloneAfter({
					prop: 'line-height',
					value: lineHeight
				});

				decl.important = importantMatch.test(fontSize);

				if (decl.important) {
					fontSize = fontSize.replace(importantMatch, '');
				}

				decl.value = fontSize;
			}
		});
	};
});
