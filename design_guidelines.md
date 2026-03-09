# AI Montclair — Design Guidelines

> This document is the design contract for every agent, session, and contributor working on this codebase.
> Read it before touching any UI. Follow it without exception.
> When in doubt, ask: *does this feel like a trusted local expert, or a startup template?*

---

## 1. Design Philosophy

AI Montclair's personality is **confident & warm** — the master craftsman who happens to live on your street. It should feel like a trusted local expert's portfolio, not a startup pitch deck.

We are the **opposite** of the generic AI agency look. No purple gradients. No floating UI mockups. No glow orbs. No glassmorphism cards. While every other AI consulting site looks like it was scaffolded in 30 seconds, ours looks like it was built by someone who cares deeply about their town and their craft.

**Priorities, in order:**

1. **Human first** — Andres's face, voice, and story are the product. Every design decision should amplify the person, not obscure him.
2. **Local identity** — Montclair is not a backdrop. It's the brand. Essex County. Neighborhood businesses. Real people.
3. **Confident restraint** — fewer sections, bigger moves. 6 sections that land hard > 12 sections that float by.
4. **Warmth over polish** — grain, cream, texture over glass, glow, gradients.

**What we are NOT:**
- A SaaS startup (no dark glassmorphism, no neon accents, no "powered by AI" badges)
- A generic agency (no stock photos, no "we help businesses grow" copy, no 12-section scroll marathons)
- A template (no default Inter/Lucide/Tailwind-components look — every default must be questioned)

---

## 2. Color System

### Palette

| Token | Hex | Usage |
|---|---|---|
| `canvas` | `#0D0F12` | Primary dark background — hero, alternating dark sections |
| `cream` | `#EDE8DC` | Primary text on dark backgrounds, headlines |
| `cream-muted` | `#A89F8C` | Secondary text, captions, subheadings on dark |
| `brand` | `#07689f` | Brand blue — links, hover states, secondary elements. Use sparingly. |
| `brand-dark` | `#055580` | Brand blue hover/active states |
| `brand-light` | `#e8f4fb` | Brand blue tints (light section accents) |
| `accent` | `#f59e0b` | Amber — **CTAs only.** Primary buttons, key highlights. |
| `accent-dark` | `#d97706` | Amber hover state |
| `accent-light` | `#fef3c7` | Amber tints (light section backgrounds sparingly) |
| `navy` | `#0a1628` | Card surfaces on dark backgrounds, deep sections |
| `warm-cream` | `#F5F0E8` | Light section backgrounds — **never use plain white** |

### Usage Rules

- **Never use plain white (`#ffffff`) as a section background.** Always use `warm-cream` (`#F5F0E8`) for "light" sections.
- **Amber is for CTAs only.** Do not use it for decorative elements, borders, or icons.
- **Brand blue is supporting, not dominant.** It should never be the first thing the eye lands on.
- **Section rhythm:** alternate `canvas` (dark) and `warm-cream` (cream). Top to bottom: dark → cream → dark → cream.
- Grain overlay on all dark sections (see Section 4).

### Contrast Requirements (WCAG AA)
- `cream` on `canvas`: 12.5:1 ✅
- `cream-muted` on `canvas`: 5.8:1 ✅
- White on `accent`: 3.1:1 — acceptable for large bold CTA text only
- Never use `cream-muted` as body copy on anything lighter than `canvas`

---

## 3. Typography

### Typefaces
- **Display / Headlines:** `Sora` (Google Fonts) — loaded in `index.html`
- **Body / UI:** `Inter` (Google Fonts) — loaded in `index.html`

### Scale

| Role | Class | Size | Weight | Font |
|---|---|---|---|---|
| Hero headline | `font-display` | `clamp(64px, 9vw, 120px)` | 700 | Sora |
| Section headline | `text-4xl md:text-5xl font-display` | 36–48px | 700 | Sora |
| Card headline | `text-xl font-display` | 20px | 600 | Sora |
| Eyebrow | `text-xs tracking-[0.2em] uppercase font-semibold` | 12px | 600 | Inter |
| Body | `text-lg leading-relaxed` | 18px | 400 | Inter |
| Caption | `text-sm` | 14px | 400 | Inter |

### Rules
- **Headlines are always left-aligned** unless a deliberate centered moment (e.g., a single closing CTA section). Never center by default.
- **Eyebrow labels** use the amber accent color (`text-accent`) on dark sections, brand blue (`text-brand`) on light sections.
- **Tight leading** on hero headlines: `leading-[0.95]` or `leading-none`. Room to breathe on body: `leading-relaxed`.
- **Never use font weights below 400** for body copy. Thin/light weights are for decorative icon elements only.

---

## 4. Shape, Layout & Grain

### Layout
- **Container:** `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` (use the `.container-custom` utility class)
- **Section padding:** `py-16 md:py-24` standard. Hero gets `py-0` (full viewport height).
- **Generous whitespace** — when in doubt, add more vertical space, not less.
- **Grid:** 12-column Tailwind grid. Cards typically `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`.

