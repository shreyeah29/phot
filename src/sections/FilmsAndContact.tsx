import { Reveal } from '../components/Reveal'

export function FilmsAndContact() {
  return (
    <>
      <section id="films" className="section-pad">
        <div className="container-pad">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-6">
                <div className="text-xs font-medium tracking-[0.22em] uppercase text-neutral-500">
                  Award‑style films
                </div>
                <h2 className="mt-4 headline">Cinematic wedding films</h2>
                <p className="subhead">
                  Every wedding is unique—and so are our films. We focus on pacing, emotion, and
                  storytelling, building a film that feels like a memory you can replay.
                </p>
              </div>

              <div className="lg:col-span-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="border border-neutral-200 p-6">
                    <div className="font-display text-2xl tracking-[-0.02em]">
                      Love In Second Innings
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                      A gentle, human story about finding love again—shot with restraint, edited
                      with warmth.
                    </p>
                  </div>
                  <div className="border border-neutral-200 p-6">
                    <div className="font-display text-2xl tracking-[-0.02em]">
                      Twenty Years in the Making
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                      A layered story that spans memories, families, and cultures—crafted with
                      cinematic flow.
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <button type="button" className="btn-primary">
                    Watch Films
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="section-pad">
        <div className="container-pad">
          <Reveal>
            <div className="grid gap-10 border border-neutral-200 p-8 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-7">
                <div className="text-xs font-medium tracking-[0.22em] uppercase text-neutral-500">
                  Get in touch
                </div>
                <h2 className="mt-4 headline">Book your date</h2>
                <p className="subhead">
                  Share your event date, city, and what you love visually. We’ll respond with
                  availability and packages.
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="text-sm text-neutral-700">
                  <div className="font-medium text-neutral-950">Chennai • Bangalore</div>
                  <div className="mt-2">hello@harishshankarphoto.com</div>
                  <div className="mt-1">+91 90000 00000</div>
                </div>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a className="btn-primary" href="mailto:hello@harishshankarphoto.com">
                    Email Us
                  </a>
                  <a className="btn-ghost" href="https://instagram.com/" target="_blank" rel="noreferrer">
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-2 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
              <div>© {new Date().getFullYear()} Harishshankar Photography</div>
              <div className="tracking-[0.22em] uppercase">Privacy Policy</div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="careers" className="hidden" />
      <section id="travel" className="hidden" />
      <section id="backyard" className="hidden" />
    </>
  )
}

