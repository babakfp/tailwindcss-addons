import plugin from "tailwindcss/plugin"

export default {
    presets: [],
    plugins: [
        plugin(({ addUtilities }) => {
            addUtilities({
                ".jc-start": { "justify-content": "flex-start" },
                ".jc-end": { "justify-content": "flex-end" },
                ".jc-center": { "justify-content": "center" },
                ".jc-between": { "justify-content": "space-between" },
                ".jc-around": { "justify-content": "space-around" },
                ".jc-evenly": { "justify-content": "space-evenly" },

                ".ji-start": { "justify-items": "start" },
                ".ji-end": { "justify-items": "end" },
                ".ji-center": { "justify-items": "center" },
                ".ji-stretch": { "justify-items": "stretch" },

                ".js-auto": { "justify-self": "auto" },
                ".js-start": { "justify-self": "start" },
                ".js-end": { "justify-self": "end" },
                ".js-center": { "justify-self": "center" },
                ".js-stretch": { "justify-self": "stretch" },

                ".ac-center": { "align-content": "center" },
                ".ac-start": { "align-content": "flex-start" },
                ".ac-end": { "align-content": "flex-end" },
                ".ac-between": { "align-content": "space-between" },
                ".ac-around": { "align-content": "space-around" },
                ".ac-evenly": { "align-content": "space-evenly" },

                ".ai-start": { "align-items": "flex-start" },
                ".ai-end": { "align-items": "flex-end" },
                ".ai-center": { "align-items": "center" },
                ".ai-baseline": { "align-items": "baseline" },
                ".ai-stretch": { "align-items": "stretch" },

                ".as-auto": { "align-self": "auto" },
                ".as-start": { "align-self": "flex-start" },
                ".as-end": { "align-self": "flex-end" },
                ".as-center": { "align-self": "center" },
                ".as-stretch": { "align-self": "stretch" },
                ".as-baseline": { "align-self": "baseline" },

                ".pc-center": { "place-content": "center" },
                ".pc-start": { "place-content": "start" },
                ".pc-end": { "place-content": "end" },
                ".pc-between": { "place-content": "space-between" },
                ".pc-around": { "place-content": "space-around" },
                ".pc-evenly": { "place-content": "space-evenly" },
                ".pc-stretch": { "place-content": "stretch" },

                ".pi-start": { "place-items": "start" },
                ".pi-end": { "place-items": "end" },
                ".pi-center": { "place-items": "center" },
                ".pi-stretch": { "place-items": "stretch" },

                ".ps-auto": { "place-self": "auto" },
                ".ps-start": { "place-self": "start" },
                ".ps-end": { "place-self": "end" },
                ".ps-center": { "place-self": "center" },
                ".ps-stretch": { "place-self": "stretch" },
            })
        }),
    ],
    corePlugins: {
        placeContent: false,
        placeItems: false,
        alignContent: false,
        alignItems: false,
        justifyContent: false,
        justifyItems: false,
    },
}
