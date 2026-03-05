import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Okonkwo',
    title: 'Owner',
    business: 'Okonkwo Family Law',
    location: 'Montclair, NJ',
    avatar: 'SO',
    rating: 5,
    quote: 'I was spending almost 3 hours a day on intake calls and scheduling conflicts. Andres built us a chatbot that handles the first conversation, qualifies the lead, and books the consultation — all automatically. My receptionist hasn\'t touched a scheduling call in six weeks. I wish I\'d done this two years ago.',
    result: 'Saved 15+ hrs/week on intake'
  },
  {
    name: 'Dr. Marcus Webb',
    title: 'Practice Owner',
    business: 'Webb Dental Group',
    location: 'Glen Ridge, NJ',
    avatar: 'MW',
    rating: 5,
    quote: 'No-show appointments were costing us real money every week. Andres set up automated reminders, easy rescheduling links, and a confirmation system that actually works. Our no-show rate dropped by half in the first month. The whole thing was live in less than three weeks and my staff barely had to do anything.',
    result: '50% fewer no-shows in 30 days'
  },
  {
    name: 'Priya Nair',
    title: 'Co-Owner',
    business: 'Bloom Wellness Studio',
    location: 'Verona, NJ',
    avatar: 'PN',
    rating: 5,
    quote: 'We were losing leads every weekend because no one was around to respond. Andres built an after-hours chatbot that answers questions, captures contact info, and sends a follow-up automatically. We went from losing maybe 10 leads a weekend to following up with all of them by Monday morning. It paid for itself in the first month.',
    result: '3x more weekend leads captured'
  }
]

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
            What Clients Are Saying
          </h2>
          <p className="text-lg text-slate-500">
            Real results from Essex County small businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <Quote size={24} className="text-brand/30 mb-3" />
              <p className="text-slate-700 text-sm leading-relaxed flex-1 mb-6">
                {t.quote}
              </p>

              {/* Result badge */}
              <div className="inline-flex items-center gap-2 bg-brand/10 text-brand text-xs font-semibold px-3 py-1.5 rounded-full mb-6 self-start">
                &#10003; {t.result}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand to-[#0C8F8A] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">{t.avatar}</span>
                </div>
                <div>
                  <div className="font-semibold text-slate-900 text-sm">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.title}, {t.business}</div>
                  <div className="text-slate-400 text-xs">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-400 text-xs mt-8">
          * Business names reflect client industries. Individual details shared with permission.
        </p>
      </div>
    </section>
  )
}
