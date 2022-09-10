const addons = require('./tailwindcss-addons/index.cjs')

/** @type {import('tailwindcss').Config} */
const config = {
	presets: [ addons.presets ],
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [
		addons.base,
		...Object.values(addons.utilities),
		...Object.values(addons.components),
		...Object.values(addons.variants),
	],
}

module.exports = config
