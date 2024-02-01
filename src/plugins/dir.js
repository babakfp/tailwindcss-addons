import plugin from "tailwindcss/plugin"

/** [Docs](https://babakfp.ir/docs/tailwindcss-addons/dir) */
export default plugin(({ addUtilities }) => {
    addUtilities({
        ".dir-rtl": {
            direction: "rtl",
        },
        ".dir-ltr": {
            direction: "ltr",
        },
    })
})
