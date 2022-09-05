const plugin = require('tailwindcss/plugin')

module.exports = {
  plugins: [
    plugin(function({ addComponents }) {
      addComponents({
        '.link-img': {
					'&:hover': {
						opacity: '0.9',
						'--tw-brightness': 'brightness(1.05)',
						filter: 'var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)',
          },
				},
      })
    })
  ]
}
