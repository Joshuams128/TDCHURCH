export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
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
    {
      name: 'heroSubheading',
      title: 'Hero Subheading',
      type: 'string',
    },
    {
      name: 'ctaButtonText',
      title: 'CTA Button Text',
      type: 'string',
    },
    {
      name: 'ctaButtonLink',
      title: 'CTA Button Link',
      type: 'string',
    },
  ],
}
