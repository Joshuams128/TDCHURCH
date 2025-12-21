import { client } from '@/lib/sanity'
import Header from '@/components/Header'
import ContactForm from './ContactForm'

async function getSiteSettings() {
  const query = '*[_type == "siteSettings"][0]'
  return await client.fetch(query)
}

async function getUpcomingEvent() {
  const query = `*[_type == "schedule" && showOnHomepage == true] | order(eventDate asc) [0] {
    eventTitle,
    eventDate,
    eventTime
  }`
  return await client.fetch(query)
}

export default async function ContactPage() {
  const [siteSettings, upcomingEvent] = await Promise.all([
    getSiteSettings(),
    getUpcomingEvent(),
  ])

  return (
    <>
      <Header siteSettings={siteSettings} upcomingEvent={upcomingEvent} />
      <ContactForm />
    </>
  )
}
