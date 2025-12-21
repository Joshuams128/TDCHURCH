import './globals.css'
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: {
    default: 'TD Church',
    template: '%s | TD Church',
  },
  description: 'Welcome to TD Church - Connecting people to God through uplifting worship, engaging programs, and a vibrant community.',
  keywords: ['church', 'TD Church', 'worship', 'community', 'faith', 'Christianity'],
  authors: [{ name: 'TD Church' }],
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

export default function RootLayout({ children }) {
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
