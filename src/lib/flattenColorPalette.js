import _flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette"

/**
 * @param {Record<string, string>} colors
 */
export const flattenColorPalette = colors => {
    return _flattenColorPalette(colors)
}
