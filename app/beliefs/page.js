import { client } from '@/lib/sanity'
import Header from '@/components/Header'

async function getSiteSettings() {
  const query = '*[_type == "siteSettings"][0]'
  return await client.fetch(query)
}

async function getBeliefs() {
  const query = '*[_type == "beliefs"][0]'
  return await client.fetch(query)
}

export default async function BeliefsPage() {
  const [siteSettings, beliefs] = await Promise.all([
    getSiteSettings(),
    getBeliefs(),
  ])

  return (
    <>
      <Header siteSettings={siteSettings} />
      <main className="content-page">
        <section className="content-hero">
          <div className="content-container">
            {beliefs?.heading && (
              <h1 className="page-heading">{beliefs.heading}</h1>
            )}
            {beliefs?.introduction && (
              <p className="page-intro">{beliefs.introduction}</p>
            )}
          </div>
        </section>

        {beliefs?.beliefs && beliefs.beliefs.length > 0 && (
          <section className="beliefs-list">
            <div className="beliefs-container">
              {beliefs.beliefs.map((belief, index) => (
                <div key={index} className="belief-item">
                  <h3>{belief.title}</h3>
                  <p>{belief.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  )
}
