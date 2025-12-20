export default {
  name: 'buildingFund',
  title: 'Building Fund',
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
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      description: 'Text for the call-to-action button',
    },
    {
      name: 'buttonLink',
      title: 'Button Link',
      type: 'string',
      description: 'URL for the button',
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
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Large text displayed below the hero section',
    },
    {
      name: 'heading2',
      title: 'Second Section Heading',
      type: 'string',
    },
    {
      name: 'content2',
      title: 'Second Section Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'image2',
      title: 'Second Section Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'ctaHeading',
      title: 'Call to Action Heading',
      type: 'string',
      description: 'e.g., "HOW CAN YOU JOIN US?"',
    },
    {
      name: 'ctaContent',
      title: 'Call to Action Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'ctaEmail',
      title: 'Call to Action Email',
      type: 'string',
      description: 'Email address for building fund donations',
    },
    {
      name: 'ctaButtonText',
      title: 'CTA Button Text',
      type: 'string',
      description: 'Text for the giving button',
    },
  ],
}
