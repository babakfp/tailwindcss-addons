const plugin = require("tailwindcss/plugin")
const {
    default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette")

module.exports = plugin(({ matchUtilities, theme }) => {
    matchUtilities(
        {
            "bg-radial": value => ({
                "background-size":
                    "var(--tw-bg-radial-size, var(--tw-bg-radial-w, 32px)) var(--tw-bg-radial-size, var(--tw-bg-radial-h, 32px))",
                "background-image": `radial-gradient(circle, ${value} var(--tw-bg-radial-circle-size, 1px), transparent 0px)`,
            }),
        },
        { values: flattenColorPalette(theme("colors")), type: "color" },
    )
    matchUtilities(
        {
            "bg-radial": value => ({
                "--tw-bg-radial-size": value,
            }),
        },
        { values: theme("spacing") },
    )
    matchUtilities(
        {
            "bg-radial-w": value => ({
                "--tw-bg-radial-w": value,
            }),
        },
        { values: theme("spacing") },
    )
    matchUtilities(
        {
            "bg-radial-h": value => ({
                "--tw-bg-radial-h": value,
            }),
        },
        { values: theme("spacing") },
    )
    matchUtilities(
        {
            "bg-radial-circle": value => ({
                "--tw-bg-radial-circle-size": value,
            }),
        },
        { values: theme("borderWidth") },
    )
})
