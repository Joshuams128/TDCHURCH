export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
    },
    {
      name: 'navigation',
      title: 'Navigation',
      type: 'array',
      description: 'Toggle "Show on Top" to display up to 4 items in the top row. The rest will appear in the grid below.',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'url',
              title: 'URL',
              type: 'string',
            },
            {
              name: 'showOnTop',
              title: 'Show on Top',
              type: 'boolean',
              description: 'Display this item in the top row (max 4 items)',
              initialValue: false,
            },
            {
              name: 'highlightColor',
              title: 'Highlight Color',
              type: 'string',
              description: 'Optional: Hex color for this item (e.g., #0066FF for blue)',
            },
          ],
        },
      ],
    },
    {
      name: 'instagramUrl',
      title: 'Instagram URL',
      type: 'url',
      description: 'Your Instagram profile URL',
    },
    {
      name: 'tiktokUrl',
      title: 'TikTok URL',
      type: 'url',
      description: 'Your TikTok profile URL',
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              title: 'Platform Name',
              type: 'string',
            },
            {
              name: 'url',
              title: 'URL',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'footerText',
      title: 'Footer Text',
      type: 'text',
    },
  ],
}
