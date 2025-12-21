export default {
  name: 'sunday',
  title: 'Sunday Page',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Main Heading',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'featuredSermon',
      title: 'Featured Sermon',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Sermon Title',
          type: 'string',
        },
        {
          name: 'preacher',
          title: 'Preacher Name',
          type: 'string',
        },
        {
          name: 'date',
          title: 'Date',
          type: 'date',
        },
        {
          name: 'image',
          title: 'Sermon Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'location',
      title: 'Our Location',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Location Name',
              type: 'string',
            },
            {
              name: 'address',
              title: 'Address',
              type: 'array',
              of: [{ type: 'block' }],
            },
            {
              name: 'serviceTime',
              title: 'Service Time',
              type: 'string',
            },
            {
              name: 'image',
              title: 'Location Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
    
    // C3 Kids Section
    {
      name: 'kidsHeading',
      title: 'Kids Section - Heading',
      type: 'string',
      description: 'e.g., "C3 KIDS"',
    },
    {
      name: 'kidsDescription',
      title: 'Kids Section - Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'kidsImage1',
      title: 'Kids Section - Image 1',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'kidsImage2',
      title: 'Kids Section - Image 2',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'kidsImage3',
      title: 'Kids Section - Image 3',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'kidsButtonText',
      title: 'Kids Section - Button Text',
      type: 'string',
    },
    {
      name: 'kidsButtonLink',
      title: 'Kids Section - Button Link',
      type: 'string',
    },
  ],
}
