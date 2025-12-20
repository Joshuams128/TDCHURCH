import { client, urlFor } from '@/lib/sanity'
import Header from '@/components/Header'
import Image from 'next/image'

async function getSiteSettings() {
  const query = '*[_type == "siteSettings"][0]'
  return await client.fetch(query)
}

async function getSunday() {
  const query = '*[_type == "sunday"][0]'
  return await client.fetch(query)
}

export default async function SundayPage() {
  const [siteSettings, sunday] = await Promise.all([
    getSiteSettings(),
    getSunday(),
  ])

  return (
    <>
      <Header siteSettings={siteSettings} />
      <main className="sunday-page">
        {/* Hero Section */}
        <section className="sunday-hero">
          <div className="sunday-hero-container">
            <div className="sunday-hero-left">
              {sunday?.heading && (
                <h1 className="sunday-main-heading">{sunday.heading}</h1>
              )}
              {sunday?.description && (
                <p className="sunday-description">{sunday.description}</p>
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
                    <div className="sermon-icon">
                      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                        <path
                          d="M30 50C41.0457 50 50 41.0457 50 30C50 18.9543 41.0457 10 30 10C18.9543 10 10 18.9543 10 30C10 41.0457 18.9543 50 30 50Z"
                          fill="white"
                        />
                        <path d="M25 20L40 30L25 40V20Z" fill="black" />
                      </svg>
                    </div>
                    <div className="sermon-label">SUNDAY PLAYBACK</div>
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

        {/* Locations Section */}
        {sunday?.location && sunday.location.length > 0 && (
          <section className="locations-section">
            <h2 className="locations-heading">OUR LOCATION</h2>
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
                    <p className="location-address">{location.address}</p>
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
                {sunday?.kidsHeading && (
                  <h2 className="sunday-kids-heading">{sunday.kidsHeading}</h2>
                )}
                {sunday?.kidsDescription && (
                  <p className="sunday-kids-description">{sunday.kidsDescription}</p>
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
      </main>
    </>
  )
}
