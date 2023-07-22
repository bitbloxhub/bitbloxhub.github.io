import { defineConfig, presetWind, presetIcons, presetWebFonts } from "unocss"
import extractorSvelte from "@unocss/extractor-svelte"
import transformerDirectives from "@unocss/transformer-directives"

export default defineConfig({
	extractors: [extractorSvelte()],
	presets: [
		presetWind({
			dark: "media"
		}),
		presetIcons({}),
		presetWebFonts({
			provider: "google",
			fonts: {
				sans: "Roboto",
				mono: "Fira Code",
			},
		})
	],
	transformers: [transformerDirectives()],
	preflights: [
		{
			getCSS: () => `
				html {
					font-family: "Roboto",ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
				}
				
				code,
				kbd,
				samp,
				pre {
					font-family: "Fira Code",ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
				}
			`
		}
	]
})