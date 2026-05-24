export default {
  name: 'beliefs',
  title: 'What We Believe In',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero Section', default: true },
    { name: 'intro', title: 'Foundation Intro' },
    { name: 'scripture', title: 'Scripture Callout' },
    { name: 'conduct', title: 'Rules of Conduct' },
    { name: 'faith', title: 'Statement of Faith' },
  ],
  fields: [
    // Hero
    {
      name: 'heroHeading',
      title: 'Hero Heading',
      type: 'string',
      description: 'e.g., "WHAT WE BELIEVE"',
      group: 'hero',
    },
    {
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      options: { hotspot: true },
      group: 'hero',
    },

    // Intro
    {
      name: 'introEyebrow',
      title: 'Eyebrow Label',
      type: 'string',
      description: 'e.g., "Our Foundation"',
      group: 'intro',
    },
    {
      name: 'introHeading',
      title: 'Intro Heading',
      type: 'string',
      description: 'e.g., "Rooted in Christ. Anchored in Scripture."',
      group: 'intro',
    },
    {
      name: 'introText',
      title: 'Intro Text',
      type: 'text',
      rows: 4,
      group: 'intro',
    },

    // Scripture
    {
      name: 'scriptureText',
      title: 'Scripture Text',
      type: 'text',
      rows: 4,
      group: 'scripture',
    },
    {
      name: 'scriptureReference',
      title: 'Scripture Reference',
      type: 'string',
      description: 'e.g., "2 Timothy 3:16"',
      group: 'scripture',
    },

    // Conduct
    {
      name: 'conductEyebrow',
      title: 'Eyebrow Label',
      type: 'string',
      description: 'e.g., "How We Live"',
      group: 'conduct',
    },
    {
      name: 'conductHeading',
      title: 'Rules of Conduct - Heading',
      type: 'string',
      description: 'e.g., "General Rules Of Conduct"',
      group: 'conduct',
    },
    {
      name: 'conductIntro',
      title: 'Rules of Conduct - Introduction',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'conduct',
    },
    {
      name: 'conductRules',
      title: 'Rules of Conduct - List',
      type: 'array',
      group: 'conduct',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'rule',
              title: 'Rule',
              type: 'array',
              of: [{ type: 'block' }],
            },
          ],
        },
      ],
    },

    // Faith
    {
      name: 'faithEyebrow',
      title: 'Eyebrow Label',
      type: 'string',
      description: 'e.g., "What We Stand On"',
      group: 'faith',
    },
    {
      name: 'faithHeading',
      title: 'Statement of Faith - Heading',
      type: 'string',
      description: 'e.g., "General Statement of Faith We Believe"',
      group: 'faith',
    },
    {
      name: 'faithStatements',
      title: 'Statement of Faith - Items',
      type: 'array',
      group: 'faith',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              description: 'e.g., "1. Jesus Christ", "2. The Blood"',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'array',
              of: [{ type: 'block' }],
            },
          ],
        },
      ],
      validation: (Rule) => Rule.max(5),
    },
  ],
}
