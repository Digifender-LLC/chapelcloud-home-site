"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { navGroups } from "@/lib/nav";

const pillarCopy: Record<string, string> = {
  software:
    "Connect membership, giving, communications, and volunteers without duct-taping tools together.",
  hardware:
    "Specify, install, and support AV, networking, and workstations that fit real church spaces.",
  managed:
    "Monitor, secure, and support your stack year-round—so outages don’t become Sunday emergencies.",
};

export function Pillars() {
  const reduce = useReducedMotion();

  return (
    <section
      id="pillars"
      className="scroll-mt-24 border-t border-mist/70 bg-white"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            One partner. Three layers.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            ChapelCloud brings platforms, premises kit, and ongoing care under one
            roof—aligned to how churches actually operate.
          </p>
        </div>

        <div className="mt-14 grid gap-12 border-t border-mist/80 pt-12 md:grid-cols-3 md:gap-10">
          {navGroups.map((group, i) => (
            <motion.article
              key={group.id}
              id={group.id}
              className="scroll-mt-28"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.55,
                delay: reduce ? 0 : i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-steel">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-ink">
                {group.label}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink-muted">
                {pillarCopy[group.id]}
              </p>
              <ul className="mt-6 space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium text-ink underline decoration-mist underline-offset-4 transition hover:decoration-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
