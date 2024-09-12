import plugin from "tailwindcss/plugin.js"

/** [Documenation](https://babakfp.ir/docs/tailwindcss-addons/hocus) */
export default plugin(({ addVariant }) => {
    addVariant("hocus-within", ["&:hover", "&:focus-within"])
    addVariant("hocus", ["&:hover", "&:focus"])
    addVariant("hocus-visible", ["&:hover", "&:focus-visible"])

    addVariant("peer-hocus-within", [
        ".peer:hover ~ &",
        ".peer:focus-within ~ &",
    ])
    addVariant("peer-hocus", [".peer:hover ~ &", ".peer:focus ~ &"])
    addVariant("peer-hocus-visible", [
        ".peer:hover ~ &",
        ".peer:focus-visible ~ &",
    ])

    addVariant("group-hocus-within", [
        ".group:hover &",
        ".group:focus-within &",
    ])
    addVariant("group-hocus", [".group:hover &", ".group:focus &"])
    addVariant("group-hocus-visible", [
        ".group:hover &",
        ".group:focus-visible &",
    ])
})
