import { Reveal } from '../components/Reveal'

const testimonials = [
  {
    name: 'Ananya & Karthik',
    quote:
      'We didn’t feel “posed” even once. Every photo feels like us—soft, real, and unbelievably cinematic.',
  },
  {
    name: 'Meera & Arjun',
    quote:
      'The candid moments hit us the hardest—in the best way. We cried re-living the day through the gallery.',
  },
  {
    name: 'Sanjana & Rohan',
    quote:
      'Luxury from start to finish: planning, guidance, edits, delivery. The film felt like a trailer for our love story.',
  },
] as const

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-pad">
      <div className="container-pad">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-ink-100/60 bg-cream-50/70 px-4 py-2 text-xs font-medium tracking-[0.22em] uppercase text-ink-300">
            Testimonials <span className="h-1.5 w-1.5 rounded-full bg-gold-500/80" />
          </div>
          <h2 className="mt-6 headline">Loved by couples</h2>
          <p className="subhead">
            A few words from couples who wanted emotion, elegance, and a timeless cinematic finish.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <Reveal key={t.name} delay={0.06 * idx}>
              <div className="glass p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-glow">
                <div className="font-display text-5xl leading-none text-gold-700/30">“</div>
                <p className="mt-3 text-sm leading-relaxed text-ink-700">{t.quote}</p>
                <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-transparent via-ink-100/70 to-transparent" />
                <div className="mt-5 text-sm font-medium text-ink-900">{t.name}</div>
                <div className="mt-1 text-xs tracking-[0.22em] uppercase text-ink-300">
                  Wedding Client
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

