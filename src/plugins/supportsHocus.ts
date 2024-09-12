import plugin from "tailwindcss/plugin.js"

/** [Documenation](https://babakfp.ir/docs/tailwindcss-addons/supports-hocus) */
export default plugin(({ addVariant }) => {
    addVariant(
        "supports-hocus-within",
        "@media (hover: hover) and (focus-within: focus-within)",
    )
    addVariant("supports-hocus", "@media (hover: hover) and (focus: focus)")
    addVariant(
        "supports-hocus-visible",
        "@media (hover: hover) and (focus-visible: focus-visible)",
    )
})
