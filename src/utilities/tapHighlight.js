import plugin from "tailwindcss/plugin"
import { flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette"

export default plugin(({ matchUtilities, theme }) => {
    matchUtilities(
        {
            "tap-highlight": value => ({
                "-webkit-tap-highlight-color": value,
            }),
        },
        {
            values: flattenColorPalette(theme("colors")),
            type: "color",
        },
    )
})
