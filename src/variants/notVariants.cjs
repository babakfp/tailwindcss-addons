const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addVariant }) => {
	addVariant('not-first', '&:not(:first-child)')
	addVariant('not-last', '&:not(:last-child)')
	addVariant('not-first-of-type', '&:not(:first-of-type)')
	addVariant('not-last-of-type', '&:not(:last-of-type)')
})
