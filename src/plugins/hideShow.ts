import plugin from "tailwindcss/plugin.js"

/** [Documenation](https://babakfp.ir/docs/tailwindcss-addons/hide-show) */
export default plugin(({ addUtilities }) => {
    addUtilities({
        ".hide": {
            visibility: "hidden",
            opacity: "0",
            "pointer-events": "none",
        },
        ".show": {
            visibility: "visible",
            opacity: "1",
            "pointer-events": "auto",
        },
    })
})
