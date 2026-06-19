import SectionHeader from "@/components/home/SectionHeader";
import { processBenefits } from "./processContent";

export default function WhyProcessWorks() {
  return (
    <section className="bg-surface-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Why Clients Prefer Us"
          title="Why Our Process Works"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processBenefits.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="group rounded-card border border-ink-300/20 bg-white p-6 text-center transition-all hover:-translate-y-1 hover:border-accent-500/40 hover:shadow-card"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent-100 text-accent-600 transition-colors group-hover:bg-accent-500 group-hover:text-brand-900">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mt-5 font-heading text-base font-bold text-brand-900">
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

