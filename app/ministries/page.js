import { fetchWithTag, urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import Header from '@/components/Header'
import Image from 'next/image'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Ministries | TD Church',
  description: 'Explore the various ministries and programs available at TD Church.',
}

async function getSiteSettings() {
  const query = '*[_type == "siteSettings"][0]'
  return await fetchWithTag(query, 'sanity-siteSettings')
}

async function getMinistries() {
  const query = '*[_type == "ministries"][0]'
  return await fetchWithTag(query, 'sanity-ministries')
}

async function getUpcomingEvent() {
  const query = `*[_type == "schedule" && showOnHomepage == true] | order(eventDate asc) [0] {
    eventTitle,
    eventDate,
    eventTime
  }`
  return await fetchWithTag(query, 'sanity-schedule')
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
        {/* Intro Section */}
        <section className="ministries-intro">
          <div className="ministries-intro-container">
            <span className="section-eyebrow">{ministries?.eyebrow || 'Find Your People'}</span>
            {ministries?.heading ? (
              <h1 className="section-intro-heading">{ministries.heading}</h1>
            ) : (
              <h1 className="section-intro-heading">Discover Your Place</h1>
            )}
            <span className="divider-accent"></span>
            {ministries?.subheading ? (
              <div className="page-subheading">
                <PortableText value={ministries.subheading} />
              </div>
            ) : (
              <p className="section-intro-text">
                Church is more than a Sunday service — it's a family.
                Our ministries are the places we grow together, serve together,
                and live out our faith in real community.
              </p>
            )}
          </div>
        </section>

        {/* Scripture Callout */}
        {(ministries?.scriptureText || ministries?.scriptureReference) && (
          <section className="scripture-callout subtle">
            <div className="scripture-callout-container">
              {ministries?.scriptureText && (
                <p className="scripture-text">{ministries.scriptureText}</p>
              )}
              {ministries?.scriptureReference && (
                <span className="scripture-reference">{ministries.scriptureReference}</span>
              )}
            </div>
          </section>
        )}

        {/* Ministry Grid */}
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

        {/* Closing Callout */}
        {(ministries?.closingText || ministries?.closingLabel) && (
          <section className="scripture-callout">
            <div className="scripture-callout-container">
              {ministries?.closingText && (
                <p className="scripture-text">{ministries.closingText}</p>
              )}
              {ministries?.closingLabel && (
                <span className="scripture-reference">{ministries.closingLabel}</span>
              )}
            </div>
          </section>
        )}
      </main>
    </>
  )
}
