const plugin = require('tailwindcss/plugin')

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
		'.reset-search-input[type=search]::-webkit-search': {
			'&-decoration, &-cancel-button, &-results-button, &-results-decoration': {
				'-webkit-appearance': 'none',
			},
		},
	})
})
