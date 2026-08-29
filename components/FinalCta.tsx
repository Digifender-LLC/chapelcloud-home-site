import Link from "next/link";
import { site } from "@/lib/site";

export function FinalCta() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-mist/70 bg-surface-2"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="relative overflow-hidden rounded-2xl bg-presence px-8 py-14 sm:px-14 sm:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-gold/25 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 left-10 h-56 w-56 rounded-full bg-steel/30 blur-3xl"
          />
          <div className="relative max-w-xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Ready for quieter Sundays?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/75">
              Tell us about your campus, your tools, and what’s breaking. We’ll
              sketch a practical plan—no pressure, no jargon maze.
            </p>
            <Link
              href={`mailto:${site.email}`}
              className="mt-8 inline-flex rounded-md bg-gold px-5 py-3 text-base font-semibold text-white transition hover:bg-gold-deep"
            >
              {site.email}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
