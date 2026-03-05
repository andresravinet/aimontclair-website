import { useEffect } from 'react'
import { Hero } from '../components/home/Hero'
import { PainPoints } from '../components/home/PainPoints'
import { Services } from '../components/home/Services'
import { SocialProof } from '../components/home/SocialProof'
import { HowItWorks } from '../components/home/HowItWorks'
import { Industries } from '../components/home/Industries'
import { Testimonials } from '../components/home/Testimonials'
import { FAQ } from '../components/home/FAQ'
import { CTASection } from '../components/home/CTASection'

export default function Home() {
  useEffect(() => {
    document.title = 'AI Montclair | AI Automation for Small Businesses'
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      'AI automation consulting for small businesses in Montclair, NJ. Chatbots, scheduling, workflows, and training.'
    )
  }, [])

  return (
    <>
      <Hero />
      <PainPoints />
      <Services />
      <SocialProof />
      <HowItWorks />
      <Industries />
      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  )
}
