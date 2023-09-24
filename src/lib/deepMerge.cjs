/**
 * Deeply merges two objects, combining their properties recursively.
 *
 * @param {object} target - The target object to merge into.
 * @param {object} source - The source object to merge from.
 * @returns {object} - The merged object.
 */
module.exports = function deepMerge(target, source) {
    for (const key of Object.keys(source)) {
        if (source[key] instanceof Object) {
            // If the property is an object, recursively merge it with the corresponding property in the target object.
            Object.assign(source[key], deepMerge(target[key], source[key]))
        }
    }

    // Merge the target object with the modified source object.
    Object.assign(target || {}, source)
    return target
}
