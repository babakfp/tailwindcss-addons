const plugin = require("tailwindcss/plugin")
const {
    default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette")

module.exports = plugin(({ matchUtilities, theme }) => {
    matchUtilities(
        {
            "bg-grid": value => ({
                "background-size":
                    "var(--tw-bg-grid-size, var(--tw-bg-grid-w, 32px)) var(--tw-bg-grid-size, var(--tw-bg-grid-h, 32px))",
                "background-image": `
					linear-gradient(to right, ${value} var(--tw-bg-grid-border-w, 1px), transparent 0px),
					linear-gradient(to bottom, ${value} var(--tw-bg-grid-border-w, 1px), transparent 0px)`,
            }),
        },
        { values: flattenColorPalette(theme("colors")), type: "color" }
    )
    matchUtilities(
        {
            "bg-grid": value => ({
                "--tw-bg-grid-size": value,
            }),
        },
        { values: theme("spacing") }
    )
    matchUtilities(
        {
            "bg-grid-w": value => ({
                "--tw-bg-grid-w": value,
            }),
        },
        { values: theme("spacing") }
    )
    matchUtilities(
        {
            "bg-grid-h": value => ({
                "--tw-bg-grid-h": value,
            }),
        },
        { values: theme("spacing") }
    )
    matchUtilities(
        {
            "bg-grid-border-w": value => ({
                "--tw-bg-grid-border-w": value,
            }),
        },
        { values: theme("borderWidth") }
    )
})
