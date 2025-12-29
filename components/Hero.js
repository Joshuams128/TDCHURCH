import { urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero({ homepage, events }) {
  // Determine video source
  const videoUrl = homepage?.heroVideoUrl
  const videoFile = homepage?.heroVideoFile?.asset?.url
  const videoSource = videoUrl || videoFile
  
  // Get poster image for video
  const posterImage = homepage?.heroImage ? urlFor(homepage.heroImage).width(1920).quality(75).url() : null

  return (
    <section className="hero">
      {/* Background Video */}
      {videoSource && (
        <div className="hero-background" style={{ backgroundColor: '#000' }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={posterImage}
            className="hero-video"
            style={{ opacity: 1 }}
          >
            <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {/* Fallback Background Image */}
      {!videoSource && homepage?.heroImage && (
        <div className="hero-background" style={{ position: 'relative', width: '100%', height: '100%' }}>
          <Image
            src={urlFor(homepage.heroImage).width(1920).quality(75).url()}
            alt={homepage.heroHeading || 'Hero background'}
            fill
            priority
            style={{ objectFit: 'cover' }}
            sizes="100vw"
            placeholder="blur"
            blurDataURL={urlFor(homepage.heroImage).width(20).quality(20).url()}
          />
        </div>
      )}

      {/* Dark Overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-content">
        {homepage?.heroHeading && (
          <h1 
            className="hero-heading"
            style={homepage?.heroHeadingFontSize ? { fontSize: homepage.heroHeadingFontSize } : {}}
          >
            {homepage.heroHeading}
          </h1>
        )}
        
        {homepage?.heroSubheading && (
          <div 
            className="hero-subheading"
            style={homepage?.heroSubheadingFontSize ? { fontSize: homepage.heroSubheadingFontSize } : {}}
          >
            {typeof homepage.heroSubheading === 'string' 
              ? homepage.heroSubheading 
              : <PortableText value={homepage.heroSubheading} />
            }
          </div>
        )}

        {homepage?.ctaButtonText && homepage?.ctaButtonLink && (
          <a href={homepage.ctaButtonLink} className="cta-button">
            {homepage.ctaButtonText}
          </a>
        )}
      </div>

      {/* Coming Up Events */}
      {events && events.length > 0 && (
        <div className="hero-events">
          <div className="hero-events-container">
            <h2 className="hero-events-title">COMING UP</h2>
            <div className="hero-events-scroll">
              {events.map((event) => (
                <Link key={event._id} href="/schedule" className="hero-event-card">
                  {event.image && (
                    <div className="hero-event-image">
                      <Image
                        src={urlFor(event.image).width(80).height(80).quality(85).url()}
                        alt={event.eventTitle}
                        width={40}
                        height={40}
                        style={{ objectFit: 'cover', borderRadius: '50%' }}
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="hero-event-content">
                    <h3 className="hero-event-title">{event.eventTitle}</h3>
                    {event.eventDate && (
                      <p className="hero-event-date">
                        {(() => {
                          const [year, month, day] = event.eventDate.split('-').map(Number)
                          const date = new Date(year, month - 1, day)
                          return date.toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                          })
                        })()}
                      </p>
                    )}
                    {event.eventTime && (
                      <p className="hero-event-time">{event.eventTime}</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
