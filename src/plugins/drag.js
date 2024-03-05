import plugin from "tailwindcss/plugin.js"

/** [Docs](https://babakfp.ir/docs/tailwindcss-addons/drag) */
export default plugin(({ addUtilities }) => {
    addUtilities({
        ".drag-none": {
            "-webkit-user-drag": "none",
        },
        ".drag-element": {
            "-webkit-user-drag": "element",
        },
        ".drag-auto": {
            "-webkit-user-drag": "auto",
        },
    })
})
