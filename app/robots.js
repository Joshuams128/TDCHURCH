export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/studio/',
    },
    sitemap: 'https://tdchurch.com/sitemap.xml',
  }
}
