import SectionHeader from "@/components/home/SectionHeader";

export type ProcessStep = {
  num: string;
  stage: string;
  copy: string;
};

const defaultSteps: ProcessStep[] = [
  {
    num: "01",
    stage: "Consultation",
    copy: "We discuss your project type, plot size, budget, location, and required services.",
  },
  {
    num: "02",
    stage: "Site Visit",
    copy: "Our team visits the site to check measurements, access, and project conditions.",
  },
  {
    num: "03",
    stage: "Design & Estimate",
    copy: "We prepare design plans, 3D elevation, and a clear construction cost estimate.",
  },
  {
    num: "04",
    stage: "Construction Work",
    copy: "We begin grey structure, turnkey construction, renovation, or finishing work according to the approved plan.",
  },
  {
    num: "05",
    stage: "Final Handover",
    copy: "After inspection and finishing checks, we hand over the completed project.",
  },
];

type ProcessTimelineProps = {
  steps?: ProcessStep[];
  eyebrow?: string;
  title?: string;
  sectionClassName?: string;
};

export default function ProcessTimeline({
  steps = defaultSteps,
  eyebrow = "Our Process",
  title = "Our Design to Final Handover Process",
  sectionClassName = "bg-surface-100",
}: ProcessTimelineProps) {
  return (
    <section className={`${sectionClassName} py-16 lg:py-24`}>
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow={eyebrow} title={title} />

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <div
              key={step.num}
              className="relative flex flex-col items-center text-center"
            >
              {index < steps.length - 1 ? (
                <span
                  className="absolute left-1/2 top-8 hidden h-px w-[calc(100%+2.5rem)] bg-ink-300/30 lg:block"
                  aria-hidden
                />
              ) : null}
              <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-accent-500 font-heading text-xl font-bold text-brand-900 shadow-card">
                {step.num}
              </span>
              <h3 className="mt-5 font-heading text-lg font-bold text-brand-900">
                {step.stage}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-ink-500">
                {step.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
