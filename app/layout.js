import './globals.css'
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: 'TD Church',
  description: 'Welcome to TD Church',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
