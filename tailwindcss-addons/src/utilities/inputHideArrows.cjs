const plugin = require('tailwindcss/plugin')
const helpers = require('../lib/helpers.cjs')

module.exports = plugin(({ addUtilities }) => {
	addUtilities({
		'.input-hide-arrows': {
			'&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
				// Using `display: none` crashes Chrome on hover
				'-webkit-appearance': 'none',
				//  Apparently some margin are still there even though it's hidden
				'margin': '0',
			},
			'&[type=number]': {
				// Firefox
				'-moz-appearance': 'textfield',
			},
		},
	})
})
