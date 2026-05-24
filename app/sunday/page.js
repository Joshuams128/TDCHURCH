import { fetchWithTag, urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import Header from '@/components/Header'
import Image from 'next/image'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Sunday Services | TD Church',
  description: 'Join us for Sunday worship services. Find service times, locations, and information about C3 Kids.',
}

async function getSiteSettings() {
  const query = '*[_type == "siteSettings"][0]'
  return await fetchWithTag(query, 'sanity-siteSettings')
}

async function getSunday() {
  const query = '*[_type == "sunday"][0]'
  return await fetchWithTag(query, 'sanity-sunday')
}

async function getUpcomingEvent() {
  const query = `*[_type == "schedule" && showOnHomepage == true] | order(eventDate asc) [0] {
    eventTitle,
    eventDate,
    eventTime
  }`
  return await fetchWithTag(query, 'sanity-schedule')
}

export default async function SundayPage() {
  const [siteSettings, sunday, upcomingEvent] = await Promise.all([
    getSiteSettings(),
    getSunday(),
    getUpcomingEvent(),
  ])

  const defaultExpectItems = [
    { icon: '♪', title: 'Worship', description: 'Heartfelt music that lifts your spirit and points your heart to Jesus.' },
    { icon: '✦', title: 'The Word', description: 'Practical, Bible-based teaching you can apply to real life this week.' },
    { icon: '♥', title: 'Community', description: "A warm welcome from a family that's genuinely glad you're here." },
    { icon: '★', title: 'Kids Program', description: 'Safe, fun environments where children learn about Jesus at their level.' },
  ]
  const expectItems = (sunday?.expectItems && sunday.expectItems.length > 0)
    ? sunday.expectItems
    : defaultExpectItems

  return (
    <>
      <Header siteSettings={siteSettings} upcomingEvent={upcomingEvent} />
      <main className="sunday-page">
        {/* Hero Section */}
        <section className="sunday-hero">
          <div className="sunday-hero-container">
            <div className="sunday-hero-left">
              <span className="sunday-eyebrow">{sunday?.eyebrow || 'This Sunday'}</span>
              {sunday?.heading && (
                <h1 className="sunday-main-heading">{sunday.heading}</h1>
              )}
              <span className="divider-accent left"></span>
              {sunday?.description ? (
                <div className="sunday-description">
                  <PortableText value={sunday.description} />
                </div>
              ) : (
                <div className="sunday-description">
                  <p>
                    Whether it's your first time or your hundredth, you're welcome here.
                    Come as you are — we can't wait to worship with you.
                  </p>
                </div>
              )}
            </div>

            <div className="sunday-hero-right">
              {sunday?.featuredSermon && (
                <div className="sermon-card">
                  {sunday.featuredSermon.image && (
                    <div className="sermon-image">
                      <Image
                        src={urlFor(sunday.featuredSermon.image).url()}
                        alt={sunday.featuredSermon.preacher || 'Sermon'}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  )}
                  <div className="sermon-content">
                    <span className="sermon-label">Latest Message</span>
                    <h3 className="sermon-preacher">
                      {sunday.featuredSermon.preacher}
                    </h3>
                    {sunday.featuredSermon.date && (
                      <div className="sermon-date">
                        {new Date(sunday.featuredSermon.date).toLocaleDateString(
                          'en-US',
                          {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                          }
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="expect-section">
          <div className="expect-container">
            <div className="section-intro">
              <span className="section-eyebrow">{sunday?.expectEyebrow || 'First Time Here?'}</span>
              <h2 className="section-intro-heading">{sunday?.expectHeading || 'What to Expect'}</h2>
              <span className="divider-accent"></span>
              <p className="section-intro-text">
                {sunday?.expectDescription ||
                  "We've designed our Sunday gatherings to be welcoming, encouraging, and life-giving."}
              </p>
            </div>
            <div className="expect-grid">
              {expectItems.map((item, index) => (
                <div key={index} className="expect-card">
                  <div className="expect-icon">{item.icon || '✦'}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Locations Section */}
        {sunday?.location && sunday.location.length > 0 && (
          <section className="locations-section">
            <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center', marginBottom: '2rem' }}>
              <span className="section-eyebrow">{sunday?.locationEyebrow || 'Visit Us'}</span>
            </div>
            <h2 className="locations-heading" style={{ textAlign: 'center' }}>
              {sunday?.locationHeading || 'OUR LOCATION'}
            </h2>
            <div className="locations-grid">
              {sunday.location.map((location, index) => (
                <div key={index} className="location-card">
                  {location.image && (
                    <div className="location-image">
                      <Image
                        src={urlFor(location.image).url()}
                        alt={location.name || 'Location'}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  )}
                  <div className="location-info">
                    <h3>{location.name}</h3>
                    <div className="location-address">
                      <PortableText value={location.address} />
                    </div>
                    <p className="location-time">{location.serviceTime}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* C3 Kids Section */}
        {(sunday?.kidsHeading || sunday?.kidsDescription) && (
          <section className="sunday-kids-section">
            <div className="sunday-kids-container">
              <div className="sunday-kids-images">
                {sunday?.kidsImage1 && (
                  <div className="sunday-kids-image sunday-kids-image-1">
                    <Image
                      src={urlFor(sunday.kidsImage1).url()}
                      alt="C3 Kids"
                      width={350}
                      height={400}
                      style={{ objectFit: 'cover', borderRadius: '12px' }}
                    />
                  </div>
                )}
                {sunday?.kidsImage2 && (
                  <div className="sunday-kids-image sunday-kids-image-2">
                    <Image
                      src={urlFor(sunday.kidsImage2).url()}
                      alt="C3 Kids"
                      width={350}
                      height={400}
                      style={{ objectFit: 'cover', borderRadius: '12px' }}
                    />
                  </div>
                )}
                {sunday?.kidsImage3 && (
                  <div className="sunday-kids-image sunday-kids-image-3">
                    <Image
                      src={urlFor(sunday.kidsImage3).url()}
                      alt="C3 Kids"
                      width={350}
                      height={400}
                      style={{ objectFit: 'cover', borderRadius: '12px' }}
                    />
                  </div>
                )}
              </div>
              <div className="sunday-kids-content">
                <span className="section-eyebrow">{sunday?.kidsEyebrow || 'For the Whole Family'}</span>
                {sunday?.kidsHeading && (
                  <h2 className="sunday-kids-heading">{sunday.kidsHeading}</h2>
                )}
                <span className="divider-accent left"></span>
                {sunday?.kidsDescription && (
                  <div className="sunday-kids-description">
                    <PortableText value={sunday.kidsDescription} />
                  </div>
                )}
                {sunday?.kidsButtonText && sunday?.kidsButtonLink && (
                  <a href={sunday.kidsButtonLink} className="sunday-kids-button">
                    {sunday.kidsButtonText}
                  </a>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Closing Scripture */}
        {(sunday?.closingScriptureText || sunday?.closingScriptureReference) && (
          <section className="scripture-callout">
            <div className="scripture-callout-container">
              {sunday?.closingScriptureText && (
                <p className="scripture-text">{sunday.closingScriptureText}</p>
              )}
              {sunday?.closingScriptureReference && (
                <span className="scripture-reference">{sunday.closingScriptureReference}</span>
              )}
            </div>
          </section>
        )}
      </main>
    </>
  )
}
