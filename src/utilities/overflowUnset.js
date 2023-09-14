import plugin from "tailwindcss/plugin"

export default plugin(({ addUtilities }) => {
    addUtilities({
        ".overflow-unset": {
            overflow: "unset",
        },
        ".overflow-y-unset": {
            "overflow-y": "unset",
        },
        ".overflow-x-unset": {
            "overflow-x": "unset",
        },
    })
})
