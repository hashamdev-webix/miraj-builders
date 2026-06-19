import type { ProcessStep } from "./processContent";

type PhaseTimelineProps = {
  phase: string;
  title: string;
  subtitle: string;
  introduction: string;
  steps: readonly ProcessStep[];
  sectionClassName?: string;
};

export default function PhaseTimeline({
  phase,
  title,
  subtitle,
  introduction,
  steps,
  sectionClassName = "bg-surface-50",
}: PhaseTimelineProps) {
  return (
    <section className={`${sectionClassName} py-16 lg:py-24`}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent-500">
            {phase}
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-brand-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 font-heading text-lg font-semibold text-accent-600 sm:text-xl">
            {subtitle}
          </p>
          <p className="mt-5 font-body text-base leading-relaxed text-ink-500">
            {introduction}
          </p>
        </div>

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ title: stepTitle, description, icon: Icon }, index) => (
            <li
              key={stepTitle}
              className="group relative rounded-card border border-ink-300/20 bg-white p-6 pt-8 shadow-card transition-all hover:-translate-y-1 hover:border-accent-500/50"
            >
              <span className="absolute -top-4 left-6 flex h-9 w-9 items-center justify-center rounded-full border-4 border-surface-50 bg-accent-500 font-heading text-xs font-bold text-brand-900">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="flex h-11 w-11 items-center justify-center rounded-card bg-brand-100 text-brand-700 transition-colors group-hover:bg-brand-900 group-hover:text-accent-500">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-4 font-heading text-base font-bold leading-snug text-brand-900">
                {stepTitle}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-ink-500">
                {description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

