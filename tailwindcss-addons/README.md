# Tailwindcss Addons

## How to use it

```js
const tailwindcssAddons = require('tailwindcss-addons')
const config = {
	presets: [
		tailwindcssAddons(),
	],
}
```

Using with options:

```js
tailwindcssAddons({
	...
})
```

## Default config

To include, use `true`, to exclude, use `false`.

```js
const defaultConfig = {
	base: true,
	presets: true,
	utilities: {
		dir: true,
		drag: true,
		flip: true,
		hideShow: true,
		inputResets: true,
		insetCenter: true,
		overflowUnset: true,
		shortPlacements: false,
	},
	variants: {
		notVariants: true,
	},
}
```

## Presets

- [See what it includes](./src/presets/index.cjs)
- [Learn about Presets](https://tailwindcss.com/docs/presets)

## Base Styles

- [See what it includes](./src/base/index.cjs)

## Utilities

- `dir` [See what it includes](./src/utilities/dir.cjs)
- `drag` [See what it includes](./src/utilities/drag.cjs)
- `flip` [See what it includes](./src/utilities/flip.cjs)
- `hideShow` [See what it includes](./src/utilities/hideShow.cjs)
- `inputResets` [See what it includes](./src/utilities/inputResets.cjs)
- `insetCenter` [See what it includes](./src/utilities/insetCenter.cjs)
- `overflowUnset` [See what it includes](./src/utilities/overflowUnset.cjs)
- `shortPlacements` [See what it includes](./src/utilities/shortPlacements.cjs)

## Variants

- `notVariants` [See what it includes](./src/variants/notVariants.cjs)
