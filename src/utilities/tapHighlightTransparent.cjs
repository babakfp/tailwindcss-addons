const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addUtilities }) => {
	addUtilities({
		".tap-highlight-transparent": {
			"-webkit-tap-highlight-color": "transparent",
		},
	})
})
