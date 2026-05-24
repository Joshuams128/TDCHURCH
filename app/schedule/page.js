import { fetchWithTag, urlFor } from '@/lib/sanity'
import Header from '@/components/Header'
import Image from 'next/image'
import BackButton from './BackButton'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Schedule & Events | TD Church',
  description: 'View upcoming events, special services, and ongoing programs at TD Church.',
}

async function getSiteSettings() {
  const query = '*[_type == "siteSettings"][0]'
  return await fetchWithTag(query, 'sanity-siteSettings')
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
    image
  }`
  return await fetchWithTag(query, 'sanity-schedule')
}

async function getSchedulePage() {
  const query = '*[_type == "schedulePage"][0]'
  return await fetchWithTag(query, 'sanity-schedulePage')
}

export default async function SchedulePage() {
  const [siteSettings, scheduleEvents, schedulePage] = await Promise.all([
    getSiteSettings(),
    getSchedule(),
    getSchedulePage(),
  ])

  const ongoingEvents = scheduleEvents.filter((event) => event.eventType === 'ongoing')
  const specialEvents = scheduleEvents.filter((event) => event.eventType === 'special')

  const now = new Date()
  const upcomingSpecial = specialEvents.filter(
    (event) => {
      if (!event.eventDate) return false
      const [year, month, day] = event.eventDate.split('-').map(Number)
      const eventDate = new Date(year, month - 1, day)
      return eventDate >= now
    }
  )

  const hasEvents = ongoingEvents.length > 0 || upcomingSpecial.length > 0

  return (
    <>
      <div className="schedule-fullscreen">
        <div className="schedule-fullscreen-overlay" />
        <div className="schedule-fullscreen-content">
          <BackButton />

          <span className="schedule-section-label">
            {schedulePage?.eyebrow || "What's Happening"}
          </span>
          <h1 className="schedule-fullscreen-title">
            {schedulePage?.title || 'COMING UP AT TDC'}
          </h1>

          {!hasEvents && (
            <div className="schedule-empty">
              <p>
                {schedulePage?.emptyText ||
                  'No upcoming events right now. Check back soon — something is always around the corner.'}
              </p>
            </div>
          )}

          {/* Special Events Section */}
          {upcomingSpecial.length > 0 && (
            <div className="schedule-section">
              <h2 className="schedule-section-heading">
                {schedulePage?.specialHeading || 'Special Events'}
              </h2>
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

          {/* Ongoing Events Section */}
          {ongoingEvents.length > 0 && (
            <div className="schedule-section">
              <h2 className="schedule-section-heading">
                {schedulePage?.ongoingHeading || 'Weekly & Ongoing'}
              </h2>
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
        </div>
      </div>
    </>
  )
}
