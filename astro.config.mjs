import { defineConfig } from "astro/config"

import svelte from "@astrojs/svelte"
import UnoCSS from "unocss/astro"
import mdx from "@astrojs/mdx"
import { remarkReadingTime } from "./remark-reading-time.mjs"

// https://astro.build/config
export default defineConfig({
	site: "https://bitbloxhub.github.io",
	integrations: [
		svelte(),
		UnoCSS(),
		mdx()
	],
	experimental: {
		viewTransitions: true
	},
	trailingSlash: "always",
	markdown: {
		remarkPlugins: [remarkReadingTime]
	}
})
