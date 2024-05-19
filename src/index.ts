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

export default (options?: Options) => [
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

type Options = Partial<{
    /** @default true */
    bgGrid: boolean

    /** @default true */
    bgRadial: boolean

    /** @default true */
    dir: boolean

    /** @default true */
    drag: boolean

    /** @default true */
    dynamicScreen: boolean

    /** @default true */
    extraDefaults: boolean

    /** @default false */
    flexGrid: boolean

    /** @default true */
    flip: boolean

    /** @default false */
    fontRegular: boolean

    /** @default true */
    hideShow: boolean

    /** @default true */
    hocus: boolean

    /** @default true */
    insetCenter: boolean

    /** @default true */
    not: boolean

    /** @default true */
    overflowUnset: boolean

    /** @default true */
    resetNumberInput: boolean | { base?: boolean }

    /** @default true */
    resetSearchInput: boolean | { base?: boolean }

    /** @default true */
    supportsFocus: boolean

    /** @default true */
    supportsHocus: boolean

    /** @default true */
    supportsHover: boolean

    /** @default true */
    tap: boolean
}>
