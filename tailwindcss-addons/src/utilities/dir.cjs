const plugin = require('tailwindcss/plugin')
const helpers = require('../lib/helpers.cjs')

module.exports = plugin(({ addUtilities }) => {
	addUtilities({
		'.dir-rtl': {
			'direction': 'rtl',
		},
		'.dir-ltr': {
			'direction': 'ltr',
		},
	})
})
