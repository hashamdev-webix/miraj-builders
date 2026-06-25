import type { LucideIcon } from "lucide-react";
import SectionHeader from "@/components/home/SectionHeader";

export type SubServiceTimelineStep = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type SubServiceProcessTimelineProps = {
  eyebrow: string;
  title: string;
  description?: string;
  steps: SubServiceTimelineStep[];
  sectionClassName?: string;
};

export default function SubServiceProcessTimeline({
  eyebrow,
  title,
  description,
  steps,
  sectionClassName = "bg-surface-50",
}: SubServiceProcessTimelineProps) {
  return (
    <section className={`${sectionClassName} py-16 lg:py-24`}>
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow={eyebrow} title={title} />
        {description ? (
          <p className="mx-auto mt-5 max-w-3xl text-center font-body text-base leading-relaxed text-ink-500">
            {description}
          </p>
        ) : null}

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ title: stepTitle, description: stepDescription, icon: Icon }, index) => (
            <li
              key={stepTitle}
              className="group relative flex h-full flex-col rounded-card border border-ink-300/20 bg-white p-6 pt-8 shadow-card transition-all hover:-translate-y-1 hover:border-accent-500/50"
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
                {stepDescription}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
