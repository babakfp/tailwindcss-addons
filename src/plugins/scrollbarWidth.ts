import plugin from "tailwindcss/plugin.js"

/** [Documenation](https://babakfp.ir/docs/tailwindcss-addons/scrollbar-width) */
export default plugin(({ addUtilities }) => {
    addUtilities({
        ".scrollbar-auto": {
            "scrollbar-width": "auto",
        },
        ".scrollbar-thin": {
            "scrollbar-width": "thin",
        },
        ".scrollbar-none": {
            "scrollbar-width": "none",
        },
    })
})
