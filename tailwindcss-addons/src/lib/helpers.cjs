/**
 * @param {String} property - CSS property name
 * @param {String} value - CSS property value
 * @return {Object} - { <prefix>-<property>: <value>, ... }
**/
const create_browser_compatible_values = ( property, value ) =>
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
 * @param {String} class_name - CSS class name (as prefix)
 * @param {String} property - CSS property name
 * @param {Array} values - CSS property value
 * @param {Boolean} browser_compatible - Create browser compatible properties or not
 * @return {Object} - { <class_name>: { <property>: <value> }, ... } OR { <class_name>: { <prefix>-<property>: <value> }, ... }
**/
const create_classes = ( class_name, property, values, browser_compatible ) =>
{
	const result = {}

	values.forEach(value => {
		if ( browser_compatible ) {
			result[`.${class_name}-${value}`] = create_browser_compatible_values(property, value)
		} else {
			result[`.${class_name}-${value}`] = {}
			result[`.${class_name}-${value}`][property] = value
		}
	})

	return result
}


let cssTransformValue = [
  'translate(var(--tw-translate-x), var(--tw-translate-y))',
  'rotate(var(--tw-rotate))',
  'skewX(var(--tw-skew-x))',
  'skewY(var(--tw-skew-y))',
  'scaleX(var(--tw-scale-x))',
  'scaleY(var(--tw-scale-y))',
].join(' ')


module.exports = {
	create_browser_compatible_values,
	create_classes,
	cssTransformValue,
}
