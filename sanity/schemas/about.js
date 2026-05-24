export default {
  name: 'about',
  title: 'About Us',
  type: 'document',
  groups: [
    { name: 'main', title: 'Main Intro Section', default: true },
    { name: 'quote', title: 'Quote Section' },
    { name: 'pastors', title: 'Pastors Section' },
    { name: 'c3', title: 'C3 Global Section' },
    { name: 'vision', title: 'Our Vision Section' },
  ],
  fields: [
    // Main Intro
    {
      name: 'mainEyebrow',
      title: 'Eyebrow Label',
      type: 'string',
      description: 'Small label above heading (e.g., "Who We Are")',
      group: 'main',
    },
    {
      name: 'mainHeading',
      title: 'Main Heading',
      type: 'string',
      description: 'Large heading for the first section (e.g., "CONNECTING PEOPLE TO GOD")',
      group: 'main',
    },
    {
      name: 'mainDescription',
      title: 'Main Description',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Descriptive text for the first section',
      group: 'main',
    },
    {
      name: 'mainImage',
      title: 'Main Section Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Image displayed on the right side of the first section',
      group: 'main',
    },

    // Quote Section
    {
      name: 'quoteText',
      title: 'Quote Text',
      type: 'text',
      rows: 3,
      description: 'Inspirational quote shown in the yellow break section',
      group: 'quote',
    },
    {
      name: 'quoteAttribution',
      title: 'Quote Attribution',
      type: 'string',
      description: 'Small label below the quote (e.g., "Our Heart")',
      group: 'quote',
    },

    // Pastors
    {
      name: 'pastorsEyebrow',
      title: 'Eyebrow Label',
      type: 'string',
      description: 'e.g., "Meet Our Pastors"',
      group: 'pastors',
    },
    {
      name: 'pastorsHeading',
      title: 'Pastors Section Heading',
      type: 'string',
      description: 'e.g., "OUR PASTORS"',
      group: 'pastors',
    },
    {
      name: 'pastorsText1',
      title: 'Pastors Text - Paragraph 1',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'pastors',
    },
    {
      name: 'pastorsText2',
      title: 'Pastors Text - Paragraph 2',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'pastors',
    },
    {
      name: 'pastorsImage',
      title: 'Pastors Section Image',
      type: 'image',
      options: { hotspot: true },
      group: 'pastors',
    },

    // C3 Global
    {
      name: 'c3GlobalEyebrow',
      title: 'Eyebrow Label',
      type: 'string',
      description: 'e.g., "Part of Something Bigger"',
      group: 'c3',
    },
    {
      name: 'c3GlobalHeading',
      title: 'C3 Global Heading',
      type: 'string',
      description: 'e.g., "C3 GLOBAL"',
      group: 'c3',
    },
    {
      name: 'c3GlobalText1',
      title: 'C3 Global Text 1',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'c3',
    },
    {
      name: 'c3GlobalText2',
      title: 'C3 Global Text 2',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'c3',
    },
    {
      name: 'c3GlobalText3',
      title: 'C3 Global Text 3',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'c3',
    },
    {
      name: 'c3GlobalImage',
      title: 'C3 Global Image',
      type: 'image',
      options: { hotspot: true },
      group: 'c3',
    },

    // Vision
    {
      name: 'visionEyebrow',
      title: 'Eyebrow Label',
      type: 'string',
      description: 'e.g., "Our Vision"',
      group: 'vision',
    },
    {
      name: 'visionHeading',
      title: 'Vision Main Heading',
      type: 'string',
      description: 'e.g., "Our Vision"',
      group: 'vision',
    },
    {
      name: 'visionSubheading',
      title: 'Vision Subheading',
      type: 'string',
      description: 'e.g., "2 Corinthians 5:7"',
      group: 'vision',
    },
    {
      name: 'visionItems',
      title: 'Vision Items',
      type: 'array',
      group: 'vision',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              description: 'e.g., "Discipleship:", "Church Planting:"',
            },
            {
              name: 'content',
              title: 'Content',
              type: 'array',
              of: [{ type: 'block' }],
            },
          ],
        },
      ],
      validation: (Rule) => Rule.max(3),
    },
  ],
}
