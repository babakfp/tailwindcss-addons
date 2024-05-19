import plugin from "tailwindcss/plugin.js"

/** [Documenation](https://babakfp.ir/docs/tailwindcss-addons/reset-number-input) */
export default (options?: { base?: boolean }) =>
    plugin(({ addBase, addUtilities }) => {
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
        })
        if (options?.base) {
            addBase({
                'input[type="number"]': {
                    "@apply reset-number-input": {},
                },
            })
        }
    })
