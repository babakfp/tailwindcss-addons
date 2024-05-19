import plugin from "tailwindcss/plugin.js"

/** [Documenation](https://babakfp.ir/docs/tailwindcss-addons/inset-center) */
export default plugin(({ addUtilities }) => {
    addUtilities({
        ".inset-center": {
            "@apply top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2": {},
        },
        ".inset-x-center": {
            "@apply right-1/2 translate-x-1/2": {},
        },
        ".inset-y-center": {
            "@apply top-1/2 -translate-y-1/2": {},
        },
    })
})
