export default {
  name: 'beliefs',
  title: 'What We Believe In',
  type: 'document',
  fields: [
    // Hero Section
    {
      name: 'heroHeading',
      title: 'Hero Heading',
      type: 'string',
      description: 'e.g., "WHAT WE BELIEVE"',
    },
    {
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    
    // General Rules of Conduct Section
    {
      name: 'conductHeading',
      title: 'Rules of Conduct - Heading',
      type: 'string',
      description: 'e.g., "General Rules Of Conduct"',
    },
    {
      name: 'conductIntro',
      title: 'Rules of Conduct - Introduction',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'conductRules',
      title: 'Rules of Conduct - List',
      type: 'array',
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
    
    // Statement of Faith Section
    {
      name: 'faithHeading',
      title: 'Statement of Faith - Heading',
      type: 'string',
      description: 'e.g., "General Statement of Faith We Believe"',
    },
    {
      name: 'faithStatements',
      title: 'Statement of Faith - Items',
      type: 'array',
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
