/** Testata scura delle pagine interne (chi siamo, contatti). */
export default function PageHero({ eyebrow, title, intro, children }) {
  return (
    <section className="on-dark relative isolate overflow-hidden bg-brand-900 text-white grain">
      <div
        aria-hidden="true"
        className="absolute -right-32 -top-40 h-[26rem] w-[26rem] rounded-full bg-brand-500/25 blur-3xl"
      />
      <div className="shell relative z-10 pb-16 pt-[calc(var(--nav-h)+2.5rem)]">
        <p className="eyebrow eyebrow-rule text-brass">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-display text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.02em]">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-2xl font-sans text-lg leading-relaxed text-white/70">
            {intro}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
