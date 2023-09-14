const deepMerge = require("./src/lib/deepMerge.js")

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

export default (userConfig = {}) => {
    const config = deepMerge(defaultConfig, userConfig)

    return {
        presets: [
            config.presets.flexGrid && require("./src/presets/flexGrid.js"),
            // TODO: In TailwindCSS v3.3.2 there is a bug: https://github.com/tailwindlabs/tailwindcss/issues/11428
            config.presets.fontWeightRegular &&
                require("./src/presets/fontWeightRegular.js"),
            config.presets.moreDefaultValues &&
                require("./src/presets/moreDefaultValues.js"),
            config.presets.screenSizeFix &&
                require("./src/presets/screenSizeFix.js"),
        ],
        plugins: [
            config.utilities.bgGrid && require("./src/utilities/bgGrid.js"),
            config.utilities.bgRadial && require("./src/utilities/bgRadial.js"),
            config.utilities.dir && require("./src/utilities/dir.js"),
            config.utilities.drag && require("./src/utilities/drag.js"),
            config.utilities.flip && require("./src/utilities/flip.js"),
            config.utilities.hideShow && require("./src/utilities/hideShow.js"),
            config.utilities.inputResets &&
                require("./src/utilities/inputResets.js"),
            config.utilities.insetCenter &&
                require("./src/utilities/insetCenter.js"),
            config.utilities.overflowUnset &&
                require("./src/utilities/overflowUnset.js"),
            config.utilities.tapHighlight &&
                require("./src/utilities/tapHighlight.js"),

            config.variants.notVariants &&
                require("./src/variants/notVariants.js"),
        ],
    }
}
