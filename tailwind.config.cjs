const addons = require('./tailwindcss-addons/index.cjs')
const addonsPresets = require('./tailwindcss-addons/src/presets/index.cjs')

/** @type {import('tailwindcss').Config} */
const config = {
	presets: [addonsPresets],
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [
		addons.dir,
		addons.drag,
		addons.flip,
		addons.hideShow,
		addons.insetCenter,
		addons.minMaxWidthMinMaxHeightMergedWithSpacing,
		addons.overflowUnset,
		addons.shortPlacements,
	],
}

module.exports = config
