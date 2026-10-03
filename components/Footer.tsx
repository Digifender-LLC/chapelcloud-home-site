import Image from "next/image";
import Link from "next/link";
import { navGroups } from "@/lib/nav";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-mist/70 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-12 md:grid-cols-[1.2fr_repeat(3,1fr)]">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 font-display text-lg font-semibold text-presence"
            >
              <Image
                src="/logo.svg"
                alt=""
                width={32}
                height={32}
                className="h-8 w-8"
              />
              {site.name}
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
              Software, hardware, and managed IT for churches that want reliable
              technology without the vendor sprawl.
            </p>
            <p className="mt-6 text-sm text-ink-muted">
              <a
                href={`mailto:${site.email}`}
                className="font-medium text-ink underline decoration-mist underline-offset-4 hover:decoration-gold"
              >
                {site.email}
              </a>
            </p>
          </div>

          {navGroups.map((group) => (
            <div key={group.id}>
              <p className="font-display text-sm font-semibold text-ink">
                {group.label}
              </p>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-muted transition hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-mist/70 pt-8 text-sm text-ink-muted">
          <nav aria-label="Legal" className="flex flex-wrap gap-x-5 gap-y-2">
            <a href="https://digifender.com/legal/chapelcloud/terms" className="hover:text-ink">
              Draft terms
            </a>
            <a href="https://digifender.com/legal/chapelcloud/privacy" className="hover:text-ink">
              Draft privacy policy
            </a>
            <a href="https://digifender.com/legal/chapelcloud/cookies" className="hover:text-ink">
              Draft cookie notice
            </a>
            <a href="https://digifender.com/legal/chapelcloud" className="hover:text-ink">
              All draft policies
            </a>
            <a href="mailto:legal@digifender.com" className="hover:text-ink">
              Legal contact
            </a>
          </nav>
          <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
            <p>
              A <a href="https://digifender.com/" className="font-medium text-ink hover:underline">Digifender</a> product.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
