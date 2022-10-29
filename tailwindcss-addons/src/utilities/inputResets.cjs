const plugin = require('tailwindcss/plugin')
const helpers = require('../lib/helpers.cjs')

module.exports = plugin(({ addUtilities }) => {
	addUtilities({
		'.reset-number-input': {
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
		'.reset-search-input': {
			'&[type=search]::-webkit-search-decoration, &[type=search]::-webkit-search-cancel-button, &[type=search]::-webkit-search-results-button, &[type=search]::-webkit-search-results-decoration': {
				'-webkit-appearance': 'none',
			},
		},
	})
})
