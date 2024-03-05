import plugin from "tailwindcss/plugin.js"
import { flattenColorPalette } from "../lib/flattenColorPalette.js"

/** [Docs](https://babakfp.ir/docs/tailwindcss-addons/tap) */
export default plugin(({ matchUtilities, theme }) => {
    matchUtilities(
        {
            tap: value => ({
                "-webkit-tap-highlight-color": value,
            }),
        },
        {
            values: flattenColorPalette(theme("colors")),
            type: "color",
        },
    )
})
