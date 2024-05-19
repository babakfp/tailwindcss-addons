import plugin from "tailwindcss/plugin.js"

/** [Documenation](https://babakfp.ir/docs/tailwindcss-addons/supports-hover) */
export default plugin(({ addVariant }) => {
    addVariant("supports-hover", "@media (hover: hover)")
})
