/** @type {import("prettier").Config & import("@ianvs/prettier-plugin-sort-imports").PluginConfig} */
export default {
    semi: false,
    tabWidth: 4,
    experimentalTernaries: true,
    plugins: [
        "prettier-plugin-astro",
        "@ianvs/prettier-plugin-sort-imports",
        "prettier-plugin-tailwindcss",
    ],
}
