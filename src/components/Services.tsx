'use client'

import { useEffect, useRef, useState } from 'react'

export default function Services() {
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

  const services = [
    {
      name: 'Single Session',
      price: '$250',
      unit: 'per session',
      description: 'For focused work on a specific challenge or when you need a strategic thought partner for a key decision.',
      features: [
        '60-minute 1:1 coaching session',
        'Pre-session intake questions',
        'Action items and next steps',
        'Follow-up email summary',
      ],
      cta: 'Book a Session',
      featured: false,
    },
    {
      name: 'Coaching Package',
      price: '$900',
      unit: '4 sessions',
      description: 'The most effective way to create lasting change. Build momentum over multiple sessions with ongoing support.',
      features: [
        'Four 60-minute coaching sessions',
        'Flexible scheduling over 2-3 months',
        'Email support between sessions',
        'Personalized action planning',
        'Save $100 vs. single sessions',
      ],
      cta: 'Get Started',
      featured: true,
    },
  ]

  const idealFor = [
    {
      title: 'Career Transitions',
      description: 'Changing jobs, industries, or career paths entirely',
    },
    {
      title: 'New Managers',
      description: 'Building confidence and skills in your first leadership role',
    },
    {
      title: 'Return to Work',
      description: 'Rebuilding confidence after maternity leave or a career break',
    },
    {
      title: 'Feeling Stuck',
      description: 'Successful on paper but unfulfilled, and ready for something different',
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="services"
      aria-label="Career coaching services and pricing"
      className="section-padding bg-brand-black text-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div className="absolute inset-0 bg-gradient-to-l from-brand-pink to-transparent" />
      </div>

      <div className="container-main relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className={`inline-flex items-center justify-center gap-2 text-sm font-medium text-brand-pink mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="w-8 h-px bg-brand-pink" />
            Services
            <span className="w-8 h-px bg-brand-pink" />
          </span>
          
          <h2
            className={`font-display text-display-md md:text-display-lg mb-4 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
{/* SEO: keyword heading with pricing context */}
            Career coaching packages
          </h2>
          
          <p
            className={`text-white/70 text-lg transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Structured coaching designed to help you move from stuck to clear, from uncertain to confident.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
          {services.map((service, index) => (
            <div
              key={service.name}
              className={`relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {service.featured && (
                <div className="absolute -top-3 left-6 px-3 py-1 bg-brand-pink text-white text-xs font-medium">
                  Most Popular
                </div>
              )}
              
              <div
                className={`h-full p-8 ${
                  service.featured
                    ? 'bg-white text-brand-black border-2 border-brand-pink'
                    : 'bg-white/5 border border-white/10'
                }`}
              >
                <h3 className={`font-display text-2xl mb-2 ${
                  service.featured ? 'text-brand-black' : 'text-white'
                }`}>
                  {service.name}
                </h3>
                
                <div className="flex items-baseline gap-2 mb-4">
                  <span className={`font-display text-4xl ${
                    service.featured ? 'text-brand-black' : 'text-white'
                  }`}>
                    {service.price}
                  </span>
                  <span className={service.featured ? 'text-text-muted' : 'text-white/50'}>
                    {service.unit}
                  </span>
                </div>
                
                <p className={`mb-6 ${
                  service.featured ? 'text-text-secondary' : 'text-white/70'
                }`}>
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-3 text-sm ${
                        service.featured ? 'text-text-secondary' : 'text-white/70'
                      }`}
                    >
                      <svg
                        className={`w-5 h-5 flex-shrink-0 ${
                          service.featured ? 'text-brand-pink' : 'text-brand-pink'
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a
                  href="#contact"
                  className={`block text-center py-3 px-6 font-medium transition-colors ${
                    service.featured
                      ? 'bg-brand-black text-white hover:bg-brand-blue'
                      : 'bg-white text-brand-black hover:bg-brand-pink hover:text-white'
                  }`}
                >
                  {service.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Ideal For Section */}
        <div
          className={`transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="font-display text-xl text-center mb-8">
            Coaching is ideal for you if you're...
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {idealFor.map((item, index) => (
              <div
                key={item.title}
                className="p-6 border border-white/10 hover:border-brand-pink/50 transition-colors"
              >
                <h4 className="font-display text-lg text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-white/60 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Discovery Call CTA */}
        <div
          className={`text-center mt-16 pt-12 border-t border-white/10 transition-all duration-700 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-white/70 mb-4">
            Not sure which option is right for you?
          </p>
          <a href="#contact" className="btn bg-brand-pink text-white hover:bg-brand-blue">
            Book a Free Discovery Call
          </a>
        </div>
      </div>
    </section>
  )
}
