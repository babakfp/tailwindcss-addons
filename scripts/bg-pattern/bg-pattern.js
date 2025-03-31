import plugin from "tailwindcss/plugin"
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette"

const patterns = "{patterns.json}"

export default plugin(({ matchUtilities, theme }) => {
    patterns.forEach((pattern) => {
        const name = pattern.title
            .toLowerCase()
            .replaceAll("&", "and")
            .replaceAll(" ", "-")

        matchUtilities(
            {
                [`bg-pattern-${name}`]: (color) => {
                    const backgroundImage = pattern["background-image"]
                        .replace("fill='%239C92AC'", `fill='${color}'`)
                        .replaceAll("fill-opacity='0.4'", "fill-opacity='1'")

                    return {
                        "background-image": backgroundImage,
                    }
                },
            },
            { type: "color", values: flattenColorPalette(theme("colors")) }
        )
    })
})
