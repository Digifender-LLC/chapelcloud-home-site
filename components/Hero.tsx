"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative isolate min-h-[calc(100svh-4.25rem)] overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 70% 20%, rgba(122,148,168,0.28), transparent 55%),
            radial-gradient(ellipse 70% 50% at 15% 80%, rgba(184,146,63,0.12), transparent 50%),
            linear-gradient(165deg, #eef3f7 0%, #f3f5f7 42%, #e6eaef 100%)
          `,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23121820' fill-opacity='0.05' d='M29 10h2v14h10v2H31v24h-2V26H19v-2h10V10z'/%3E%3C/svg%3E")`,
        }}
      />
      <Image
        src="/logo.svg"
        alt=""
        width={480}
        height={480}
        aria-hidden
        className="pointer-events-none absolute -right-[8%] top-[6%] -z-10 h-[min(70vmin,28rem)] w-[min(70vmin,28rem)] opacity-[0.08]"
        priority
      />

      <div className="mx-auto flex min-h-[calc(100svh-4.25rem)] max-w-6xl flex-col justify-center px-5 py-16 sm:px-8 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-4">
            <Image
              src="/logo.svg"
              alt="ChapelCloud"
              width={88}
              height={88}
              className="h-16 w-16 sm:h-[5.5rem] sm:w-[5.5rem]"
              priority
            />
            <p className="font-display text-4xl font-semibold tracking-tight text-presence sm:text-5xl md:text-6xl">
              ChapelCloud
            </p>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 font-display text-3xl font-medium leading-[1.15] tracking-tight text-ink sm:text-4xl md:text-[2.75rem]"
          >
            Technology stewardship for churches that are ready to grow.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted sm:text-xl"
          >
            Software, sanctuary hardware, and managed IT—built as one partnership
            so your team can focus on people, not tickets.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Link
              href="/#contact"
              className="inline-flex rounded-md bg-gold px-5 py-3 text-base font-semibold text-white shadow-[0_12px_28px_-12px_rgba(184,146,63,0.95)] transition hover:bg-gold-deep"
            >
              Book a consult
            </Link>
            <Link
              href="/#pillars"
              className="inline-flex rounded-md px-5 py-3 text-base font-semibold text-ink transition hover:bg-white/60"
            >
              Explore solutions
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
