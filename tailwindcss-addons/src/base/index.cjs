const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addBase }) => {
	addBase({
		'html': {
			'scroll-behavior': 'smooth', 
		},
		'body': {
			'height': '100%',
		},
		'b, strong': {
			'font-weight': '600',
		},
	})
})
