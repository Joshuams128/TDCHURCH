import { client } from '@/lib/sanity'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import { urlFor } from '@/lib/sanity'

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

export default async function Home() {
  const [siteSettings, homepage] = await Promise.all([
    getSiteSettings(),
    getHomepage(),
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
        <Hero homepage={homepage} />
      </main>
    </>
  )
}
