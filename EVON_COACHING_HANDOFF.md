# Evon Davis Coaching Website — Project Handoff & Briefing

**Use this document to get fully up to speed on this project. Read it before making any changes.**

---

## WHO YOU'RE WORKING WITH

**Jason** — the person giving you instructions. He is NOT technical. He does not use the terminal. He edits code through Claude Code (this app) and pushes changes via GitHub Desktop. Give him clear, jargon-free explanations. Don't assume he knows what things like "npm install" or "build errors" mean without context.

**Evon Davis** — the client. This is her professional coaching website. She's a career and leadership coach who transitioned from consulting (Deloitte, BTS) → tech (Meta) → full-time coaching (2022). She has a 5-month-old baby, which affects scheduling for content-gathering sessions.

---

## THE WEBSITE

**Live site:** https://evon-coaching.vercel.app  
**GitHub repo:** https://github.com/evonanisha-create/evon-coaching  
**Deployment:** Vercel (auto-deploys when changes are pushed to GitHub)

### Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Playfair Display (headings) + DM Sans (body) via next/font
- **Hosting:** Vercel (free tier)
- **Images:** Next.js Image component

### Brand Identity
- **Colors:** Black (#000000), White (#FFFFFF), Royal Blue (#0000FF), Dark Hot Pink (#D90166)
- **Tone:** Professional with warmth — not corporate-cold, not life-coach-woo
- **Brand Personality:** Warm, trustworthy, strategic, intuitive
- **Visual Identity:** Clean, editorial, high-end coaching aesthetic

---

## PROJECT STRUCTURE

```
evon-coaching/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles, brand colors, component classes
│   │   ├── layout.tsx           # Root layout, font loading, metadata/SEO
│   │   └── page.tsx             # Main page — assembles all sections
│   └── components/
│       ├── Header.tsx           # Fixed nav bar with mobile menu
│       ├── Hero.tsx             # Hero section with headshot, headline, CTAs
│       ├── About.tsx            # Evon's story, credentials, career timeline
│       ├── HowItWorks.tsx       # 4-step process (Assessment → Discovery → Coaching → Action)
│       ├── Services.tsx         # Pricing cards ($250/session, $900/4-pack)
│       ├── Assessment.tsx       # Interactive 5-question career clarity assessment
│       ├── Testimonials.tsx     # Client testimonials (PLACEHOLDER — see below)
│       ├── Contact.tsx          # Discovery call CTA + "what to expect" section
│       └── Footer.tsx           # Footer with nav links and credentials
├── public/
│   └── evon-headshot.webp       # Evon's professional headshot
├── content.ts                   # Centralized content config (NOT currently used by all components)
├── package.json
├── tailwind.config.ts           # Custom colors, fonts, animations
├── globals.css                  # Tailwind base + custom component/utility classes
└── next.config.js
```

### Important Architecture Note
There is a `content.ts` file that was intended to centralize all site content for easy editing. However, **most components currently have their content hardcoded directly in the component files**, not pulling from `content.ts`. This means to update content, you typically need to edit the specific component file (e.g., `About.tsx`, `Testimonials.tsx`), not `content.ts`. Eventually, components should be refactored to use `content.ts`, but that's a lower priority than content updates.

---

## WHAT'S BEEN BUILT (Current State)

### ✅ Complete & Working
- **Hero section** — headline, subheadline, Evon's headshot with decorative frames, CTA buttons, credentials bar
- **About section** — Evon's career story (consulting → tech → coaching), credentials (ICF ACC, CPC/IPEC, 200+ clients), career timeline, client industries
- **How It Works** — 4-step visual process flow
- **Services** — Two pricing cards (Single Session $250, 4-Pack $900) with features and "ideal for" categories
- **Assessment** — Interactive 5-question Career Clarity Assessment with 5 archetype results
- **Testimonials** — Three testimonial cards (BUT these are placeholder — see below)
- **Contact** — Discovery call CTA with "what to expect" breakdown, email fallback
- **Footer** — Navigation, credentials, copyright
- **Header** — Fixed nav with scroll effect, mobile hamburger menu
- **Design system** — Full Tailwind config with brand colors, custom animations, scroll-triggered reveal animations on all sections
- **SEO** — Meta tags, Open Graph, Twitter cards
- **Responsive** — Mobile-first design throughout

### ⚠️ Placeholder / Needs Real Content
These items are functional but running on fabricated or generic content:

1. **Testimonials (Testimonials.tsx)** — All three testimonials are FABRICATED. The code has a TODO comment: "Replace with actual testimonials from Evon's Ezra clients." This is the single most important content gap. The current quotes sound reasonable but are not from real people.

2. **Assessment Logic (Assessment.tsx)** — The archetype assignment logic is placeholder-level. It primarily keys off the FIRST question's answer (`current_feeling`), with minimal consideration of other answers. The TODO says: "Refine this logic based on Evon's input." The five archetypes themselves are well-written:
   - **The Burned-Out High Achiever** — successful on paper but exhausted
   - **The Stuck Strategist** — analytical, paralyzed by options
   - **The Emerging Leader** — new to leadership role, imposter syndrome
   - **The Returner** — coming back after a break
   - **The Misaligned Expert** — good at job but it no longer fits

3. **About Section (About.tsx)** — Content is based on an Otter.ai transcript of Evon describing her bio. It reads too much like a LinkedIn summary. Needs specific stories, concrete examples, and differentiated language that shows what makes Evon unique vs. other coaches.

4. **Email Capture (Assessment.tsx)** — The email form after assessment completion is a STUB. It simulates a 1-second delay and does nothing. TODO says: "Integrate with ConvertKit or email service." Currently users can skip it and see results directly.

5. **Booking Link (Contact.tsx)** — Points to `https://cal.com/evondavis/discovery` — may or may not be set up. TODO says: "Replace with actual Cal.com or Calendly embed/link."

6. **Hero floating quote** — The small quote card overlaying the headshot image says: "Evon helped me see what I couldn't see myself. Three months later, I made a move I'd been avoiding for years." — this is fabricated.

---

## EVON'S BACKGROUND (For Writing Authentic Content)

### Career Timeline
- **2012–2018:** Strategy Consultant at Deloitte and BTS
  - Started career at a big consulting house (Deloitte), interned there before going full-time
  - Found passion for strategy work
  - Moved to BTS (smaller firm) specializing in strategy alignment and execution — this brought her to Austin, TX
  - At BTS she specialized in strategy at the intersection of innovation, digital transformation, and digital disruption
- **2018–2022:** Meta (Facebook) — Strategy & Operations
  - Moved from consulting to tech/industry
  - Worked in operations first, then marketing and sales
  - Still using strategy skills but in a completely different context
- **2020 (Pandemic):** Reflection period
  - World slowed down, had space to reflect
  - Didn't want to go back to consulting, didn't see herself staying in tech forever
  - Realized she wanted to "marry" her consulting experience with more intimate client work
  - Instead of big engagements for whole companies → working closely with individuals on their "personal strategy"
- **2021:** Got ICF coaching certification (CPC through IPEC)
- **2021–2022:** Tested coaching alongside her day job to validate it
- **2022:** Left Meta, went full-time into coaching
- **2022–Present:** Full-time career & leadership coach
  - Works at Ezra Coaching (a coaching company) AND has her own private practice
  - 200+ clients coached across industries and levels

### Credentials
- ICF ACC (Associate Certified Coach) — International Coaching Federation
- CPC — Certified Professional Coach through IPEC
- 200+ clients coached
- Fortune 500 to nonprofits, new grads to executives

### Key Differentiator
She has LIVED the career pivots she coaches on (consulting → tech → coaching). She understands high-achiever career transitions from the inside because she's navigated them herself. This is not theoretical — it's experiential.

### Her Coaching Philosophy (from her own words)
"Coaching helps you uncover insights that are unique to you — connecting the analytical and creative sides of your brain to unlock potential and reach your goals."

### Target Client Profile
- Professionals navigating career transitions including:
  - Changing jobs/careers
  - Starting a new role and wanting to build confidence
  - Gaining the confidence to try something different/new
  - New people managers
  - Returning to work after maternity leave
  - Feeling misaligned with current role
- **What they want:** Confidence to take values-aligned next steps, clarity on what they actually want, healthier work boundaries
- **Price sensitivity:** Willing to invest $250/session or $900+ for packages if they see clear value

### Client Outcomes
- Gaining the confidence to take values-aligned next steps
- Understanding what they want and how to better align to that
- More confidence at work
- Setting healthier boundaries with work

---

## WHAT NEEDS TO HAPPEN NEXT (Priority Order)

### Priority 1: Content Gathering Interview with Evon
The single biggest bottleneck is that the website lacks authentic, specific content from Evon. Jason has planned a content-gathering interview with Evon to fill these gaps. The interview needs to be short (can work around a 5-month-old's nap schedule) and focused.

**Key content to gather:**
1. **Real client transformation stories** (anonymized) — the MOST critical need
   - What was the client's situation when they came to Evon?
   - What was the turning point or breakthrough?
   - What changed for them after coaching?
   - Can be anonymized (e.g., "Senior Manager at a tech company")
2. **Evon's signature discovery questions** — the questions she actually asks in first sessions
3. **Signature reframes** — the things Evon says that make clients go "oh, I never thought of it that way"
4. **Proud moments** — specific coaching wins that show Evon's unique impact

### Priority 2: Replace Placeholder Testimonials
Once real stories are gathered, replace the three fabricated testimonials in `Testimonials.tsx` with real quotes/stories. Also replace the fabricated floating quote on the Hero section.

### Priority 3: Strengthen About Section
Rewrite the About section with specific stories and concrete examples rather than the current LinkedIn-summary style. The bio should make a visitor think "this person understands MY situation" not just "this person has an impressive resume."

### Priority 4: Improve Assessment Logic
Refine the archetype assignment in `Assessment.tsx` to use multiple answers, not just the first question. Ideally map it to Evon's actual discovery call patterns — the kinds of things she picks up on in initial conversations with clients.

### Priority 5: Technical Integrations
- Connect email capture to ConvertKit or similar
- Verify/set up Cal.com booking link
- Consider adding Evon's LinkedIn and other social links

---

## DESIGN PRINCIPLES & GUIDELINES

### Writing Tone
- Professional with warmth — like a smart friend who happens to be an expert
- NOT corporate-cold (no jargon-heavy consulting-speak)
- NOT life-coach-woo (no vague affirmations, no "manifest your destiny")
- Specific and concrete over generic and inspirational
- Use Evon's actual language and phrases when possible

### Visual Design
- Clean, editorial, high-end feel
- Generous whitespace
- Pink (#D90166) used as accent — for CTAs, highlights, decorative lines
- Blue (#0000FF) used for emphasis text, hover states
- Black backgrounds for high-contrast sections (Services, Contact)
- Scroll-triggered fade-in animations on all sections (IntersectionObserver)

### Content Philosophy
- Client stories and emotional narrative beats are more powerful than credential lists
- Show, don't tell — specific transformation stories > "I help people succeed"
- The site should make visitors feel understood, not impressed
- Every section should answer: "What's in it for ME?" from the visitor's perspective

---

## DEPLOYMENT WORKFLOW

1. Jason makes changes in Claude Code (this app)
2. Jason opens GitHub Desktop — it shows all changed files
3. Jason writes a commit message and clicks "Commit to main"
4. Jason clicks "Push origin"
5. Vercel automatically detects the push and deploys (takes ~1-2 minutes)
6. Changes are live at evon-coaching.vercel.app

### If Something Breaks
- Vercel dashboard (vercel.com) shows build logs and deployment status
- If a deploy fails, the previous working version stays live
- Most common issues: missing closing brackets, unclosed quotes, typos in JSX

---

## FILES YOU'LL EDIT MOST OFTEN

| What you want to change | Edit this file |
|---|---|
| Hero headline, subheadline, CTAs | `src/components/Hero.tsx` |
| Evon's bio/story | `src/components/About.tsx` |
| Testimonials/client stories | `src/components/Testimonials.tsx` |
| Assessment questions or archetypes | `src/components/Assessment.tsx` |
| Pricing/services | `src/components/Services.tsx` |
| Process steps | `src/components/HowItWorks.tsx` |
| Contact section / booking link | `src/components/Contact.tsx` |
| Footer links / credentials | `src/components/Footer.tsx` |
| Navigation links | `src/components/Header.tsx` |
| SEO title/description | `src/app/layout.tsx` |
| Global styles / brand colors | `src/app/globals.css` + `tailwind.config.ts` |
| Centralized content (partially used) | `content.ts` |

---

## IMPORTANT NOTES FOR CLAUDE CODE

1. **This is a Next.js 14 App Router project.** Components using hooks (useState, useEffect, useRef) need `'use client'` at the top. All existing components already have this.

2. **Don't break the existing design.** The current design system is intentional and polished. When making content changes, preserve the existing styling, animations, and layout structure.

3. **Content changes should be surgical.** When Jason asks to update text, change ONLY the text — don't restructure components or change styling unless specifically asked.

4. **The headshot image** is at `public/evon-headshot.webp` and referenced in `Hero.tsx` as `/evon-headshot.webp`.

5. **All components use IntersectionObserver** for scroll-triggered animations. This pattern is consistent across the site and should be maintained.

6. **UTF-8 encoding:** Some files may show encoded characters like `â€"` (em dash), `â€™` (apostrophe), etc. These display correctly in the browser. If you're editing near them, be careful not to corrupt them.

7. **The `content.ts` file exists** but most components DON'T import from it. If refactoring to use it, you'd need to add imports to each component. This is a nice-to-have, not a priority.

8. **Jason pushes changes via GitHub Desktop.** After you make edits, remind him to commit and push through GitHub Desktop so Vercel can deploy.
