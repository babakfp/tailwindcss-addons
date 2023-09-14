import deepMerge from "./src/lib/deepMerge.js"

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
            config.presets.flexGrid && import("./src/presets/flexGrid.js"),
            // TODO: In TailwindCSS v3.3.2 there is a bug: https://github.com/tailwindlabs/tailwindcss/issues/11428
            config.presets.fontWeightRegular &&
                import("./src/presets/fontWeightRegular.js"),
            config.presets.moreDefaultValues &&
                import("./src/presets/moreDefaultValues.js"),
            config.presets.screenSizeFix &&
                import("./src/presets/screenSizeFix.js"),
        ],
        plugins: [
            config.utilities.bgGrid && import("./src/utilities/bgGrid.js"),
            config.utilities.bgRadial && import("./src/utilities/bgRadial.js"),
            config.utilities.dir && import("./src/utilities/dir.js"),
            config.utilities.drag && import("./src/utilities/drag.js"),
            config.utilities.flip && import("./src/utilities/flip.js"),
            config.utilities.hideShow && import("./src/utilities/hideShow.js"),
            config.utilities.inputResets &&
                import("./src/utilities/inputResets.js"),
            config.utilities.insetCenter &&
                import("./src/utilities/insetCenter.js"),
            config.utilities.overflowUnset &&
                import("./src/utilities/overflowUnset.js"),
            config.utilities.tapHighlight &&
                import("./src/utilities/tapHighlight.js"),

            config.variants.notVariants &&
                import("./src/variants/notVariants.js"),
        ],
    }
}
