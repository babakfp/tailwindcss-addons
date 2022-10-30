/**
 * @param {string} property - CSS property name
 * @param {string} value - CSS property value
 * @returns {{string: string}} - { <prefix>-<property>: <value>, ... }
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

module.exports = createBrowserCompatibleValues
