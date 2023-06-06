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
            config.presets && require("./src/index.cjs"),
            config.dynamicViewFix && require("./src/dynamicViewFix.cjs"),
        ],
        theme: {
            ...(config.utilities.fontWeightRegular
                ? require("./src/fontWeightRegular.cjs")
                : {}),
        },
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
            config.utilities.overflowUnset &&
                require("./src/overflowUnset.cjs"),
            config.utilities.tapHighlight && require("./src/tapHighlight.cjs"),

            config.variants.notVariants && require("./src/notVariants.cjs"),
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
