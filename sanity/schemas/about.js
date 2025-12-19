export default {
  name: 'about',
  title: 'About Us',
  type: 'document',
  fields: [
    // Hero Section
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'heroHeading',
      title: 'Hero Heading',
      type: 'string',
    },
    
    // Mission Statement Section
    {
      name: 'missionStatement',
      title: 'Mission Statement',
      type: 'text',
      rows: 4,
    },
    
    // Welcome Section
    {
      name: 'welcomeImage',
      title: 'Welcome Section Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'welcomeHeading',
      title: 'Welcome Heading',
      type: 'string',
    },
    {
      name: 'welcomeText',
      title: 'Welcome Text',
      type: 'text',
      rows: 4,
    },
    {
      name: 'welcomeButtonText',
      title: 'Welcome Button Text',
      type: 'string',
    },
    {
      name: 'welcomeButtonLink',
      title: 'Welcome Button Link',
      type: 'string',
    },
    
    // Pastors Section
    {
      name: 'pastors',
      title: 'Pastors',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'bio',
              title: 'Bio',
              type: 'text',
              rows: 4,
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
    
    // Mission Section
    {
      name: 'missionTitle',
      title: 'Mission Section Title',
      type: 'string',
    },
    {
      name: 'missionContent',
      title: 'Mission Content',
      type: 'text',
      rows: 4,
    },
    
    // Vision Section
    {
      name: 'visionTitle',
      title: 'Vision Section Title',
      type: 'string',
    },
    {
      name: 'visionItems',
      title: 'Vision Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'heading',
              title: 'Heading',
              type: 'string',
            },
            {
              name: 'text',
              title: 'Text',
              type: 'text',
              rows: 3,
            },
          ],
        },
      ],
      validation: (Rule) => Rule.max(3),
    },
  ],
}
