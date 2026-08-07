const steps = [
  {
    title: "Assess",
    body: "We map your current tools, campus infrastructure, and Sunday-critical workflows—then prioritize what actually moves the needle.",
  },
  {
    title: "Deploy",
    body: "Roll out software, hardware, and integrations in phases that respect worship calendars, staff bandwidth, and volunteer realities.",
  },
  {
    title: "Steward",
    body: "Stay covered with monitoring, help desk, security, and backups so your systems stay healthy long after go-live.",
  },
];

export function HowItWorks() {
  return (
    <section className="border-t border-mist/70 bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            How churches work with us
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            A clear path from first conversation to quiet, reliable Sundays.
          </p>
        </div>

        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((step, i) => (
            <li key={step.title} className="relative">
              <span
                aria-hidden
                className="font-display text-5xl font-semibold leading-none text-mist"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink-muted">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
