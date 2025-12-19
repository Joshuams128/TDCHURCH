export default {
  name: 'schedule',
  title: 'Schedule',
  type: 'document',
  fields: [
    {
      name: 'eventTitle',
      title: 'Event Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'eventDate',
      title: 'Event Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'eventTime',
      title: 'Event Time',
      type: 'string',
      description: 'e.g., "10:00 AM - 12:00 PM"',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    },
    {
      name: 'image',
      title: 'Event Image',
      type: 'image',
      options: {
        hotspot: true,
      },
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
      media: 'image',
    },
    prepare({ title, date, media }) {
      const dateObj = new Date(date)
      const formattedDate = dateObj.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
      return {
        title: title,
        subtitle: formattedDate,
        media: media,
      }
    },
  },
}
