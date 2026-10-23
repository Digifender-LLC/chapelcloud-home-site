import Link from "next/link";
import { FinalCta } from "@/components/FinalCta";
import { careAreas, managedProducts } from "@/lib/managed";

export function ManagedOverviewPage() {
  return (
    <div className="theme-managed">
      <section className="relative isolate overflow-hidden border-b border-mist/70">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background: `
              radial-gradient(ellipse 60% 45% at 50% 0%, rgba(42,64,84,0.12), transparent 60%),
              linear-gradient(180deg, #e4ebf2 0%, #eef3f7 35%, #f4f7fa 100%)
            `,
          }}
        />
        <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 sm:py-28">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-steel">
            Care
          </p>
          <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Remote technology care for ministry rhythms
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-ink-muted">
            Networks, security, and volunteer training—including Sunday service
            hours—so your people can focus on the mission.
          </p>
          <div className="mt-10">
            <Link
              href="/#contact"
              className="inline-flex rounded-md border border-ink/15 bg-white px-5 py-3 text-base font-semibold text-ink shadow-[0_1px_0_rgba(42,64,84,0.06)] transition hover:border-ink/30"
            >
              Request a conversation
            </Link>
          </div>
        </div>
      </section>

      <section id="care" className="scroll-mt-24 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <ul className="grid gap-x-16 gap-y-10 md:grid-cols-2">
            {careAreas.map((area) => (
              <li key={area.title} className="flex gap-4">
                <span
                  aria-hidden
                  className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-steel"
                />
                <div>
                  <h2 className="font-display text-lg font-semibold text-ink">
                    {area.title}
                  </h2>
                  <p className="mt-2 text-base leading-relaxed text-ink-muted">
                    {area.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-14 border-t border-mist/80 pt-8 text-base leading-relaxed text-ink-muted">
            On-site campus renovations and travel projects come later; year one
            we serve you remotely with excellence.
          </p>
        </div>
      </section>

      <section className="border-t border-mist/70 bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
            Services in detail
          </h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {managedProducts.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/managed/${item.slug}`}
                  className="group block border-t-2 border-ink/15 pt-5 transition hover:border-steel"
                >
                  <p className="font-display text-lg font-semibold text-ink">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {item.tagline}
                  </p>
                  <span className="mt-3 inline-block text-sm font-semibold text-ink/70 underline decoration-mist underline-offset-4 group-hover:decoration-steel">
                    View service
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCta />
    </div>
  );
}
