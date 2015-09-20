var postcss = require('postcss');

module.exports = postcss.plugin('postcss-short-font-size', function (opts) {
	var prefix = opts && opts.prefix ? '-' + opts.prefix + '-' : '';
	var name   = 'font-size';

	return function (css) {
		css.walkDecls(prefix + name, function (decl) {
			if (prefix) decl.prop = name;

			var size = postcss.list.space(decl.value);

			if (size.length) {
				decl.value = size[0];

				decl.cloneAfter({ prop: 'line-height', value: size.slice(1).join(' ') });
			}
		});
	};
});
