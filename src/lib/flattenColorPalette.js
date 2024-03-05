import _flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette.js"

/**
 * @param {Record<string, string>} colors
 */
export const flattenColorPalette = colors => {
    return _flattenColorPalette(colors)
}
