import plugin from "tailwindcss/plugin"

export default plugin(({ addVariant }) => {
    addVariant("supports-hover", "@media (hover: hover)")
})
