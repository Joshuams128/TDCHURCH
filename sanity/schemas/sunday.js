export default {
  name: 'sunday',
  title: 'Sunday Page',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero Section', default: true },
    { name: 'expect', title: 'What to Expect' },
    { name: 'locations', title: 'Locations' },
    { name: 'kids', title: 'Kids Section' },
    { name: 'closing', title: 'Closing Scripture' },
  ],
  fields: [
    // Hero
    {
      name: 'eyebrow',
      title: 'Eyebrow Label',
      type: 'string',
      description: 'Small label above heading (e.g., "This Sunday")',
      group: 'hero',
    },
    {
      name: 'heading',
      title: 'Main Heading',
      type: 'string',
      group: 'hero',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'hero',
    },
    {
      name: 'featuredSermon',
      title: 'Featured Sermon',
      type: 'object',
      group: 'hero',
      fields: [
        { name: 'preacher', title: 'Preacher Name', type: 'string' },
        { name: 'date', title: 'Date', type: 'date' },
        {
          name: 'image',
          title: 'Sermon Image',
          type: 'image',
          options: { hotspot: true },
        },
      ],
    },

    // What to Expect
    {
      name: 'expectEyebrow',
      title: 'Eyebrow Label',
      type: 'string',
      description: 'e.g., "First Time Here?"',
      group: 'expect',
    },
    {
      name: 'expectHeading',
      title: 'Section Heading',
      type: 'string',
      description: 'e.g., "What to Expect"',
      group: 'expect',
    },
    {
      name: 'expectDescription',
      title: 'Section Description',
      type: 'text',
      rows: 3,
      group: 'expect',
    },
    {
      name: 'expectItems',
      title: 'Expect Cards',
      type: 'array',
      group: 'expect',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'icon',
              title: 'Icon Character',
              type: 'string',
              description: 'A single character/symbol (e.g., "♪", "✦", "♥", "★")',
            },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 2 },
          ],
        },
      ],
      validation: (Rule) => Rule.max(8),
    },

    // Locations
    {
      name: 'locationEyebrow',
      title: 'Locations Eyebrow Label',
      type: 'string',
      description: 'e.g., "Visit Us"',
      group: 'locations',
    },
    {
      name: 'locationHeading',
      title: 'Locations Heading',
      type: 'string',
      description: 'e.g., "OUR LOCATION"',
      group: 'locations',
    },
    {
      name: 'location',
      title: 'Locations',
      type: 'array',
      group: 'locations',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Location Name', type: 'string' },
            {
              name: 'address',
              title: 'Address',
              type: 'array',
              of: [{ type: 'block' }],
            },
            { name: 'serviceTime', title: 'Service Time', type: 'string' },
            {
              name: 'image',
              title: 'Location Image',
              type: 'image',
              options: { hotspot: true },
            },
          ],
        },
      ],
    },

    // Kids
    {
      name: 'kidsEyebrow',
      title: 'Eyebrow Label',
      type: 'string',
      description: 'e.g., "For the Whole Family"',
      group: 'kids',
    },
    {
      name: 'kidsHeading',
      title: 'Kids Section - Heading',
      type: 'string',
      description: 'e.g., "C3 KIDS"',
      group: 'kids',
    },
    {
      name: 'kidsDescription',
      title: 'Kids Section - Description',
      type: 'text',
      rows: 3,
      group: 'kids',
    },
    {
      name: 'kidsImage1',
      title: 'Kids Section - Image 1',
      type: 'image',
      options: { hotspot: true },
      group: 'kids',
    },
    {
      name: 'kidsImage2',
      title: 'Kids Section - Image 2',
      type: 'image',
      options: { hotspot: true },
      group: 'kids',
    },
    {
      name: 'kidsImage3',
      title: 'Kids Section - Image 3',
      type: 'image',
      options: { hotspot: true },
      group: 'kids',
    },
    {
      name: 'kidsButtonText',
      title: 'Kids Section - Button Text',
      type: 'string',
      group: 'kids',
    },
    {
      name: 'kidsButtonLink',
      title: 'Kids Section - Button Link',
      type: 'string',
      group: 'kids',
    },

    // Closing Scripture
    {
      name: 'closingScriptureText',
      title: 'Scripture Text',
      type: 'text',
      rows: 4,
      group: 'closing',
    },
    {
      name: 'closingScriptureReference',
      title: 'Scripture Reference',
      type: 'string',
      description: 'e.g., "Hebrews 10:25"',
      group: 'closing',
    },
  ],
}
