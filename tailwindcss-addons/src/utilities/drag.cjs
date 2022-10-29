const plugin = require('tailwindcss/plugin')
const helpers = require('../lib/helpers.cjs')

module.exports = plugin(({ addUtilities }) => {
	addUtilities({
		'.drag-none': {
			'user-drag': 'none',
		},
		'.drag-element': {
			'user-drag': 'element',
		},
		'.drag-auto': {
			'user-drag': 'auto',
		},
	})
})
