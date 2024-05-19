import plugin from "tailwindcss/plugin.js"

export default plugin(({ addVariant }) => {
    addVariant("supports-hover", "@media (hover: hover)")
})
