import { client, urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import Header from '@/components/Header'
import Image from 'next/image'

async function getSiteSettings() {
  const query = '*[_type == "siteSettings"][0]'
  return await client.fetch(query)
}

async function getBuildingFund() {
  const query = '*[_type == "buildingFund"][0]'
  return await client.fetch(query)
}

export default async function BuildingFundPage() {
  const [siteSettings, buildingFund] = await Promise.all([
    getSiteSettings(),
    getBuildingFund(),
  ])

  const progress = buildingFund?.goalAmount
    ? (buildingFund.currentAmount / buildingFund.goalAmount) * 100
    : 0

  return (
    <>
      <Header siteSettings={siteSettings} />
      <main className="content-page">
        <section className="content-hero">
          <div className="content-container">
            {buildingFund?.heading && (
              <h1 className="page-heading">{buildingFund.heading}</h1>
            )}

            {buildingFund?.goalAmount && (
              <div className="progress-section">
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="progress-info">
                  <span>${buildingFund.currentAmount?.toLocaleString()} raised</span>
                  <span>Goal: ${buildingFund.goalAmount?.toLocaleString()}</span>
                </div>
              </div>
            )}

            {buildingFund?.content && (
              <div className="page-content">
                <PortableText value={buildingFund.content} />
              </div>
            )}

            {buildingFund?.image && (
              <div className="page-image">
                <Image
                  src={urlFor(buildingFund.image).url()}
                  alt={buildingFund.heading || 'Building Fund'}
                  width={800}
                  height={600}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  )
}
