import { Reveal } from '../components/Reveal'

const testimonials = [
  {
    name: 'Happy Couple',
    quote:
      'They felt like family. We laughed, we cried, and every frame felt like reliving the day.',
  },
  {
    name: 'Bride & Groom',
    quote:
      'The candid moments are everything. They captured reactions we didn’t even notice in real time.',
  },
  {
    name: 'Family',
    quote:
      'Super comfortable experience. The team blended in and brought out everyone’s best side naturally.',
  },
] as const

export function WhoSaidWhatSection() {
  return (
    <section id="testimonials" className="section-pad">
      <div className="container-pad">
        <Reveal>
          <div className="text-center">
            <div className="kicker text-cocoa-200">Who Said What</div>
            <h2 className="mt-4 font-caps text-4xl tracking-[0.12em] text-noir-900 sm:text-5xl">
              The world spoke about us
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-cocoa-500 sm:text-base">
              (Replace these with your real client words anytime.)
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-3 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <Reveal key={t.name} delay={0.03 * idx}>
              <div className="border border-cocoa-200/55 bg-sand-50/40 p-7">
                <div className="font-display text-4xl leading-none text-brass-200/60">“</div>
                <p className="mt-4 text-sm leading-relaxed text-cocoa-500 sm:text-base">{t.quote}</p>
                <div className="mt-6 text-xs tracking-[0.22em] uppercase text-cocoa-500">
                  {t.name}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

