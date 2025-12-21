import { client, urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import Header from '@/components/Header'
import Image from 'next/image'

export const metadata = {
  title: 'Ministries | TD Church',
  description: 'Explore the various ministries and programs available at TD Church.',
}

async function getSiteSettings() {
  const query = '*[_type == "siteSettings"][0]'
  return await client.fetch(query)
}

async function getMinistries() {
  const query = '*[_type == "ministries"][0]'
  return await client.fetch(query)
}

async function getUpcomingEvent() {
  const query = `*[_type == "schedule" && showOnHomepage == true] | order(eventDate asc) [0] {
    eventTitle,
    eventDate,
    eventTime
  }`
  return await client.fetch(query)
}

export default async function MinistriesPage() {
  const [siteSettings, ministries, upcomingEvent] = await Promise.all([
    getSiteSettings(),
    getMinistries(),
    getUpcomingEvent(),
  ])

  return (
    <>
      <Header siteSettings={siteSettings} upcomingEvent={upcomingEvent} />
      <main className="content-page">
        <section className="content-hero">
          <div className="content-container">
            {ministries?.heading && (
              <h1 className="page-heading">{ministries.heading}</h1>
            )}
            {ministries?.subheading && (
              <div className="page-subheading">
                <PortableText value={ministries.subheading} />
              </div>
            )}
          </div>
        </section>

        {ministries?.ministryList && ministries.ministryList.length > 0 && (
          <section className="ministry-grid">
            <div className="grid-container">
              {ministries.ministryList.map((ministry, index) => (
                <div key={index} className="ministry-card">
                  {ministry.image && (
                    <div className="ministry-image">
                      <Image
                        src={urlFor(ministry.image).url()}
                        alt={ministry.title || 'Ministry'}
                        width={400}
                        height={300}
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  )}
                  <div className="ministry-content">
                    <h3>{ministry.title}</h3>
                    <div>
                      <PortableText value={ministry.description} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  )
}
