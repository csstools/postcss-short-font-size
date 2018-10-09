import postcss from 'postcss';

// !important keyword pattern
const importantMatch = /\s*!important$/;

export default postcss.plugin('postcss-short-font-size', opts => {
	const prefix = 'prefix' in Object(opts) ? `-${opts.prefix}-` : '';
	const skip = 'skip' in Object(opts) ? String(opts.skip) : '*';

	const fontSizePropertyRegExp = new RegExp(`^${prefix}(font-size)$`);

	return root => {
		// for each font-size declaration
		root.walkDecls(fontSizePropertyRegExp, decl => {
			// conditionally unprefix the font-size property
			decl.prop = decl.prop.replace(fontSizePropertyRegExp, '$1');

			// slash-separated values (font-size, line-height)
			const [fontSize, lineHeight] = postcss.list.split(decl.value, '/');

			// whether the font-size is !important
			decl.important = importantMatch.test(fontSize);

			if (lineHeight) {
				// conditionally prepend the line-height declaration
				if (lineHeight !== skip) {
					decl.cloneBefore({ prop: 'line-height', value: lineHeight });
				}

				// conditionally remove the color declaration
				if (fontSize !== skip) {
					decl.value = fontSize.replace(importantMatch, '');
				} else {
					decl.remove();
				}
			}
		});
	};
});
