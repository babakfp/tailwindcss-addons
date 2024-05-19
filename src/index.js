import bgGrid from "./plugins/bgGrid.js"
import bgRadial from "./plugins/bgRadial.js"
import dir from "./plugins/dir.js"
import drag from "./plugins/drag.js"
import dynamicScreen from "./plugins/dynamicScreen.js"
import extraDefaults from "./plugins/extraDefaults.js"
import flexGrid from "./plugins/flexGrid.js"
import flip from "./plugins/flip.js"
import fontRegular from "./plugins/fontRegular.js"
import hideShow from "./plugins/hideShow.js"
import hocus from "./plugins/hocus.js"
import insetCenter from "./plugins/insetCenter.js"
import not from "./plugins/not.js"
import overflowUnset from "./plugins/overflowUnset.js"
import resetNumberInput from "./plugins/resetNumberInput.js"
import resetSearchInput from "./plugins/resetSearchInput.js"
import supportsFocus from "./plugins/supports-focus.js"
import supportsHocus from "./plugins/supports-hocus.js"
import supportsHover from "./plugins/supports-hover.js"
import tap from "./plugins/tap.js"

export {
    bgGrid,
    bgRadial,
    dir,
    drag,
    dynamicScreen,
    extraDefaults,
    flexGrid,
    flip,
    fontRegular,
    hideShow,
    hocus,
    insetCenter,
    not,
    overflowUnset,
    resetNumberInput,
    resetSearchInput,
    tap,
}

/** @param {Options} [options] */
export default (options) => [
    ...(options?.bgGrid || true ? [bgGrid] : []),
    ...(options?.bgRadial || true ? [bgRadial] : []),
    ...(options?.dir || true ? [dir] : []),
    ...(options?.drag || true ? [drag] : []),
    ...(options?.dynamicScreen || true ? [dynamicScreen] : []),
    ...(options?.extraDefaults || true ? [extraDefaults] : []),
    ...(options?.flexGrid || false ? [flexGrid] : []),
    ...(options?.flip || true ? [flip] : []),
    ...(options?.fontRegular || false ? [fontRegular] : []),
    ...(options?.hideShow || true ? [hideShow] : []),
    ...(options?.hocus || true ? [hocus] : []),
    ...(options?.insetCenter || true ? [insetCenter] : []),
    ...(options?.not || true ? [not] : []),
    ...(options?.overflowUnset || true ? [overflowUnset] : []),
    ...(options?.resetNumberInput || true
        ? [
              typeof options?.resetNumberInput === "object"
                  ? resetNumberInput(options?.resetNumberInput)
                  : resetNumberInput(),
          ]
        : []),
    ...(options?.resetSearchInput || true
        ? [
              typeof options?.resetSearchInput === "object"
                  ? resetSearchInput(options?.resetSearchInput)
                  : resetSearchInput(),
          ]
        : []),
    ...(options?.supportsFocus || true ? [supportsFocus] : []),
    ...(options?.supportsHocus || true ? [supportsHocus] : []),
    ...(options?.supportsHover || true ? [supportsHover] : []),
    ...(options?.tap || true ? [tap] : []),
]

/**
 * @typedef {Object} Options
 * @property {boolean} [bgGrid] Default: `true`
 * @property {boolean} [bgRadial] Default: `true`
 * @property {boolean} [dir] Default: `true`
 * @property {boolean} [drag] Default: `true`
 * @property {boolean} [dynamicScreen] Default: `true`
 * @property {boolean} [extraDefaults] Default: `true`
 * @property {boolean} [flexGrid] Default: `false`
 * @property {boolean} [flip] Default: `true`
 * @property {boolean} [fontRegular] Default: `false`
 * @property {boolean} [hideShow] Default: `true`
 * @property {boolean} [hocus] Default: `true`
 * @property {boolean} [insetCenter] Default: `true`
 * @property {boolean} [not] Default: `true`
 * @property {boolean} [overflowUnset] Default: `true`
 * @property {boolean | { base?: boolean }} [resetNumberInput] Default: `true`
 * @property {boolean | { base?: boolean }} [resetSearchInput] Default: `true`
 * @property {boolean} [supportsFocus] Default: `true`
 * @property {boolean} [supportsHocus] Default: `true`
 * @property {boolean} [supportsHover] Default: `true`
 * @property {boolean} [tap] Default: `true`
 */
