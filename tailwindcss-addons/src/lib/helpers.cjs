/** @type {string[]} */
const cssTransformValue = [
  'translate(var(--tw-translate-x), var(--tw-translate-y))',
  'rotate(var(--tw-rotate))',
  'skewX(var(--tw-skew-x))',
  'skewY(var(--tw-skew-y))',
  'scaleX(var(--tw-scale-x))',
  'scaleY(var(--tw-scale-y))',
].join(' ')

/**
 * @param {string} property - CSS property name
 * @param {string} value - CSS property value
 * @returns {object} - { <prefix>-<property>: <value>, ... }
**/
const createBrowserCompatibleValues = (property, value) =>
{
	const result = {}

	result[`-o-${property}`] = value
	result[`-moz-${property}`] = value
	result[`-khtml-${property}`] = value
	result[`-webkit-${property}`] = value

	return result
}

/** @param {any} value */
const isObject = (value) => {
	if ( (typeof value === 'object') && (!Array.isArray(value)) && (value !== null) ) {
		return true
	}
	return false
}

/**
	* @param {object} first
	* @param {object} second
*/
const deepMerge = (target, source) => {
  // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
  for (const key of Object.keys(source)) {
    if (source[key] instanceof Object) Object.assign(source[key], deepMerge(target[key], source[key]))
  }
  // Join `target` and modified `source`
  Object.assign(target || {}, source)
  return target
}

module.exports = {
	isObject,
	deepMerge,
	cssTransformValue,
	createBrowserCompatibleValues,
}
