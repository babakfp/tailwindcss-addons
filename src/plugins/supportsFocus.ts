import plugin from "tailwindcss/plugin.js"

export default plugin(({ addVariant }) => {
    addVariant("supports-focus", "@media (focus: focus)")
    addVariant("supports-focus-within", "@media (focus-within: focus-within)")
    addVariant(
        "supports-focus-visible",
        "@media (focus-visible: focus-visible)",
    )
})
