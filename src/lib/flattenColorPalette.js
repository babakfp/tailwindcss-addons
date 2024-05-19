import _flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette.js"

/**
 * @typedef {Record<string, string | RecursiveRecordOfString>} RecursiveRecordOfString
 */

/**
 * @param {RecursiveStringRecord} colors
 * @returns {Record<string, string>}
 */
export const flattenColorPalette = (colors) => {
    return _flattenColorPalette(colors)
}
