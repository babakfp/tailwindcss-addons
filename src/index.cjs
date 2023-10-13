const deepMerge = require("./lib/deepMerge.cjs")

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

    // prettier-ignore
    return {
        theme: {
            ...(config.presets.fontWeightRegular ? require("./presets/fontWeightRegular.cjs") : []),
            extend: {
                ...(config.presets.moreDefaultValues ? require("./presets/moreDefaultValues.cjs") : {}),
                ...(config.presets.screenSizeFix ? require("./presets/screenSizeFix.cjs").extend : {}),

                ...(config.presets.moreDefaultValues || config.presets.screenSizeFix ? {
                    minHeight: ({ theme }) => ({
                        ...(config.presets.moreDefaultValues ? theme("spacing") : {}),
                        ...(config.presets.screenSizeFix ? { screen: "var(--tw-screen-h)" } : {}),
                    }),
                    maxHeight: ({ theme }) => ({
                        ...(config.presets.moreDefaultValues ? theme("spacing") : {}),
                        ...(config.presets.screenSizeFix ? { screen: "var(--tw-screen-h)" } : {}),
                    }),
                } : {}),
            },
        },
        plugins: [
            ...(config.presets.flexGrid ? [ require("./presets/flexGrid.cjs").plugin ] : []),
            ...(config.presets.screenSizeFix ? [ require("./presets/screenSizeFix.cjs").plugin ] : []),

            ...(config.utilities.bgGrid ? [ require("./utilities/bgGrid.cjs") ] : []),
            ...(config.utilities.bgRadial ? [ require("./utilities/bgRadial.cjs") ] : []),
            ...(config.utilities.dir ? [ require("./utilities/dir.cjs") ] : []),
            ...(config.utilities.drag ? [ require("./utilities/drag.cjs") ] : []),
            ...(config.utilities.flip ? [ require("./utilities/flip.cjs") ] : []),
            ...(config.utilities.hideShow ? [ require("./utilities/hideShow.cjs") ] : []),
            ...(config.utilities.inputResets ? [ require("./utilities/inputResets.cjs") ] : []),
            ...(config.utilities.insetCenter ? [ require("./utilities/insetCenter.cjs") ] : []),
            ...(config.utilities.overflowUnset ? [ require("./utilities/overflowUnset.cjs") ] : []),
            ...(config.utilities.tapHighlight ? [ require("./utilities/tapHighlight.cjs") ] : []),

            ...(config.variants.notVariants ? [ require("./variants/notVariants.cjs") ] : []),
        ],
        corePlugins: {
            ...(config.presets.flexGrid ? require("./presets/flexGrid.cjs").corePlugins : {}),
        },
    }
}
