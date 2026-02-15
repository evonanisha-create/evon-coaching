'use client'

import { useState, useEffect, useRef } from 'react'

// Assessment question types and flow
// TODO: Replace placeholder questions with Evon's actual discovery call questions

interface Question {
  id: string
  question: string
  type: 'single' | 'multiple' | 'scale'
  options?: { value: string; label: string }[]
  scaleLabels?: { low: string; high: string }
}

interface AnswerState {
  [key: string]: string | string[] | number
}

const questions: Question[] = [
  {
    id: 'current_feeling',
    question: "How would you describe where you are in your career right now?",
    type: 'single',
    options: [
      { value: 'stuck', label: "Stuck — I know something needs to change but I don't know what" },
      { value: 'crossroads', label: "At a crossroads — I have options but I'm paralyzed by the decision" },
      { value: 'new_role', label: "New role — I want to build confidence and make an impact quickly" },
      { value: 'burned_out', label: "Burned out — I'm successful on paper but exhausted and unfulfilled" },
      { value: 'returning', label: "Returning — I'm coming back after a break and rebuilding momentum" },
    ],
  },
  {
    id: 'main_challenge',
    question: "What's the biggest challenge you're facing right now?",
    type: 'single',
    options: [
      { value: 'clarity', label: "I don't know what I actually want" },
      { value: 'confidence', label: "I lack confidence to make a change" },
      { value: 'boundaries', label: "I struggle to set boundaries with work" },
      { value: 'direction', label: "I have too many options and can't choose" },
      { value: 'identity', label: "I've lost touch with who I am outside of work" },
    ],
  },
  {
    id: 'values_alignment',
    question: "How aligned does your current work feel with your values?",
    type: 'scale',
    scaleLabels: { low: 'Completely misaligned', high: 'Perfectly aligned' },
  },
  {
    id: 'change_readiness',
    question: "How ready are you to make a change?",
    type: 'single',
    options: [
      { value: 'exploring', label: "Just exploring — I'm curious but not ready to act" },
      { value: 'considering', label: "Actively considering — I want to make a change in the next 6 months" },
      { value: 'ready', label: "Ready now — I need support to take the next step" },
      { value: 'in_progress', label: "Already in motion — I've started but need guidance" },
    ],
  },
  {
    id: 'support_needed',
    question: "What kind of support would be most valuable to you?",
    type: 'single',
    options: [
      { value: 'clarity', label: "Help getting clear on what I want" },
      { value: 'strategy', label: "A strategic plan to get from here to there" },
      { value: 'accountability', label: "Accountability to follow through" },
      { value: 'confidence', label: "Building confidence to take action" },
      { value: 'all', label: "All of the above" },
    ],
  },
]

// Archetype definitions based on answer patterns
interface Archetype {
  id: string
  name: string
  tagline: string
  description: string
  insights: string[]
  nextSteps: string[]
}

const archetypes: Record<string, Archetype> = {
  burned_out_achiever: {
    id: 'burned_out_achiever',
    name: 'The Burned-Out High Achiever',
    tagline: "You've done everything right, but something still feels off.",
    description: "You've built an impressive career through hard work and determination. But lately, the things that used to drive you feel empty. You're successful by every external measure, yet you're exhausted and questioning whether this is really what you want.",
    insights: [
      "Your exhaustion isn't a sign of weakness. It's information telling you something needs to shift.",
      "High achievers often optimize for external success before internal fulfillment. That's not a flaw. It's a pattern that can be redirected.",
      "The question isn't 'how do I work harder?' but 'what would feel meaningful?'",
    ],
    nextSteps: [
      "Before making any big decisions, get curious about what's draining you vs. what's energizing you.",
      "Consider: What would you do if success wasn't the goal?",
      "A coaching conversation can help you untangle burnout from genuine misalignment.",
    ],
  },
  stuck_strategist: {
    id: 'stuck_strategist',
    name: 'The Stuck Strategist',
    tagline: "You can see all the paths, but you can't pick one.",
    description: "You're analytical and strategic. You're great at solving other people's problems. But when it comes to your own career, you're paralyzed by options. Every path has pros and cons, and you keep researching, planning, and waiting for clarity that never comes.",
    insights: [
      "More information won't create clarity. At some point, you have to experiment.",
      "Your strategic mind is an asset, but it can also keep you stuck in analysis mode.",
      "Perfectionism often disguises itself as 'being thorough.' The cost is momentum.",
    ],
    nextSteps: [
      "Pick the smallest possible experiment you could run in the next 2 weeks.",
      "Ask yourself: What would I try if I knew I couldn't fail?",
      "Sometimes you need a thinking partner who can reflect back what they're hearing.",
    ],
  },
  new_leader: {
    id: 'new_leader',
    name: 'The Emerging Leader',
    tagline: "You got the role. Now you need to grow into it.",
    description: "You've been promoted or stepped into a leadership position, and while it's exciting, it's also overwhelming. You want to make an impact, build trust with your team, and prove you belong here. But imposter syndrome is real.",
    insights: [
      "The skills that got you promoted aren't the same skills that will make you successful in this role.",
      "Every new leader feels like they're figuring it out as they go. That's not imposter syndrome. That's reality.",
      "Your team doesn't need you to have all the answers. They need you to be clear, consistent, and human.",
    ],
    nextSteps: [
      "Identify the 2-3 relationships that matter most in your new role and invest there first.",
      "Give yourself a 90-day learning mindset instead of expecting immediate mastery.",
      "Consider coaching to accelerate your leadership development and build confidence.",
    ],
  },
  returner: {
    id: 'returner',
    name: 'The Returner',
    tagline: "You're coming back, and everything feels different.",
    description: "After time away for parenting, caregiving, health, or an intentional break, you're re-entering the workforce. You're capable and experienced, but your confidence has taken a hit. The world moved on while you were gone, and you're wondering where you fit.",
    insights: [
      "Your skills didn't disappear during your break. They just need to be reconnected to current opportunities.",
      "The gap on your resume is far less important than the story you tell about it.",
      "Coming back is a transition, not just a restart. Give yourself time to recalibrate.",
    ],
    nextSteps: [
      "Update your internal narrative before you update your LinkedIn. How do you want to frame this chapter?",
      "Reconnect with 3-5 people in your network. Not to ask for jobs, but to re-establish relationships.",
      "A coach can help you rebuild confidence and clarify what you're looking for this time around.",
    ],
  },
  misaligned_expert: {
    id: 'misaligned_expert',
    name: 'The Misaligned Expert',
    tagline: "You're great at what you do. You're just not sure you want to do it anymore.",
    description: "You've developed real expertise in your field, and people value your work. But somewhere along the way, the work stopped feeling meaningful. You're good at your job. You're just not sure it's the right job anymore.",
    insights: [
      "Being good at something doesn't mean you have to keep doing it forever.",
      "Misalignment often builds slowly. It's not dramatic; it's a gradual drift from what matters to you.",
      "Your expertise is transferable. The question is: where do you want to apply it?",
    ],
    nextSteps: [
      "Separate 'what I'm good at' from 'what I want to do.' They don't have to be the same.",
      "Get curious about adjacent roles or industries where your skills might feel more meaningful.",
      "Coaching can help you explore options without blowing up your current situation.",
    ],
  },
}

