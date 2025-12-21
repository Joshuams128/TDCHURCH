export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'heroVideoUrl',
      title: 'Hero Video URL',
      type: 'url',
      description: 'Paste a video URL (YouTube, Vimeo, or direct video link)',
    },
    {
      name: 'heroVideoFile',
      title: 'Hero Video File',
      type: 'file',
      description: 'Or upload a video file (MP4 recommended)',
      options: {
        accept: 'video/*',
      },
    },
    {
      name: 'heroImage',
      title: 'Hero Image (Fallback)',
      type: 'image',
      description: 'Fallback image if video fails to load',
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
      name: 'heroHeadingFontSize',
      title: 'Hero Heading Font Size',
      type: 'string',
      description: 'e.g., "3rem", "48px", "4vw" - Leave empty for default size',
    },
    {
      name: 'heroSubheading',
      title: 'Hero Subheading',
      type: 'string',
    },
    {
      name: 'heroSubheadingFontSize',
      title: 'Hero Subheading Font Size',
      type: 'string',
      description: 'e.g., "1.5rem", "24px", "2vw" - Leave empty for default size',
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
