const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addBase }) => {
	addBase({
		'html': {
			'scroll-behavior': 'smooth',
		},
		'body': {
			'min-height': '100vh',
		},
	})
})
