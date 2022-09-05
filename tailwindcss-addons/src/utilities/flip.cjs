const plugin = require('tailwindcss/plugin')
const helpers = require('../lib/helpers.cjs')

module.exports = plugin(({ addUtilities }) => {
	addUtilities({
		'.flip': {
			'--tw-scale-x': '-1',
			'--tw-scale-y': '-1',
			'transform': helpers.cssTransformValue,
		},
		'.flip-x': {
			'--tw-scale-x': '-1',
			'transform': helpers.cssTransformValue,
		},
		'.flip-y': {
			'--tw-scale-y': '-1',
			'transform': helpers.cssTransformValue,
		},
	})
})
