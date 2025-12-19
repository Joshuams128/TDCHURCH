import { client } from '@/lib/sanity'
import Header from '@/components/Header'
import Hero from '@/components/Hero'

async function getSiteSettings() {
  const query = '*[_type == "siteSettings"][0]'
  return await client.fetch(query)
}

async function getHomepage() {
  const query = `*[_type == "homepage"][0]{
    ...,
    heroVideoFile{
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

  return (
    <>
      <Header siteSettings={siteSettings} />
      <main>
        <Hero homepage={homepage} />
      </main>
    </>
  )
}
