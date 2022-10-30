const helpers = require('./src/lib/helpers.cjs')

const base = require('./src/base/index.cjs')
const presets = require('./src/presets/index.cjs')
const utilities = {
	dir: require('./src/utilities/dir.cjs'),
	drag: require('./src/utilities/drag.cjs'),
	flip: require('./src/utilities/flip.cjs'),
	hideShow: require('./src/utilities/hideShow.cjs'),
	inputResets: require('./src/utilities/inputResets.cjs'),
	insetCenter: require('./src/utilities/insetCenter.cjs'),
	overflowUnset: require('./src/utilities/overflowUnset.cjs'),
	shortPlacements: require('./src/utilities/shortPlacements.cjs'),
}
const variants = {
	notVariants: require('./src/variants/notVariants.cjs'),
}

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
	const config = helpers.deepMerge(defaultConfig, userConfig)

	return {
		presets: [
			config.presets && presets,
		],
		plugins: [
			config.base && base,

			config.utilities.dir && utilities.dir,
			config.utilities.drag && utilities.drag,
			config.utilities.flip && utilities.flip,
			config.utilities.hideShow && utilities.hideShow,
			config.utilities.inputResets && utilities.inputResets,
			config.utilities.insetCenter && utilities.insetCenter,
			config.utilities.overflowUnset && utilities.overflowUnset,
			config.utilities.shortPlacements && utilities.shortPlacements,

			config.variants.notVariants && variants.notVariants,
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
