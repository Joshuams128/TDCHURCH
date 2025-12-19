import { client, urlFor } from '@/lib/sanity'
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
        {/* Hero Section with Image */}
        {about?.heroImage && (
          <section className="about-hero-section">
            <div className="about-hero-image-container">
              <Image
                src={urlFor(about.heroImage).url()}
                alt={about.heroHeading || 'About Us'}
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
              {about?.heroHeading && (
                <div className="about-hero-overlay">
                  <h1 className="about-hero-title">{about.heroHeading}</h1>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Mission Statement Section */}
        {about?.missionStatement && (
          <section className="about-mission-statement">
            <div className="about-statement-container">
              <p className="about-statement-text">{about.missionStatement}</p>
            </div>
          </section>
        )}

        {/* Welcome Section - Image Left, Text Right */}
        {(about?.welcomeImage || about?.welcomeHeading) && (
          <section className="about-welcome-section">
            <div className="about-welcome-container">
              {about?.welcomeImage && (
                <div className="about-welcome-image">
                  <Image
                    src={urlFor(about.welcomeImage).url()}
                    alt={about.welcomeHeading || 'Welcome'}
                    width={600}
                    height={600}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              )}
              <div className="about-welcome-content">
                {about?.welcomeHeading && (
                  <h2 className="about-welcome-heading">{about.welcomeHeading}</h2>
                )}
                {about?.welcomeText && (
                  <p className="about-welcome-text">{about.welcomeText}</p>
                )}
                {about?.welcomeButtonText && about?.welcomeButtonLink && (
                  <a href={about.welcomeButtonLink} className="about-welcome-button">
                    {about.welcomeButtonText}
                  </a>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Pastors Section */}
        {about?.pastors && about.pastors.length > 0 && (
          <section className="about-pastors-section">
            <div className="about-pastors-container">
              <h2 className="about-section-title">OUR PASTORS</h2>
              <div className="about-pastors-grid">
                {about.pastors.map((pastor, index) => (
                  <div key={index} className="about-pastor-card">
                    {pastor.image && (
                      <div className="about-pastor-image">
                        <Image
                          src={urlFor(pastor.image).url()}
                          alt={pastor.name || 'Pastor'}
                          width={400}
                          height={500}
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    )}
                    <div className="about-pastor-info">
                      {pastor.name && (
                        <h3 className="about-pastor-name">{pastor.name}</h3>
                      )}
                      {pastor.title && (
                        <p className="about-pastor-title">{pastor.title}</p>
                      )}
                      {pastor.bio && (
                        <p className="about-pastor-bio">{pastor.bio}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Our Mission Section */}
        {about?.missionTitle && (
          <section className="about-mission-section">
            <div className="about-mission-container">
              <h2 className="about-section-title">{about.missionTitle}</h2>
              {about?.missionContent && (
                <div className="about-mission-box">
                  <p>{about.missionContent}</p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Our Vision Section */}
        {about?.visionTitle && (
          <section className="about-vision-section">
            <div className="about-vision-container">
              <h2 className="about-section-title">{about.visionTitle}</h2>
              {about?.visionItems && about.visionItems.length > 0 && (
                <div className="about-vision-grid">
                  {about.visionItems.map((item, index) => (
                    <div key={index} className="about-vision-card">
                      {item.heading && (
                        <h3 className="about-vision-heading">{item.heading}</h3>
                      )}
                      {item.text && (
                        <p className="about-vision-text">{item.text}</p>
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
