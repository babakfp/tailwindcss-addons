import plugin from "tailwindcss/plugin"

export const extend = {
    height: { screen: "var(--tw-screen-h)" },
    maxHeight: { screen: "var(--tw-screen-h)" },
    minHeight: { screen: "var(--tw-screen-h)" },
    width: { screen: "var(--tw-screen-w)" },
}

export const plugin = plugin(({ addBase }) => {
    addBase({
        ":root": {
            "--tw-screen-h": "100vh",
            "--tw-screen-w": "100vw",
        },
    })
    addBase({
        ":root": {
            "--tw-screen-h": "100dvh",
            "--tw-screen-w": "100dvw",
        },
    })
})
