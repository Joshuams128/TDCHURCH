export default {
  name: 'services',
  title: 'Services',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'subheading',
      title: 'Subheading',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'sections',
      title: 'Service Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'heading',
              title: 'Section Heading',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Section Description',
              type: 'text',
            },
            {
              name: 'image',
              title: 'Section Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
  ],
}
