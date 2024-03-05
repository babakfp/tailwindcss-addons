import plugin from "tailwindcss/plugin.js"

/** [Docs](https://babakfp.ir/docs/tailwindcss-addons/reset-search-input) */
export default plugin(({ addUtilities }) => {
    addUtilities({
        ".reset-search-input": {
            "&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":
                {
                    "-webkit-appearance": "none",
                },
        },
    })
    // TODO:FEATURE: Add an option named `base: boolean`, if `true`, add `reset-search-input` to search inputs in base styles.
})
