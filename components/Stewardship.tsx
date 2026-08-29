const values = [
  {
    title: "Covering presence",
    body: "Technology that stays near—protective and ambient—not a spectacle competing with worship.",
  },
  {
    title: "Faithful stewardship",
    body: "Your data, budgets, and uptime are entrusted gifts. We manage the house; you hold the mission.",
  },
  {
    title: "Honest partnership",
    body: "Market-rate clarity, phased plans we can finish, and no lock-in theater.",
  },
];

export function Stewardship() {
  return (
    <section className="border-t border-mist/70 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-steel">
            How we work
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Calm technology, evident care
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            ChapelCloud is built on stewardship—not hype. We serve churches with
            the same diligence whether you’re a seeker-friendly campus or a
            longtime congregation.
          </p>
        </div>

        <ul className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {values.map((item) => (
            <li key={item.title} className="border-t-2 border-gold/40 pt-6">
              <h3 className="font-display text-xl font-semibold text-presence">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink-muted">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
