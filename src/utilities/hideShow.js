import plugin from "tailwindcss/plugin"

export default plugin(({ addUtilities }) => {
    addUtilities({
        ".hide": {
            visibility: "hidden",
            opacity: "0",
            "pointer-events": "none",
        },
        ".show": {
            visibility: "visible",
            opacity: "1",
            "pointer-events": "auto",
        },
    })
})
