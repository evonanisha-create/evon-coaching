'use client'

import { useEffect, useRef, useState } from 'react'

export default function HowItWorks() {
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

  const steps = [
    {
      number: '01',
      title: 'Get Clarity',
      description: "Take the free Career Clarity Assessment to understand your unique situation and what's really holding you back.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2" />
          <path d="M16 10v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Discovery Call',
      description: 'A free 30-minute conversation to explore your goals, discuss your results, and see if we're a good fit to work together.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
          <path d="M8 12h16M8 16h12M8 20h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <rect x="4" y="6" width="24" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Coaching Partnership',
      description: 'Structured 1:1 sessions designed to help you build confidence, gain clarity, and take meaningful action toward your goals.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
          <path d="M6 26l6-6m0 0l4-12 4 12m-8 0h8m2 6l6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Take Action',
      description: 'Move forward with clarity and confidence—whether that's a career change, new role, healthier boundaries, or leadership growth.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
          <path d="M6 16h20m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ]

  return (
    <section ref={sectionRef} className="section-padding relative">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className={`inline-flex items-center justify-center gap-2 text-sm font-medium text-brand-pink mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="w-8 h-px bg-brand-pink" />
            How It Works
            <span className="w-8 h-px bg-brand-pink" />
          </span>
          
          <h2
            className={`font-display text-display-md md:text-display-lg text-brand-black mb-4 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            A clear path forward
          </h2>
          
          <p
            className={`text-text-secondary text-lg transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            No vague promises or endless exploration. Just a structured approach to help you get unstuck and move toward what you actually want.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {/* Connector line (not on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-surface-dark -translate-x-4 z-0" />
              )}

              <div className="relative z-10">
                {/* Number */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-display text-4xl font-medium text-surface-dark">
                    {step.number}
                  </span>
                  <div className="text-brand-pink">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display text-xl text-brand-black mb-2">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-16 transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <a href="#assessment" className="btn-primary">
            Start with the Free Assessment
          </a>
        </div>
      </div>
    </section>
  )
}
