export default {
  name: 'giving',
  title: 'Giving',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero Section', default: true },
    { name: 'whyGive', title: 'Why We Give Section' },
    { name: 'options', title: 'Giving Options Section' },
    { name: 'closing', title: 'Closing Scripture' },
  ],
  fields: [
    // Hero
    {
      name: 'eyebrow',
      title: 'Eyebrow Label',
      type: 'string',
      description: 'Small label above the heading (e.g., "Generosity")',
      group: 'hero',
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      group: 'hero',
    },
    {
      name: 'content',
      title: 'Intro Content',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'hero',
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      description: 'Large image displayed on the right side of the giving page',
      group: 'hero',
    },

    // Why We Give
    {
      name: 'whyGiveEyebrow',
      title: 'Eyebrow Label',
      type: 'string',
      description: 'e.g., "Why We Give"',
      group: 'whyGive',
    },
    {
      name: 'whyGiveHeading',
      title: 'Section Heading',
      type: 'string',
      description: 'e.g., "More Than a Gift"',
      group: 'whyGive',
    },
    {
      name: 'whyGiveDescription',
      title: 'Section Description',
      type: 'text',
      rows: 3,
      group: 'whyGive',
    },
    {
      name: 'whyGiveReasons',
      title: 'Reason Cards',
      type: 'array',
      group: 'whyGive',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'number', title: 'Number', type: 'string', description: 'e.g., "1"' },
            { name: 'title', title: 'Card Title', type: 'string' },
            { name: 'text', title: 'Card Text', type: 'text', rows: 3 },
          ],
        },
      ],
      validation: (Rule) => Rule.max(6),
    },

    // Ways to Give
    {
      name: 'optionsEyebrow',
      title: 'Eyebrow Label',
      type: 'string',
      description: 'e.g., "Ways to Give"',
      group: 'options',
    },
    {
      name: 'optionsHeading',
      title: 'Section Heading',
      type: 'string',
      description: 'e.g., "Give Today"',
      group: 'options',
    },
    {
      name: 'optionsDescription',
      title: 'Section Description',
      type: 'text',
      rows: 3,
      group: 'options',
    },
    {
      name: 'givingOptions',
      title: 'Giving Options',
      type: 'array',
      group: 'options',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Option Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
            { name: 'buttonText', title: 'Button Text', type: 'string' },
            { name: 'buttonLink', title: 'Button Link', type: 'string' },
          ],
        },
      ],
    },

    // Closing Scripture
    {
      name: 'closingScriptureText',
      title: 'Scripture Text',
      type: 'text',
      rows: 4,
      group: 'closing',
    },
    {
      name: 'closingScriptureReference',
      title: 'Scripture Reference',
      type: 'string',
      description: 'e.g., "Malachi 3:10"',
      group: 'closing',
    },
  ],
}
