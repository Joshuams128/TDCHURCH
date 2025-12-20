import { urlFor } from '@/lib/sanity'
import Image from 'next/image'

export default function Hero({ homepage, events }) {
  // Determine video source
  const videoUrl = homepage?.heroVideoUrl
  const videoFile = homepage?.heroVideoFile?.asset?.url
  const videoSource = videoUrl || videoFile
  
  // Get poster image for video
  const posterImage = homepage?.heroImage ? urlFor(homepage.heroImage).width(1920).quality(80).url() : null

  return (
    <section className="hero">
      {/* Background Video */}
      {videoSource && (
        <div className="hero-background">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={posterImage}
            className="hero-video"
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
            src={urlFor(homepage.heroImage).width(1920).quality(80).url()}
            alt={homepage.heroHeading || 'Hero background'}
            fill
            priority
            style={{ objectFit: 'cover' }}
            sizes="100vw"
          />
        </div>
      )}

      {/* Dark Overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-content">
        {homepage?.heroHeading && (
          <h1 className="hero-heading">{homepage.heroHeading}</h1>
        )}
        
        {homepage?.heroSubheading && (
          <p className="hero-subheading">{homepage.heroSubheading}</p>
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
                <div key={event._id} className="hero-event-card">
                  {event.image && (
                    <div className="hero-event-image">
                      <Image
                        src={urlFor(event.image).url()}
                        alt={event.eventTitle}
                        width={40}
                        height={40}
                        style={{ objectFit: 'cover', borderRadius: '50%' }}
                      />
                    </div>
                  )}
                  <div className="hero-event-content">
                    <h3 className="hero-event-title">{event.eventTitle}</h3>
                    {event.eventDate && event.eventType === 'special' && (
                      <p className="hero-event-date">
                        {new Date(event.eventDate).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
