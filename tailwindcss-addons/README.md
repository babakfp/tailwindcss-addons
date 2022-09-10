# Tailwindcss Addons

## Presets

- [See what it includes](./src/presets/index.cjs)
- [Learn about Presets](https://tailwindcss.com/docs/presets)

```js
// tailwind.config.cjs
const addons = require('tailwindcss-addons')

module.exports = {
	presets: [
		addons.presets,
	],
}
```

## Base Styles

- [See what it includes](./src/base/index.cjs)

```js
// tailwind.config.cjs
const addons = require('tailwindcss-addons')

module.exports = {
  plugins: [
		addons.base,
	]
}
```

## Utilities

- `dir` [See what it includes](./src/utilities/dir.cjs)
- `drag` [See what it includes](./src/utilities/drag.cjs)
- `flip` [See what it includes](./src/utilities/flip.cjs)
- `hideShow` [See what it includes](./src/utilities/hideShow.cjs)
- `inputResets` [See what it includes](./src/utilities/inputResets.cjs)
- `insetCenter` [See what it includes](./src/utilities/insetCenter.cjs)
- `overflowUnset` [See what it includes](./src/utilities/overflowUnset.cjs)
- `shortPlacements` [See what it includes](./src/utilities/shortPlacements.cjs)

```js
// tailwind.config.cjs
const addons = require('tailwindcss-addons')

module.exports = {
  plugins: [
		// include all
		...Object.values(addons.utilities),

		// or include one by one
		addons.utilities.dir,
		addons.utilities.drag,
		addons.utilities.flip,
		addons.utilities.hideShow,
		addons.utilities.inputResets,
		addons.utilities.insetCenter,
		addons.utilities.overflowUnset,
		addons.utilities.shortPlacements,
	],
}
```

## Components

- `animateClick` [See what it includes](./src/components/animateClick.cjs)
- `linkImg` [See what it includes](./src/components/linkImg.cjs)

```js
// tailwind.config.cjs
const addons = require('tailwindcss-addons')

module.exports = {
  plugins: [
		// include all
		...Object.values(addons.components),

		// or include one by one
		addons.components.animateClick,
		addons.components.linkImg,
	],
}
```

## Variants

- `notVariants` [See what it includes](./src/variants/notVariants.cjs)

```js
// tailwind.config.cjs
const addons = require('tailwindcss-addons')

module.exports = {
  plugins: [
		// include all
		...Object.values(addons.variants),

		// or include one by one
		addons.variants.notVariants,
	],
}
```
