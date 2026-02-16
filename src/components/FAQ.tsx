'use client'

import { useState, useEffect, useRef } from 'react'

// SEO: FAQ section targets featured snippets, AI Overviews, and "People Also Ask"
// Schema markup is handled in StructuredData.tsx — this is the visible component

const faqs = [
  {
    question: 'What is career coaching?',
    answer: 'Career coaching is a professional partnership that helps you gain clarity, build confidence, and take strategic action in your career. Unlike therapy, which often explores the past, coaching is forward-focused and action-oriented. A good career coach helps you identify what you want, overcome the obstacles in your way, and create a concrete plan to get there.',
  },
  {
    question: 'How much does career coaching cost?',
    answer: 'Sessions start at $250 for a single 60-minute coaching session. A four-session package is $900, saving $100 compared to individual sessions. Each session includes pre-session intake questions, action items, and a follow-up summary. A free 30-minute discovery call is available before you commit.',
  },
  {
    question: "What's the difference between career coaching and therapy?",
    answer: "Therapy typically focuses on healing, processing emotions, and understanding patterns from the past. Career coaching is future-focused and action-oriented. It helps you get clear on what you want professionally, build confidence to make changes, and create a strategic plan. Many people benefit from both, but they serve different purposes.",
  },
  {
    question: 'How long does career coaching take to see results?',
    answer: 'Many clients experience meaningful clarity and momentum within 2-4 sessions. The four-session coaching package, typically completed over 2-3 months, is designed to create lasting change. Some clients achieve their goals within this timeframe, while others continue with additional sessions.',
  },
  {
    question: 'Is career coaching worth it?',
    answer: "Career coaching is worth it if you are feeling stuck, considering a career change, navigating a new leadership role, or returning to work after a break. With over 200 clients coached, the most common feedback is that coaching helped people make confident decisions they had been putting off for months or years.",
  },
  {
    question: 'Who is career coaching for?',
    answer: "Career coaching with Evon is designed for high-achieving professionals navigating transitions. This includes people changing careers or industries, new managers building leadership skills, professionals returning to work after a break, those feeling burned out or misaligned, and anyone who is successful on paper but wants something different.",
  },
]

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="faq"
      aria-label="Frequently asked questions about career coaching"
      className="section-padding bg-white"
    >
      <div className="container-main">
        {/* SEO: Section header with keyword-rich heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className={`inline-flex items-center justify-center gap-2 text-sm font-medium text-brand-pink mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="w-8 h-px bg-brand-pink" />
            FAQ
            <span className="w-8 h-px bg-brand-pink" />
          </span>

          <h2
            className={`font-display text-display-md md:text-display-lg text-brand-black mb-4 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Common questions about career coaching
          </h2>

          <p
            className={`text-text-secondary text-lg transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Answers to what clients ask most before getting started.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border-b border-surface-dark transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${300 + index * 75}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-6 text-left group"
                aria-expanded={openIndex === index}
              >
                <h3 className="font-display text-lg text-brand-black group-hover:text-brand-pink transition-colors pr-4">
                  {faq.question}
                </h3>
                <span
                  className={`text-brand-pink text-2xl flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-text-secondary leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
