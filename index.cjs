const deepMerge = require("./src/lib/deepMerge.cjs")

const fontWeightRegular = require("./src/fontWeightRegular.cjs")
const bgGrid = require("./src/bgGrid.cjs")
const bgRadial = require("./src/bgRadial.cjs")
const dir = require("./src/dir.cjs")
const drag = require("./src/drag.cjs")
const flexGrid = require("./src/flexGrid.cjs")
const flip = require("./src/flip.cjs")
const hideShow = require("./src/hideShow.cjs")
const inputResets = require("./src/inputResets.cjs")
const insetCenter = require("./src/insetCenter.cjs")
const overflowUnset = require("./src/overflowUnset.cjs")
const tapHighlight = require("./src/tapHighlight.cjs")
const notVariants = require("./src/notVariants.cjs")

const defaultConfig = {
	presets: {
		dynamicViewFix: false,
		moreDefaultValues: true,
	},
    utilities: {
        bgGrid: true,
        bgRadial: true,
        dir: true,
        drag: true,
        flexGrid: false,
        flip: true,
        fontWeightRegular: false,
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
            config.presets.moreDefaultValues && require("./src/presets/moreDefaultValues.cjs"),
            config.presets.dynamicViewFix && require("./src/presets/dynamicViewFix.cjs"),
        ],
        theme: {
            ...(config.utilities.fontWeightRegular ? fontWeightRegular : {}),
        },
        plugins: [
            config.utilities.bgGrid && bgGrid,
            config.utilities.bgRadial && bgRadial,
            config.utilities.dir && dir,
            config.utilities.drag && drag,
            config.utilities.flexGrid && flexGrid,
            config.utilities.flip && flip,
            config.utilities.hideShow && hideShow,
            config.utilities.inputResets && inputResets,
            config.utilities.insetCenter && insetCenter,
            config.utilities.overflowUnset && overflowUnset,
            config.utilities.tapHighlight && tapHighlight,

            config.variants.notVariants && notVariants,
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
