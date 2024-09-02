import plugin from "tailwindcss/plugin.js"
import { flattenColorPalette } from "../lib/flattenColorPalette.js"

/** [Documenation](https://babakfp.ir/docs/tailwindcss-addons/bg-radial) */
export default plugin(({ matchUtilities, theme }) => {
    matchUtilities(
        {
            "bg-radial": (value) => ({
                "background-size":
                    "var(--tw-bg-radial-gap, var(--tw-bg-radial-gap-x, 32px)) var(--tw-bg-radial-gap, var(--tw-bg-radial-gap-y, 32px))",
                "background-image": `radial-gradient(circle, ${value} var(--tw-bg-radial-size, 1px), transparent 0px)`,
            }),
        },
        { values: flattenColorPalette(theme("colors")), type: "color" },
    )
    matchUtilities(
        {
            "bg-radial-gap": (value) => ({
                "--tw-bg-radial-gap": value,
            }),
        },
        { values: theme("spacing") },
    )
    matchUtilities(
        {
            "bg-radial-gap-x": (value) => ({
                "--tw-bg-radial-gap-x": value,
            }),
        },
        { values: theme("spacing") },
    )
    matchUtilities(
        {
            "bg-radial-gap-y": (value) => ({
                "--tw-bg-radial-gap-y": value,
            }),
        },
        { values: theme("spacing") },
    )
    matchUtilities(
        {
            "bg-radial-size": (value) => ({
                "--tw-bg-radial-size": value,
            }),
        },
        { values: theme("borderWidth") },
    )
})
