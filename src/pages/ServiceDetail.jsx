import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { ArrowRight, Check, MessageSquare, Clock, Workflow, BookOpen } from 'lucide-react'

const serviceData = {
  'ai-chatbot': {
    icon: MessageSquare,
    title: 'AI Chatbots',
    subtitle: 'Intelligent Assistants That Work 24/7',
    hero: 'Your Business Never Sleeps. Your Support Doesn&apos;t Have To Either.',
    description: 'We build branded AI assistants that greet visitors on your website and social channels, answer common questions, qualify leads, and book appointments hands-free. Assistants are trained on your policies, pricing, and tone.',
    problem: {
      title: 'The Problem',
      points: [
        'Customers ask the same questions over and over — eating up your team&apos;s time',
        'You miss leads because no one picks up the phone after hours',
        'Qualifying leads manually is expensive and slow',
        'Customers get frustrated waiting for responses',
      ],
    },
    solution: {
      title: 'How It Works',
      steps: [
        {
          number: '1',
          title: 'Train Your Assistant',
          description: 'We feed your chatbot your website, FAQs, pricing, policies, and tone. It learns what your business is about and how to represent you.',
        },
        {
          number: '2',
          title: 'Deploy Everywhere',
          description: 'Launch on your website, Facebook Messenger, WhatsApp, or custom integrations. Your customers reach you on their preferred channel.',
        },
        {
          number: '3',
          title: 'Automate & Measure',
          description: 'The bot answers questions, qualifies leads, books appointments, and collects deposits. Your team gets a clean handoff when human touch is needed.',
        },
      ],
    },
    benefits: [
      'Available 24/7 to answer customer questions',
      'Qualify leads before they reach your team',
      'Book appointments and collect payments automatically',
      'Reduce support team workload by 60%+',
      'Improve customer satisfaction with instant responses',
      'Capture leads outside business hours',
    ],
    useCases: {
      title: 'Industry Use Cases',
      industries: [
        {
          name: 'Law Firms',
          description: 'Capture intake inquiries, qualify cases, collect initial info, schedule consultations. Assistants never miss a lead.',
        },
        {
          name: 'Medical & Dental Practices',
          description: 'Handle appointment requests, insurance questions, prescription refill requests. Reduce front desk call volume by 40%+.',
        },
        {
          name: 'Real Estate',
          description: 'Answer buyer questions, schedule showings, collect buyer prequalification info. Work 24/7 while agents close deals.',
        },
        {
          name: 'Gyms & Fitness',
          description: 'Book fitness assessments, answer membership questions, onboard new members. No missed sales due to business hours.',
        },
        {
          name: 'Retailers & E-commerce',
          description: 'Handle order inquiries, process returns, upsell products, book services. Shoppers get instant help anytime.',
        },
      ],
    },
    roi: {
      title: 'ROI & Outcomes',
      metrics: [
        { stat: '60%+', label: 'Reduction in support team time' },
        { stat: '3-5x', label: 'More leads captured after hours' },
        { stat: '2-3 weeks', label: 'Time to first deployable chatbot' },
        { stat: '24/7', label: 'Customer support availability' },
      ],
    },
    pricing: {
      tier: '$1,500 – $3,500',
      includes: [
        'Custom chatbot training on your business',
        'Multi-channel deployment (website, Messenger, WhatsApp)',
        'Integrations (CRM, booking system, email)',
        ' 30 days of optimization and support',
        'Handoff documentation for your team',
      ],
    },
    faq: [
      {
        question: 'Will the chatbot replace my team?',
        answer: 'No. Chatbots handle routine questions and lead qualification. Complex issues are handed off to your team. You reclaim time so your team can focus on closing deals and building relationships.',
      },
      {
        question: 'How long does deployment take?',
        answer: 'Most chatbots are live in 2-4 weeks. It depends on how much training data you have and integration complexity. We move fast.',
      },
      {
        question: 'What if customers want to talk to a real person?',
        answer: 'Seamless handoff. If the chatbot can&apos;t help, it collects context and connects them to your team via email, phone, or Messenger. Zero friction.',
      },
      {
        question: 'Do I need technical skills to manage it?',
        answer: 'Not at all. We set it up, train your team, and provide a simple dashboard. Updates are easy.',
      },
      {
        question: 'What about privacy and compliance?',
        answer: 'We follow HIPAA, GDPR, and industry best practices. Your data stays private. We&apos;ll audit your specific needs.',
      },
    ],
    otherServices: ['scheduling', 'workflow-automation', 'ai-training'],
  },
  'scheduling': {
    icon: Clock,
    title: 'Scheduling Automation',
    subtitle: 'Reduce No-Shows, Eliminate Phone Tag',
    hero: 'Your Calendar. Synced. Smart. Automated.',
    description: 'We map your current process, then add smart automations so clients show up and staff waste less time. Tailored to your stack and industry.',
    problem: {
      title: 'The Problem',
      points: [
        'No-shows cost you time and revenue',
        'Clients and staff play phone tag to reschedule',
        'Confirmation reminders are manual and inconsistent',
        'Your booking systems don&apos;t talk to each other',
      ],
    },
    solution: {
      title: 'How It Works',
      steps: [
        {
          number: '1',
          title: 'Map Your Process',
          description: 'We audit your current scheduling workflow — how bookings happen, how you confirm, how you handle reschedules.',
        },
        {
          number: '2',
          title: 'Sync Everything',
          description: 'We integrate your calendar systems so bookings auto-sync across Google Calendar, Outlook, Acuity, Calendly, and custom tools.',
        },
        {
          number: '3',
          title: 'Add Smart Automations',
          description: 'Multi-channel reminders (SMS, email, WhatsApp), automatic no-show detection, easy rescheduling links, deposit collection, and calendar sync.',
        },
      ],
    },
    benefits: [
      'Reduce no-show rates by 30-50%',
      'Sync bookings across all your platforms automatically',
      'Auto-confirm appointments and collect deposits',
      'Save your team 5+ hours per week',
      'Let clients reschedule without calling you',
      'Smart reminders 24 hours and 2 hours before',
    ],
    useCases: {
      title: 'Industry Use Cases',
      industries: [
        {
          name: 'Medical & Dental Practices',
          description: 'Auto-reminders reduce no-shows from 15% to 5%. Patients reschedule online. Your front desk breathes.',
        },
        {
          name: 'Real Estate',
          description: 'Sync open house schedules, auto-remind buyers, collect prequalification before showings. Agents spend time closing, not scheduling.',
        },
        {
          name: 'Law Firms',
          description: 'Clients confirm depositions, consultations, and hearings automatically. Reduce confirmation calls by 90%.',
        },
        {
          name: 'Salons & Spas',
          description: 'SMS reminders drop no-shows significantly. Clients book follow-up appointments at checkout without staff involvement.',
        },
        {
          name: 'Fitness & Personal Training',
          description: 'Class reminders boost attendance. Personal training packages auto-sync. Members reschedule in the app.',
        },
      ],
    },
    roi: {
      title: 'ROI & Outcomes',
      metrics: [
        { stat: '30-50%', label: 'Fewer no-shows' },
        { stat: '5+ hrs', label: 'Time saved per week' },
        { stat: '90%', label: 'Fewer confirmation calls' },
        { stat: '1-3 weeks', label: 'Time to full automation' },
      ],
    },
    pricing: {
      tier: '$800 – $2,000',
      includes: [
        'Scheduling system audit and optimization',
        'Calendar system integrations (Google, Outlook, Acuity, etc.)',
        'SMS/email reminder automation',
        'No-show tracking and reporting',
        'Rescheduling workflow setup',
        '30 days of support and optimization',
      ],
    },
    faq: [
      {
        question: 'Will this work with my current booking system?',
        answer: 'Probably. We integrate with Google Calendar, Outlook, Acuity Scheduling, Calendly, HubSpot, and custom APIs. If you use something else, let&apos;s talk — we&apos;ll figure it out.',
      },
      {
        question: 'How do SMS reminders work?',
        answer: 'We connect to services like Twilio. Clients get a text 24 and 2 hours before their appointment. They can confirm or reschedule directly from the text.',
      },
      {
        question: 'What if a client misses an appointment?',
        answer: 'We flag it for your team and automate follow-up outreach. Your team knows immediately and can address it.',
      },
      {
        question: 'Can clients reschedule themselves?',
        answer: 'Yes. They get a link in their reminder where they can pick a new time from available slots. Your team doesn&apos;t have to touch it.',
      },
      {
        question: 'Is this compliant with healthcare regulations?',
        answer: 'Yes. We handle HIPAA compliance for medical practices. Text content is customizable and secure.',
      },
    ],
    otherServices: ['ai-chatbot', 'workflow-automation', 'ai-training'],
  },
  'workflow-automation': {
    icon: Workflow,
    title: 'Workflow Automation',
    subtitle: 'Build Custom Automations That Move the Needle',
    hero: 'Your Unique Business Deserves Unique Automation.',
    description: 'When you have a workflow that doesn&apos;t fit a template, we build custom automations. Integrations, internal tools, and specialty processes that move the needle.',
    problem: {
      title: 'The Problem',
      points: [
        'Your business processes are unique — off-the-shelf solutions don&apos;t fit',
        'Your team manually enters data into multiple systems',
        'Information gets lost between apps',
        'You have no visibility into workflow efficiency',
      ],
    },
    solution: {
      title: 'How It Works',
      steps: [
        {
          number: '1',
          title: 'Audit & Design',
          description: 'We map your workflow in detail — every step, every system, every pain point. We find the 20% of work that takes 80% of time.',
        },
        {
          number: '2',
          title: 'Build & Measure',
          description: 'We automate the high-impact first. Use Make, Zapier, or custom code. We measure impact before scaling to other workflows.',
        },
        {
          number: '3',
          title: 'Optimize & Document',
          description: 'Once live, we optimize based on real data. We document everything so your team can maintain and adjust it.',
        },
      ],
    },
    benefits: [
      'Eliminate manual data entry across systems',
      'Reduce errors and duplicate work',
      'Speed up critical processes by 5-10x',
      'Get visibility into workflow efficiency',
      'Reduce manual work by 80%+',
      'Scale what works without hiring',
    ],
    useCases: {
      title: 'Industry Use Cases',
      industries: [
        {
          name: 'Law Firms',
          description: 'Auto-sync client intake to case management and billing. Email leads go straight into Clio. Time tracking feeds invoicing automatically.',
        },
        {
          name: 'Medical Practices',
          description: 'Patient data syncs from registration to EHR to billing. Insurance claims auto-generate. Lab results trigger follow-up workflows.',
        },
        {
          name: 'Real Estate',
          description: 'Lead source tags auto-populate CRM. Contracts auto-archive to document storage. Closings auto-create thank-you sequences.',
        },
        {
          name: 'E-commerce & Retail',
          description: 'Orders trigger fulfillment notifications, inventory updates, and customer follow-up sequences. Returns auto-process and notify accounting.',
        },
        {
          name: 'Professional Services',
          description: 'Proposals auto-generate from templates. Signed contracts auto-file and trigger onboarding. Project data syncs to time tracking and invoicing.',
        },
      ],
    },
    roi: {
      title: 'ROI & Outcomes',
      metrics: [
        { stat: '80%+', label: 'Reduction in manual work' },
        { stat: '5-10x', label: 'Process speed improvement' },
        { stat: '99%', label: 'Data accuracy (vs manual entry)' },
        { stat: '3-6 weeks', label: 'Time to full implementation' },
      ],
    },
    pricing: {
      tier: '$2,000 – $5,000+',
      includes: [
        'Comprehensive workflow audit',
        'Custom automation design and build',
        'Integration setup (Zapier, Make, custom APIs)',
        'Performance measurement and reporting',
        'Documentation and training',
        'Ongoing optimization and support',
      ],
    },
    faq: [
      {
        question: 'How much will this cost?',
        answer: 'It depends on complexity. Simple 2-3 app integrations might be $2,000. Complex multi-step workflows with custom code can be $5,000+. We give you a clear quote before starting.',
      },
      {
        question: 'What if I use niche industry software?',
        answer: 'We can work with almost anything. If it has an API, we can automate around it. If it doesn&apos;t, we can build workarounds. Let&apos;s discuss your specific stack.',
      },
      {
        question: 'Will my team know how to maintain this?',
        answer: 'Yes. We document everything and train your team. For simple automations, your team can adjust on their own. For complex stuff, we provide ongoing support.',
      },
      {
        question: 'What happens if the automation breaks?',
        answer: 'We set up monitoring and alerts. If something fails, you&apos;ll know immediately. We also provide ongoing support to fix issues fast.',
      },
      {
        question: 'Can we start small and scale?',
        answer: 'Absolutely. We recommend starting with your highest-impact workflow, measuring success, then expanding. Low risk, proven ROI.',
      },
    ],
    otherServices: ['ai-chatbot', 'scheduling', 'ai-training'],
  },
  'ai-training': {
    icon: BookOpen,
    title: 'Team Training & AI Workshops',
    subtitle: 'Empower Your Team to Innovate',
    hero: 'Your Team Actually Uses AI. Because They Understand It.',
    description: 'We deliver hands-on workshops that empower your team to confidently use AI tools and modern digital workflows. Customized to your tools, skill level, and business goals.',
    problem: {
      title: 'The Problem',
      points: [
        'AI and automation tools are confusing and intimidating',
        'Your team doesn&apos;t use the tools you&apos;ve bought or built',
        'Productivity gains never materialize without adoption',
        'You lack visibility into what your team can actually do',
      ],
    },
    solution: {
      title: 'How It Works',
      steps: [
        {
          number: '1',
          title: 'Assess & Customize',
          description: 'We talk to your team. What&apos;s their skill level? What tools do they use daily? What are the pain points? We build a curriculum around their needs.',
        },
        {
          number: '2',
          title: 'Hands-On Workshops',
          description: 'Live, interactive sessions where your team practices with real tools and real workflows. Not slides. Real keyboard time.',
        },
        {
          number: '3',
          title: 'Ongoing Support',
          description: 'We provide Q&A support after the workshop. Your team knows they have help when they get stuck.',
        },
      ],
    },
    benefits: [
      'Team gains confidence using AI and automation tools',
      'Hands-on practice with real workflows',
      'Customized to your specific tools and processes',
      'Ongoing support and Q&A after training',
      'Higher adoption rates for tools you&apos;ve implemented',
      'Team can mentor each other going forward',
    ],
    useCases: {
      title: 'Workshop Modules',
      industries: [
        {
          name: 'AI Fundamentals',
          description: 'What AI is, how to use ChatGPT/Claude/Gemini, prompting techniques, guardrails. For teams new to AI.',
        },
        {
          name: 'AI for Your Role',
          description: 'AI applied to marketing, legal work, healthcare, customer service, operations. Role-specific use cases and prompts.',
        },
        {
          name: 'Automation Tools Bootcamp',
          description: 'Hands-on with Zapier, Make, or your custom workflows. Your team learns to build simple automations themselves.',
        },
        {
          name: 'Document Automation',
          description: 'How to use AI to draft contracts, proposals, emails, reports. Templates, prompts, workflows.',
        },
        {
          name: 'Data & Analytics with AI',
          description: 'Using AI to analyze spreadsheets, generate insights, create dashboards. Excel/Sheets focused.',
        },
      ],
    },
    roi: {
      title: 'ROI & Outcomes',
      metrics: [
        { stat: '5-10 hrs', label: 'Per team member saved per week' },
        { stat: '90%', label: 'Adoption rate post-training' },
        { stat: '2-3x', label: 'Productivity multiplier' },
        { stat: 'Same week', label: 'First use cases launched' },
      ],
    },
    pricing: {
      tier: '$1,000 – $3,000',
      includes: [
        'Needs assessment and curriculum design',
        'Custom hands-on workshops (4-8 hours)',
        'Practice materials and resource guides',
        'Post-workshop Q&A support (30 days)',
        'Advanced modules available (separate pricing)',
      ],
    },
    faq: [
      {
        question: 'How long is the training?',
        answer: 'Typically 4-8 hours spread over 1-2 days. We customize based on your team&apos;s availability and learning style.',
      },
      {
        question: 'What if my team is not technical?',
        answer: 'Perfect. We teach from the ground up. No coding required. We focus on practical, everyday use cases.',
      },
      {
        question: 'Can you train remote teams?',
        answer: 'Yes. We do virtual workshops via Zoom with breakout rooms, hands-on practice, and real-time Q&A.',
      },
      {
        question: 'What if some team members get it faster than others?',
        answer: 'We accommodate different paces. Some exercises are foundational, some are advanced. Everyone learns at their level.',
      },
      {
        question: 'Will you help us implement what we learn?',
        answer: 'Not in the training itself, but we offer implementation support as a separate engagement. Training + implementation packages save money.',
      },
    ],
    otherServices: ['ai-chatbot', 'scheduling', 'workflow-automation'],
  },
}

