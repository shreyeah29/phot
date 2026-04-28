import { Reveal } from '../components/Reveal'

export function StoriesGridSection() {
  return (
    <section id="stories" className="section-pad">
      <div className="container-pad">
        <Reveal>
          <div className="text-center">
            <div className="kicker text-cocoa-200">Explore our</div>
            <h2 className="mt-4 font-caps text-4xl tracking-[0.12em] text-noir-900 sm:text-5xl">
              Stories
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 overflow-hidden ring-1 ring-black/10">
            <img
              src="/stories-collage.png"
              alt="Stories collage"
              loading="lazy"
              decoding="async"
              className="w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

