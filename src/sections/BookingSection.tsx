import { useMemo, useState } from 'react'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/style.css'
import { FiCalendar, FiMail, FiPhone, FiUser } from 'react-icons/fi'
import { Reveal } from '../components/Reveal'
import { cn } from '../lib/utils'

type FormState = {
  name: string
  email: string
  phone: string
  date?: Date
  message: string
}

function formatDate(d?: Date) {
  if (!d) return ''
  return new Intl.DateTimeFormat(undefined, { year: 'numeric', month: 'short', day: '2-digit' }).format(d)
}

export function BookingSection() {
  const [openCalendar, setOpenCalendar] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    date: undefined,
    message: '',
  })

  const min = useMemo(() => new Date(), [])

  const canSubmit =
    form.name.trim().length >= 2 &&
    form.email.includes('@') &&
    form.phone.trim().length >= 8 &&
    !!form.date

  return (
    <section id="book" className="section-pad bg-gradient-to-b from-beige-50/60 to-cream-50">
      <div className="container-pad">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <Reveal className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-ink-100/60 bg-cream-50/70 px-4 py-2 text-xs font-medium tracking-[0.22em] uppercase text-ink-300">
              Booking <span className="h-1.5 w-1.5 rounded-full bg-gold-500/80" />
            </div>
            <h2 className="mt-6 headline">Check availability</h2>
            <p className="subhead">
              Tell us about your celebration. We’ll respond with availability, packages, and a
              tailored plan for your story.
            </p>

            <div className="mt-8 glass p-6">
              <div className="font-display text-2xl text-ink-900">Quick notes</div>
              <ul className="mt-3 space-y-2 text-sm text-ink-300">
                <li>• Preferred cities: Chennai • Bangalore • Destination</li>
                <li>• Photo + Film bundles available</li>
                <li>• Delivery: curated highlights + full gallery</li>
              </ul>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.1}>
            <div className="glass p-6 sm:p-8 shadow-soft">
              <form
                className="grid gap-4 sm:grid-cols-2"
                onSubmit={(e) => {
                  e.preventDefault()
                  if (!canSubmit) return
                  setSubmitted(true)
                  window.setTimeout(() => setSubmitted(false), 4200)
                }}
              >
                <label className="grid gap-2">
                  <span className="text-xs font-medium tracking-[0.22em] uppercase text-ink-300">
                    Name
                  </span>
                  <div className="flex items-center gap-2 rounded-2xl border border-ink-100/70 bg-cream-50/60 px-4 py-3">
                    <FiUser className="opacity-70" />
                    <input
                      value={form.name}
                      onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                      className="w-full bg-transparent text-sm text-ink-900 outline-none placeholder:text-ink-300/70"
                      placeholder="Your full name"
                      autoComplete="name"
                      required
                    />
                  </div>
                </label>

                <label className="grid gap-2">
                  <span className="text-xs font-medium tracking-[0.22em] uppercase text-ink-300">
                    Email
                  </span>
                  <div className="flex items-center gap-2 rounded-2xl border border-ink-100/70 bg-cream-50/60 px-4 py-3">
                    <FiMail className="opacity-70" />
                    <input
                      value={form.email}
                      onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                      className="w-full bg-transparent text-sm text-ink-900 outline-none placeholder:text-ink-300/70"
                      placeholder="you@example.com"
                      autoComplete="email"
                      required
                      type="email"
                    />
                  </div>
                </label>

                <label className="grid gap-2">
                  <span className="text-xs font-medium tracking-[0.22em] uppercase text-ink-300">
                    Phone
                  </span>
                  <div className="flex items-center gap-2 rounded-2xl border border-ink-100/70 bg-cream-50/60 px-4 py-3">
                    <FiPhone className="opacity-70" />
                    <input
                      value={form.phone}
                      onChange={(e) => setForm((s) => ({ ...s, phone: e.target.value }))}
                      className="w-full bg-transparent text-sm text-ink-900 outline-none placeholder:text-ink-300/70"
                      placeholder="+91 …"
                      autoComplete="tel"
                      required
                      inputMode="tel"
                    />
                  </div>
                </label>

                <div className="grid gap-2 relative">
                  <span className="text-xs font-medium tracking-[0.22em] uppercase text-ink-300">
                    Event date
                  </span>

                  <button
                    type="button"
                    onClick={() => setOpenCalendar((v) => !v)}
                    className={cn(
                      'flex items-center justify-between gap-2 rounded-2xl border px-4 py-3 text-sm transition',
                      openCalendar
                        ? 'border-gold-500/60 bg-cream-50/80'
                        : 'border-ink-100/70 bg-cream-50/60 hover:bg-cream-100/70',
                    )}
                    aria-haspopup="dialog"
                    aria-expanded={openCalendar}
                  >
                    <span className={cn(form.date ? 'text-ink-900' : 'text-ink-300/80')}>
                      {form.date ? formatDate(form.date) : 'Select a date'}
                    </span>
                    <FiCalendar className="opacity-80" />
                  </button>

                  {openCalendar ? (
                    <div
                      className="absolute z-20 mt-2 w-full rounded-2xl border border-ink-100/70 bg-cream-50/95 p-3 shadow-soft backdrop-blur"
                      role="dialog"
                      aria-label="Choose a date"
                    >
                      <DayPicker
                        mode="single"
                        selected={form.date}
                        onSelect={(d) => {
                          if (!d) return
                          setForm((s) => ({ ...s, date: d }))
                          setOpenCalendar(false)
                        }}
                        disabled={{ before: min }}
                      />
                    </div>
                  ) : null}
                </div>

                <label className="grid gap-2 sm:col-span-2">
                  <span className="text-xs font-medium tracking-[0.22em] uppercase text-ink-300">
                    Message
                  </span>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                    className="min-h-28 rounded-2xl border border-ink-100/70 bg-cream-50/60 px-4 py-3 text-sm text-ink-900 outline-none placeholder:text-ink-300/70 focus:border-gold-500/60"
                    placeholder="Tell us about your wedding, venues, and what you love visually…"
                  />
                </label>

                <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className={cn(
                      'btn-primary',
                      !canSubmit && 'opacity-50 cursor-not-allowed hover:translate-y-0 hover:shadow-soft',
                    )}
                  >
                    Check Availability
                  </button>
                  <div className="text-xs text-ink-300">
                    We’ll get back within 24–48 hours.
                  </div>
                </div>

                {submitted ? (
                  <div className="sm:col-span-2 rounded-2xl border border-gold-100/60 bg-gold-50/60 px-4 py-3 text-sm text-ink-900">
                    Request received. We’ll reach out shortly with availability.
                  </div>
                ) : null}
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