export default function ServiceDetail() {
  const { service } = useParams()
  const data = serviceData[service]

  useEffect(() => {
    if (!data) return
    document.title = `${data.title} | AI Montclair`
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      data.description
    )
  }, [data])

  if (!data) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-3xl font-bold text-navy mb-4">Service Not Found</h1>
        <p className="text-gray-600 mb-8">We couldn&apos;t find that service.</p>
        <Button href="/services" variant="primary">
          Back to Services
        </Button>
      </div>
    )
  }

  const Icon = data.icon

  return (
    <>
      {/* Hero */}
      <section className="gradient-navy-to-slate text-white py-16 md:py-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <Icon className="w-12 h-12" />
              <p className="text-brand font-bold text-lg">{data.subtitle}</p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {data.hero}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mb-8">
              {data.description}
            </p>
            <Button href="/contact" variant="primary">
              Get My Free Automation Audit
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-12">{data.problem.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.problem.points.map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="text-brand text-2xl font-bold pt-1">•</div>
                  <p className="text-gray-700 text-lg">{point}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution / How It Works */}
      <section className="py-16 md:py-24 bg-gradient-subtle">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-navy mb-12 text-center"
          >
            {data.solution.title}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.solution.steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                <Card className="h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-brand text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.number}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-navy">{step.title}</h3>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                  {idx < data.solution.steps.length - 1 && (
                    <ArrowRight className="w-6 h-6 text-brand mt-6 hidden md:block" />
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-navy mb-12"
          >
            What You Get
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex gap-4"
              >
                <Check className="w-6 h-6 text-brand flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases by Industry */}
      <section className="py-16 md:py-24 bg-gradient-subtle">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-navy mb-12"
          >
            {data.useCases.title}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.useCases.industries.map((industry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Card>
                  <h3 className="text-xl font-bold text-navy mb-3">{industry.name}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI & Outcomes */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-navy mb-12 text-center"
          >
            {data.roi.title}
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {data.roi.metrics.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Card className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-brand mb-2">{metric.stat}</p>
                  <p className="text-sm md:text-base text-gray-600">{metric.label}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24 bg-gradient-subtle">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8">Pricing</h2>
            <Card className="max-w-2xl">
              <p className="text-gray-600 mb-2">Typical investment</p>
              <p className="text-4xl font-bold text-brand mb-8">{data.pricing.tier}</p>
              <h3 className="font-bold text-navy mb-4">What&apos;s Included:</h3>
              <ul className="space-y-3">
                {data.pricing.includes.map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <Check className="w-5 h-5 text-brand flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-600 mt-8 italic">
                Every project is unique. We&apos;ll give you a clear quote before starting.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-navy mb-12"
          >
            Questions? We&apos;ve Got Answers
          </motion.h2>

          <div className="space-y-6 max-w-3xl">
            {data.faq.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Card>
                  <h3 className="font-bold text-navy mb-3 text-lg">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-24 bg-gradient-subtle">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-navy mb-12"
          >
            Explore Our Other Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.otherServices.map((svc, idx) => {
              const relatedData = serviceData[svc]
              const RelatedIcon = relatedData.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <Link to={`/services/${svc}`}>
                    <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-200 h-full">
                      <RelatedIcon className="w-10 h-10 text-brand mb-4" />
                      <h3 className="text-xl font-bold text-navy mb-2">{relatedData.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{relatedData.subtitle}</p>
                      <div className="flex items-center gap-2 text-brand font-bold">
                        Learn more
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="gradient-navy-to-slate text-white py-16 md:py-24">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Automate?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s talk about your business, your challenges, and what automation could mean for you. Free audit, zero obligation.
            </p>
            <Button href="/contact" variant="primary">
              Get My Free Automation Audit
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
