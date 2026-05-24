import { fetchWithTag, urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import Header from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Building Fund | TD Church',
  description: 'Support the TD Church building fund initiative and help us grow our community space.',
}

async function getSiteSettings() {
  const query = '*[_type == "siteSettings"][0]'
  return await fetchWithTag(query, 'sanity-siteSettings')
}

async function getBuildingFund() {
  const query = '*[_type == "buildingFund"][0]'
  return await fetchWithTag(query, 'sanity-buildingFund')
}

async function getUpcomingEvent() {
  const query = `*[_type == "schedule" && showOnHomepage == true] | order(eventDate asc) [0] {
    eventTitle,
    eventDate,
    eventTime
  }`
  return await fetchWithTag(query, 'sanity-schedule')
}

export default async function BuildingFundPage() {
  const [siteSettings, buildingFund, upcomingEvent] = await Promise.all([
    getSiteSettings(),
    getBuildingFund(),
    getUpcomingEvent(),
  ])

  return (
    <>
      <Header siteSettings={siteSettings} upcomingEvent={upcomingEvent} />
      <main className="building-fund-page">
        {/* Hero Section */}
        <section className="building-fund-hero">
          <div className="building-fund-hero-container">
            <div className="building-fund-hero-content">
              <span className="section-eyebrow">{buildingFund?.eyebrow || 'Build the House'}</span>
              {buildingFund?.heading && (
                <h1 className="building-fund-heading">{buildingFund.heading}</h1>
              )}
              <span className="divider-accent left"></span>

              {buildingFund?.content ? (
                <div className="building-fund-text">
                  <PortableText value={buildingFund.content} />
                </div>
              ) : (
                <div className="building-fund-text">
                  <p>
                    We believe God has called us to build a place where the next generation
                    can encounter Him — a home for worship, community, and life change.
                  </p>
                  <p>
                    <strong>Every brick is a story. Every seat is a soul. Every gift moves us closer.</strong>
                  </p>
                </div>
              )}

              {buildingFund?.buttonText && buildingFund?.buttonLink && (
                <Link href={buildingFund.buttonLink} className="building-fund-button">
                  {buildingFund.buttonText}
                </Link>
              )}
            </div>

            <div className="building-fund-hero-image">
              {buildingFund?.image && (
                <Image
                  src={urlFor(buildingFund.image).width(800).quality(90).url()}
                  alt={buildingFund.heading || 'Building Fund'}
                  width={800}
                  height={600}
                  style={{ objectFit: 'cover', borderRadius: '12px' }}
                  priority
                />
              )}
            </div>
          </div>
        </section>

        {/* Progress */}
        {buildingFund?.goalAmount && buildingFund?.currentAmount && (
          <section className="building-fund-progress">
            <div className="building-fund-progress-container">
              <div className="progress-stats">
                <div className="stat">
                  <span className="stat-value">${buildingFund.currentAmount?.toLocaleString()}</span>
                  <span className="stat-label">Raised</span>
                </div>
                <div className="stat">
                  <span className="stat-value">${buildingFund.goalAmount?.toLocaleString()}</span>
                  <span className="stat-label">Goal</span>
                </div>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: `${(buildingFund.currentAmount / buildingFund.goalAmount) * 100}%`
                  }}
                />
              </div>
            </div>
          </section>
        )}

        {/* Scripture Verse Section */}
        {(buildingFund?.verseText || buildingFund?.verseReference) && (
          <section className="bf-verse-section">
            <div className="bf-verse-container">
              {buildingFund?.verseText && (
                <p className="bf-verse-text">{buildingFund.verseText}</p>
              )}
              {buildingFund?.verseReference && (
                <span className="bf-verse-reference">{buildingFund.verseReference}</span>
              )}
            </div>
          </section>
        )}

        {/* Tagline */}
        {buildingFund?.tagline && (
          <section className="building-fund-tagline">
            <h2>{buildingFund.tagline}</h2>
          </section>
        )}

        {/* Second Section */}
        {(buildingFund?.heading2 || buildingFund?.content2 || buildingFund?.image2) && (
          <section className="building-fund-section-reverse">
            <div className="building-fund-section-container">
              <div className="building-fund-section-image">
                {buildingFund?.image2 && (
                  <Image
                    src={urlFor(buildingFund.image2).width(800).quality(90).url()}
                    alt={buildingFund.heading2 || 'Section Image'}
                    width={800}
                    height={600}
                    style={{ objectFit: 'cover', borderRadius: '12px' }}
                  />
                )}
              </div>

              <div className="building-fund-section-content">
                <span className="section-eyebrow">{buildingFund?.section2Eyebrow || 'Our Vision'}</span>
                {buildingFund?.heading2 && (
                  <h2 className="building-fund-section-heading">{buildingFund.heading2}</h2>
                )}
                {buildingFund?.content2 && (
                  <div className="building-fund-section-text">
                    <PortableText value={buildingFund.content2} />
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        {(buildingFund?.ctaHeading || buildingFund?.ctaContent) && (
          <section className="building-fund-cta">
            <div className="building-fund-cta-container">
              <span className="section-eyebrow">{buildingFund?.ctaEyebrow || 'Join the Movement'}</span>
              {buildingFund?.ctaHeading && (
                <h2 className="building-fund-cta-heading">{buildingFund.ctaHeading}</h2>
              )}

              {buildingFund?.ctaContent ? (
                <div className="building-fund-cta-text">
                  <PortableText value={buildingFund.ctaContent} />
                </div>
              ) : (
                <div className="building-fund-cta-text">
                  <p>
                    Together, we are building far more than a building — we're
                    building a legacy of faith, hope, and generations transformed by Jesus.
                    Will you stand with us?
                  </p>
                </div>
              )}

              {buildingFund?.ctaEmail && (
                <a href={`mailto:${buildingFund.ctaEmail}`} className="building-fund-email">
                  {buildingFund.ctaEmail}
                </a>
              )}

              {buildingFund?.ctaButtonText && (
                <Link href="/giving" className="building-fund-cta-button">
                  {buildingFund.ctaButtonText}
                </Link>
              )}
            </div>
          </section>
        )}
      </main>
    </>
  )
}
