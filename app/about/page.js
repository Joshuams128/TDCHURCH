import { client, urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import Header from '@/components/Header'
import Image from 'next/image'

async function getSiteSettings() {
  const query = '*[_type == "siteSettings"][0]'
  return await client.fetch(query)
}

async function getAbout() {
  const query = '*[_type == "about"][0]'
  return await client.fetch(query)
}

export default async function AboutPage() {
  const [siteSettings, about] = await Promise.all([
    getSiteSettings(),
    getAbout(),
  ])

  return (
    <>
      <Header siteSettings={siteSettings} />
      <main className="about-page">
        <section className="about-hero">
          <div className="about-hero-container">
            <div className="about-hero-left">
              {about?.heading && (
                <h1 className="about-heading">{about.heading}</h1>
              )}
              {about?.heading && (
                <p className="about-subheading">Learn more about our church</p>
              )}
            </div>
            {about?.image && (
              <div className="about-hero-image">
                <Image
                  src={urlFor(about.image).url()}
                  alt={about.heading || 'About Us'}
                  width={600}
                  height={400}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            )}
          </div>
        </section>

        {about?.content && (
          <section className="about-content-section">
            <div className="about-text-box">
              <PortableText value={about.content} />
            </div>
          </section>
        )}
      </main>
    </>
  )
}
