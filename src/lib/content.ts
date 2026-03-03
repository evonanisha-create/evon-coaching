/**
 * SITE CONTENT CONFIGURATION
 * 
 * Evon - Edit this file to update your website content!
 * After making changes, save the file and your site will automatically update.
 * 
 * Tips:
 * - Keep text in quotes: "like this"
 * - Don't delete the commas at the end of lines
 * - Preview your changes at localhost:3000 before pushing
 */

export const siteConfig = {
  // Basic Info
  name: "Evon Davis",
  title: "Career & Leadership Coach",
  email: "hello@evondavis.com",
  
  // Booking
  calendarLink: "https://cal.com/evondavis/discovery", // Update with your Cal.com link
  
  // Social (add these if/when you create accounts)
  social: {
    linkedin: "", // e.g., "https://linkedin.com/in/evondavis"
    instagram: "",
    twitter: "",
  },
}

export const heroContent = {
  eyebrow: "Career & Leadership Coach",
  headline: "Ready for your next chapter?",
  subheadline: "I help high-achieving professionals navigate career transitions with clarity and confidence—because I've been there myself.",
  primaryCTA: "Take the Free Assessment",
  secondaryCTA: "Learn More",
  credibilityLine: "Former strategist at",
  companies: ["Deloitte", "Meta"],
}

export const aboutContent = {
  sectionLabel: "My Story",
  headline: "I've navigated the transitions I now help others through",
  
  story: [
    "When the pandemic slowed everything down, I finally had space to look around and reflect. I was approaching another performance review and realized I was working hard to progress in a career I could do but didn't care much about. I wanted to change that.",
    "I'd spent years in strategy consulting at Deloitte and BTS, then made the leap to tech at Meta. Same strategy skills, completely different contexts. But I kept coming back to the same question: what if I could take everything I'd learned and apply it in a way that actually aligned to my values?",
    "I anguished over that choice for not days or months, but years. Eventually I realized I needed to face the 'what if.' I didn't want regrets or resentments, so I knew giving coaching a real try was the way to go.",
    "When I finally left Meta to coach full-time, I was relieved and excited to try something completely different than anything I'd done before. Now I've worked with over 200 clients, from individual contributors to executives, across industries from tech to healthcare to financial services.",
  ],

  philosophyQuote: "You are capable of figuring out what works for you.",
  
  credentials: [
    { label: "ICF ACC Certified", description: "International Coaching Federation" },
    { label: "CPC, IPEC", description: "Certified Professional Coach" },
    { label: "10+ Years", description: "Strategy & Leadership Experience" },
  ],
  
  background: [
    { company: "Meta", role: "Digital Transformation Program Manager", color: "pink" },
    { company: "Deloitte & BTS", role: "Strategy Consultant", color: "blue" },
    { company: "University of Maryland", role: "B.S. Accounting & Finance", color: "black" },
  ],
  
  industries: ["Technology", "Healthcare", "Financial Services", "CPG", "Retail", "Pharma", "Professional Services"],
}

export const servicesContent = {
  sectionLabel: "Services",
  headline: "Invest in your next chapter",
  subheadline: "Structured coaching designed to help you move from stuck to clear, from uncertain to confident.",
  
  offerings: [
    {
      name: "Single Session",
      price: "$250",
      unit: "per session",
      description: "For focused work on a specific challenge or when you need a strategic thought partner for a key decision.",
      features: [
        "60-minute 1:1 coaching session",
        "Pre-session intake questions",
        "Action items and next steps",
        "Follow-up email summary",
      ],
      cta: "Book a Session",
      featured: false,
    },
    {
      name: "Coaching Package",
      price: "$900",
      unit: "4 sessions",
      description: "The most effective way to create lasting change. Build momentum over multiple sessions with ongoing support.",
      features: [
        "Four 60-minute coaching sessions",
        "Flexible scheduling over 2-3 months",
        "Email support between sessions",
        "Personalized action planning",
        "Save $100 vs. single sessions",
      ],
      cta: "Get Started",
      featured: true,
    },
  ],
  
  idealFor: [
    { title: "Career Transitions", description: "Changing jobs, industries, or career paths entirely" },
    { title: "New Managers", description: "Building confidence and skills in your first leadership role" },
    { title: "Return to Work", description: "Rebuilding confidence after maternity leave or a career break" },
    { title: "Feeling Stuck", description: "Successful on paper but unfulfilled—ready for something different" },
  ],
}

export const testimonialsContent = {
  sectionLabel: "Client Stories",
  headline: "What clients say",
  subheadline: "Real transformations from professionals who were ready to make a change.",
  
  testimonials: [
    {
      quote: "Thank you for all your time. It was truly very helpful as it gave me moments of reflection. I appreciate it more than words can express. I hope our paths cross soon.",
      author: "Career Coaching Client",
    },
    {
      quote: "Just wrapped my conversation with the VP. Your guidance was spot on and I'm feeling much more encouraged. I wanted to share this with you immediately.",
      author: "Career Coaching Client",
    },
    {
      quote: "A lot of things have changed for me since we ended our coaching engagement, but your guidance and the GPS metaphor has really helped me stay grounded through all of it. Thanks to our work together, it's so much easier to keep my 'why' at the forefront of my decision-making. The road may be ever-evolving, but there's beauty and surprise to be found along the way.",
      author: "Career Coaching Client",
    },
  ],
}

export const contactContent = {
  sectionLabel: "Let's Talk",
  headline: "Ready to take the next step?",
  subheadline: "Book a free 30-minute discovery call. We'll talk about where you are, where you want to be, and whether coaching is the right next step for you.",
  ctaText: "Book Your Free Discovery Call",
  
  callSteps: [
    { number: "01", title: "Share your story", description: "Tell me about where you are and what's on your mind." },
    { number: "02", title: "Get initial insights", description: "I'll reflect back what I'm hearing and share perspective." },
    { number: "03", title: "Explore next steps", description: "We'll discuss if and how coaching might help." },
  ],
}
