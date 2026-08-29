import Link from "next/link";
import { FinalCta } from "@/components/FinalCta";
import {
  getRelatedManaged,
  type ManagedProduct,
} from "@/lib/managed";

export function ManagedProductPage({ product }: { product: ManagedProduct }) {
  const related = getRelatedManaged(product.slug);

  return (
    <div className="theme-managed">
      {/* Quiet centered steward hero */}
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
            Managed stewardship
          </p>
          <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            {product.title}
          </h1>
          <p className="mx-auto mt-5 max-w-lg font-display text-xl font-medium leading-snug text-ink/80">
            {product.tagline}
          </p>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-ink-muted">
            {product.overview}
          </p>
          <div className="mt-10">
            <Link
              href="/#contact"
              className="inline-flex rounded-md border border-ink/15 bg-white px-5 py-3 text-base font-semibold text-ink shadow-[0_1px_0_rgba(42,64,84,0.06)] transition hover:border-ink/30"
            >
              Talk about coverage
            </Link>
          </div>
        </div>
      </section>

      {/* Coverage map — labeled bands */}
      <section className="bg-presence text-white">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <h2 className="font-display text-3xl font-semibold tracking-tight">
            What’s under watch
          </h2>
          <p className="mt-3 max-w-xl text-lg text-white/65">
            Coverage you can explain to leadership—without a NOC glossary.
          </p>
          <ul className="mt-14 grid gap-0 sm:grid-cols-2">
            {product.coverage.map((item, i) => (
              <li
                key={item.label}
                className={`border-t border-white/10 py-8 sm:pr-10 ${
                  i % 2 === 1 ? "sm:border-l sm:pl-10 sm:pr-0" : ""
                } ${i >= 2 ? "" : "sm:border-b-0"}`}
              >
                <p className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-steel">
                  {item.label}
                </p>
                <p className="mt-3 text-base leading-relaxed text-white/80">
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Capabilities — checklist rhythm */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">
              How we steward it
            </h2>
            <p className="mt-3 text-lg text-ink-muted">
              Ongoing care so your team can stay focused on people.
            </p>
          </div>
          <ul className="mt-14 grid gap-x-16 gap-y-10 md:grid-cols-2">
            {product.features.map((feature) => (
              <li key={feature.title} className="flex gap-4">
                <span
                  aria-hidden
                  className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-steel"
                />
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-ink-muted">
                    {feature.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* When it matters — narrative moments */}
      <section className="border-t border-mist/70 bg-surface">
        <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-24">
          <h2 className="text-center font-display text-3xl font-semibold tracking-tight text-ink">
            When it matters
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-lg text-ink-muted">
            The moments churches call us about—before they become crises.
          </p>
          <ol className="mt-14 space-y-0">
            {product.moments.map((moment, i) => (
              <li
                key={moment.title}
                className="relative border-l-2 border-steel/35 py-8 pl-8 last:pb-0"
              >
                <span
                  aria-hidden
                  className="absolute -left-[5px] top-10 h-2 w-2 rounded-full bg-presence"
                />
                <p className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-steel">
                  Moment {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink">
                  {moment.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-ink-muted">
                  {moment.body}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-14 border-t border-mist/80 pt-10 text-center text-base leading-relaxed text-ink-muted">
            {product.audience}
          </p>
        </div>
      </section>

      {/* Related — dense vertical */}
      <section className="border-t border-mist/70 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
            Stack your coverage
          </h2>
          <p className="mt-2 max-w-xl text-base text-ink-muted">
            Monitoring, support, security, and recovery—stronger together.
          </p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-3">
            {related.map((item) => (
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
