const plugin = require('tailwindcss/plugin')
const helpers = require('../lib/helpers.cjs')

module.exports = plugin(({ addUtilities }) => {
	addUtilities(
		helpers.createClass('drag', 'user-drag', [ 'none', 'element', 'auto' ], true)
	)
})
