import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'ypqqklmz',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

// Helper functions for fetching with revalidation tags
export async function fetchWithTag(query, tag, params = {}) {
  return await client.fetch(
    query,
    params,
    {
      next: {
        tags: [tag],
      },
    }
  )
}
