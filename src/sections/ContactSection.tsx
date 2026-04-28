import { Reveal } from '../components/Reveal'

export function ContactSection() {
  return (
    <section id="contact" className="section-pad">
      <div className="container-pad">
        <Reveal>
          <div className="grid gap-10 border border-cocoa-200/55 bg-sand-50/40 p-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <div className="kicker text-cocoa-200">Get in touch</div>
              <h2 className="mt-4 font-caps text-3xl tracking-[0.12em] text-noir-900 sm:text-4xl">
                Book your date
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-cocoa-500 sm:text-base">
                Share your event date, city, and what you love visually. We’ll respond with
                availability and packages.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="text-sm text-cocoa-500">
                <div className="font-medium text-noir-900">Chennai • Bangalore</div>
                <div className="mt-2">hello@harishshankarphoto.com</div>
                <div className="mt-1">+91 90000 00000</div>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a className="btn-primary" href="mailto:hello@harishshankarphoto.com">
                  Email Us
                </a>
                <a
                  className="btn-ghost"
                  href="https://www.instagram.com/harishankar_photography/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-2 text-xs text-cocoa-500 sm:flex-row sm:items-center sm:justify-between">
            <div>© {new Date().getFullYear()} Harishshankar Photography</div>
            <div className="tracking-[0.22em] uppercase">Privacy Policy</div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

