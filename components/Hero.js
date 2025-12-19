import { urlFor } from '@/lib/sanity'

export default function Hero({ homepage }) {
  // Determine video source
  const videoUrl = homepage?.heroVideoUrl
  const videoFile = homepage?.heroVideoFile?.asset?.url
  const videoSource = videoUrl || videoFile

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
            className="hero-video"
          >
            <source src={videoSource} />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {/* Fallback Background Image */}
      {!videoSource && homepage?.heroImage && (
        <div
          className="hero-background"
          style={{
            backgroundImage: `url(${urlFor(homepage.heroImage).url()})`,
          }}
        />
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
    </section>
  )
}
