// SEO: JSON-LD structured data for rich results in Google
// TODO: SWAP TO PRODUCTION DOMAIN when coachwithevon.com is connected

const SITE_URL = 'https://evon-coaching.vercel.app'

export default function StructuredData() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Evon Davis',
    jobTitle: 'Career & Leadership Coach',
    description: 'ICF ACC certified career and leadership coach in Austin, Texas. Former Deloitte and Meta strategist helping professionals navigate career transitions with clarity and confidence.',
    url: SITE_URL,
    knowsAbout: [
      'Career Coaching',
      'Leadership Development',
      'Career Transitions',
      'Executive Coaching',
      'Career Strategy',
      'Professional Development',
      'Values Alignment',
      'Imposter Syndrome',
      'Burnout Recovery',
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Professional Certification',
        name: 'ICF ACC (Associate Certified Coach)',
        recognizedBy: {
          '@type': 'Organization',
          name: 'International Coaching Federation',
        },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Professional Certification',
        name: 'CPC (Certified Professional Coach)',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Institute for Professional Excellence in Coaching (IPEC)',
        },
      },
    ],
    alumniOf: [
      { '@type': 'Organization', name: 'Deloitte' },
      { '@type': 'Organization', name: 'Meta' },
      { '@type': 'Organization', name: 'BTS' },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Austin',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
  }

  const professionalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Evon Davis Career & Leadership Coaching',
    description: 'Career and leadership coaching for high-achieving professionals navigating career transitions. ICF certified, based in Austin TX, serving clients nationwide.',
    url: SITE_URL,
    provider: {
      '@type': 'Person',
      name: 'Evon Davis',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Austin',
      },
      {
        '@type': 'Country',
        name: 'United States',
      },
    ],
    serviceType: ['Career Coaching', 'Leadership Coaching', 'Executive Coaching', 'Career Transition Coaching'],
    priceRange: '$250-$900',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Coaching Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Single Coaching Session',
            description: 'A focused 60-minute 1:1 coaching session for a specific career challenge or key decision.',
          },
          price: '250',
          priceCurrency: 'USD',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Coaching Package (4 Sessions)',
            description: 'Four 60-minute coaching sessions with flexible scheduling and email support between sessions.',
          },
          price: '900',
          priceCurrency: 'USD',
        },
      ],
    },
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How Career Coaching Works with Evon Davis',
    description: 'A structured four-step process to help you navigate your career transition with clarity and confidence.',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Get Clarity',
        text: 'Take the free Career Clarity Assessment to understand your unique situation and what is really holding you back.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Discovery Call',
        text: 'A free 30-minute conversation to explore your goals, discuss your results, and see if coaching is a good fit.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Coaching Partnership',
        text: 'Structured 1:1 sessions designed to help you build confidence, gain clarity, and take meaningful action toward your goals.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Take Action',
        text: 'Move forward with clarity and confidence toward a career change, new role, healthier boundaries, or leadership growth.',
      },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is career coaching?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Career coaching is a professional partnership that helps you gain clarity, build confidence, and take strategic action in your career. Unlike therapy, which often explores the past, coaching is forward-focused and action-oriented. A good career coach helps you identify what you want, overcome the obstacles in your way, and create a concrete plan to get there.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does career coaching cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Career coaching sessions with Evon Davis start at $250 for a single 60-minute session. A four-session coaching package is $900 (saving $100 compared to individual sessions). Each session includes pre-session intake questions, action items, and a follow-up summary. A free 30-minute discovery call is available to discuss your goals before committing.',
        },
      },
      {
        '@type': 'Question',
        name: "What's the difference between career coaching and therapy?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Therapy typically focuses on healing, processing emotions, and understanding patterns from the past. Career coaching is future-focused and action-oriented. It helps you get clear on what you want professionally, build confidence to make changes, and create a strategic plan. Many people benefit from both, but they serve different purposes.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does career coaching take to see results?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Many clients experience meaningful clarity and momentum within 2-4 sessions. The four-session coaching package, typically completed over 2-3 months, is designed to create lasting change. Some clients achieve their goals within this timeframe, while others choose to continue with additional sessions for ongoing support.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is career coaching worth it?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Career coaching is worth it if you are feeling stuck, considering a career change, navigating a new leadership role, or returning to work after a break. The value comes from having a strategic thinking partner who can help you gain clarity faster than you would on your own. With over 200 clients coached, the most common feedback is that coaching helped them make confident decisions they had been putting off for months or years.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who is career coaching for?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Career coaching with Evon Davis is designed for high-achieving professionals navigating transitions. This includes people changing careers or industries, new managers building leadership skills, professionals returning to work after a break, those feeling burned out or misaligned with their current role, and anyone who is successful on paper but wants something different.',
        },
      },
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Evon Davis Career & Leadership Coaching',
    url: SITE_URL,
    description: 'Career and leadership coaching for professionals navigating career transitions. Based in Austin, Texas.',
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
