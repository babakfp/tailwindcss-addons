import plugin from "tailwindcss/plugin.js"

/** [Docs](https://babakfp.ir/docs/tailwindcss-addons/font-regular) */
export default plugin(() => {}, {
    theme: {
        fontWeight: {
            thin: "100",
            extralight: "200",
            light: "300",
            regular: "400", // Replacing `normal` with `regular`
            medium: "500",
            semibold: "600",
            bold: "700",
            extrabold: "800",
            black: "900",
        },
    },
})
