import rss, { pagesGlobToRssItems } from "@astrojs/rss"

export async function get() {
	return rss({
		title: "bitbloxhub's blog",
		description: "a blog i might write stuff on",
		site: "https://bitbloxhub.github.io",
		items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
		customData: `<language>en-us</language>`
	})
}