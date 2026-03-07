import { useEffect } from 'react'
import { Hero } from '../components/home/Hero'
import { PainPoints } from '../components/home/PainPoints'
import { Services } from '../components/home/Services'
import { Results } from '../components/home/Results'
import { Integrations } from '../components/home/Integrations'
import { SocialProof } from '../components/home/SocialProof'
import { HowItWorks } from '../components/home/HowItWorks'
import { Pricing } from '../components/home/Pricing'
import { Industries } from '../components/home/Industries'
import { FAQ } from '../components/home/FAQ'
import { Testimonials } from '../components/home/Testimonials'
import { CTASection } from '../components/home/CTASection'
import { InlineCTA } from '../components/home/InlineCTA'
import { AuditBanner } from '../components/home/AuditBanner'
import { ScrollReveal } from '../components/ScrollReveal'

export default function Home() {
  useEffect(() => {
    document.title = 'AI Automation for Montclair, NJ Small Businesses | AI Montclair'
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      'Stop losing leads to scheduling chaos. AI Montclair builds automation systems for Montclair NJ businesses: chatbots, scheduling, workflows, AI training. Free audit. Fixed pricing. Live in 1-6 weeks.'
    )

    // Add LocalBusiness JSON-LD schema
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      'name': 'AI Montclair',
      'image': 'https://aimontclair.com/logo.png',
      'description': 'AI automation consulting for small businesses in Montclair, NJ',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Montclair',
        'addressRegion': 'NJ',
        'postalCode': '07043',
        'addressCountry': 'US'
      },
      'areaServed': [
        {
          '@type': 'City',
          'name': 'Montclair, NJ'
        },
        {
          '@type': 'City',
          'name': 'Bloomfield, NJ'
        },
        {
          '@type': 'City',
          'name': 'Glen Ridge, NJ'
        },
        {
          '@type': 'City',
          'name': 'Verona, NJ'
        },
        {
          '@type': 'City',
          'name': 'Essex County, NJ'
        }
      ],
      'priceRange': '$500-$5000+',
      'sameAs': [
        'https://www.linkedin.com/company/ai-montclair',
        'https://twitter.com/aimontclair'
      ]
    }

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'How much does AI automation cost?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Projects start at $500 for small automations and scale up to $5000+ for complex workflows. We offer fixed pricing with no hidden fees.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How long does it take to implement?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Most projects go live in 1-6 weeks depending on complexity.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Do I need to sign a long-term contract?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'No. We offer fixed-price projects with no long-term contracts. You own the automation after delivery.'
          }
        }
      ]
    }

    // Inject schemas
    const localBizScript = document.createElement('script')
    localBizScript.type = 'application/ld+json'
    localBizScript.textContent = JSON.stringify(schema)
    document.head.appendChild(localBizScript)

    const faqScript = document.createElement('script')
    faqScript.type = 'application/ld+json'
    faqScript.textContent = JSON.stringify(faqSchema)
    document.head.appendChild(faqScript)

    return () => {
      localBizScript.remove()
      faqScript.remove()
    }
  }, [])

  return (
    <>
      <Hero />
      <ScrollReveal><PainPoints /></ScrollReveal>
      <ScrollReveal delay={0.1}><Industries /></ScrollReveal>
      <ScrollReveal delay={0.1}><Services /></ScrollReveal>
      <ScrollReveal><Results /></ScrollReveal>
      <Integrations />
      <ScrollReveal><HowItWorks /></ScrollReveal>
      <ScrollReveal><Pricing /></ScrollReveal>
      <ScrollReveal><SocialProof /></ScrollReveal>
      <ScrollReveal delay={0.1}><Testimonials /></ScrollReveal>
      <ScrollReveal><InlineCTA /></ScrollReveal>
      <ScrollReveal><FAQ /></ScrollReveal>
      <AuditBanner />
      <ScrollReveal delay={0.1}><CTASection /></ScrollReveal>
    </>
  )
}

