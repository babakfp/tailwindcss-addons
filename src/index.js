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
            (async () => config.presets.flexGrid && await import("./presets/flexGrid.js"))(),
            // TODO: In TailwindCSS v3.3.2 there is a bug: https://github.com/tailwindlabs/tailwindcss/issues/11428
            (async () => config.presets.fontWeightRegular && await import("./presets/fontWeightRegular.js"))(),
            (async () => config.presets.moreDefaultValues && await import("./presets/moreDefaultValues.js"))(),
            (async () => config.presets.screenSizeFix && await import("./presets/screenSizeFix.js"))(),
        ],
        plugins: [
            (async () => config.utilities.bgGrid && await import("./utilities/bgGrid.js"))(),
            (async () => config.utilities.bgRadial && await import("./utilities/bgRadial.js"))(),
            (async () => config.utilities.dir && await import("./utilities/dir.js"))(),
            (async () => config.utilities.drag && await import("./utilities/drag.js"))(),
            (async () => config.utilities.flip && await import("./utilities/flip.js"))(),
            (async () => config.utilities.hideShow && await import("./utilities/hideShow.js"))(),
            (async () => config.utilities.inputResets && await import("./utilities/inputResets.js"))(),
            (async () => config.utilities.insetCenter && await import("./utilities/insetCenter.js"))(),
            (async () => config.utilities.overflowUnset && await import("./utilities/overflowUnset.js"))(),
            (async () => config.utilities.tapHighlight && await import("./utilities/tapHighlight.js"))(),

            (async () => config.variants.notVariants && await import("./variants/notVariants.js"))(),
        ],
    }
}
