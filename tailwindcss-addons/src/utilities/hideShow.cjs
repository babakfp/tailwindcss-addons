const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addUtilities }) => {
	addUtilities({
		'.hide': {
			'visibility': 'hidden',
			'opacity': '0',
			'pointer-events': 'none',
		},
		'.show': {
			'visibility': 'visible',
			'opacity': '1',
			'pointer-events': 'auto',
		},
	})
})
