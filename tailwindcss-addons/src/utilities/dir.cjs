const plugin = require('tailwindcss/plugin')
const helpers = require('../lib/helpers.cjs')

module.exports = plugin(({ addUtilities }) => {
	addUtilities(
		helpers.createClass('dir', 'direction', [ 'rtl', 'ltr' ])
	)
})
