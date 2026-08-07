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
            linear-gradient(165deg, #eef3f7 0%, #f4f7fa 42%, #e4ebf2 100%)
          `,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%232a4054' fill-opacity='0.07' d='M29 10h2v14h10v2H31v24h-2V26H19v-2h10V10z'/%3E%3C/svg%3E")`,
        }}
      />
      <svg
        aria-hidden
        className="pointer-events-none absolute -right-[12%] top-[8%] -z-10 h-[70vmin] w-[70vmin] opacity-[0.14]"
        viewBox="0 0 3000 3000"
      >
        <path
          d="M 1514.06 95.4531 L 2260.58 391.254 C 1674.17 574.743 1170.49 957.705 836.904 1473.71 C 634.07 1027.17 753.809 525.206 1112.55 220.831 L 1514.06 95.4531 Z"
          fill="#2a4054"
        />
        <path
          d="M 882.522 350.943 L 169.934 639.221 C 103.689 967.073 111.371 1305.57 192.42 1630.08 C 473.096 1937.3 827.309 2168.08 1221.74 2300.7 L 1450.99 2141.75 C 1096.84 2026.26 820.011 1747.24 707.305 1392.19 C 594.6 1037.15 659.823 649.548 882.522 350.943 Z"
          fill="#2a4054"
        />
        <path
          d="M 2798.26 616.687 C 2869.33 908.776 2870.81 1213.47 2802.59 1506.24 C 2561.11 1152.39 2238.77 861.183 1862.29 656.761 C 2046.41 554.778 2249.37 491.378 2458.8 470.43 L 2798.26 616.687 Z"
          fill="#2a4054"
        />
        <path
          d="M 2766.56 1660.52 C 2743.96 1830.78 2664.78 1988.49 2541.74 2108.32 C 2342.22 1598.33 1991.58 1161.5 1536.82 856.388 L 1734.55 717.892 C 2182.64 894.702 2549.99 1230.24 2766.56 1660.52 Z"
          fill="#2a4054"
        />
        <path
          d="M 2133.5 1546.92 C 2186.76 1604.64 2227.23 1672.95 2252.25 1747.4 C 2180.47 2135.4 1997.1 2494.06 1724.61 2779.46 C 1657.54 2835.79 1575.58 2871.48 1488.65 2882.2 C 1278.3 2803.83 1080.8 2694.58 902.627 2558.05 C 1410.03 2360.53 1841.22 2006.32 2133.5 1546.92 Z"
          fill="#2a4054"
        />
        <path
          d="M 1088.62 2334.68 C 1000.34 2416.92 887.502 2457.47 769.953 2472.62 C 559.649 2320.94 396.593 2112.58 299.72 1871.87 C 545.52 2065.67 806.082 2225.1 1088.62 2334.68 Z"
          fill="#2a4054"
        />
        <path
          d="M 2312.54 1879.58 C 2391.27 1984.51 2436.26 2107.31 2461.29 2234.86 C 2337.31 2400.17 2177.65 2535.6 1994.23 2631.1 C 2136.35 2386.54 2248.96 2140.3 2312.54 1879.58 Z"
          fill="#2a4054"
        />
        <path
          d="M 1979.02 1502.07 L 1651.6 1568.73 L 1746.07 1757.49 L 1557.32 1663.01 L 1490.65 1990.44 L 1423.99 1663.01 L 1235.23 1757.49 L 1329.71 1568.73 L 1002.28 1502.07 L 1329.71 1435.4 L 1235.23 1246.65 L 1423.99 1341.12 L 1490.65 1013.7 L 1557.32 1341.12 L 1746.07 1246.65 L 1651.6 1435.4 Z"
          fill="#2a4054"
        />
      </svg>

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
            <p className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl md:text-6xl">
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
