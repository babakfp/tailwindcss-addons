import bgGrid from "./plugins/bgGrid"
import bgRadial from "./plugins/bgRadial"
import dir from "./plugins/dir"
import drag from "./plugins/drag"
import dynamicScreen from "./plugins/dynamicScreen"
import extraDefaults from "./plugins/extraDefaults"
import flexGrid from "./plugins/flexGrid"
import flip from "./plugins/flip"
import fontRegular from "./plugins/fontRegular"
import hideShow from "./plugins/hideShow"
import hocus from "./plugins/hocus"
import insetCenter from "./plugins/insetCenter"
import not from "./plugins/not"
import overflowUnset from "./plugins/overflowUnset"
import resetNumberInput from "./plugins/resetNumberInput"
import resetSearchInput from "./plugins/resetSearchInput"
import tap from "./plugins/tap"

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
export default options => [
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
    ...(options?.resetNumberInput || true ? [resetNumberInput] : []),
    ...(options?.resetSearchInput || true ? [resetSearchInput] : []),
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
 * @property {boolean} [resetNumberInput] Default: `true`
 * @property {boolean} [resetSearchInput] Default: `true`
 * @property {boolean} [tap] Default: `true`
 */
