import { BadgeCheck } from "lucide-react";

export default function DesignApprovalCallout() {
  return (
    <section className="bg-surface-100 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-card border border-accent-500/40 bg-accent-100 p-7 shadow-card sm:p-9 lg:flex lg:items-start lg:gap-7">
          <div
            className="absolute -right-12 -top-12 h-40 w-40 rounded-full border-24 border-accent-500/10"
            aria-hidden
          />
          <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent-500 text-brand-900">
            <BadgeCheck className="h-7 w-7" aria-hidden />
          </span>
          <div className="relative mt-5 lg:mt-0">
            <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">
              A Key Step
            </span>
            <h2 className="mt-2 font-heading text-2xl font-bold text-brand-900 sm:text-3xl">
              Design Approval - Required Before Project Start
            </h2>
            <div className="mt-4 max-w-4xl space-y-3">
              <p className="font-body text-sm leading-relaxed text-ink-900 sm:text-base">
                Design approval is an important step for construction,
                renovation, interior, and turnkey projects. Our manager shares
                drawings, layouts, 3D renders, or design files with the client
                through the dashboard or app.
              </p>
              <p className="font-body text-sm leading-relaxed text-ink-900 sm:text-base">
                The client can approve the design or request revisions. Until
                the design is approved, the project does not move to contract
                signing or project start. This helps avoid confusion,
                unnecessary changes, and delays during construction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

