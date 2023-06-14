const deepMerge = require("./src/lib/deepMerge.cjs")

const defaultConfig = {
    presets: {
        flexGrid: false,
        fontWeightRegular: false,
        moreDefaultValues: true,
        screenSizeFix: false,
    },
    utilities: {
        bgGrid: true,
        bgRadial: true,
        dir: true,
        drag: true,
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

module.exports = (userConfig = {}) => {
    const config = deepMerge(defaultConfig, userConfig)

    return {
        presets: [
            config.presets.flexGrid && require("./src/presets/flexGrid.cjs"),
            config.presets.fontWeightRegular &&
                require("./src/presets/fontWeightRegular.cjs"),
            config.presets.moreDefaultValues &&
                require("./src/presets/moreDefaultValues.cjs"),
            config.presets.screenSizeFix &&
                require("./src/presets/screenSizeFix.cjs"),
        ],
        plugins: [
            config.utilities.bgGrid && require("./src/utilities/bgGrid.cjs"),
            config.utilities.bgRadial &&
                require("./src/utilities/bgRadial.cjs"),
            config.utilities.dir && require("./src/utilities/dir.cjs"),
            config.utilities.drag && require("./src/utilities/drag.cjs"),
            config.utilities.flip && require("./src/utilities/flip.cjs"),
            config.utilities.hideShow &&
                require("./src/utilities/hideShow.cjs"),
            config.utilities.inputResets &&
                require("./src/utilities/inputResets.cjs"),
            config.utilities.insetCenter &&
                require("./src/utilities/insetCenter.cjs"),
            config.utilities.overflowUnset &&
                require("./src/utilities/overflowUnset.cjs"),
            config.utilities.tapHighlight &&
                require("./src/utilities/tapHighlight.cjs"),

            config.variants.notVariants &&
                require("./src/variants/notVariants.cjs"),
        ],
    }
}
