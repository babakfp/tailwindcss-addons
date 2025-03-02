/** @type {import("prettier").Config & import("prettier-plugin-svelte").PluginConfig & import("@ianvs/prettier-plugin-sort-imports").PluginConfig} */
export default {
    semi: false,
    tabWidth: 4,
    plugins: [
        "prettier-plugin-svelte",
        "@ianvs/prettier-plugin-sort-imports",
        "prettier-plugin-tailwindcss",
    ],
}
