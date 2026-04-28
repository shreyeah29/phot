import { Reveal } from '../components/Reveal'
import { cn } from '../lib/utils'

const packages = [
  {
    title: 'Weddings',
    subtitle: 'Full day coverage',
    image:
      'https://images.unsplash.com/photo-1523437237164-d442d57cc3c9?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Pre-Wedding',
    subtitle: 'Cinematic portraits',
    image:
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Engagement',
    subtitle: 'Details & emotion',
    image:
      'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Films',
    subtitle: 'Story-led edits',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Lifestyle',
    subtitle: 'Family & newborn',
    image:
      'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?auto=format&fit=crop&w=1600&q=80',
  },
] as const

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function PackagesSection() {
  return (
    <section id="packages" className="section-pad">
      <div className="container-pad">
        <Reveal>
          <div className="text-center">
            <div className="kicker">Explore the</div>
            <h2 className="mt-4 font-caps text-4xl tracking-[0.12em] text-noir-900 sm:text-5xl">
              Packages
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {packages.map((p, idx) => (
            <Reveal key={p.title} delay={0.03 * idx}>
              <button
                type="button"
                onClick={() => scrollToId('contact')}
                className={cn(
                  'group relative overflow-hidden border border-cocoa-200/55 bg-noir-900',
                  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass-500',
                )}
                aria-label={`View ${p.title} package`}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  decoding="async"
                  className="h-44 w-full object-cover opacity-85 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir-900/85 via-noir-900/25 to-transparent" />
                <div className="relative px-4 pb-4 pt-3 text-left text-sand-50">
                  <div className="font-caps text-xs tracking-[0.26em] text-brass-200/90">
                    {p.title.toUpperCase()}
                  </div>
                  <div className="mt-1 text-xs tracking-[0.22em] uppercase text-sand-50/70">
                    {p.subtitle}
                  </div>
                  <div className="mt-3 inline-flex items-center justify-center border border-brass-200/50 px-3 py-1 text-[10px] tracking-[0.22em] uppercase text-brass-200/90 transition group-hover:bg-brass-200/10">
                    Learn more
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

