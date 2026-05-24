export default {
  name: 'ministries',
  title: 'Ministries',
  type: 'document',
  groups: [
    { name: 'intro', title: 'Intro Section', default: true },
    { name: 'scripture', title: 'Scripture Callout' },
    { name: 'list', title: 'Ministry List' },
    { name: 'closing', title: 'Closing Callout' },
  ],
  fields: [
    // Intro
    {
      name: 'eyebrow',
      title: 'Eyebrow Label',
      type: 'string',
      description: 'Small label above heading (e.g., "Find Your People")',
      group: 'intro',
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      group: 'intro',
    },
    {
      name: 'subheading',
      title: 'Subheading',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'intro',
    },

    // Scripture
    {
      name: 'scriptureText',
      title: 'Scripture Text',
      type: 'text',
      rows: 3,
      group: 'scripture',
    },
    {
      name: 'scriptureReference',
      title: 'Scripture Reference',
      type: 'string',
      description: 'e.g., "Hebrews 10:24"',
      group: 'scripture',
    },

    // List
    {
      name: 'ministryList',
      title: 'Ministry List',
      type: 'array',
      group: 'list',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Ministry Title', type: 'string' },
            {
              name: 'description',
              title: 'Description',
              type: 'array',
              of: [{ type: 'block' }],
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
            },
          ],
        },
      ],
    },

    // Closing
    {
      name: 'closingText',
      title: 'Closing Text',
      type: 'text',
      rows: 3,
      description: 'Final message at the bottom of the page',
      group: 'closing',
    },
    {
      name: 'closingLabel',
      title: 'Closing Label',
      type: 'string',
      description: 'Small label below closing text (e.g., "Get Connected")',
      group: 'closing',
    },
  ],
}
