const plugin = require("tailwindcss/plugin")

module.exports = plugin(({ matchVariant }) => {
	matchVariant(
		"not",
		value => {
			if (value === "first") return "&:not(:first-child)"
			if (value === "last") return "&:not(:last-child)"
			if (value === "first-of-type") return "&:not(:first-of-type)"
			if (value === "last-of-type") return "&:not(:last-of-type)"
			return `&:not(${value})`
		},
		{
			values: {
				first: "first",
				last: "last",
				"first-of-type": "first-of-type",
				"last-of-type": "last-of-type",
			},
		}
	)
})
