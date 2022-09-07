# Tailwindcss Addons

`tailwind.config.cjs`
```js
const addons = require('tailwindcss-addons')

module.exports = {
	presets: [ addons.presets ],
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
```
