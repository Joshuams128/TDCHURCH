import { client } from '@/lib/sanity'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import { urlFor } from '@/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'

async function getSiteSettings() {
  const query = '*[_type == "siteSettings"][0]'
  return await client.fetch(query)
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
  return await client.fetch(query)
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
  return await client.fetch(query)
}

export default async function Home() {
  const [siteSettings, homepage, events] = await Promise.all([
    getSiteSettings(),
    getHomepage(),
    getHomeEvents(),
  ])

  // Get video and image URLs for preloading
  const videoUrl = homepage?.heroVideoUrl || homepage?.heroVideoFile?.asset?.url
  const imageUrl = homepage?.heroImage ? urlFor(homepage.heroImage).width(1920).quality(80).url() : null

  return (
    <>
      {/* Preload critical resources */}
      {videoUrl && (
        <link rel="preload" as="video" href={videoUrl} />
      )}
      {imageUrl && (
        <link rel="preload" as="image" href={imageUrl} />
      )}
      
      <Header siteSettings={siteSettings} />
      <main>
        <Hero homepage={homepage} events={events} />
      </main>
    </>
  )
}
