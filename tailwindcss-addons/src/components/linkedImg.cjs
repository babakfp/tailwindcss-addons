const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addComponents }) => {
	addComponents({
		'.linked-img': {
			'> img': { '@apply duration-150': {} },
			'&:hover > img': { '@apply opacity-90': {} },
		},
	})
})
