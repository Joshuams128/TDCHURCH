import { fetchWithTag, urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import Header from '@/components/Header'
import Image from 'next/image'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Giving | TD Church',
  description: 'Support TD Church through online giving, text giving, and other donation options.',
}

async function getSiteSettings() {
  const query = '*[_type == "siteSettings"][0]'
  return await fetchWithTag(query, 'sanity-siteSettings')
}

async function getGiving() {
  const query = `*[_type == "giving"][0]{
    ...,
    heroImage{
      asset->
    }
  }`
  return await fetchWithTag(query, 'sanity-giving')
}

async function getUpcomingEvent() {
  const query = `*[_type == "schedule" && showOnHomepage == true] | order(eventDate asc) [0] {
    eventTitle,
    eventDate,
    eventTime
  }`
  return await fetchWithTag(query, 'sanity-schedule')
}

export default async function GivingPage() {
  const [siteSettings, giving, upcomingEvent] = await Promise.all([
    getSiteSettings(),
    getGiving(),
    getUpcomingEvent(),
  ])

  const defaultReasons = [
    {
      number: '1',
      title: 'An Act of Worship',
      text: "Every gift is a response to God's grace. It's how we honor Him with the resources He's entrusted to us.",
    },
    {
      number: '2',
      title: 'A Step of Faith',
      text: 'Generosity grows trust. Each time we give, we choose to believe God is faithful to provide for every need.',
    },
    {
      number: '3',
      title: 'A Life Changed',
      text: 'Your giving fuels ministry — people meeting Jesus, families finding hope, and our community being transformed.',
    },
  ]
  const reasons = (giving?.whyGiveReasons && giving.whyGiveReasons.length > 0)
    ? giving.whyGiveReasons
    : defaultReasons

  return (
    <>
      <Header siteSettings={siteSettings} upcomingEvent={upcomingEvent} />
      <main className="content-page">
        {/* Hero Section */}
        <section className="giving-hero-section">
          <div className="giving-hero-container">
            <div className="giving-hero-content">
              <span className="section-eyebrow">{giving?.eyebrow || 'Generosity'}</span>
              {giving?.heading && (
                <h1 className="giving-hero-heading">{giving.heading}</h1>
              )}
              <span className="divider-accent left"></span>
              {giving?.content ? (
                <div className="giving-hero-text">
                  <PortableText value={giving.content} />
                </div>
              ) : (
                <div className="giving-hero-text">
                  <p>
                    Giving is an act of worship. When we give, we declare that everything
                    we have comes from God, and we trust Him with our future. Your generosity
                    helps us reach more people, build the local church, and bring hope to our
                    community.
                  </p>
                  <p>
                    <strong>Thank you for partnering with us in the mission.</strong>
                  </p>
                </div>
              )}
            </div>
            {giving?.heroImage && (
              <div className="giving-hero-image">
                <Image
                  src={urlFor(giving.heroImage).width(800).quality(90).url()}
                  alt={giving.heading || 'Giving'}
                  width={800}
                  height={600}
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>
            )}
          </div>
        </section>

        {/* Why We Give Section */}
        <section className="reasons-section">
          <div className="reasons-container">
            <div className="section-intro">
              <span className="section-eyebrow eyebrow-light">
                {giving?.whyGiveEyebrow || 'Why We Give'}
              </span>
              <h2 className="section-intro-heading">
                {giving?.whyGiveHeading || 'More Than a Gift'}
              </h2>
              <p className="section-intro-text">
                {giving?.whyGiveDescription ||
                  "Giving isn't just about money — it's about trust, faith, and joining God in what He's doing through His church."}
              </p>
            </div>
            <div className="reasons-grid">
              {reasons.map((r, index) => (
                <div key={index} className="reason-card">
                  <div className="reason-number">{r.number || index + 1}</div>
                  <h3 className="reason-title">{r.title}</h3>
                  <p className="reason-text">{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Giving Options */}
        {giving?.givingOptions && giving.givingOptions.length > 0 && (
          <section className="giving-options">
            <div className="section-intro">
              <span className="section-eyebrow">
                {giving?.optionsEyebrow || 'Ways to Give'}
              </span>
              <h2 className="section-intro-heading">
                {giving?.optionsHeading || 'Give Today'}
              </h2>
              <p className="section-intro-text">
                {giving?.optionsDescription ||
                  'Choose the option that works best for you. Every gift, no matter the size, makes an eternal difference.'}
              </p>
            </div>
            <div className="options-container">
              {giving.givingOptions.map((option, index) => (
                <div key={index} className="giving-card-modern">
                  <div className="giving-card-icon">$</div>
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

        {/* Closing Encouragement */}
        {(giving?.closingScriptureText || giving?.closingScriptureReference) && (
          <section className="scripture-callout light">
            <div className="scripture-callout-container">
              {giving?.closingScriptureText && (
                <p className="scripture-text">{giving.closingScriptureText}</p>
              )}
              {giving?.closingScriptureReference && (
                <span className="scripture-reference">{giving.closingScriptureReference}</span>
              )}
            </div>
          </section>
        )}
      </main>
    </>
  )
}
