import plugin from "tailwindcss/plugin"
import cssTransformValue from "../lib/cssTransformValue.js"

export default plugin(({ addUtilities }) => {
    addUtilities({
        ".flip": {
            "--tw-scale-x": "-1",
            "--tw-scale-y": "-1",
            transform: cssTransformValue,
        },
        ".flip-x": {
            "--tw-scale-x": "-1",
            transform: cssTransformValue,
        },
        ".flip-y": {
            "--tw-scale-y": "-1",
            transform: cssTransformValue,
        },
    })
})
