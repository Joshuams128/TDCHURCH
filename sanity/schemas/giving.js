export default {
  name: 'giving',
  title: 'Giving',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      description: 'Large image displayed on the right side of the giving page',
    },
    {
      name: 'givingOptions',
      title: 'Giving Options',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Option Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
            {
              name: 'buttonText',
              title: 'Button Text',
              type: 'string',
            },
            {
              name: 'buttonLink',
              title: 'Button Link',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}
