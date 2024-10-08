import plugin from "tailwindcss/plugin.js"
import { sizeToRem } from "../lib/sizeToRem.js"

/** [Documenation](https://babakfp.ir/docs/tailwindcss-addons/extra-defaults) */
export default plugin(() => {}, {
    theme: {
        extend: {
            spacing: sizeToRem([
                4.5, 5.5, 6.5, 7.5, 8.5, 9.5, 13, 15, 17, 18, 19, 21, 22, 23,
            ]),
            zIndex: {
                1: "1",
                2: "2",
                3: "3",
                4: "4",
                5: "5",
                6: "6",
                7: "7",
                8: "8",
                9: "9",
            },
            blur: {
                px: "1px",
                xs: "2px",
            },
            borderWidth: {
                3: "3px",
            },
            ringWidth: {
                3: "3px",
            },
            ringOffsetWidth: {
                3: "3px",
            },
            outlineOffset: {
                3: "3px",
            },
            fontSize: {
                "2xs": ["0.625rem", { lineHeight: "0.75rem" }],
            },
            letterSpacing: {
                "widest-2": "0.25em",
                "widest-3": "0.5em",
                "widest-4": "0.75em",
                "widest-5": "1em",
            },
        },
    },
})
