import { processTrustItems } from "./processContent";

export default function ProcessTrustStrip() {
  return (
    <section
      className="border-b border-ink-300/20 bg-surface-50 py-12"
      aria-labelledby="process-trust-title"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent-500">
            Built Around Clarity
          </span>
          <h2
            id="process-trust-title"
            className="mt-3 font-heading text-2xl font-bold text-brand-900 sm:text-3xl"
          >
            Simple, Transparent &amp; Easy for Clients
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {processTrustItems.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="group rounded-card border border-ink-300/20 bg-white p-6 transition-all hover:-translate-y-1 hover:border-accent-500/40 hover:shadow-card"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-card bg-accent-100 text-accent-600 transition-colors group-hover:bg-accent-500 group-hover:text-brand-900">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-4 font-heading text-base font-bold text-brand-900">
                {title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-ink-500">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

