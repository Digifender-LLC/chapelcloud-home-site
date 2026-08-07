import Link from "next/link";
import { FinalCta } from "@/components/FinalCta";
import {
  getRelatedSoftware,
  type SoftwareProduct,
} from "@/lib/software";

export function SoftwareProductPage({ product }: { product: SoftwareProduct }) {
  const related = getRelatedSoftware(product.slug);

  return (
    <div className="theme-software">
      {/* Split hero — product identity left, narrative right */}
      <section className="relative isolate overflow-hidden border-b border-mist/70">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background: `
              radial-gradient(ellipse 55% 70% at 0% 0%, rgba(122,148,168,0.32), transparent 55%),
              radial-gradient(ellipse 40% 50% at 100% 100%, rgba(42,64,84,0.06), transparent 50%),
              linear-gradient(180deg, #e8eef4 0%, #f4f7fa 55%, #ffffff 100%)
            `,
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-1/2 opacity-[0.4]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 24h48M24 0v48' stroke='%237a94a8' stroke-opacity='0.18' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:items-end">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-steel">
              Software
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              {product.title}
            </h1>
            <p className="mt-5 max-w-md font-display text-xl font-medium leading-snug text-ink/85 sm:text-2xl">
              {product.tagline}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/#contact"
                className="inline-flex rounded-md bg-ink px-5 py-3 text-base font-semibold text-white transition hover:bg-ink/90"
              >
                Book a consult
              </Link>
              <Link
                href="#workflows"
                className="inline-flex rounded-md px-5 py-3 text-base font-semibold text-ink underline decoration-steel/40 underline-offset-4 transition hover:decoration-steel"
              >
                See workflows
              </Link>
            </div>
          </div>
          <div className="border-l border-steel/25 pl-0 lg:pl-12">
            <p className="text-lg leading-relaxed text-ink-muted lg:text-[1.125rem]">
              {product.overview}
            </p>
            <p className="mt-6 text-sm leading-relaxed text-ink-muted">
              {product.audience}
            </p>
          </div>
        </div>
      </section>

      {/* Numbered modules — single column, expanded */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">
              Modules
            </h2>
            <p className="mt-3 text-lg text-ink-muted">
              What teams use day to day—without bolting on five extra tools.
            </p>
          </div>
          <ol className="mt-14 divide-y divide-mist/80 border-y border-mist/80">
            {product.features.map((feature, i) => (
              <li
                key={feature.title}
                className="grid gap-3 py-8 sm:grid-cols-[5rem_1fr] sm:gap-10"
              >
                <span className="font-display text-sm font-semibold tabular-nums text-steel">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {feature.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-base leading-relaxed text-ink-muted">
                    {feature.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Workflows — horizontal narrative strip */}
      <section
        id="workflows"
        className="scroll-mt-24 border-t border-mist/70 bg-surface"
      >
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">
            How teams use it
          </h2>
          <p className="mt-3 max-w-xl text-lg text-ink-muted">
            Real ministry rhythms—not feature checklists.
          </p>
          <ul className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8">
            {product.workflows.map((flow, i) => (
              <li key={flow.title} className="relative">
                {i < product.workflows.length - 1 && (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-4 top-3 hidden h-px w-8 bg-steel/30 md:block"
                  />
                )}
                <p className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-steel">
                  Flow {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-lg font-semibold text-ink">
                  {flow.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {flow.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Related — compact horizontal */}
      <section className="border-t border-mist/70 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                Related software
              </h2>
              <p className="mt-2 text-base text-ink-muted">
                ChapelCloud platforms work better together.
              </p>
            </div>
          </div>
          <ul className="mt-10 flex flex-col gap-0 sm:flex-row sm:flex-wrap sm:gap-x-0">
            {related.map((item) => (
              <li
                key={item.slug}
                className="border-t border-mist/80 sm:w-1/3 sm:border-t-0 sm:border-l sm:border-mist/80 sm:first:border-l-0"
              >
                <Link
                  href={`/software/${item.slug}`}
                  className="group block py-6 sm:px-6 sm:py-2 sm:first:pl-0"
                >
                  <p className="font-display text-lg font-semibold text-ink transition group-hover:text-ink/75">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-ink-muted">{item.tagline}</p>
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