function getArchetype(answers: AnswerState): Archetype {
  // Simple logic to determine archetype based on answers
  // TODO: Refine this logic based on Evon's input
  
  const feeling = answers.current_feeling as string
  const challenge = answers.main_challenge as string
  
  if (feeling === 'burned_out') {
    return archetypes.burned_out_achiever
  }
  if (feeling === 'stuck' || challenge === 'direction') {
    return archetypes.stuck_strategist
  }
  if (feeling === 'new_role') {
    return archetypes.new_leader
  }
  if (feeling === 'returning') {
    return archetypes.returner
  }
  if (challenge === 'clarity' || challenge === 'identity') {
    return archetypes.misaligned_expert
  }
  
  // Default
  return archetypes.stuck_strategist
}

export default function Assessment() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [currentStep, setCurrentStep] = useState(0) // 0 = intro, 1-5 = questions, 6 = email, 7 = results
  const [answers, setAnswers] = useState<AnswerState>({})
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

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

  const handleAnswer = (questionId: string, value: string | number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }))
  }

  const handleNext = () => {
    if (currentStep < questions.length) {
      setCurrentStep((prev) => prev + 1)
    } else if (currentStep === questions.length) {
      // Move to email capture
      setCurrentStep(questions.length + 1)
    }
  }

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // TODO: Integrate with ConvertKit or email service
    // For now, just simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setCurrentStep(questions.length + 2) // Move to results
  }

  const handleSkipEmail = () => {
    setCurrentStep(questions.length + 2)
  }

  const currentQuestion = questions[currentStep - 1]
  const archetype = getArchetype(answers)
  const progress = currentStep > 0 && currentStep <= questions.length 
    ? (currentStep / questions.length) * 100 
    : 0

  return (
    <section
      ref={sectionRef}
      id="assessment"
      className="section-padding bg-surface-light relative overflow-hidden"
    >
      <div className="container-main">
        {/* Section Header - only show when not in assessment */}
        {currentStep === 0 && (
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span
              className={`inline-flex items-center justify-center gap-2 text-sm font-medium text-brand-pink mb-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="w-8 h-px bg-brand-pink" />
              Free Assessment
              <span className="w-8 h-px bg-brand-pink" />
            </span>
            
            <h2
              className={`font-display text-display-md md:text-display-lg text-brand-black mb-4 transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Where are you in your career journey?
            </h2>
            
            <p
              className={`text-text-secondary text-lg mb-8 transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Take 2 minutes to get clarity on what's really going on and discover your career transition archetype.
            </p>

            <button
              onClick={() => setCurrentStep(1)}
              className={`btn-accent transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Start the Assessment
            </button>
          </div>
        )}

        {/* Assessment Flow */}
        {currentStep > 0 && currentStep <= questions.length && (
          <div className="max-w-2xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-text-muted mb-2">
                <span>Question {currentStep} of {questions.length}</span>
                <span>{Math.round(progress)}% complete</span>
              </div>
              <div className="h-1 bg-surface-dark rounded-full overflow-hidden">
                <div
                  className="h-full bg-brand-pink transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Question */}
            <div className="card-elevated animate-fade-in-up">
              <h3 className="font-display text-2xl text-brand-black mb-6">
                {currentQuestion.question}
              </h3>

              {/* Options */}
              {currentQuestion.type === 'single' && currentQuestion.options && (
                <div className="space-y-3">
                  {currentQuestion.options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        handleAnswer(currentQuestion.id, option.value)
                        setTimeout(handleNext, 300)
                      }}
                      className={`w-full text-left p-4 border-2 transition-all duration-200 hover:border-brand-pink ${
                        answers[currentQuestion.id] === option.value
                          ? 'border-brand-pink bg-brand-pink/5'
                          : 'border-surface-dark'
                      }`}
                    >
                      <span className="text-text-primary">{option.label}</span>
                    </button>
                  ))}
                </div>
              )}

              {/* Scale */}
              {currentQuestion.type === 'scale' && currentQuestion.scaleLabels && (
                <div>
                  <div className="flex justify-between text-sm text-text-muted mb-4">
                    <span>{currentQuestion.scaleLabels.low}</span>
                    <span>{currentQuestion.scaleLabels.high}</span>
                  </div>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <button
                        key={num}
                        onClick={() => {
                          handleAnswer(currentQuestion.id, num)
                          setTimeout(handleNext, 300)
                        }}
                        className={`flex-1 py-3 border-2 font-medium transition-all duration-200 hover:border-brand-pink ${
                          answers[currentQuestion.id] === num
                            ? 'border-brand-pink bg-brand-pink text-white'
                            : 'border-surface-dark text-text-secondary'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Back Button */}
            {currentStep > 1 && (
              <button
                onClick={() => setCurrentStep((prev) => prev - 1)}
                className="mt-6 text-text-muted hover:text-brand-black transition-colors"
              >
                ← Back to previous question
              </button>
            )}
          </div>
        )}

        {/* Email Capture */}
        {currentStep === questions.length + 1 && (
          <div className="max-w-xl mx-auto text-center animate-fade-in-up">
            <div className="card-elevated">
              <h3 className="font-display text-2xl text-brand-black mb-4">
                Your results are ready!
              </h3>
              <p className="text-text-secondary mb-6">
                Enter your email to get your personalized Career Clarity Report with insights and next steps.
              </p>

              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 border-2 border-surface-dark focus:border-brand-pink focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-accent disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Get My Results'}
                </button>
              </form>

              <button
                onClick={handleSkipEmail}
                className="mt-4 text-sm text-text-muted hover:text-brand-black transition-colors"
              >
                Skip and see results now
              </button>
            </div>
          </div>
        )}

        {/* Results */}
        {currentStep === questions.length + 2 && (
          <div className="max-w-3xl mx-auto animate-fade-in-up">
            {/* Archetype Header */}
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1 bg-brand-pink text-white text-sm font-medium mb-4">
                Your Career Archetype
              </span>
              <h2 className="font-display text-display-md text-brand-black mb-2">
                {archetype.name}
              </h2>
              <p className="text-xl text-text-secondary italic">
                {archetype.tagline}
              </p>
            </div>

            {/* Description */}
            <div className="card-elevated mb-8">
              <p className="text-lg text-text-secondary leading-relaxed">
                {archetype.description}
              </p>
            </div>

            {/* Insights */}
            <div className="card mb-8">
              <h3 className="font-display text-xl text-brand-black mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-brand-blue/10 text-brand-blue flex items-center justify-center rounded-full text-sm">
                  💡
                </span>
                Key Insights
              </h3>
              <ul className="space-y-3">
                {archetype.insights.map((insight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-brand-pink rounded-full mt-2 flex-shrink-0" />
                    <span className="text-text-secondary">{insight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Next Steps */}
            <div className="card mb-10">
              <h3 className="font-display text-xl text-brand-black mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-brand-pink/10 text-brand-pink flex items-center justify-center rounded-full text-sm">
                  →
                </span>
                Suggested Next Steps
              </h3>
              <ul className="space-y-3">
                {archetype.nextSteps.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-surface-light text-text-muted flex items-center justify-center rounded-full text-xs font-medium flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-text-secondary">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="text-center p-8 bg-brand-black text-white">
              <h3 className="font-display text-2xl mb-3">
                Ready to talk it through?
              </h3>
              <p className="text-white/70 mb-6 max-w-lg mx-auto">
                Book a free 30-minute discovery call to discuss your results and explore how coaching might help you move forward.
              </p>
              <a href="#contact" className="btn bg-brand-pink text-white hover:bg-brand-blue">
                Book a Free Discovery Call
              </a>
            </div>

            {/* Retake */}
            <div className="text-center mt-8">
              <button
                onClick={() => {
                  setCurrentStep(0)
                  setAnswers({})
                  setEmail('')
                }}
                className="text-text-muted hover:text-brand-black transition-colors"
              >
                ← Retake the assessment
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
