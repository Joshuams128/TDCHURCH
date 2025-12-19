import { client, urlFor } from '@/lib/sanity'
import Header from '@/components/Header'
import Image from 'next/image'

async function getSiteSettings() {
  const query = '*[_type == "siteSettings"][0]'
  return await client.fetch(query)
}

async function getSchedule() {
  const query = `*[_type == "schedule"] | order(eventDate asc) {
    _id,
    eventTitle,
    eventDate,
    eventTime,
    location,
    description,
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

  // Separate upcoming and past events
  const now = new Date()
  const upcomingEvents = scheduleEvents.filter(
    (event) => new Date(event.eventDate) >= now
  )
  const pastEvents = scheduleEvents.filter(
    (event) => new Date(event.eventDate) < now
  )

  return (
    <>
      <Header siteSettings={siteSettings} />
      <main className="schedule-page">
        <div className="schedule-container">
          <h1 className="schedule-title">Coming Up</h1>
          
          {upcomingEvents.length > 0 ? (
            <div className="events-grid">
              {upcomingEvents.map((event) => (
                <div 
                  key={event._id} 
                  className={`event-card ${event.featured ? 'featured' : ''}`}
                >
                  {event.image && (
                    <div className="event-image">
                      <Image
                        src={urlFor(event.image).url()}
                        alt={event.eventTitle}
                        width={600}
                        height={400}
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  )}
                  <div className="event-content">
                    {event.featured && (
                      <span className="featured-badge">Featured</span>
                    )}
                    <h2 className="event-title">{event.eventTitle}</h2>
                    <div className="event-details">
                      <p className="event-date">
                        📅 {new Date(event.eventDate).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                      {event.eventTime && (
                        <p className="event-time">🕐 {event.eventTime}</p>
                      )}
                      {event.location && (
                        <p className="event-location">📍 {event.location}</p>
                      )}
                    </div>
                    {event.description && (
                      <p className="event-description">{event.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-events">No upcoming events scheduled at this time.</p>
          )}

          {pastEvents.length > 0 && (
            <>
              <h2 className="past-events-title">Past Events</h2>
              <div className="events-grid past-events">
                {pastEvents.slice(0, 6).map((event) => (
                  <div key={event._id} className="event-card past">
                    {event.image && (
                      <div className="event-image">
                        <Image
                          src={urlFor(event.image).url()}
                          alt={event.eventTitle}
                          width={600}
                          height={400}
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    )}
                    <div className="event-content">
                      <h3 className="event-title">{event.eventTitle}</h3>
                      <p className="event-date">
                        {new Date(event.eventDate).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </main>
    </>
  )
}
