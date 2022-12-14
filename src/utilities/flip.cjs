const plugin = require('tailwindcss/plugin')
const cssTransformValue = require('../lib/cssTransformValue.cjs')

module.exports = plugin(({ addUtilities }) => {
	addUtilities({
		'.flip': {
			'--tw-scale-x': '-1',
			'--tw-scale-y': '-1',
			'transform': cssTransformValue,
		},
		'.flip-x': {
			'--tw-scale-x': '-1',
			'transform': cssTransformValue,
		},
		'.flip-y': {
			'--tw-scale-y': '-1',
			'transform': cssTransformValue,
		},
	})
})
