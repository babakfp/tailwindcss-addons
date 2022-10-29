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

	result[`-webkit-${property}`] = value
	result[`-khtml-${property}`] = value
	result[`-moz-${property}`] = value
	result[`-o-${property}`] = value
	result[`${property}`] = value

	return result
}


/**
 * @param {string} className - CSS class attribute name (as prefix)
 * @param {string} property - CSS property name
 * @param {array} values - CSS property value
 * @param {boolean} browserCompatible - Create browser compatible properties or not
 * @returns {object} - { <className>: { <property>: <value> }, ... } OR { <className>: { <prefix>-<property>: <value> }, ... }
**/
const createClass = (className, property, values, browserCompatible) =>
{
	const result = {}

	values.forEach(value => {
		if (browserCompatible) {
			result[`.${className}-${value}`] = createBrowserCompatibleValues(property, value)
		} else {
			result[`.${className}-${value}`] = {}
			result[`.${className}-${value}`][property] = value
		}
	})

	return result
}

/** @param {any} value */
const isObject = (value) => {
	if (
    typeof value === 'object' &&
    !Array.isArray(value) &&
    value !== null
	) {
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
	createClass,
	cssTransformValue,
	createBrowserCompatibleValues,
}
