import plugin from "tailwindcss/plugin.js"
import { flattenColorPalette } from "../lib/flattenColorPalette.js"

/** [Documenation](https://babakfp.ir/docs/tailwindcss-addons/scrollbar-color) */
export default plugin(({ matchUtilities, theme }) => {
    matchUtilities(
        {
            "scrollbar-thumb": (value) => ({
                "--tw-scrollbar-thumb": value,
                "scrollbar-color":
                    "var(--tw-scrollbar-thumb) var(--tw-scrollbar-track)",
            }),
        },
        { values: flattenColorPalette(theme("colors")), type: "color" },
    )
    matchUtilities(
        {
            "scrollbar-track": (value) => ({
                "--tw-scrollbar-track": value,
                "scrollbar-color":
                    "var(--tw-scrollbar-thumb) var(--tw-scrollbar-track)",
            }),
        },
        { values: flattenColorPalette(theme("colors")), type: "color" },
    )
})
