const deepMerge = require('./src/lib/deepMerge.cjs')

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

const tailwindcssAddons = (userConfig={}) => {
	const config = deepMerge(defaultConfig, userConfig)

	return {
		presets: [
			config.presets && require('./src/presets/index.cjs'),
		],
		plugins: [
			config.base && require('./src/base/index.cjs'),

			config.utilities.dir && require('./src/utilities/dir.cjs'),
			config.utilities.drag && require('./src/utilities/drag.cjs'),
			config.utilities.flip && require('./src/utilities/flip.cjs'),
			config.utilities.hideShow && require('./src/utilities/hideShow.cjs'),
			config.utilities.inputResets && require('./src/utilities/inputResets.cjs'),
			config.utilities.insetCenter && require('./src/utilities/insetCenter.cjs'),
			config.utilities.overflowUnset && require('./src/utilities/overflowUnset.cjs'),
			config.utilities.shortPlacements && require('./src/utilities/shortPlacements.cjs'),

			config.variants.notVariants && require('./src/variants/notVariants.cjs'),
		],
		corePlugins: {
			placeContent: config.utilities.shortPlacements ? false : undefined,
			placeItems: config.utilities.shortPlacements ? false : undefined,
			alignContent: config.utilities.shortPlacements ? false : undefined,
			alignItems: config.utilities.shortPlacements ? false : undefined,
			justifyContent: config.utilities.shortPlacements ? false : undefined,
			justifyItems: config.utilities.shortPlacements ? false : undefined,
		},
	}
}

module.exports = tailwindcssAddons
