import { Reveal } from '../components/Reveal'
import { editorialGrid, featuredStories } from '../data/editorial'
import { PackagesSection } from './PackagesSection'

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function EditorialHome() {
  return (
    <main id="home">
      <section className="relative">
        <div className="container-pad">
          <div className="relative overflow-hidden bg-neutral-100">
            <img
              src="https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=3200&q=85"
              alt="Cinematic couple portrait"
              className="h-[76vh] min-h-[520px] w-full object-cover"
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
              <Reveal>
                <div className="max-w-3xl text-white">
                  <div className="kicker text-white/80">
                    Harishshankar Photography
                  </div>
                  <h1 className="mt-4 font-caps text-4xl leading-[1.02] tracking-[0.08em] sm:text-6xl">
                    Capturing love stories with restraint, warmth, and cinema.
                  </h1>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
                    Editorial composition. Honest emotion. Timeless delivery—crafted for couples
                    who want their memories to feel like a film still.
                  </p>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <button
                      type="button"
                      onClick={() => scrollToId('photography')}
                      className="btn-primary"
                    >
                      View Photography
                    </button>
                    <button
                      type="button"
                      onClick={() => scrollToId('contact')}
                      className="btn-ghost border-white/40 bg-white/10 text-white hover:bg-white/15"
                    >
                      Book Your Date
                    </button>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <PackagesSection />

      <section className="relative overflow-hidden bg-olive-900">
        <div className="absolute inset-0 opacity-45 mix-blend-overlay bg-film-grain" />
        <div className="container-pad py-16 sm:py-20">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center text-sand-50">
              <div className="kicker">Memorable Moments</div>
              <h2 className="mt-4 font-caps text-3xl tracking-[0.14em] sm:text-4xl">
                A calm, cinematic approach to your story.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-sand-50/75 sm:text-base">
                From the quiet glance to the wild celebration—each frame is composed with warmth,
                soft contrast, and timeless tones.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-pad">
          <Reveal>
            <p className="max-w-4xl text-base leading-relaxed text-noir-900">
              Considered a modern, cinematic wedding photography brand,{' '}
              <span className="font-medium text-noir-900">Harishshankar Photography</span>{' '}
              documents celebrations with timeless tones and honest emotion—crafted like an editorial,
              felt like a memory.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="photography" className="pb-10 sm:pb-12">
        <div className="container-pad">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {editorialGrid.map((img, idx) => (
              <Reveal key={img.id} delay={0.02 * idx}>
                <div className="group relative overflow-hidden bg-sand-100">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-[360px] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="editorial" className="section-pad">
        <div className="container-pad">
          <Reveal>
            <div className="flex items-end justify-between gap-6">
              <div>
                <div className="text-xs font-medium tracking-[0.22em] uppercase text-cocoa-500">
                  Featured
                </div>
                <h2 className="mt-4 headline">Selected weddings</h2>
              </div>
              <button type="button" className="btn-ghost">
                View All
              </button>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featuredStories.map((s, idx) => (
              <Reveal key={s.id} delay={0.04 * idx}>
                <article className="group">
                  <div className="overflow-hidden bg-sand-100">
                    <img
                      src={s.cover}
                      alt={s.title}
                      loading="lazy"
                      decoding="async"
                      className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="mt-4 text-xs tracking-[0.18em] uppercase text-cocoa-500">
                    {s.dateLabel}
                  </div>
                  <div className="mt-2 font-display text-2xl tracking-[-0.02em] text-noir-900">
                    {s.title}
                  </div>
                  <div className="mt-1 text-sm text-cocoa-500">
                    {s.location ? s.location : 'India & Destination'}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

