import { Reveal } from '../components/Reveal'

export function ContactSection() {
  return (
    <section id="book-us" className="section-pad">
      <div className="container-pad">
        <Reveal>
          <div className="grid gap-10 border border-cocoa-200/55 bg-sand-50/40 p-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <div className="kicker text-cocoa-200">Book us now</div>
              <h2 className="mt-4 font-caps text-3xl tracking-[0.12em] text-noir-900 sm:text-4xl">
                Check availability
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-cocoa-500 sm:text-base">
                Share your event date, city, and what you love visually. We’ll respond with
                availability and packages.
              </p>
            </div>

            <div className="lg:col-span-5">
              <form
                className="grid gap-3"
                onSubmit={(e) => {
                  e.preventDefault()
                }}
              >
                <input
                  className="w-full border border-cocoa-200/55 bg-sand-50 px-4 py-3 text-sm text-noir-900 placeholder:text-cocoa-500 focus:outline-none focus:ring-2 focus:ring-brass-200/60"
                  placeholder="Name"
                  required
                />
                <input
                  className="w-full border border-cocoa-200/55 bg-sand-50 px-4 py-3 text-sm text-noir-900 placeholder:text-cocoa-500 focus:outline-none focus:ring-2 focus:ring-brass-200/60"
                  placeholder="Email"
                  type="email"
                  required
                />
                <input
                  className="w-full border border-cocoa-200/55 bg-sand-50 px-4 py-3 text-sm text-noir-900 placeholder:text-cocoa-500 focus:outline-none focus:ring-2 focus:ring-brass-200/60"
                  placeholder="Phone"
                  inputMode="tel"
                  required
                />
                <input
                  className="w-full border border-cocoa-200/55 bg-sand-50 px-4 py-3 text-sm text-noir-900 placeholder:text-cocoa-500 focus:outline-none focus:ring-2 focus:ring-brass-200/60"
                  placeholder="Event Date"
                  type="date"
                  required
                />
                <textarea
                  className="min-h-28 w-full border border-cocoa-200/55 bg-sand-50 px-4 py-3 text-sm text-noir-900 placeholder:text-cocoa-500 focus:outline-none focus:ring-2 focus:ring-brass-200/60"
                  placeholder="Message"
                />
                <button type="submit" className="btn-primary w-fit">
                  Book Us Now
                </button>
                <div className="mt-4 text-sm text-cocoa-500">
                  <div className="font-medium text-noir-900">Chennai • Bangalore</div>
                  <div className="mt-2">hello@harishshankarphoto.com</div>
                  <div className="mt-1">+91 90000 00000</div>
                </div>
              </form>
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

