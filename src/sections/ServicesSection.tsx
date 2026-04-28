import { FiCamera, FiCompass, FiFilm, FiHeart } from 'react-icons/fi'
import { Reveal } from '../components/Reveal'

const services = [
  {
    title: 'Wedding Photography',
    icon: FiCamera,
    desc: 'Candid moments + editorial portraits, with premium color and skin-tone fidelity.',
  },
  {
    title: 'Pre-Wedding Shoots',
    icon: FiHeart,
    desc: 'A relaxed session that feels like a date—natural, playful, and deeply you.',
  },
  {
    title: 'Cinematic Wedding Films',
    icon: FiFilm,
    desc: 'Film-like storytelling with soft pacing, emotional sound design, and timeless edits.',
  },
  {
    title: 'Destination Weddings',
    icon: FiCompass,
    desc: 'Luxury coverage built for travel—planning support, shot lists, and seamless delivery.',
  },
] as const

export function ServicesSection() {
  return (
    <section id="services" className="section-pad bg-gradient-to-b from-cream-50 to-beige-50/60">
      <div className="container-pad">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-ink-100/60 bg-cream-50/70 px-4 py-2 text-xs font-medium tracking-[0.22em] uppercase text-ink-300">
            Services <span className="h-1.5 w-1.5 rounded-full bg-gold-500/80" />
          </div>
          <h2 className="mt-6 headline">What we create for you</h2>
          <p className="subhead">
            Photography and films designed to feel premium—clean composition, cinematic light, and
            heartfelt storytelling.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, idx) => (
            <Reveal key={s.title} delay={0.05 * idx}>
              <div className="group glass p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-glow">
                <div className="flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-ink-900 text-cream-50 shadow-soft">
                    <s.icon />
                  </div>
                  <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-gold-100 to-blush-200 opacity-80" />
                </div>
                <div className="mt-5 font-display text-2xl text-ink-900">{s.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">{s.desc}</p>
                <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-transparent via-ink-100/70 to-transparent" />
                <div className="mt-4 text-xs font-medium tracking-[0.26em] uppercase text-ink-300/90">
                  Premium deliverables
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

