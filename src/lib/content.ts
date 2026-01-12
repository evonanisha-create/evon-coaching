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
  
  // Update these paragraphs with your real story from the interview
  story: [
    "I spent years building a career that looked impressive on paper—strategy consulting at Deloitte, leading digital transformation programs at Meta, working with Fortune 500 clients on their biggest challenges.",
    "But somewhere along the way, I found myself asking: Is this it? Is this what I actually want?",
    "That question led me through my own career transitions—from consulting to tech, from individual contributor to leader, and eventually to coaching. Each pivot taught me something crucial about what it takes to make a change that actually sticks.",
    "Now I help other high-achievers do the same. Not with generic career advice, but with the strategic thinking and deep self-awareness that comes from having walked this path myself.",
  ],
  
  philosophyQuote: "Coaching helps you uncover insights that are unique to you—connecting the analytical and creative sides of your brain to unlock potential and reach your goals.",
  
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
  
  industries: ["Consulting", "Technology", "Financial Services", "Media & Entertainment", "Marketing"],
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
  
  // Replace these with real testimonials from Ezra clients
  testimonials: [
    {
      quote: "Working with Evon helped me see my situation with fresh eyes. I was so stuck in my own head, and she asked the questions that helped me find clarity I couldn't find on my own.",
      author: "Senior Manager",
      company: "Technology Company",
      outcome: "Successfully transitioned to a values-aligned role",
    },
    {
      quote: "Evon's strategic background made all the difference. She understood the corporate world I was navigating and helped me approach my career change like a business problem—with a clear plan and actionable steps.",
      author: "Former Consultant",
      company: "Transitioned to Tech",
      outcome: "Made a successful pivot from consulting",
    },
    {
      quote: "I was drowning in imposter syndrome after my promotion. Evon helped me build real confidence—not fake positivity, but genuine belief in my ability to lead. My team has noticed the difference.",
      author: "New People Manager",
      company: "Financial Services",
      outcome: "Built confidence in leadership role",
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
