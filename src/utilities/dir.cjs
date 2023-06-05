const plugin = require("tailwindcss/plugin")

module.exports = plugin(({ addUtilities }) => {
    addUtilities({
        ".dir-rtl": {
            direction: "rtl",
        },
        ".dir-ltr": {
            direction: "ltr",
        },
    })
})
