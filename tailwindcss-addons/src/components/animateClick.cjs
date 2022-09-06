const plugin = require('tailwindcss/plugin')
const helpers = require('../lib/helpers.cjs')

module.exports = plugin(({ addUtilities }) => {
	addUtilities({
		'.animate-click': {
			'transition-property': 'all',
			'transition-timing-function': 'cubic-bezier(0.4, 0, 0.2, 1)',
			'transition-duration': '150ms',
			'transform': helpers.cssTransformValue,
			'&:active': {
				'--tw-scale-x': '.9',
				'--tw-scale-y': '.9',
			},
		},
	})
})
