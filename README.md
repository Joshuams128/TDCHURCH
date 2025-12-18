# TD Church Website

A modern church website built with Next.js and Sanity CMS.

## Features

- **Dynamic Content Management**: All content managed through Sanity CMS
- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, modern design with full-screen hero section
- **Easy Navigation**: Mobile-friendly hamburger menu

## Project Structure

```
├── app/
│   ├── layout.js          # Root layout
│   ├── page.js            # Homepage
│   └── globals.css        # Global styles
├── components/
│   ├── Header.js          # Header component with navigation
│   └── Hero.js            # Hero section component
├── lib/
│   └── sanity.js          # Sanity client configuration
├── sanity/
│   └── schemas/
│       ├── siteSettings.js # Site settings schema
│       ├── homepage.js     # Homepage schema
│       └── index.js        # Schema exports
└── package.json
```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Sanity

The project is already configured to use your Sanity project ID: `avxwux9f`

You need to add the schemas to your Sanity Studio:

1. In your Sanity Studio project, import the schemas from `sanity/schemas/`
2. Add them to your `sanity.config.js` or schema configuration

### 3. Add Content in Sanity Studio

Create the following documents in your Sanity Studio:

**Site Settings:**
- Upload a logo image
- Set site name
- Add navigation links (title and URL)
- Add social media links
- Enter footer text

**Homepage:**
- Upload hero background image
- Set hero heading text
- Set hero subheading text
- Set CTA button text and link

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Sanity Schemas

### Site Settings Schema
- **logo**: Image for site logo
- **siteName**: String for site name
- **navigation**: Array of links (title, url)
- **socialLinks**: Array of social links (platform, url)
- **footerText**: Text for footer

### Homepage Schema
- **heroImage**: Background image for hero section
- **heroHeading**: Main heading text
- **heroSubheading**: Subheading text
- **ctaButtonText**: Call-to-action button text
- **ctaButtonLink**: CTA button destination URL

## Design Features

- **Header**: 
  - Transparent overlay on hero
  - Logo on left
  - "Coming Up" with calendar icon in center
  - Hamburger menu on right

- **Hero Section**:
  - Full viewport height
  - Background image with dark overlay
  - Centered white text (uppercase, bold)
  - CTA button with border and hover effects

## Technologies Used

- **Next.js 14**: React framework with App Router
- **Sanity CMS**: Headless CMS for content management
- **Lucide React**: Icon library for calendar and menu icons
- **CSS**: Custom styling for responsive design