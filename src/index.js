import deepMerge from "./lib/deepMerge.js"

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
            config.presets.flexGrid && import("./presets/flexGrid.js"),
            // TODO: In TailwindCSS v3.3.2 there is a bug: https://github.com/tailwindlabs/tailwindcss/issues/11428
            config.presets.fontWeightRegular &&
                import("./presets/fontWeightRegular.js"),
            config.presets.moreDefaultValues &&
                import("./presets/moreDefaultValues.js"),
            config.presets.screenSizeFix &&
                import("./presets/screenSizeFix.js"),
        ],
        plugins: [
            config.utilities.bgGrid && import("./utilities/bgGrid.js"),
            config.utilities.bgRadial && import("./utilities/bgRadial.js"),
            config.utilities.dir && import("./utilities/dir.js"),
            config.utilities.drag && import("./utilities/drag.js"),
            config.utilities.flip && import("./utilities/flip.js"),
            config.utilities.hideShow && import("./utilities/hideShow.js"),
            config.utilities.inputResets &&
                import("./utilities/inputResets.js"),
            config.utilities.insetCenter &&
                import("./utilities/insetCenter.js"),
            config.utilities.overflowUnset &&
                import("./utilities/overflowUnset.js"),
            config.utilities.tapHighlight &&
                import("./utilities/tapHighlight.js"),

            config.variants.notVariants && import("./variants/notVariants.js"),
        ],
    }
}
