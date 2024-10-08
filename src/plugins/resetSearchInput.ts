import plugin from "tailwindcss/plugin.js"

/** [Documenation](https://babakfp.ir/docs/tailwindcss-addons/reset-search-input) */
export default (options?: {
    /** Set this to `true` to add it to the base styles. */
    base?: boolean
}) =>
    plugin(({ addBase, addUtilities }) => {
        addUtilities({
            ".reset-search-input": {
                "&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":
                    {
                        "-webkit-appearance": "none",
                    },
            },
        })
        if (options?.base) {
            addBase({
                'input[type="search"]': {
                    "@apply reset-search-input": {},
                },
            })
        }
    })
