// @ts-check
import starlight from "@astrojs/starlight"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"

// TODO: https://github.com/expressive-code/expressive-code/issues/250

export default defineConfig({
    site: "https://tailwindcss-addons.vercel.app",
    integrations: [
        starlight({
            title: "Tailwind CSS Addons",
            social: [
                {
                    icon: "github",
                    label: "GitHub",
                    href: "https://github.com/babakfp/tailwindcss-addons",
                },
            ],
            sidebar: [
                {
                    label: "Get Started",
                    slug: "", // "/"
                },
                {
                    label: "Preflight",
                    items: [{ autogenerate: { directory: "preflight" } }],
                },
                {
                    label: "Theme",
                    items: [{ autogenerate: { directory: "theme" } }],
                },
                {
                    label: "Utilities",
                    items: [{ autogenerate: { directory: "utilities" } }],
                },
                {
                    label: "Variants",
                    items: [{ autogenerate: { directory: "variants" } }],
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
                ThemeProvider: "./src/components/ThemeProvider.astro",
            },
            editLink: {
                baseUrl:
                    "https://github.com/babakfp/tailwindcss-addons/edit/main/docs",
            },
            lastUpdated: true,
        }),
    ],
    vite: {
        plugins: [tailwindcss()],
    },
})
