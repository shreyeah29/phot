import { Reveal } from '../components/Reveal'

export function AboutSection() {
  return (
    <section id="about" className="section-pad">
      <div className="container-pad">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-ink-100/60 bg-cream-50/60 px-4 py-2 text-xs font-medium tracking-[0.22em] uppercase text-ink-300">
              About
              <span className="h-1.5 w-1.5 rounded-full bg-gold-500/80" />
              The brand
            </div>
            <h2 className="mt-6 headline">
              A cinematic approach to emotion, detail, and storytelling.
            </h2>
            <p className="subhead">
              Harishshankar Photography is built around one idea: your wedding is a love story,
              not a checklist. We photograph the quiet glances, the laughter, the tears, the chaos,
              the poetry—so you can relive the feeling, not just the timeline.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="glass p-5">
                <div className="font-display text-2xl text-ink-900">Story-first</div>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">
                  Guided by natural moments, crafted with intention and warmth.
                </p>
              </div>
              <div className="glass p-5">
                <div className="font-display text-2xl text-ink-900">Timeless tones</div>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">
                  Creamy highlights, soft skin tones, cinematic contrast—never harsh.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl border border-cream-100/80 bg-cream-100/40 shadow-soft">
              <div className="absolute inset-0 bg-gradient-to-tr from-blush-100/40 via-cream-50/30 to-gold-50/40" />
              <div className="relative grid gap-3 p-3 sm:grid-cols-2 sm:gap-4 sm:p-4">
                <figure className="relative overflow-hidden rounded-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?auto=format&fit=crop&w=1600&q=80"
                    alt="Bride portrait"
                    className="h-[260px] w-full object-cover transition duration-700 hover:scale-[1.04]"
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
                <figure className="relative overflow-hidden rounded-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=80"
                    alt="Couple candid moment"
                    className="h-[260px] w-full object-cover transition duration-700 hover:scale-[1.04]"
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
                <figure className="relative overflow-hidden rounded-2xl sm:col-span-2">
                  <img
                    src="https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=2000&q=80"
                    alt="Wedding couple walking"
                    className="h-[290px] w-full object-cover transition duration-700 hover:scale-[1.03]"
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 p-5">
                    <div className="glass inline-flex items-center gap-3 px-4 py-3 text-sm text-ink-900">
                      <span className="font-display text-lg">“</span>
                      Every frame is a feeling—captured gently, delivered beautifully.
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

