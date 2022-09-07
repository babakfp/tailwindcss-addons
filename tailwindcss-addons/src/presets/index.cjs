module.exports = {
  theme: {
    extend: {
			spacing: {
				4.5: '1.125rem', // 18px
				5.5: '1.375rem', // 22px
				6.5: '1.625rem', // 26px
				7.5: '1.875rem', // 30px
				8.5: '2.125rem', // 34px
				9.5: '2.375rem', // 38px
				13: '3.25rem', // 52px
				15: '3.75rem', // 60px
				17: '4.25rem', // 68px
				18: '4.5rem', // 72px
				19: '4.75rem', // 76px
				22: '5.5rem', // 88px
			},
			minWidth: ({ theme }) => (theme('spacing')),
			maxWidth: ({ theme }) => (theme('spacing')),
			minHeight: ({ theme }) => (theme('spacing')),
			maxHeight: ({ theme }) => (theme('spacing')),
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
