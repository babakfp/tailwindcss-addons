const addons = require('./tailwindcss-addons/index.cjs')

const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [
		addons.dir,
		addons.drag,
		addons.insetCenter,
		addons.overflowUnset,
	],
}

module.exports = config
