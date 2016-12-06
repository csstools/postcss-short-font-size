// tooling
const postcss = require('postcss');

// !important keyword pattern
const importantMatch = /\s*!important$/;

// plugin
module.exports = postcss.plugin('postcss-short-font-size', ({
	prefix = '',
	skip   = '*'
}) => {
	// dashed prefix
	const dashedPrefix = prefix ? '-' + prefix + '-' : '';

	// property pattern
	const propertyMatch = new RegExp(`^${ dashedPrefix }(font-size)$`);

	return (css) => {
		// walk each matching declaration
		css.walkDecls(propertyMatch, (decl) => {
			// unprefixed property
			const property = decl.prop.match(propertyMatch)[1];

			// if a prefix is in use
			if (prefix) {
				// remove it from the property
				decl.prop = property;
			}

			// space-separated values (font-size, line-height)
			const values = postcss.list.split(decl.value, '/');

			// if there are multiple values
			if (values.length > 1) {
				// if the line-height value is not a skip token
				if (values[1] !== skip) {
					// create a new declaration for the line-height
					decl.cloneAfter({
						prop: 'line-height',
						value: values.slice(1).join(' ')
					});
				}

				// whether the font-size is !important
				decl.important = importantMatch.test(values[0]);

				// font-size value sans !important
				const fontSize = decl.important ? values[0].replace(importantMatch, '') : values[0];

				// if the font-size value is a skip token
				if (fontSize === skip) {
					// remove the original font-size declaration
					decl.remove();
				} else {
					// otherwise, update the font-size value
					decl.value = fontSize;
				}
			}
		});
	};
});
