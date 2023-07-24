import { z, defineCollection } from "astro:content"

const blogCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		pubDate: z.date(),
		description: z.string(),
		author: z.string(),
		minutesRead: z.string()
	})
})

export const collections = {
	"blog": blogCollection
}