import plugin from "tailwindcss/plugin.js"

/** [Documenation](https://babakfp.ir/docs/tailwindcss-addons/flip) */
export default plugin(({ addUtilities }) => {
    addUtilities({
        ".flip": {
            "@apply scale-x-[-1] scale-y-[-1]": {},
        },
        ".flip-x": {
            "@apply scale-x-[-1]": {},
        },
        ".flip-y": {
            "@apply scale-y-[-1]": {},
        },
    })
})
