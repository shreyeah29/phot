import { Reveal } from '../components/Reveal'

export function CareersSection() {
  return (
    <section id="careers" className="section-pad">
      <div className="container-pad">
        <Reveal>
          <div className="text-center">
            <div className="kicker text-cocoa-200">Careers</div>
            <h2 className="mt-4 font-caps text-4xl tracking-[0.12em] text-noir-900 sm:text-5xl">
              Join the team
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-cocoa-500 sm:text-base">
              We’re always excited to meet editors, photographers, and creative minds who love
              storytelling.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mt-10 grid gap-4 border border-cocoa-200/55 bg-sand-50/40 p-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <div className="font-display text-2xl tracking-[-0.02em] text-noir-900">
                Want to work with us?
              </div>
              <div className="mt-3 text-sm leading-relaxed text-cocoa-500 sm:text-base">
                Send your portfolio and a short note about what you love to create.
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a className="btn-primary" href="mailto:hello@harishshankarphoto.com?subject=Careers">
                Email Portfolio
              </a>
              <button
                type="button"
                className="btn-ghost"
                onClick={() => document.getElementById('book-us')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book us now
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

