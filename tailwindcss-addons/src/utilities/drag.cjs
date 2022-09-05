const plugin = require('tailwindcss/plugin')
const helpers = require('../lib/helpers.cjs')

module.exports = plugin(({ addUtilities }) => {
	const classes = helpers.create_classes('drag', 'user-drag', [ 'none', 'element', 'auto' ], true)
	addUtilities(classes)
})
