import { defineConfig } from "astro/config"

import svelte from "@astrojs/svelte"
import UnoCSS from "unocss/astro"
import mdx from "@astrojs/mdx"
import prefetch from "@astrojs/prefetch"

// https://astro.build/config
export default defineConfig({
	site: "https://bitbloxhub.github.io",
	integrations: [
		svelte(),
		UnoCSS(),
		mdx(),
		prefetch()
	],
	experimental: {
		viewTransitions: true
	}
})
