/**
	* @param {number[]} values - a list of numbers to convert it to rem size
	* @returns {{}} '4.5': '1.125rem'
*/
const generateSpacing = (values) =>
{
	/** @type {{}} */
	const spacing = {}

	values.forEach(value => {
		spacing[value] = `${value / 4}rem`
	})

	return spacing
}

module.exports = {
  theme: {
    extend: {
			spacing: generateSpacing([
				4.5, 5.5, 6.5, 7.5, 8.5, 9.5,
				13, 15, 17, 18, 19, 21, 22, 23,
			]),
			minWidth: ({ theme }) => theme('spacing'),
			maxWidth: ({ theme }) => theme('spacing'),
			minHeight: ({ theme }) => theme('spacing'),
			maxHeight: ({ theme }) => theme('spacing'),
			zIndex: {
				1: '1',
				2: '2',
				3: '3',
				4: '4',
			},
			blur: {
				px: '1px',
				xs: '2px',
			},
			borderWidth: {
				3: '3px',
			},
			ringWidth: {
        3: '3px',
      },
			outlineOffset: {
				'-1': '-1px',
				'-2': '-2px',
				'-3': '-3px',
				'-4': '-4px',
			},
			fontSize: {
				'2xs': ['0.625rem', { lineHeight: '1' }],
			},
			letterSpacing: {
				'widest-2': '.25em',
				'widest-3': '.5em',
				'widest-4': '.75em',
				'widest-5': '1em',
			},
    },
  },
  plugins: [],
}
