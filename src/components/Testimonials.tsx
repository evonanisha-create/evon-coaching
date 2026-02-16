'use client'

import { useEffect, useRef, useState } from 'react'

// TODO: Replace with actual testimonials from Evon's Ezra clients
const testimonials = [
  {
    id: 1,
    quote: "Working with Evon helped me see my situation with fresh eyes. I was so stuck in my own head, and she asked the questions that helped me find clarity I couldn't find on my own.",
    author: "Senior Manager",
    company: "Technology Company",
    outcome: "Successfully transitioned to a values-aligned role",
  },
  {
    id: 2,
    quote: "Evon's strategic background made all the difference. She understood the corporate world I was navigating and helped me approach my career change like a business problem, with a clear plan and actionable steps.",
    author: "Former Consultant",
    company: "Transitioned to Tech",
    outcome: "Made a successful pivot from consulting",
  },
  {
    id: 3,
    quote: "I was drowning in imposter syndrome after my promotion. Evon helped me build real confidence. Not fake positivity, but genuine belief in my ability to lead. My team has noticed the difference.",
    author: "New People Manager",
    company: "Financial Services",
    outcome: "Built confidence in leadership role",
  },
]

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

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
    {/* SEO: Social proof section for E-E-A-T trust signals */}
    <section ref={sectionRef} id="testimonials" aria-label="Client testimonials and success stories" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-pink/5 blur-3xl -z-10" />

      <div className="container-main">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className={`inline-flex items-center justify-center gap-2 text-sm font-medium text-brand-pink mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="w-8 h-px bg-brand-pink" />
            Client Stories
            <span className="w-8 h-px bg-brand-pink" />
          </span>
          
          <h2
            className={`font-display text-display-md md:text-display-lg text-brand-black mb-4 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
{/* SEO: Heading with keyword context */}
            What career coaching clients say
          </h2>
          
          <p
            className={`text-text-secondary text-lg transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Real transformations from professionals who were ready to make a change.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="h-full flex flex-col p-8 bg-white border border-surface-dark hover:border-brand-pink/30 transition-colors">
                {/* Quote Icon */}
                <div className="mb-4">
                  <svg
                    className="w-8 h-8 text-brand-pink/30"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                  >
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                  </svg>
                </div>

                {/* Quote */}
                <blockquote className="flex-grow mb-6">
                  <p className="text-text-secondary leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </blockquote>

                {/* Author */}
                <div className="pt-4 border-t border-surface-dark">
                  <p className="font-medium text-brand-black">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-text-muted">
                    {testimonial.company}
                  </p>
                  <p className="text-sm text-brand-pink mt-1">
                    {testimonial.outcome}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* TODO: Remove this spacer when real testimonials are added */}
      </div>
    </section>
  )
}
