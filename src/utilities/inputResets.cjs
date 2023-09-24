const plugin = require("tailwindcss/plugin")

module.exports = plugin(({ addUtilities }) => {
    addUtilities({
        ".reset-number-input": {
            "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
                // Using `display: none` crashes Chrome on hover
                "-webkit-appearance": "none",
                //  Apparently some margin are still there even though it's hidden
                margin: "0",
                // Firefox
                "-moz-appearance": "textfield",
            },
        },
        ".reset-search-input": {
            "&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":
                {
                    "-webkit-appearance": "none",
                },
        },
    })
})
