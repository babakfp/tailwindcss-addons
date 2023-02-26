const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ matchUtilities, theme }) => {
	matchUtilities(
		{
			'tap-highlight': value => ({
				'-webkit-tap-highlight-color': value,
			}),
		},
		{
			values: flattenColorPalette({
				transparent: 'transparent',
				black: '#000',
				white: '#fff',
			}),
			type: 'color',
		}
	)
})
