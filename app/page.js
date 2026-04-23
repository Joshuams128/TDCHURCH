import { fetchWithTag } from '@/lib/sanity'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import { urlFor } from '@/lib/sanity'

export const dynamic = 'force-dynamic'

async function getSiteSettings() {
  const query = '*[_type == "siteSettings"][0]'
  return await fetchWithTag(query, 'sanity-siteSettings')
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
  return await fetchWithTag(query, 'sanity-homepage')
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
  return await fetchWithTag(query, 'sanity-schedule')
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

  const upcomingEvent = events && events.length > 0 ? events[0] : null

  return (
    <>
      <Header siteSettings={siteSettings} upcomingEvent={upcomingEvent} />
      <main>
        <Hero homepage={homepage} events={events} />
      </main>
    </>
  )
}
