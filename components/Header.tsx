"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useId, useRef, useState } from "react";
import { navGroups, type NavGroup } from "@/lib/nav";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 12 12"
      className={`h-3 w-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M2.5 4.5 L6 8 L9.5 4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DesktopDropdown({ group }: { group: NavGroup }) {
  const [open, setOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const panelId = useId();

  const clearClose = () => {
    if (timeout.current) clearTimeout(timeout.current);
  };

  const scheduleClose = () => {
    clearClose();
    timeout.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        clearClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
      onFocusCapture={() => {
        clearClose();
        setOpen(true);
      }}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setOpen(false);
        }
      }}
    >
      <button
        type="button"
        className="inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-[0.95rem] font-medium text-ink/90 transition-colors hover:text-ink"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        {group.label}
        <Chevron open={open} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-label={group.label}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 top-full z-50 w-[22rem] -translate-x-1/2 pt-3"
          >
            <div className="overflow-hidden rounded-xl border border-mist/80 bg-white/95 shadow-[0_18px_50px_-24px_rgba(42,64,84,0.45)] backdrop-blur-md">
              <div className="border-b border-mist/70 bg-surface/80 px-4 py-3">
                <p className="font-display text-sm font-semibold text-ink">
                  {group.label}
                </p>
                <p className="mt-0.5 text-sm text-ink-muted">{group.blurb}</p>
              </div>
              <ul className="p-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-surface-2/80"
                      onClick={() => setOpen(false)}
                    >
                      <span className="block text-sm font-semibold text-ink">
                        {link.label}
                      </span>
                      <span className="mt-0.5 block text-sm leading-snug text-ink-muted">
                        {link.description}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-mist/60 bg-surface/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:h-[4.25rem] sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight text-ink"
        >
          <Image
            src="/logo.svg"
            alt=""
            width={36}
            height={36}
            className="h-9 w-9"
            priority
          />
          <span>ChapelCloud</span>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {navGroups.map((group) => (
            <DesktopDropdown key={group.id} group={group} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/#contact"
            className="hidden rounded-md bg-gold px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_20px_-10px_rgba(184,146,63,0.9)] transition hover:bg-gold-deep sm:inline-flex"
          >
            Talk to sales
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
              {mobileOpen ? (
                <path
                  d="M6 6 L18 18 M18 6 L6 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7 H20 M4 12 H20 M4 17 H20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-mist/70 bg-surface lg:hidden"
          >
            <nav className="mx-auto max-w-6xl px-5 py-4 sm:px-8" aria-label="Mobile">
              {navGroups.map((group) => {
                const isOpen = expanded === group.id;
                return (
                  <div key={group.id} className="border-b border-mist/60 last:border-0">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between py-3.5 text-left font-display text-base font-semibold text-ink"
                      aria-expanded={isOpen}
                      onClick={() =>
                        setExpanded((cur) => (cur === group.id ? null : group.id))
                      }
                    >
                      {group.label}
                      <Chevron open={isOpen} />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.18 }}
                          className="overflow-hidden pb-3"
                        >
                          {group.links.map((link) => (
                            <li key={link.label}>
                              <Link
                                href={link.href}
                                className="block py-2 pl-1 text-sm text-ink-muted"
                                onClick={() => setMobileOpen(false)}
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
              <Link
                href="/#contact"
                className="mt-4 flex w-full items-center justify-center rounded-md bg-gold px-4 py-3 text-sm font-semibold text-white"
                onClick={() => setMobileOpen(false)}
              >
                Talk to sales
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
