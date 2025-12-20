export default {
  name: 'about',
  title: 'About Us',
  type: 'document',
  fields: [
    // First Section - Main Intro
    {
      name: 'mainHeading',
      title: 'Main Heading',
      type: 'string',
      description: 'Large heading for the first section (e.g., "CONNECTING PEOPLE TO GOD")',
    },
    {
      name: 'mainDescription',
      title: 'Main Description',
      type: 'text',
      rows: 6,
      description: 'Descriptive text for the first section',
    },
    {
      name: 'mainImage',
      title: 'Main Section Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Image displayed on the right side of the first section',
    },
    
    // Pastors Section
    {
      name: 'pastorsHeading',
      title: 'Pastors Section Heading',
      type: 'string',
      description: 'e.g., "OUR PASTORS"',
    },
    {
      name: 'pastorsText1',
      title: 'Pastors Text - Paragraph 1',
      type: 'text',
      rows: 4,
    },
    {
      name: 'pastorsText2',
      title: 'Pastors Text - Paragraph 2',
      type: 'text',
      rows: 4,
    },
    {
      name: 'pastorsImage',
      title: 'Pastors Section Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    
    // C3 Global Section
    {
      name: 'c3GlobalHeading',
      title: 'Mission Statement - C3 Global Heading',
      type: 'string',
      description: 'e.g., "C3 GLOBAL"',
    },
    {
      name: 'c3GlobalText1',
      title: 'Mission Statement - C3 Global Text 1',
      type: 'text',
      rows: 4,
    },
    {
      name: 'c3GlobalText2',
      title: 'Mission Statement - C3 Global Text 2',
      type: 'text',
      rows: 4,
    },
    {
      name: 'c3GlobalText3',
      title: 'Mission Statement - C3 Global Text 3',
      type: 'text',
      rows: 4,
    },
    {
      name: 'c3GlobalImage',
      title: 'Mission Statement - C3 Global Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    
    // Our Vision Section
    {
      name: 'visionHeading',
      title: 'Our Vision - Main Heading',
      type: 'string',
      description: 'e.g., "Our Vision"',
    },
    {
      name: 'visionSubheading',
      title: 'Our Vision - Subheading',
      type: 'string',
      description: 'e.g., "2 Corinthians 5:7"',
    },
    {
      name: 'visionItems',
      title: 'Our Vision - Items',
      type: 'array',
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
              type: 'text',
              rows: 6,
            },
          ],
        },
      ],
      validation: (Rule) => Rule.max(3),
    },
  ],
}
