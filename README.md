# Evon Davis Coaching Website

A premium coaching website with an interactive Career Clarity Assessment tool.

## Quick Start

### 1. Clone and Install

```bash
git clone https://github.com/evonanisha-create/evon-coaching.git
cd evon-coaching
npm install
```

### 2. Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Deploy to Vercel

Push to GitHub and Vercel will auto-deploy.

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Hosting:** Vercel (free tier)

## Brand Colors

- **Black:** #000000
- **White:** #FFFFFF
- **Royal Blue:** #0000FF
- **Dark Hot Pink:** #D90166

## Project Structure

```
evon-coaching/
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout with fonts
│   │   └── page.tsx         # Main page
│   └── components/
│       ├── Header.tsx       # Navigation
│       ├── Hero.tsx         # Hero section
│       ├── About.tsx        # About/story
│       ├── HowItWorks.tsx   # Process steps
│       ├── Services.tsx     # Pricing
│       ├── Assessment.tsx   # Interactive assessment
│       ├── Testimonials.tsx # Client testimonials
│       ├── Contact.tsx      # Booking CTA
│       └── Footer.tsx       # Footer
├── public/                  # Images go here
└── package.json
```

## Adding Images

1. Add `evon-headshot.jpg` to the `/public` folder
2. The Hero component will automatically use it

## Connecting Custom Domain

1. In Vercel dashboard → Settings → Domains
2. Add `evoncoaching.com`
3. Update DNS records as instructed

## Content Updates

Most content is in the component files under `src/components/`. Edit directly and push to deploy.

