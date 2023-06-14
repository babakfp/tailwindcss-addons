const deepMerge = require("./src/lib/deepMerge.cjs")

const defaultConfig = {
	presets: {
		fontWeightRegular: false,
		moreDefaultValues: true,
		screenSizeFix: false,
	},
    utilities: {
        bgGrid: true,
        bgRadial: true,
        dir: true,
        drag: true,
        flexGrid: false,
        flip: true,
        hideShow: true,
        inputResets: true,
        insetCenter: true,
        overflowUnset: true,
        tapHighlight: true,
    },
    variants: {
        notVariants: true,
    },
}

const tailwindcssAddons = (userConfig = {}) => {
    const config = deepMerge(defaultConfig, userConfig)

    return {
        presets: [
			config.presets.fontWeightRegular && require("./src/presets/fontWeightRegular.cjs"),
			config.presets.moreDefaultValues && require("./src/presets/moreDefaultValues.cjs"),
            config.presets.screenSizeFix && require("./src/presets/screenSizeFix.cjs"),
        ],
        plugins: [
            config.utilities.bgGrid && require("./src/bgGrid.cjs"),
            config.utilities.bgRadial && require("./src/bgRadial.cjs"),
            config.utilities.dir && require("./src/dir.cjs"),
            config.utilities.drag && require("./src/drag.cjs"),
            config.utilities.flexGrid && require("./src/flexGrid.cjs"),
            config.utilities.flip && require("./src/flip.cjs"),
            config.utilities.hideShow && require("./src/hideShow.cjs"),
            config.utilities.inputResets && require("./src/inputResets.cjs"),
            config.utilities.insetCenter && require("./src/insetCenter.cjs"),
            config.utilities.overflowUnset && require("./src/overflowUnset.cjs"),
            config.utilities.tapHighlight && require("./src/tapHighlight.cjs"),

            config.variants.notVariants && require("./src/variants/notVariants.cjs"),
        ],
        corePlugins: {
            ...(config.utilities.flexGrid
                ? {
                      placeContent: false,
                      placeItems: false,
                      alignContent: false,
                      alignItems: false,
                      justifyContent: false,
                      justifyItems: false,
                  }
                : {}),
        },
    }
}

module.exports = tailwindcssAddons
