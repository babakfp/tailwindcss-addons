// @ts-check
import starlight from "@astrojs/starlight"
import svelte from "@astrojs/svelte"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"

// TODO: https://github.com/expressive-code/expressive-code/issues/250

export default defineConfig({
    integrations: [
        starlight({
            title: "Tailwind CSS Addons",
            social: {
                github: "https://github.com/babakfp/tailwindcss-addons",
            },
            sidebar: [
                {
                    label: "Get Started",
                    slug: "", // "/"
                },
                {
                    label: "Preflight",
                    autogenerate: { directory: "preflight" },
                },
                {
                    label: "Theme",
                    autogenerate: { directory: "theme" },
                },
                {
                    label: "Utilities",
                    autogenerate: { directory: "utilities" },
                },
                {
                    label: "Variants",
                    autogenerate: { directory: "variants" },
                },
                {
                    slug: "changelog",
                },
            ],
            customCss: [
                "@fontsource-variable/jost",
                "@fontsource-variable/jetbrains-mono",
                "./src/styles/global.css",
            ],
            components: {
                ThemeSelect: "./src/components/ThemeSelect.astro",
            },
            editLink: {
                baseUrl:
                    "https://github.com/babakfp/tailwindcss-addons/edit/main/package",
            },
            lastUpdated: true,
        }),
        svelte(),
    ],
    vite: {
        plugins: [tailwindcss()],
    },
})
