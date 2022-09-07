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
		addons.utilities.dir,
		addons.utilities.drag,
		addons.utilities.flip,
		addons.utilities.hideShow,
		addons.utilities.insetCenter,
		addons.utilities.overflowUnset,
		addons.utilities.shortPlacements,
		addons.components.animateClick,
		addons.components.linkImg,
	],
}

module.exports = config
