// @ts-expect-error
import _flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette.js"

interface RecursiveStringRecord {
    [key: string]: string | RecursiveStringRecord
}

export const flattenColorPalette = (
    colors: RecursiveStringRecord,
): Record<string, string> => {
    return _flattenColorPalette(colors)
}
