const plugin = require('tailwindcss/plugin')
const helpers = require('../lib/helpers.cjs')

module.exports = plugin(({ addUtilities }) => {
	addUtilities({
		'.inset-center': {
			'top': '50%',
			'right': '50%',
			'--tw-translate-x': '50%',
			'--tw-translate-y': '-50%',
			'transform': helpers.cssTransformValue,
		},
		'.inset-x-center': {
			'right': '50%',
			'--tw-translate-x': '50%',
			'transform': helpers.cssTransformValue,
		},
		'.inset-y-center': {
			'top': '50%',
			'--tw-translate-y': '-50%',
			'transform': helpers.cssTransformValue,
		},
	})
})
