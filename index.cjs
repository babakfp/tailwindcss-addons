const deepMerge = require("./src/lib/deepMerge.cjs")

const defaultConfig = {
    presets: true,
    dynamicViewFix: false,
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
            config.presets && require("./src/presets/index.cjs"),
            config.dynamicViewFix &&
                require("./src/presets/dynamicViewFix.cjs"),
        ],
        theme: {
            ...(config.utilities.fontWeightRegular
                ? require("./src/utilities/fontWeightRegular.cjs")
                : {}),
        },
        plugins: [
            config.utilities.bgGrid && require("./src/utilities/bgGrid.cjs"),
            config.utilities.bgRadial && require("./src/utilities/bgRadial.cjs"),
            config.utilities.dir && require("./src/utilities/dir.cjs"),
            config.utilities.drag && require("./src/utilities/drag.cjs"),
            config.utilities.flexGrid &&
                require("./src/utilities/flexGrid.cjs"),
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
