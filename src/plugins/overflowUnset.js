import plugin from "tailwindcss/plugin"

/** [Docs](https://babakfp.ir/docs/tailwindcss-addons/overflow-unset) */
export default plugin(({ addUtilities }) => {
    addUtilities({
        ".overflow-unset": {
            overflow: "unset",
        },
        ".overflow-y-unset": {
            "overflow-y": "unset",
        },
        ".overflow-x-unset": {
            "overflow-x": "unset",
        },
    })
})
