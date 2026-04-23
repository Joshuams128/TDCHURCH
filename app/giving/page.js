import { fetchWithTag, urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import Header from '@/components/Header'
import Image from 'next/image'

export const metadata = {
  title: 'Giving | TD Church',
  description: 'Support TD Church through online giving, text giving, and other donation options.',
}

async function getSiteSettings() {
  const query = '*[_type == "siteSettings"][0]'
  return await fetchWithTag(query, 'sanity-siteSettings')
}

async function getGiving() {
  const query = `*[_type == "giving"][0]{
    ...,
    heroImage{
      asset->
    }
  }`
  return await fetchWithTag(query, 'sanity-giving')
}

async function getUpcomingEvent() {
  const query = `*[_type == "schedule" && showOnHomepage == true] | order(eventDate asc) [0] {
    eventTitle,
    eventDate,
    eventTime
  }`
  return await fetchWithTag(query, 'sanity-schedule')
}

export default async function GivingPage() {
  const [siteSettings, giving, upcomingEvent] = await Promise.all([
    getSiteSettings(),
    getGiving(),
    getUpcomingEvent(),
  ])

  return (
    <>
      <Header siteSettings={siteSettings} upcomingEvent={upcomingEvent} />
      <main className="content-page">
        <section className="giving-hero-section">
          <div className="giving-hero-container">
            <div className="giving-hero-content">
              {giving?.heading && (
                <h1 className="giving-hero-heading">{giving.heading}</h1>
              )}
              {giving?.content && (
                <div className="giving-hero-text">
                  <PortableText value={giving.content} />
                </div>
              )}
            </div>
            {giving?.heroImage && (
              <div className="giving-hero-image">
                <Image
                  src={urlFor(giving.heroImage).width(800).quality(90).url()}
                  alt={giving.heading || 'Giving'}
                  width={800}
                  height={600}
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>
            )}
          </div>
        </section>

        {giving?.givingOptions && giving.givingOptions.length > 0 && (
          <section className="giving-options">
            <div className="options-container">
              {giving.givingOptions.map((option, index) => (
                <div key={index} className="giving-card">
                  <h3>{option.title}</h3>
                  <p>{option.description}</p>
                  {option.buttonText && option.buttonLink && (
                    <a href={option.buttonLink} className="giving-button">
                      {option.buttonText}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  )
}
