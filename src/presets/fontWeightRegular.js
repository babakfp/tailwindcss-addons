import { fontWeight } from 'tailwindcss/defaultTheme.js'

export default {
    fontWeight: renameKey(fontWeight, {
        normal: 'regular',
    })
}

/**
 * Renames the keys of an object type.
 * @param {object} source - The object that you want to change it's key name
 * @param {object} guide - { OLD_KEY_NAME: NEW_KEY_NAME }
 * @returns {object}
 */
function renameKey(source, guide) {
    // [ [ KEY, VALUE ] ]
    source = Object.entries(source)
    source = source.map(([ key, value ]) => [guide[key] || key, value])
    source = Object.fromEntries(source)
    return source
}
