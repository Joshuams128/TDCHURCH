import { client } from '@/lib/sanity'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import { urlFor } from '@/lib/sanity'

// Enable ISR - revalidate every 60 seconds
export const revalidate = 60

async function getSiteSettings() {
  const query = '*[_type == "siteSettings"][0]'
  return await client.fetch(query, {}, { next: { revalidate: 3600 } }) // Cache for 1 hour
}

async function getHomepage() {
  const query = `*[_type == "homepage"][0]{
    ...,
    heroVideoFile{
      asset->
    },
    heroImage{
      asset->
    }
  }`
  return await client.fetch(query, {}, { next: { revalidate: 60 } })
}

async function getHomeEvents() {
  const query = `*[_type == "schedule" && showOnHomepage == true] | order(eventDate asc) {
    _id,
    eventTitle,
    eventType,
    eventDate,
    eventTime,
    location,
    description,
    additionalInfo,
    image
  }[0...6]`
  return await client.fetch(query, {}, { next: { revalidate: 300 } }) // Cache for 5 minutes
}

export async function generateMetadata() {
  const homepage = await getHomepage()
  const imageUrl = homepage?.heroImage ? urlFor(homepage.heroImage).width(1200).quality(85).url() : null

  return {
    title: homepage?.heroHeading || 'TD Church',
    description: homepage?.heroSubheading || 'Welcome to TD Church',
    openGraph: {
      title: homepage?.heroHeading || 'TD Church',
      description: homepage?.heroSubheading || 'Welcome to TD Church',
      images: imageUrl ? [{ url: imageUrl }] : [],
    },
  }
}

export default async function Home() {
  const [siteSettings, homepage, events] = await Promise.all([
    getSiteSettings(),
    getHomepage(),
    getHomeEvents(),
  ])

  return (
    <>
      <Header siteSettings={siteSettings} />
      <main>
        <Hero homepage={homepage} events={events} />
      </main>
    </>
  )
}
