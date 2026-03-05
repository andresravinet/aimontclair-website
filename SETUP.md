# AI Montclair Website — Setup Instructions

## Prerequisites

- Node.js 16+ and npm installed
- GitHub account with SSH keys configured

## Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Update Formspree endpoint:**
   - Go to https://formspree.io and create a new form
   - Copy your form ID (e.g., `xeojzaqe`)
   - Update `src/pages/Contact.jsx` line ~75:
     ```javascript
     form.action = 'https://formspree.io/f/YOUR_FORM_ID'
     ```

3. **Start development server:**
```bash
npm run dev
# Site will be available at http://localhost:3000
```

## Build & Deploy

```bash
npm run build
# Creates optimized build in dist/
```

Deploy the `dist/` folder to your hosting:
- **Vercel:** Connect repo, auto-deploys on push
- **Netlify:** Connect repo, drag-and-drop `dist/` folder
- **Traditional hosting:** Upload `dist/` contents to web root

## File Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx          # Sticky nav with mobile menu
│   │   └── Footer.jsx          # Footer with links and contact
│   ├── home/
│   │   ├── Hero.jsx            # Homepage hero section
│   │   ├── PainPoints.jsx       # 3-card pain points section
│   │   ├── Services.jsx         # 4 service cards
│   │   ├── HowItWorks.jsx       # 3-step process
│   │   ├── Industries.jsx       # 6 industry cards
│   │   ├── Testimonials.jsx     # 3 testimonial cards
│   │   ├── FAQ.jsx              # 6 FAQ accordion items
│   │   └── CTASection.jsx       # Dark CTA section
│   └── ui/
│       ├── Button.jsx           # Reusable button component
│       └── Card.jsx             # Reusable card component
├── pages/
│   ├── Home.jsx                 # Homepage
│   ├── Services.jsx             # Services detail page
│   ├── Industries.jsx           # Industries detail page
│   ├── About.jsx                # About page
│   └── Contact.jsx              # Contact form page
├── App.jsx                      # Main router
├── main.jsx                     # Entry point
└── index.css                    # Global styles

public/
├── robots.txt                   # SEO robots file
└── sitemap.xml                  # XML sitemap

Configuration:
├── vite.config.js               # Vite config
├── tailwind.config.js           # Tailwind customization
├── postcss.config.js            # PostCSS config
├── package.json                 # Dependencies
└── index.html                   # HTML template
```

## Customization Guide

### Changing Brand Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  'navy': '#0F172A',    // Primary dark
  'lime': '#22C55E',    // Accent CTA
  'slate-light': '#F8FAFC', // Background
}
```

### Updating Service Area
1. **Hero section:** `src/components/home/Hero.jsx` line ~35
2. **Footer:** `src/components/layout/Footer.jsx` line ~45

### Adding/Removing Industries
Edit `src/pages/Industries.jsx` and update the `industries` array.

### Updating FAQ Items
Edit `src/components/home/FAQ.jsx` and update the `faqs` array.

### Changing Contact Email
Update in:
1. `src/components/layout/Footer.jsx`
2. `src/pages/Contact.jsx`

## Content Updates

### Update Testimonials
Edit `src/components/home/Testimonials.jsx` and replace lorem ipsum names with real client names.

### Update Services Copy
Services copy is in:
- `src/components/home/Services.jsx` (overview)
- `src/pages/Services.jsx` (detailed)

### Update About Page
Edit `src/pages/About.jsx` to customize Andres's bio and mission statement.

## SEO

All pages have:
- Unique `<title>` tags
- Meta descriptions
- Open Graph tags (homepage)
- JSON-LD structured data (homepage ready)

To add structured data, uncomment in page headers:
```jsx
useEffect(() => {
  // Add JSON-LD script tag
}, [])
```

## Performance Optimization

- Images should be optimized (use WebP format)
- Keep bundle size minimal by lazy-loading components
- Use Lighthouse DevTools to monitor performance
- Target: 90+ score on all metrics

## Troubleshooting

**Port 3000 already in use:**
```bash
npm run dev -- --port 3001
```

**Build fails:**
- Check Node version: `node -v` (needs 16+)
- Clear cache: `rm -rf node_modules && npm install`
- Rebuild: `npm run build`

**Formspree not working:**
- Verify form ID is correct
- Check browser console for errors
- Test with curl:
  ```bash
  curl -X POST https://formspree.io/f/YOUR_ID \
    -H "Content-Type: application/json" \
    -d '{"name":"Test","email":"test@example.com"}'
  ```

## Support

For issues, check:
1. React Router docs: https://reactrouter.com
2. Tailwind CSS docs: https://tailwindcss.com
3. Framer Motion docs: https://www.framer.com/motion
4. Vite docs: https://vitejs.dev
