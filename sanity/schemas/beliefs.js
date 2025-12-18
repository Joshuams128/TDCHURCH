export default {
  name: 'beliefs',
  title: 'What We Believe In',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'introduction',
      title: 'Introduction',
      type: 'text',
    },
    {
      name: 'beliefs',
      title: 'Beliefs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Belief Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
}
