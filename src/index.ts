export { flattenColorPalette } from "./lib/flattenColorPalette.js"
export { sizeToRem } from "./lib/sizeToRem.js"

import type { Config } from "tailwindcss"

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
import scrollbarColor from "./plugins/scrollbarColor.js"
import scrollbarWidth from "./plugins/scrollbarWidth.js"
import supportsFocus from "./plugins/supportsFocus.js"
import supportsHocus from "./plugins/supportsHocus.js"
import supportsHover from "./plugins/supportsHover.js"
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
    scrollbarColor,
    scrollbarWidth,
    supportsFocus,
    supportsHocus,
    supportsHover,
    tap,
}

export const allAddons = (options?: Options) =>
    [
        ...(options?.bgGrid ?? true ? [bgGrid] : []),
        ...(options?.bgRadial ?? true ? [bgRadial] : []),
        ...(options?.dir ?? true ? [dir] : []),
        ...(options?.drag ?? true ? [drag] : []),
        ...(options?.dynamicScreen ?? true ? [dynamicScreen] : []),
        ...(options?.extraDefaults ?? true ? [extraDefaults] : []),
        ...(options?.flexGrid ?? false ? [flexGrid] : []),
        ...(options?.flip ?? true ? [flip] : []),
        ...(options?.fontRegular ?? false ? [fontRegular] : []),
        ...(options?.hideShow ?? true ? [hideShow] : []),
        ...(options?.hocus ?? true ? [hocus] : []),
        ...(options?.insetCenter ?? true ? [insetCenter] : []),
        ...(options?.not ?? true ? [not] : []),
        ...(options?.overflowUnset ?? true ? [overflowUnset] : []),
        ...(options?.resetNumberInput ?? true
            ? [
                  typeof options?.resetNumberInput === "object"
                      ? resetNumberInput(options?.resetNumberInput)
                      : resetNumberInput(),
              ]
            : []),
        ...(options?.resetSearchInput ?? true
            ? [
                  typeof options?.resetSearchInput === "object"
                      ? resetSearchInput(options?.resetSearchInput)
                      : resetSearchInput(),
              ]
            : []),
        ...(options?.scrollbarColor ?? true ? [scrollbarColor] : []),
        ...(options?.scrollbarWidth ?? true ? [scrollbarWidth] : []),
        ...(options?.supportsFocus ?? true ? [supportsFocus] : []),
        ...(options?.supportsHocus ?? true ? [supportsHocus] : []),
        ...(options?.supportsHover ?? true ? [supportsHover] : []),
        ...(options?.tap ?? true ? [tap] : []),
    ] satisfies Config["plugins"]

type Options = {
    /**
     * [Documenation](https://babakfp.ir/docs/tailwindcss-addons/bg-grid)
     * @default true
     */
    bgGrid?: boolean

    /**
     * [Documenation](https://babakfp.ir/docs/tailwindcss-addons/bg-radial)
     * @default true
     */
    bgRadial?: boolean

    /**
     * [Documenation](https://babakfp.ir/docs/tailwindcss-addons/dir)
     * @default true
     */
    dir?: boolean

    /**
     * [Documenation](https://babakfp.ir/docs/tailwindcss-addons/drag)
     * @default true
     */
    drag?: boolean

    /**
     * [Documenation](https://babakfp.ir/docs/tailwindcss-addons/dynamic-screen)
     * @default true
     */
    dynamicScreen?: boolean

    /**
     * [Documenation](https://babakfp.ir/docs/tailwindcss-addons/extra-defaults)
     * @default true
     */
    extraDefaults?: boolean

    /**
     * [Documenation](https://babakfp.ir/docs/tailwindcss-addons/flex-grid)
     * @default false
     */
    flexGrid?: boolean

    /**
     * [Documenation](https://babakfp.ir/docs/tailwindcss-addons/flip)
     * @default true
     */
    flip?: boolean

    /**
     * [Documenation](https://babakfp.ir/docs/tailwindcss-addons/font-regular)
     * @default false
     */
    fontRegular?: boolean

    /**
     * [Documenation](https://babakfp.ir/docs/tailwindcss-addons/hide-show)
     * @default true
     */
    hideShow?: boolean

    /**
     * [Documenation](https://babakfp.ir/docs/tailwindcss-addons/hocus)
     * @default true
     */
    hocus?: boolean

    /**
     * [Documenation](https://babakfp.ir/docs/tailwindcss-addons/inset-center)
     * @default true
     */
    insetCenter?: boolean

    /**
     * [Documenation](https://babakfp.ir/docs/tailwindcss-addons/not)
     * @default true
     */
    not?: boolean

    /**
     * [Documenation](https://babakfp.ir/docs/tailwindcss-addons/overflow-unset)
     * @default true
     */
    overflowUnset?: boolean

    /**
     * [Documenation](https://babakfp.ir/docs/tailwindcss-addons/reset-number-input)
     * @default true
     */
    resetNumberInput?: boolean | { base?: boolean }

    /**
     * [Documenation](https://babakfp.ir/docs/tailwindcss-addons/reset-search-input)
     * @default true
     */
    resetSearchInput?: boolean | { base?: boolean }

    /**
     * [Documenation](https://babakfp.ir/docs/tailwindcss-addons/scrollbar-color)
     * @default true
     */
    scrollbarColor?: boolean

    /**
     * [Documenation](https://babakfp.ir/docs/tailwindcss-addons/scrollbar-width)
     * @default true
     */
    scrollbarWidth?: boolean

    /**
     * [Documenation](https://babakfp.ir/docs/tailwindcss-addons/supports-focus)
     * @default true
     */
    supportsFocus?: boolean

    /**
     * [Documenation](https://babakfp.ir/docs/tailwindcss-addons/supports-hocus)
     * @default true
     */
    supportsHocus?: boolean

    /**
     * [Documenation](https://babakfp.ir/docs/tailwindcss-addons/supports-hover)
     * @default true
     */
    supportsHover?: boolean

    /**
     * [Documenation](https://babakfp.ir/docs/tailwindcss-addons/tap)
     * @default true
     */
    tap?: boolean
}
