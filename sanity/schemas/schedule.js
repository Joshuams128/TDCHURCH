export default {
  name: 'schedule',
  title: 'Schedule & Events',
  type: 'document',
  fields: [
    {
      name: 'eventTitle',
      title: 'Event Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'eventType',
      title: 'Event Type',
      type: 'string',
      options: {
        list: [
          { title: 'Ongoing Event', value: 'ongoing' },
          { title: 'Special Event', value: 'special' },
        ],
      },
      validation: (Rule) => Rule.required(),
      initialValue: 'special',
    },
    {
      name: 'eventDate',
      title: 'Event Date',
      type: 'datetime',
      description: 'Optional for ongoing events, required for special events',
    },
    {
      name: 'eventTime',
      title: 'Event Time',
      type: 'string',
      description: 'e.g., "10:00 AM - 12:00 PM" or "EVERY THURSDAY AT 6:00 AM"',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g., "ALL LOCATIONS" or specific location',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    },
    {
      name: 'additionalInfo',
      title: 'Additional Info',
      type: 'string',
      description: 'e.g., "Grades 6-12! Midtown at 11:15 AM"',
    },
    {
      name: 'image',
      title: 'Event Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Required for special events with images',
    },
    {
      name: 'showOnHomepage',
      title: 'Show on Homepage',
      type: 'boolean',
      description: 'Display this event in the homepage carousel',
      initialValue: true,
    },
    {
      name: 'featured',
      title: 'Featured Event',
      type: 'boolean',
      description: 'Show this event prominently',
      initialValue: false,
    },
  ],
  orderings: [
    {
      title: 'Event Date, New',
      name: 'eventDateDesc',
      by: [{ field: 'eventDate', direction: 'desc' }],
    },
    {
      title: 'Event Date, Old',
      name: 'eventDateAsc',
      by: [{ field: 'eventDate', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'eventTitle',
      date: 'eventDate',
      type: 'eventType',
      media: 'image',
    },
    prepare({ title, date, type, media }) {
      let subtitle = type === 'ongoing' ? 'Ongoing Event' : ''
      if (date && type === 'special') {
        const dateObj = new Date(date)
        subtitle = dateObj.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        })
      }
      return {
        title: title,
        subtitle: subtitle,
        media: media,
      }
    },
  },
}
