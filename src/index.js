import deepMerge from "./lib/deepMerge.js"

import { plugin as flexGridPlugin, corePlugins as flexGridCorePlugins } from "./presets/flexGrid.js"
import fontWeightRegular from "./presets/fontWeightRegular.js"
import moreDefaultValues from "./presets/moreDefaultValues.js"
import { extend as screenSizeFixExtend, plugin as screenSizeFixPlugin } from "./presets/screenSizeFix.js"
import bgGrid from "./utilities/bgGrid.js"
import bgRadial from "./utilities/bgRadial.js"
import dir from "./utilities/dir.js"
import drag from "./utilities/drag.js"
import flip from "./utilities/flip.js"
import hideShow from "./utilities/hideShow.js"
import inputResets from "./utilities/inputResets.js"
import insetCenter from "./utilities/insetCenter.js"
import overflowUnset from "./utilities/overflowUnset.js"
import tapHighlight from "./utilities/tapHighlight.js"
import notVariants from "./variants/notVariants.js"

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
        theme: {
            ...(config.presets.fontWeightRegular ? fontWeightRegular : []),
            extend: {
                ...(config.presets.moreDefaultValues ? [ moreDefaultValues ] : []),
                ...(config.presets.screenSizeFix ? [ screenSizeFixExtend ] : []),
            },
        },
        plugins: [
            ...(config.presets.flexGrid ? [ flexGridPlugin() ] : []),
            ...(config.presets.screenSizeFix ? [ screenSizeFixPlugin() ] : []),

            ...(config.utilities.bgGrid ? [ bgGrid ] : []),
            ...(config.utilities.bgRadial ? [ bgRadial ] : []),
            ...(config.utilities.dir ? [ dir ] : []),
            ...(config.utilities.drag ? [ drag ] : []),
            ...(config.utilities.flip ? [ flip ] : []),
            ...(config.utilities.hideShow ? [ hideShow ] : []),
            ...(config.utilities.inputResets ? [ inputResets ] : []),
            ...(config.utilities.insetCenter ? [ insetCenter ] : []),
            ...(config.utilities.overflowUnset ? [ overflowUnset ] : []),
            ...(config.utilities.tapHighlight ? [ tapHighlight ] : []),

            ...(config.variants.notVariants ? [ notVariants ] : []),
        ],
        corePlugins: {
            ...(config.presets.flexGrid ? flexGridCorePlugins : {}),
        },
    }
}
