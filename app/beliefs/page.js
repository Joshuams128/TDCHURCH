import { client, urlFor } from '@/lib/sanity'
import Header from '@/components/Header'
import Image from 'next/image'

async function getSiteSettings() {
  const query = '*[_type == "siteSettings"][0]'
  return await client.fetch(query)
}

async function getBeliefs() {
  const query = '*[_type == "beliefs"][0]'
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

export default async function BeliefsPage() {
  const [siteSettings, beliefs, upcomingEvent] = await Promise.all([
    getSiteSettings(),
    getBeliefs(),
    getUpcomingEvent(),
  ])

  return (
    <>
      <Header siteSettings={siteSettings} upcomingEvent={upcomingEvent} />
      <main className="beliefs-page">
        {/* Hero Section */}
        {beliefs?.heroHeading && (
          <section className="beliefs-hero">
            {beliefs?.heroImage && (
              <div className="beliefs-hero-image">
                <Image
                  src={urlFor(beliefs.heroImage).url()}
                  alt="What We Believe"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
                <div className="beliefs-hero-overlay" />
              </div>
            )}
            <div className="beliefs-hero-content">
              <h1 className="beliefs-hero-heading">{beliefs.heroHeading}</h1>
            </div>
          </section>
        )}

        {/* General Rules of Conduct */}
        {beliefs?.conductHeading && (
          <section className="beliefs-conduct-section">
            <div className="beliefs-conduct-container">
              <h2 className="beliefs-conduct-heading">{beliefs.conductHeading}</h2>
              {beliefs?.conductIntro && (
                <p className="beliefs-conduct-intro">{beliefs.conductIntro}</p>
              )}
              {beliefs?.conductRules && beliefs.conductRules.length > 0 && (
                <ol className="beliefs-conduct-list">
                  {beliefs.conductRules.map((item, index) => (
                    <li key={index} className="beliefs-conduct-item">
                      {item.rule}
                    </li>
                  ))}
                </ol>
              )}
            </div>
          </section>
        )}

        {/* Statement of Faith */}
        {beliefs?.faithHeading && (
          <section className="beliefs-faith-section">
            <div className="beliefs-faith-container">
              <h2 className="beliefs-faith-heading">{beliefs.faithHeading}</h2>
              {beliefs?.faithStatements && beliefs.faithStatements.length > 0 && (
                <div className="beliefs-faith-grid">
                  {beliefs.faithStatements.map((statement, index) => (
                    <div key={index} className="beliefs-faith-card">
                      <h3 className="beliefs-faith-title">{statement.title}</h3>
                      <p className="beliefs-faith-description">{statement.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}
      </main>
    </>
  )
}