### Corners & Surfaces
- Cards on dark sections: `bg-white/5 border border-white/10 rounded-xl`
- Cards on cream sections: `bg-white border border-slate-100 rounded-xl shadow-sm`
- CTA buttons: `rounded-lg` (not `rounded-full` — too playful for our brand)
- Images: `rounded-2xl` for editorial photos, `rounded-full` only for avatar/profile circles

### Grain Overlay
All dark (`canvas`) sections must have the grain overlay applied via the `.grain-overlay` CSS class. This is non-negotiable — it's what separates us from "dark mode template."

```css
.grain-overlay {
  position: relative;
}
.grain-overlay::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('/grain.svg');
  background-repeat: repeat;
  opacity: 0.035;
  pointer-events: none;
  z-index: 1;
}
.grain-overlay > * {
  position: relative;
  z-index: 2;
}
```

The `grain.svg` lives in `/public/grain.svg`. Do not change the opacity above 0.04 — subtle is the point.

### The MONTCLAIR Watermark
The hero section uses "MONTCLAIR" as a full-width background watermark:
- `font-size: clamp(80px, 15vw, 200px)`
- `color: #EDE8DC`, `opacity: 0.04`
- `position: absolute`, `bottom: -20px`, `right: 0`
- `z-index: 0` (behind all content), `pointer-events: none`
- `overflow: hidden` on parent container

This is a brand signature. Do not remove it from the hero. Do not reuse it on other sections.

---

## 5. Iconography

### Icon Library: Phosphor Icons

```bash
npm install @phosphor-icons/react
```

**Do not use Lucide React.** Phosphor is the project standard.

### Weight Rules
| Context | Weight |
|---|---|
| Editorial/dark sections | `weight="light"` or `weight="thin"` |
| Cards, features | `weight="regular"` |
| CTA buttons, emphasis | `weight="bold"` |
| Status indicators | `weight="fill"` |

### Size Rules
- Inline with text: `size={20}`
- Feature cards: `size={32}`
- Hero/large moments: `size={48}`

### Usage
```jsx
import { ArrowRight, CheckCircle, Gear } from '@phosphor-icons/react'

// Editorial section
<ArrowRight size={20} weight="light" />

// CTA button
<ArrowRight size={20} weight="bold" />
```

---

## 6. Interaction & Motion

### General Feel
**Calm and deliberate.** Not bouncy, not flashy. Animations should feel like a confident exhale, not an excited jump.

### Timing
- Fade-in on scroll: `duration: 0.6s, ease: 'easeOut'`
- Stagger between siblings: `delay: i * 0.15s`
- Button hover transitions: `duration-300`
- Page transitions: none (instant route change + scroll-to-top)

### Scroll Animations (Framer Motion)
Standard scroll reveal pattern — use consistently:
```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
>
```

For staggered children:
```jsx
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' }
  })
}
```

### Hover States
- Buttons: `hover:-translate-y-0.5 hover:shadow-xl` — subtle lift
- Cards: `hover:border-brand/20 hover:shadow-md` — border brightens
- Nav links: `text-cream/70 hover:text-cream` — opacity reveal
- **No scale transforms on cards** — too energetic for this brand

### What NOT to do
- No particle effects, no CSS confetti, no attention-seeking animations
- No infinite loops (no `animate={{ rotate: 360 }}` spinners outside loading states)
- No `bounce` or `spring` physics — `easeOut` only

---

## 7. Core UX Patterns

### Navigation
- Logo left, links right: **Services · Industries ▾ · About · Contact · [Free AI Audit button]**
- Unscrolled: `bg-canvas/80 backdrop-blur-md border-b border-cream/5`
- Scrolled (>50px): `bg-canvas/95 backdrop-blur-md border-b border-cream/10`
- Mobile: hamburger menu, full-screen overlay, same link order
- "Free AI Audit" button: amber, always visible in nav on desktop, included in mobile menu

### CTAs
- **Primary:** Amber button (`bg-accent hover:bg-accent-dark`) — "Get My Free AI Audit"
- **Secondary:** Outlined (`border border-cream/30 text-cream hover:bg-cream/5`)
- **Never:** Plain text links as primary actions. Never "Learn More" or "Click Here."
- Every page has exactly **one primary CTA**. No competing amber buttons on the same screen.

### Forms
- `/audit` is the primary lead capture. Do not add inline email capture widgets or popups.
- Form fields: `bg-white/5 border border-white/20 rounded-lg text-cream` on dark, standard on light.

### Social Proof
- Testimonials use real attribution (name, business type) — no generic "— John D., Business Owner"
- Results lead with numbers: "Saves 8 hours/week", "Full waitlist in 2 weeks"
- No star ratings (feels generic/templated)

---

## 8. Voice & Copy

### Who is speaking
Andres Ravinet. First person singular. Always "I", never "we" unless specifically referring to a client engagement. AI Montclair is one person, not an agency.

