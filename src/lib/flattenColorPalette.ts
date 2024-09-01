// @ts-expect-error
import flattenColorPalette_ from "tailwindcss/lib/util/flattenColorPalette.js"

interface RecursiveStringRecord {
    [key: string]: string | RecursiveStringRecord
}

export const flattenColorPalette = (
    colors: RecursiveStringRecord,
): Record<string, string> => flattenColorPalette_(colors)
