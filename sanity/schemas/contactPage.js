export default {
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  groups: [
    { name: 'main', title: 'Main Content', default: true },
    { name: 'info', title: 'Contact Info' },
    { name: 'prayer', title: 'Prayer Section' },
    { name: 'success', title: 'Success State' },
  ],
  fields: [
    // Main
    {
      name: 'eyebrow',
      title: 'Eyebrow Label',
      type: 'string',
      description: 'e.g., "Get in Touch"',
      group: 'main',
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'e.g., "We\'d Love to Hear From You"',
      group: 'main',
    },
    {
      name: 'introText',
      title: 'Intro Text',
      type: 'text',
      rows: 4,
      group: 'main',
    },

    // Contact Info
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
      description: 'Public email shown on the contact page',
      group: 'info',
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      description: 'Public phone number shown on the contact page',
      group: 'info',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'text',
      rows: 2,
      description: 'Public address shown on the contact page',
      group: 'info',
    },

    // Prayer
    {
      name: 'prayerLabel',
      title: 'Prayer Request Label',
      type: 'string',
      description: 'e.g., "Prayer Request"',
      group: 'prayer',
    },
    {
      name: 'prayerText',
      title: 'Prayer Request Text',
      type: 'text',
      rows: 3,
      group: 'prayer',
    },

    // Success
    {
      name: 'successEyebrow',
      title: 'Success Eyebrow',
      type: 'string',
      description: 'e.g., "Message Sent"',
      group: 'success',
    },
    {
      name: 'successHeading',
      title: 'Success Heading',
      type: 'string',
      description: 'e.g., "Thank You!"',
      group: 'success',
    },
    {
      name: 'successText',
      title: 'Success Message',
      type: 'text',
      rows: 4,
      group: 'success',
    },
  ],
}
