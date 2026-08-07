import Link from "next/link";
import { FinalCta } from "@/components/FinalCta";
import {
  getRelatedHardware,
  type HardwareProduct,
} from "@/lib/hardware";

export function HardwareProductPage({ product }: { product: HardwareProduct }) {
  const related = getRelatedHardware(product.slug);

  return (
    <div className="theme-hardware">
      {/* Full-bleed warm banner — brand + product as one plane */}
      <section className="relative isolate overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 70% 0%, rgba(184,146,63,0.28), transparent 55%),
              radial-gradient(ellipse 50% 40% at 10% 100%, rgba(154,120,47,0.14), transparent 50%),
              linear-gradient(155deg, #eef2f6 0%, #e8eef3 45%, #dde5ee 100%)
            `,
          }}
        />
        <div className="mx-auto max-w-6xl px-5 pt-16 pb-12 sm:px-8 sm:pt-20 sm:pb-16">
          <div className="flex flex-wrap items-center gap-3">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-gold-deep">
              Hardware
            </p>
            <span aria-hidden className="h-px w-10 bg-gold/50" />
            <p className="text-sm text-ink-muted">Spec’d for church spaces</p>
          </div>
          <h1 className="mt-6 max-w-3xl font-display text-5xl font-semibold tracking-tight text-ink sm:text-6xl sm:leading-[1.05]">
            {product.title}
          </h1>
          <p className="mt-5 max-w-xl text-xl leading-snug text-ink/80">
            {product.tagline}
          </p>
        </div>
        <div className="border-t border-gold/20 bg-ink/95">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <p className="max-w-2xl text-base leading-relaxed text-white/80">
              {product.overview}
            </p>
            <Link
              href="/#contact"
              className="inline-flex shrink-0 self-start rounded-md bg-gold px-5 py-3 text-base font-semibold text-white shadow-[0_12px_28px_-12px_rgba(184,146,63,0.95)] transition hover:bg-gold-deep sm:self-center"
            >
              Book a consult
            </Link>
          </div>
        </div>
      </section>

      {/* Spec sheet — bordered feature cells */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-ink/10 pb-8">
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">
                Spec sheet
              </h2>
              <p className="mt-2 max-w-lg text-lg text-ink-muted">
                Capabilities for real rooms—not retail floor demos.
              </p>
            </div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-gold-deep">
              Included scope
            </p>
          </div>
          <ul className="grid sm:grid-cols-2">
            {product.features.map((feature) => (
              <li
                key={feature.title}
                className="border-b border-ink/10 py-8 sm:odd:border-r sm:odd:pr-10 sm:even:pl-10"
              >
                <h3 className="font-display text-lg font-semibold text-ink">
                  {feature.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-ink-muted">
                  {feature.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Spaces + deliverables — two-column asymmetric */}
      <section className="border-t border-mist/70 bg-surface-2">
        <div className="mx-auto grid max-w-6xl gap-16 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
              Spaces we outfit
            </h2>
            <ul className="mt-8 space-y-0">
              {product.spaces.map((space) => (
                <li
                  key={space}
                  className="border-t border-gold/25 py-4 text-base text-ink first:border-t-0 first:pt-0"
                >
                  {space}
                </li>
              ))}
            </ul>
            <p className="mt-10 text-sm leading-relaxed text-ink-muted">
              {product.audience}
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
              How we deliver
            </h2>
            <ol className="mt-8 space-y-8">
              {product.deliverables.map((item) => (
                <li key={item.step} className="flex gap-5">
                  <span className="font-display text-2xl font-semibold tabular-nums text-gold-deep">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-base leading-relaxed text-ink-muted">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Related — stacked list with gold rule */}
      <section className="border-t border-mist/70 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
            Build the campus stack
          </h2>
          <p className="mt-2 max-w-xl text-base text-ink-muted">
            Related hardware that works as one system.
          </p>
          <ul className="mt-10 border-t-2 border-gold/40">
            {related.map((item) => (
              <li key={item.slug} className="border-b border-mist/80">
                <Link
                  href={`/hardware/${item.slug}`}
                  className="group flex flex-col gap-1 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                >
                  <span className="font-display text-xl font-semibold text-ink transition group-hover:text-gold-deep">
                    {item.title}
                  </span>
                  <span className="text-sm text-ink-muted sm:text-right">
                    {item.tagline}
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
