const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addComponents }) => {
	addComponents({
		'.linked-img': {
			'> img': { 'transition': '150ms' },
			'&:hover > img': { 'opacity': '.9' },
		},
	})
})
