import { Reveal } from '../components/Reveal'
import { instagramPosts } from '../data/instagram'

function InstagramEmbed({ shortcode }: { shortcode: string }) {
  const src = `https://www.instagram.com/p/${shortcode}/embed/`
  return (
    <div className="overflow-hidden border border-cocoa-200/55 bg-white shadow-soft">
      <div className="aspect-[4/5] w-full">
        <iframe
          title={`Instagram post ${shortcode}`}
          src={src}
          className="h-full w-full"
          loading="lazy"
          allow="clipboard-write; encrypted-media; picture-in-picture; web-share"
        />
      </div>
    </div>
  )
}

export function InstagramEmbedsSection() {
  return (
    <section className="section-pad">
      <div className="container-pad">
        <Reveal>
          <div className="text-center">
            <div className="kicker">Portfolio from</div>
            <h2 className="mt-4 font-caps text-4xl tracking-[0.12em] text-noir-900 sm:text-5xl">
              Instagram
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-cocoa-500">
              A curated selection from our latest frames. Tap to view on Instagram.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {instagramPosts.map((code, idx) => (
            <Reveal key={code} delay={0.03 * idx}>
              <InstagramEmbed shortcode={code} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            className="btn-ghost"
            href="https://www.instagram.com/harishankar_photography/"
            target="_blank"
            rel="noreferrer"
          >
            View full Instagram
          </a>
        </div>
      </div>
    </section>
  )
}

