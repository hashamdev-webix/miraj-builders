import { Check } from "lucide-react";
import SectionHeader from "@/components/home/SectionHeader";
import { serviceTimelines } from "./processContent";

export default function ServiceTimelines() {
  return (
    <section
      id="service-specific-timelines"
      className="scroll-mt-24 bg-surface-100 py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Additional Workflows"
          title="Service-Specific Timelines"
        />
        <p className="mx-auto mt-6 max-w-3xl text-center font-body text-base leading-relaxed text-ink-500">
          Some projects include additional service timelines depending on the
          approved scope of work. Each specialist service follows a clear
          sequence with defined checks before completion.
        </p>

        <div className="mt-12 space-y-6">
          {serviceTimelines.map(
            ({ title, description, icon: Icon, steps }, serviceIndex) => (
            <article
              key={title}
              className="group overflow-hidden rounded-card border border-ink-300/20 bg-white shadow-card transition-all hover:-translate-y-1 hover:border-accent-500/40"
            >
              <div className="grid lg:min-h-64 lg:grid-cols-[18rem_1fr]">
                <div className="relative overflow-hidden bg-brand-900 p-7 text-surface-50 sm:p-8">
                  <div
                    className="absolute -right-16 -top-16 h-44 w-44 rounded-full border-24 border-accent-500/10"
                    aria-hidden
                  />
                  <div
                    className="absolute bottom-0 left-0 h-1 w-full bg-accent-500"
                    aria-hidden
                  />

                  <div className="relative">
                    <div className="flex items-center justify-between gap-4">
                      <span className="flex h-14 w-14 items-center justify-center rounded-card bg-accent-500 text-brand-900 shadow-card">
                        <Icon className="h-7 w-7" aria-hidden />
                      </span>
                      <span className="rounded-full border border-surface-50/15 bg-brand-700/50 px-3 py-1.5 font-body text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-100">
                        {String(serviceIndex + 1).padStart(2, "0")} · 7 Stages
                      </span>
                    </div>

                    <h3 className="mt-6 min-h-14 font-heading text-xl font-bold leading-snug sm:text-2xl lg:h-24 lg:min-h-0">
                      {title}
                    </h3>
                    <p className="mt-3 min-h-[5.5rem] font-body text-sm leading-relaxed text-brand-100/80 sm:min-h-0 lg:h-24">
                      {description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-center p-7 sm:p-8 lg:px-10">
                  <div className="mb-7 flex items-center gap-3">
                    <span className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
                      Workflow Progression
                    </span>
                    <span className="h-px flex-1 bg-ink-300/20" aria-hidden />
                  </div>

                  <ol className="grid md:grid-cols-7">
                    {steps.map((step, index) => {
                      const isFinalStep = index === steps.length - 1;

                      return (
                        <li
                          key={step}
                          className={`relative flex min-h-[4.75rem] gap-4 pb-7 last:pb-0 md:block md:min-h-0 md:px-1 md:pb-0 md:text-center ${
                            !isFinalStep
                              ? "after:absolute after:bottom-0 after:left-[1.2rem] after:top-10 after:w-px after:bg-ink-300/30 md:after:bottom-auto md:after:left-1/2 md:after:top-5 md:after:h-px md:after:w-full"
                              : ""
                          }`}
                        >
                          <span
                            className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border font-heading text-xs font-bold transition-colors md:mx-auto ${
                              isFinalStep
                                ? "border-accent-500 bg-accent-500 text-brand-900 shadow-card"
                                : "border-brand-700/20 bg-brand-100 text-brand-700 group-hover:border-accent-500/50"
                            }`}
                          >
                            {isFinalStep ? (
                              <Check className="h-4 w-4" aria-hidden />
                            ) : (
                              String(index + 1).padStart(2, "0")
                            )}
                          </span>

                          <div className="pt-1.5 md:pt-0">
                            <p
                              className={`font-body text-sm font-semibold leading-snug md:mt-4 md:text-xs ${
                                isFinalStep
                                  ? "text-accent-600"
                                  : "text-brand-900"
                              }`}
                            >
                              {step}
                            </p>
                            {isFinalStep ? (
                              <span className="mt-1.5 block font-body text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-500">
                                Complete
                              </span>
                            ) : null}
                          </div>
                        </li>
                      );
                    })}
                  </ol>
                </div>
              </div>
            </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
