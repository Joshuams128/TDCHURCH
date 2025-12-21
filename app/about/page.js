import { client, urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import Header from '@/components/Header'
import Image from 'next/image'

export const metadata = {
  title: 'About Us | TD Church',
  description: 'Learn about TD Church, our pastors, mission, vision, and connection to C3 Global.',
}

async function getSiteSettings() {
  const query = '*[_type == "siteSettings"][0]'
  return await client.fetch(query)
}

async function getAbout() {
  const query = '*[_type == "about"][0]'
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

export default async function AboutPage() {
  const [siteSettings, about, upcomingEvent] = await Promise.all([
    getSiteSettings(),
    getAbout(),
    getUpcomingEvent(),
  ])

  return (
    <>
      <Header siteSettings={siteSettings} upcomingEvent={upcomingEvent} />
      <main className="about-page">
        {/* Main Intro Section */}
        {(about?.mainHeading || about?.mainDescription || about?.mainImage) && (
          <section className="about-main-section">
            <div className="about-main-container">
              <div className="about-main-content">
                {about?.mainHeading && (
                  <h1 className="about-main-heading">{about.mainHeading}</h1>
                )}
                {about?.mainDescription && (
                  <div className="about-main-description">
                    <PortableText value={about.mainDescription} />
                  </div>
                )}
              </div>
              {about?.mainImage && (
                <div className="about-main-image">
                  <Image
                    src={urlFor(about.mainImage).url()}
                    alt={about.mainHeading || 'About Us'}
                    width={700}
                    height={650}
                    style={{ objectFit: 'cover', borderRadius: '8px' }}
                    priority
                  />
                </div>
              )}
            </div>
          </section>
        )}

        {/* Pastors Section */}
        {(about?.pastorsHeading || about?.pastorsText1 || about?.pastorsImage) && (
          <section className="about-pastors-section">
            <div className="about-pastors-container">
              <div className="about-pastors-content">
                {about?.pastorsHeading && (
                  <h2 className="about-pastors-heading">{about.pastorsHeading}</h2>
                )}
                {about?.pastorsText1 && (
                  <div className="about-pastors-text">
                    <PortableText value={about.pastorsText1} />
                  </div>
                )}
                {about?.pastorsText2 && (
                  <div className="about-pastors-text">
                    <PortableText value={about.pastorsText2} />
                  </div>
                )}
              </div>
              {about?.pastorsImage && (
                <div className="about-pastors-image">
                  <Image
                    src={urlFor(about.pastorsImage).url()}
                    alt={about.pastorsHeading || 'Our Pastors'}
                    width={700}
                    height={650}
                    style={{ objectFit: 'cover', borderRadius: '8px' }}
                  />
                </div>
              )}
            </div>
          </section>
        )}

        {/* C3 Global Section */}
        {(about?.c3GlobalHeading || about?.c3GlobalText1 || about?.c3GlobalImage) && (
          <section className="about-c3-section">
            <div className="about-c3-container">
              {about?.c3GlobalImage && (
                <div className="about-c3-image">
                  <Image
                    src={urlFor(about.c3GlobalImage).url()}
                    alt={about.c3GlobalHeading || 'C3 Global'}
                    width={700}
                    height={650}
                    style={{ objectFit: 'cover', borderRadius: '8px' }}
                  />
                </div>
              )}
              <div className="about-c3-content">
                {about?.c3GlobalHeading && (
                  <h2 className="about-c3-heading">{about.c3GlobalHeading}</h2>
                )}
                {about?.c3GlobalText1 && (
                  <div className="about-c3-text">
                    <PortableText value={about.c3GlobalText1} />
                  </div>
                )}
                {about?.c3GlobalText2 && (
                  <div className="about-c3-text">
                    <PortableText value={about.c3GlobalText2} />
                  </div>
                )}
                {about?.c3GlobalText3 && (
                  <div className="about-c3-text">
                    <PortableText value={about.c3GlobalText3} />
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Our Vision Section */}
        {(about?.visionHeading || about?.visionItems) && (
          <section className="about-vision-section">
            <div className="about-vision-container">
              <div className="about-vision-header">
                {about?.visionHeading && (
                  <h2 className="about-vision-heading">{about.visionHeading}</h2>
                )}
                {about?.visionSubheading && (
                  <p className="about-vision-subheading">{about.visionSubheading}</p>
                )}
              </div>
              {about?.visionItems && about.visionItems.length > 0 && (
                <div className="about-vision-grid">
                  {about.visionItems.map((item, index) => (
                    <div key={index} className="about-vision-card">
                      {item.title && (
                        <h3 className="about-vision-title">{item.title}</h3>
                      )}
                      {item.content && (
                        <div className="about-vision-content">
                          <PortableText value={item.content} />
                        </div>
                      )}
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
