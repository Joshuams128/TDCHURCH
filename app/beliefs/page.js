import { fetchWithTag, urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import Header from '@/components/Header'
import Image from 'next/image'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'What We Believe | TD Church',
  description: 'Discover our beliefs, general rules of conduct, and statement of faith at TD Church.',
}

async function getSiteSettings() {
  const query = '*[_type == "siteSettings"][0]'
  return await fetchWithTag(query, 'sanity-siteSettings')
}

async function getBeliefs() {
  const query = '*[_type == "beliefs"][0]'
  return await fetchWithTag(query, 'sanity-beliefs')
}

async function getUpcomingEvent() {
  const query = `*[_type == "schedule" && showOnHomepage == true] | order(eventDate asc) [0] {
    eventTitle,
    eventDate,
    eventTime
  }`
  return await fetchWithTag(query, 'sanity-schedule')
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

        {/* Intro Section */}
        <section className="beliefs-intro-section">
          <div className="beliefs-intro-container">
            <span className="section-eyebrow">{beliefs?.introEyebrow || 'Our Foundation'}</span>
            <h2 className="section-intro-heading">
              {beliefs?.introHeading || 'Rooted in Christ. Anchored in Scripture.'}
            </h2>
            <span className="divider-accent"></span>
            <p className="section-intro-text">
              {beliefs?.introText ||
                'What we believe shapes how we live. These are the convictions that guide our church, our community, and our mission to share the love of Jesus with the world.'}
            </p>
          </div>
        </section>

        {/* Scripture Callout */}
        {(beliefs?.scriptureText || beliefs?.scriptureReference) && (
          <section className="scripture-callout subtle">
            <div className="scripture-callout-container">
              {beliefs?.scriptureText && (
                <p className="scripture-text">{beliefs.scriptureText}</p>
              )}
              {beliefs?.scriptureReference && (
                <span className="scripture-reference">{beliefs.scriptureReference}</span>
              )}
            </div>
          </section>
        )}

        {/* General Rules of Conduct */}
        {beliefs?.conductHeading && (
          <section className="beliefs-conduct-section">
            <div className="beliefs-conduct-container">
              <span className="section-eyebrow eyebrow-light">
                {beliefs?.conductEyebrow || 'How We Live'}
              </span>
              <h2 className="beliefs-conduct-heading">{beliefs.conductHeading}</h2>
              {beliefs?.conductIntro && (
                <div className="beliefs-conduct-intro">
                  <PortableText value={beliefs.conductIntro} />
                </div>
              )}
              {beliefs?.conductRules && beliefs.conductRules.length > 0 && (
                <ol className="beliefs-conduct-list beliefs-conduct-list-modern">
                  {beliefs.conductRules.map((item, index) => (
                    <li key={index} className="beliefs-conduct-item">
                      <PortableText value={item.rule} />
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
              <div className="section-intro">
                <span className="section-eyebrow">{beliefs?.faithEyebrow || 'What We Stand On'}</span>
                <h2 className="beliefs-faith-heading">{beliefs.faithHeading}</h2>
                <span className="divider-accent"></span>
              </div>
              {beliefs?.faithStatements && beliefs.faithStatements.length > 0 && (
                <div className="beliefs-faith-grid">
                  {beliefs.faithStatements.map((statement, index) => (
                    <div key={index} className="beliefs-faith-card">
                      <h3 className="beliefs-faith-title">{statement.title}</h3>
                      <div className="beliefs-faith-description">
                        <PortableText value={statement.description} />
                      </div>
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
