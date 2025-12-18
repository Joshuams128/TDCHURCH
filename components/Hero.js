import { urlFor } from '@/lib/sanity'

export default function Hero({ homepage }) {
  return (
    <section className="hero">
      {/* Background Image */}
      {homepage?.heroImage && (
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
