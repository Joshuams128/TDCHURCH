export default {
  name: 'schedulePage',
  title: 'Schedule Page (Labels)',
  type: 'document',
  description: 'Editable labels and headings shown on the Schedule page. Individual events are managed under "Schedule & Events".',
  fields: [
    {
      name: 'eyebrow',
      title: 'Eyebrow Label',
      type: 'string',
      description: 'Small label above the title (e.g., "What\'s Happening")',
    },
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'Large page title (e.g., "COMING UP AT TDC")',
    },
    {
      name: 'specialHeading',
      title: 'Special Events Heading',
      type: 'string',
      description: 'e.g., "Special Events"',
    },
    {
      name: 'ongoingHeading',
      title: 'Ongoing Events Heading',
      type: 'string',
      description: 'e.g., "Weekly & Ongoing"',
    },
    {
      name: 'emptyText',
      title: 'Empty State Message',
      type: 'text',
      rows: 2,
      description: 'Shown when there are no upcoming events',
    },
  ],
}
