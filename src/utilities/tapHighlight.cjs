const plugin = require("tailwindcss/plugin")
const {
    default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette")

module.exports = plugin(({ matchUtilities, theme }) => {
    matchUtilities(
        {
            "tap-highlight": value => ({
                "-webkit-tap-highlight-color": value,
            }),
        },
        {
            values: flattenColorPalette(theme("colors")),
            type: "color",
        }
    )
})