### Tone
Like a knowledgeable friend explaining something over coffee — not a salesperson, not a professor. Confident but not arrogant. Direct but warm.

### Rules
**Never use:**
leverage, seamless, cutting-edge, robust, scalable, synergy, solution, empower, revolutionize, game-changer, unlock, harness, streamline (as a buzzword), industry-leading, world-class, best-in-class, innovative, state-of-the-art

**Always use:**
- Plain numbers: "saves 8 hours/week", "full waitlist in 2 weeks", "responded to 40% more leads"
- Specific examples: the dental office story is the north star anchor
- Local references: Montclair, Essex County, "the businesses I walk past every day"
- Short sentences. One idea per sentence.
- Active voice. "I build it." Not "it is built."

### CTA Copy Formula
`[Action verb] + [specific value]`
- ✅ "Get My Free AI Audit"
- ✅ "See How It Works"
- ❌ "Learn More"
- ❌ "Contact Us"
- ❌ "Get Started"

### Headlines
Lead with the pain or the outcome, never the service:
- ✅ "Your phone is ringing. Nobody answered."
- ✅ "The dental office story."
- ❌ "AI Chatbot Solutions for Small Business"
- ❌ "Automate Your Workflow"

---

## 9. Photography Treatment

### The Asset
Andres's headshot (`/public/andres-headshot.png`) is the single most important visual on the site. It's what makes the brand real. Treat it accordingly.

### Rules
- **Always editorial, never stock-style.** The photo should feel like a magazine portrait, not a LinkedIn profile card.
- **Desaturate 15%, boost contrast 10%:** `filter: saturate(0.85) contrast(1.1)` in CSS or Tailwind `saturate-[0.85] contrast-[1.1]`.
- **Bleed off edges** when used as a hero element — `overflow: hidden` on parent, no right border radius. Left side `rounded-l-2xl`, right edge bleeds to viewport.
- **Never crop to a small circle** for prominent placements. Circles are for small avatar/attribution uses (48px, founder strip) only.
- **No stock photography.** If a section needs imagery, use abstract patterns, local texture, or leave it clean.

---

## 10. Accessibility

### Contrast Minimums (WCAG AA)
- Normal text: 4.5:1 minimum
- Large text (18px+ bold or 24px+ normal): 3:1 minimum
- `cream` (#EDE8DC) on `canvas` (#0D0F12): 12.5:1 ✅
- `cream-muted` (#A89F8C) on `canvas`: 5.8:1 ✅
- White on `accent` (#f59e0b): 3.1:1 — large CTA text only

### Touch Targets
- Minimum 44×44px for all interactive elements (buttons, nav links, form inputs)
- Nav links on mobile: `py-3` minimum

### Semantic HTML
- One `<h1>` per page (the hero headline)
- Section headlines: `<h2>`, card headlines: `<h3>`
- `<nav>` for navigation, `<main>` wrapping page content, `<footer>` for footer
- All images require meaningful `alt` text. Decorative images: `alt=""`
- Form inputs require associated `<label>` elements

### Motion
- Respect `prefers-reduced-motion`. Wrap Framer Motion animations:
```jsx
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
// Use duration: 0 when true
```

---

## 11. Platform Considerations

### Mobile First
- All layouts designed mobile-first. Desktop is an enhancement.
- Hero: stacks vertically on mobile (photo above, text below). Split layout on `md:` breakpoint.
- Nav: hamburger on mobile (`< md`), horizontal on desktop.
- Touch targets: 44px minimum (see Accessibility).

### Performance Budget
- JS bundle gzipped: < 150KB
- CSS gzipped: < 40KB
- Images: WebP preferred, PNG acceptable for logos/transparency
- Fonts: preconnect to Google Fonts, `display=swap`
- Animations: `transform` and `opacity` only (GPU-accelerated). No `width`, `height`, `top`, `left` animations.

### Browser Support
- Modern evergreen browsers (Chrome, Firefox, Safari, Edge — last 2 versions)
- No IE11 support required
- Test on iOS Safari (primary mobile browser for the target demographic)

### Vercel Deployment
- Branch `master` → production (aimontclair-website.vercel.app)
- Feature branches → preview deployments (automatic)
- `vercel.json` SPA rewrite rule must not be removed
- `npm run build` must pass cleanly before any commit

---

## Appendix: Quick Reference

```
Background (dark):  #0D0F12 (canvas)
Background (light): #F5F0E8 (warm cream — NEVER white)
Headlines on dark:  #EDE8DC (cream)
Subtext on dark:    #A89F8C (cream-muted)
Brand blue:         #07689f (supporting only)
CTAs:               #f59e0b (amber — CTAs only)

Headline font:  Sora (display)
Body font:      Inter (sans)
Icons:          Phosphor Icons (@phosphor-icons/react)

Section order:  dark → cream → dark → cream
Grain:          .grain-overlay on ALL dark sections
Animation:      easeOut, 0.6s, once on scroll
Voice:          Andres. First person. No jargon. Dental story = north star.
```
