import plugin from "tailwindcss/plugin"

/** [Docs](https://babakfp.ir/docs/tailwindcss-addons/hocus) */
export default plugin(({ addVariant }) => {
    addVariant("hocus", ["&:hover", "&:focus"])
    addVariant("hocus-within", ["&:hover", "&:focus-within"])
    addVariant("hocus-visible", ["&:hover", "&:focus-visible"])
})
