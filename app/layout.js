import './globals.css'
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { client, urlFor } from '@/lib/sanity'

async function getSiteSettings() {
  const query = '*[_type == "siteSettings"][0]'
  return await client.fetch(query, {}, { next: { revalidate: 3600 } })
}

export async function generateMetadata() {
  const siteSettings = await getSiteSettings()
  const faviconUrl = siteSettings?.logo 
    ? urlFor(siteSettings.logo).width(32).height(32).quality(90).url()
    : null

  return {
    title: {
      default: 'TD Church',
      template: '%s | TD Church',
    },
    description: 'Welcome to TD Church - Connecting people to God through uplifting worship, engaging programs, and a vibrant community.',
    keywords: ['church', 'TD Church', 'worship', 'community', 'faith', 'Christianity'],
    authors: [{ name: 'TD Church' }],
    icons: faviconUrl ? {
      icon: faviconUrl,
      shortcut: faviconUrl,
      apple: faviconUrl,
    } : undefined,
    openGraph: {
      type: 'website',
      locale: 'en_US',
      siteName: 'TD Church',
      title: 'TD Church',
      description: 'Welcome to TD Church - Connecting people to God through uplifting worship, engaging programs, and a vibrant community.',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'TD Church',
      description: 'Welcome to TD Church - Connecting people to God through uplifting worship, engaging programs, and a vibrant community.',
    },
  }
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
