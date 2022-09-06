const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addUtilities }) => {
	addUtilities({
		'.overflow-unset': {
			'overflow': 'unset',
		},
		'.overflow-y-unset': {
			'overflow-y': 'unset',
		},
		'.overflow-x-unset': {
			'overflow-x': 'unset',
		},
	})
})
