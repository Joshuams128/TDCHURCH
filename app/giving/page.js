import { client } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import Header from '@/components/Header'

async function getSiteSettings() {
  const query = '*[_type == "siteSettings"][0]'
  return await client.fetch(query)
}

async function getGiving() {
  const query = '*[_type == "giving"][0]'
  return await client.fetch(query)
}

export default async function GivingPage() {
  const [siteSettings, giving] = await Promise.all([
    getSiteSettings(),
    getGiving(),
  ])

  return (
    <>
      <Header siteSettings={siteSettings} />
      <main className="content-page">
        <section className="content-hero">
          <div className="content-container">
            {giving?.heading && (
              <h1 className="page-heading">{giving.heading}</h1>
            )}
            {giving?.content && (
              <div className="page-content">
                <PortableText value={giving.content} />
              </div>
            )}
          </div>
        </section>

        {giving?.givingOptions && giving.givingOptions.length > 0 && (
          <section className="giving-options">
            <div className="options-container">
              {giving.givingOptions.map((option, index) => (
                <div key={index} className="giving-card">
                  <h3>{option.title}</h3>
                  <p>{option.description}</p>
                  {option.buttonText && option.buttonLink && (
                    <a href={option.buttonLink} className="giving-button">
                      {option.buttonText}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  )
}
