import { defineConfig } from "astro/config"

import svelte from "@astrojs/svelte"
import UnoCSS from "unocss/astro"

// https://astro.build/config
export default defineConfig({
	site: "https://bitbloxhub.github.io",
	integrations: [
		svelte(),
		UnoCSS()
	],
	experimental: {
		viewTransitions: true
	}
})
