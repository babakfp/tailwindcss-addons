import plugin from "tailwindcss/plugin"

/** [Docs](https://babakfp.ir/docs/tailwindcss-addons/reset-number-input) */
export default plugin(({ addUtilities }) => {
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
    // TODO:FEATURE: Add an option named `base: boolean`, if `true`, add `reset-number-input` to number inputs in base styles.
})
