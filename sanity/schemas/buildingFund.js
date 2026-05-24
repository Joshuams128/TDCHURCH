export default {
  name: 'buildingFund',
  title: 'Building Fund',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero Section', default: true },
    { name: 'verse', title: 'Scripture Verse' },
    { name: 'section2', title: 'Second Section' },
    { name: 'cta', title: 'Call to Action' },
    { name: 'progress', title: 'Progress Tracker' },
  ],
  fields: [
    // Hero
    {
      name: 'eyebrow',
      title: 'Eyebrow Label',
      type: 'string',
      description: 'Small label above the heading (e.g., "Build the House")',
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
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'hero',
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      description: 'Text for the call-to-action button',
      group: 'hero',
    },
    {
      name: 'buttonLink',
      title: 'Button Link',
      type: 'string',
      description: 'URL for the button',
      group: 'hero',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      group: 'hero',
    },

    // Progress
    {
      name: 'goalAmount',
      title: 'Goal Amount',
      type: 'number',
      description: 'The fundraising goal in dollars',
      group: 'progress',
    },
    {
      name: 'currentAmount',
      title: 'Current Amount Raised',
      type: 'number',
      description: 'The amount raised so far in dollars',
      group: 'progress',
    },

    // Verse
    {
      name: 'verseText',
      title: 'Scripture Text',
      type: 'text',
      rows: 4,
      description: 'The verse to display in the dark verse section',
      group: 'verse',
    },
    {
      name: 'verseReference',
      title: 'Scripture Reference',
      type: 'string',
      description: 'e.g., "Psalm 127:1"',
      group: 'verse',
    },

    // Second Section
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Large text displayed below the verse section',
      group: 'section2',
    },
    {
      name: 'section2Eyebrow',
      title: 'Eyebrow Label',
      type: 'string',
      description: 'e.g., "Our Vision"',
      group: 'section2',
    },
    {
      name: 'heading2',
      title: 'Second Section Heading',
      type: 'string',
      group: 'section2',
    },
    {
      name: 'content2',
      title: 'Second Section Content',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'section2',
    },
    {
      name: 'image2',
      title: 'Second Section Image',
      type: 'image',
      options: { hotspot: true },
      group: 'section2',
    },

    // CTA
    {
      name: 'ctaEyebrow',
      title: 'Eyebrow Label',
      type: 'string',
      description: 'e.g., "Join the Movement"',
      group: 'cta',
    },
    {
      name: 'ctaHeading',
      title: 'Call to Action Heading',
      type: 'string',
      description: 'e.g., "HOW CAN YOU JOIN US?"',
      group: 'cta',
    },
    {
      name: 'ctaContent',
      title: 'Call to Action Content',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'cta',
    },
    {
      name: 'ctaEmail',
      title: 'Call to Action Email',
      type: 'string',
      description: 'Email address for building fund donations',
      group: 'cta',
    },
    {
      name: 'ctaButtonText',
      title: 'CTA Button Text',
      type: 'string',
      description: 'Text for the giving button',
      group: 'cta',
    },
  ],
}
