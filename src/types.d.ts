export type Config = {
    presets: {
        /** @default false */
        flexGrid: boolean
        /** @default false */
        fontWeightRegular: boolean
        /** @default true */
        moreDefaultValues: boolean
        /** @default false */
        screenSizeFix: boolean
    }
    utilities: {
        /** @default true */
        bgGrid: boolean
        /** @default true */
        bgRadial: boolean
        /** @default true */
        dir: boolean
        /** @default true */
        drag: boolean
        /** @default true */
        flip: boolean
        /** @default true */
        hideShow: boolean
        /** @default true */
        inputResets: boolean
        /** @default true */
        insetCenter: boolean
        /** @default true */
        overflowUnset: boolean
        /** @default true */
        tapHighlight: boolean
    }
    variants: {
        /** @default true */
        notVariants: boolean
    }
}
