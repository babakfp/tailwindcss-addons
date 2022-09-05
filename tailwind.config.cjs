const addons = require('./tailwindcss-addons/index.cjs')

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [
		addons.dir,
		addons.drag,
		addons.flip,
		addons.insetCenter,
		addons.minMaxWidthMinMaxHeightMergedWithSpacing,
		addons.overflowUnset,
		addons.shortPlacements,
	],
}

module.exports = config
