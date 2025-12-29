import { client, urlFor } from '@/lib/sanity'
import Header from '@/components/Header'
import Image from 'next/image'
import BackButton from './BackButton'

export const metadata = {
  title: 'Schedule & Events | TD Church',
  description: 'View upcoming events, special services, and ongoing programs at TD Church.',
}

async function getSiteSettings() {
  const query = '*[_type == "siteSettings"][0]'
  return await client.fetch(query)
}

async function getSchedule() {
  const query = `*[_type == "schedule"] | order(eventDate asc) {
    _id,
    eventTitle,
    eventType,
    eventDate,
    eventTime,
    location,
    description,
    additionalInfo,
    image,
    featured
  }`
  return await client.fetch(query)
}

export default async function SchedulePage() {
  const [siteSettings, scheduleEvents] = await Promise.all([
    getSiteSettings(),
    getSchedule(),
  ])

  // Separate ongoing and special events
  const ongoingEvents = scheduleEvents.filter((event) => event.eventType === 'ongoing')
  const specialEvents = scheduleEvents.filter((event) => event.eventType === 'special')
  
  // Filter special events by upcoming/past
  const now = new Date()
  const upcomingSpecial = specialEvents.filter(
    (event) => {
      if (!event.eventDate) return false
      // Parse the date as local date (YYYY-MM-DD format)
      const [year, month, day] = event.eventDate.split('-').map(Number)
      const eventDate = new Date(year, month - 1, day)
      return eventDate >= now
    }
  )

  return (
    <>
      <div className="schedule-fullscreen">
        <div className="schedule-fullscreen-overlay" />
        <div className="schedule-fullscreen-content">
          <BackButton />
          
          <h1 className="schedule-fullscreen-title">COMING UP AT TDC</h1>
          
          {/* Ongoing Events Section */}
          {ongoingEvents.length > 0 && (
            <div className="schedule-section">
              <div className="schedule-events-grid">
                {ongoingEvents.map((event) => (
                  <div key={event._id} className="schedule-ongoing-card">
                    {event.image && (
                      <div className="schedule-ongoing-image">
                        <Image
                          src={urlFor(event.image).width(400).height(250).quality(90).url()}
                          alt={event.eventTitle}
                          width={400}
                          height={250}
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    )}
                    <h3 className="schedule-card-title">{event.eventTitle}</h3>
                    {event.eventDate && (
                      <p className="schedule-card-date">
                        {(() => {
                          const [year, month, day] = event.eventDate.split('-').map(Number)
                          const date = new Date(year, month - 1, day)
                          return date.toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                          })
                        })()}
                      </p>
                    )}
                    {event.description && (
                      <p className="schedule-card-description">{event.description}</p>
                    )}
                    <div className="schedule-card-details">
                      {event.eventTime && (
                        <p className="schedule-card-time">{event.eventTime}</p>
                      )}
                      {event.location && (
                        <p className="schedule-card-location">{event.location}</p>
                      )}
                      {event.additionalInfo && (
                        <p className="schedule-card-info">{event.additionalInfo}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Special Events Section */}
          {upcomingSpecial.length > 0 && (
            <div className="schedule-section">
              <div className="schedule-special-grid">
                {upcomingSpecial.map((event) => (
                  <div key={event._id} className="schedule-special-card">
                    {event.image && (
                      <div className="schedule-special-image">
                        <Image
                          src={urlFor(event.image).url()}
                          alt={event.eventTitle}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    )}
                    <div className="schedule-special-overlay">
                      <h3 className="schedule-special-title">{event.eventTitle}</h3>
                      {event.eventDate && (
                        <p className="schedule-special-date">
                          {(() => {
                            const [year, month, day] = event.eventDate.split('-').map(Number)
                            const date = new Date(year, month - 1, day)
                            return date.toLocaleDateString('en-US', {
                              month: 'long',
                              day: 'numeric',
                              year: 'numeric',
                            })
                          })()}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
