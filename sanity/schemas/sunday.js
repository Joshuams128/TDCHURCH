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
      type: 'text',
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
              type: 'text',
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
  ],
}
