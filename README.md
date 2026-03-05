# AI Montclair Website

Professional AI automation consulting website for small businesses in Montclair, NJ and Essex County.

## Features

- **React 18 + Vite** - Fast, modern frontend
- **Tailwind CSS** - Utility-first styling with custom brand colors
- **Framer Motion** - Smooth scroll animations and transitions
- **React Router** - Multi-page routing
- **Responsive Design** - Mobile-first, fully responsive
- **SEO Optimized** - Meta tags, structured data, sitemap, robots.txt
- **Contact Form** - Integrated with Formspree for lead capture

## Pages

- **Home** (/) - Hero, pain points, services, how it works, industries, testimonials, FAQ, CTA
- **Services** (/services) - Detailed service offerings with benefits and integrations
- **Industries** (/industries) - Industry-specific use cases and ROI
- **About** (/about) - Company mission and philosophy
- **Contact** (/contact) - Contact form and business information

## Tech Stack

- React 18
- Vite 5
- Tailwind CSS 3
- Framer Motion 10
- React Router 6
- React Hook Form 7
- Lucide React (icons)

## Setup

```bash
npm install
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Configuration

### Formspree Integration

The contact form uses Formspree for email delivery. Update the form action in `src/pages/Contact.jsx`:

```javascript
form.action = 'https://formspree.io/f/YOUR_FORM_ID' // Replace YOUR_FORM_ID
```

1. Visit https://formspree.io
2. Create a new form
3. Copy your form ID
4. Update the action URL above

## Customization

### Brand Colors

Edit `tailwind.config.js` to customize brand colors:
- Navy: `#0F172A` (primary dark)
- Lime: `#22C55E` (accent CTA)
- Slate Light: `#F8FAFC` (background)

### Service Area

Update service area text in `src/components/layout/Footer.jsx` and `src/components/home/Hero.jsx` as needed.

### Integrations List

Update integrations in `src/pages/Services.jsx` to match your current offerings.

## Deployment

Build for production:
```bash
npm run build
```

Deploy the `dist/` folder to your hosting provider (Vercel, Netlify, etc.).

## Performance

- Lighthouse target: 90+
- Optimized images and fonts
- Lazy-loaded components with Framer Motion
- Code splitting via Vite

## License

© 2026 AI Montclair. All rights reserved.
