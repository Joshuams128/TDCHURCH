import { client, urlFor } from '@/lib/sanity'
import Header from '@/components/Header'
import Image from 'next/image'

async function getSiteSettings() {
  const query = '*[_type == "siteSettings"][0]'
  return await client.fetch(query)
}

async function getServices() {
  const query = '*[_type == "services"][0]'
  return await client.fetch(query)
}

export default async function ServicesPage() {
  const [siteSettings, services] = await Promise.all([
    getSiteSettings(),
    getServices(),
  ])

  return (
    <>
      <Header siteSettings={siteSettings} />
      <main className="services-page">
        {/* Hero Section */}
        <section className="services-hero">
          <div className="services-hero-content">
            <div className="services-text">
              {services?.heading && (
                <h1 className="services-heading">{services.heading}</h1>
              )}
              {services?.subheading && (
                <p className="services-subheading">{services.subheading}</p>
              )}
            </div>
            {services?.image && (
              <div className="services-image">
                <Image
                  src={urlFor(services.image).url()}
                  alt={services.heading || 'Services'}
                  width={600}
                  height={400}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            )}
          </div>
        </section>

        {/* Service Sections */}
        {services?.sections && services.sections.length > 0 && (
          <section className="service-sections">
            {services.sections.map((section, index) => (
              <div
                key={index}
                className={`service-section ${
                  index % 2 === 0 ? 'text-left' : 'text-right'
                }`}
              >
                <div className="service-content">
                  <div className="service-text">
                    <h2>{section.heading}</h2>
                    <p>{section.description}</p>
                  </div>
                  {section.image && (
                    <div className="service-image">
                      <Image
                        src={urlFor(section.image).url()}
                        alt={section.heading || 'Service'}
                        width={600}
                        height={400}
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </section>
        )}
      </main>
    </>
  )
}
