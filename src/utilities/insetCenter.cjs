const plugin = require('tailwindcss/plugin')
const cssTransformValue = require('../lib/cssTransformValue.cjs')

module.exports = plugin(({ addUtilities }) => {
	addUtilities({
		'.inset-center': {
			'top': '50%',
			'right': '50%',
			'--tw-translate-x': '50%',
			'--tw-translate-y': '-50%',
			'transform': cssTransformValue,
		},
		'.inset-x-center': {
			'right': '50%',
			'--tw-translate-x': '50%',
			'transform': cssTransformValue,
		},
		'.inset-y-center': {
			'top': '50%',
			'--tw-translate-y': '-50%',
			'transform': cssTransformValue,
		},
	})
})
