import plugin from "tailwindcss/plugin"

export default plugin(({ addUtilities }) => {
    addUtilities({
        ".dir-rtl": {
            direction: "rtl",
        },
        ".dir-ltr": {
            direction: "ltr",
        },
    })
})
