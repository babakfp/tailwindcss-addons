const tailwindcssAddons = require('./tailwindcss-addons/index.cjs')

/** @type {import('tailwindcss').Config} */
const config = {
	presets: [
		tailwindcssAddons(),
	],
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
}

module.exports = config
