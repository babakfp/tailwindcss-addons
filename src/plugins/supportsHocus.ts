import plugin from "tailwindcss/plugin.js"

export default plugin(({ addVariant }) => {
    addVariant("supports-hocus", "@media (hover: hover) and (focus: focus)")
    addVariant(
        "supports-hocus-within",
        "@media (hover: hover) and (focus-within: focus-within)",
    )
    addVariant(
        "supports-hocus-visible",
        "@media (hover: hover) and (focus-visible: focus-visible)",
    )
})
