const plugin = require('tailwindcss/plugin')
const helpers = require('../lib/helpers.cjs')

module.exports = plugin(({ addUtilities }) => {
	addUtilities({
		'.inset-center': {
			'inset': 'auto',
			'top': '50%',
			'right': '50%',
			'--tw-translate-x': '50%',
			'--tw-translate-y': '-50%',
			'transform': helpers.cssTransformValue,
		},
		'.inset-x-center': {
			'inset': 'auto',
			'right': '50%',
			'--tw-translate-x': '50%',
			'transform': helpers.cssTransformValue,
		},
		'.inset-y-center': {
			'inset': 'auto',
			'right': '50%',
			'--tw-translate-y': '-50%',
			'transform': helpers.cssTransformValue,
		},
	})
})
