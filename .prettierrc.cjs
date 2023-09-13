module.exports = {
    semi: false,
    tabWidth: 4,
    arrowParens: "avoid",
    overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],
    plugins: [require("prettier-plugin-svelte")],
}
