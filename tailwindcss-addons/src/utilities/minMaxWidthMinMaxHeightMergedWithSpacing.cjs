const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ matchUtilities, theme }) => {
	matchUtilities(
		{
			'min-w': (value) => ({ 'min-width': value }),
			'max-w': (value) => ({ 'max-width': value }),
			'min-h': (value) => ({ 'min-height': value }),
			'max-h': (value) => ({ 'max-height': value }),
		},
		{ values: theme('spacing') }
	)
})
