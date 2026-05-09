import { Reveal } from '../components/Reveal'

type Story = { name: string; tag?: 'PW' }

const stories: Story[] = [
  { name: 'Karthik & Snigdha' },
  { name: 'Shruthi Sameer' },
  { name: 'Sandeep Naina' },
  { name: 'Divya Rob' },
  { name: 'Hemansh Brahmi' },
  { name: 'Ananya Avinash', tag: 'PW' },
  { name: 'Navya Trinath', tag: 'PW' },
  { name: 'Jaipur', tag: 'PW' },
]

export function StoriesListSection() {
  return (
    <section id="stories" className="section-pad">
      <div className="container-pad">
        <Reveal>
          <div className="text-center">
            <div className="kicker text-cocoa-200">Stories</div>
            <h2 className="mt-4 font-caps text-4xl tracking-[0.12em] text-noir-900 sm:text-5xl">
              Love stories we&apos;ve told
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stories.map((s, idx) => (
            <Reveal key={`${s.name}-${s.tag ?? ''}`} delay={0.02 * idx}>
              <div className="border border-cocoa-200/55 bg-sand-50/40 p-5">
                <div className="font-display text-xl tracking-[-0.02em] text-noir-900">
                  {s.name}
                </div>
                {s.tag ? (
                  <div className="mt-3 inline-flex items-center border border-brass-200/55 px-2.5 py-1 text-[10px] tracking-[0.22em] uppercase text-brass-200/90">
                    {s.tag}
                  </div>
                ) : (
                  <div className="mt-3 text-xs tracking-[0.18em] uppercase text-noir-900/55">
                    Wedding Story
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

