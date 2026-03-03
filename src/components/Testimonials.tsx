'use client'

import { useEffect, useRef, useState } from 'react'

const testimonials = [
  {
    id: 1,
    quote: "Thank you for all your time. It was truly very helpful as it gave me moments of reflection. I appreciate it more than words can express. I hope our paths cross soon.",
    author: "Career Coaching Client",
  },
  {
    id: 2,
    quote: "Just wrapped my conversation with the VP. Your guidance was spot on and I'm feeling much more encouraged. I wanted to share this with you immediately.",
    author: "Career Coaching Client",
  },
  {
    id: 3,
    quote: "A lot of things have changed for me since we ended our coaching engagement, but your guidance and the GPS metaphor has really helped me stay grounded through all of it. Thanks to our work together, it's so much easier to keep my 'why' at the forefront of my decision-making. The road may be ever-evolving, but there's beauty and surprise to be found along the way.",
    author: "Career Coaching Client",
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

  // SEO: Social proof section for E-E-A-T trust signals
  return (
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
            What clients say
          </h2>
          
          <p
            className={`text-text-secondary text-lg transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Real feedback from professionals who were ready to make a change.
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
                    aria-hidden="true"
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
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
