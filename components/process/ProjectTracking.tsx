import {
  Check,
  CircleDollarSign,
  Clock3,
  FileText,
  ImageIcon,
  MessageSquareText,
} from "lucide-react";
import { trackingFeatures } from "./processContent";

function DashboardPreview() {
  return (
    <div className="relative mx-auto w-full max-w-2xl" aria-hidden>
      <div className="overflow-hidden rounded-card border border-brand-100/15 bg-brand-900 p-3 shadow-card sm:p-4">
        <div className="flex items-center gap-2 border-b border-brand-100/15 pb-3">
          <span className="h-2.5 w-2.5 rounded-full bg-accent-500" />
          <span className="h-2.5 w-2.5 rounded-full bg-brand-100/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-brand-100/20" />
          <span className="ml-2 font-body text-[10px] uppercase tracking-[0.18em] text-brand-100/60">
            Client Dashboard
          </span>
        </div>

        <div className="grid min-h-80 grid-cols-[72px_1fr] gap-3 pt-3 sm:grid-cols-[116px_1fr]">
          <div className="rounded-button bg-brand-700/55 p-2.5 sm:p-3">
            <div className="mb-5 h-7 rounded bg-accent-500/90" />
            {[68, 84, 60, 76, 52].map((width, index) => (
              <div
                key={width}
                className={`mb-3 h-2 rounded-full ${
                  index === 0 ? "bg-accent-500/70" : "bg-brand-100/25"
                }`}
                style={{ width: `${width}%` }}
              />
            ))}
          </div>

          <div className="rounded-button bg-surface-50 p-3 sm:p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-heading text-[10px] font-bold text-brand-900 sm:text-xs">
                  Project Overview
                </p>
                <p className="mt-1 font-body text-[8px] text-ink-500 sm:text-[10px]">
                  Residential Construction
                </p>
              </div>
              <span className="rounded-full bg-accent-100 px-2 py-1 font-body text-[8px] font-bold text-accent-600 sm:text-[10px]">
                In Progress
              </span>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-[0.8fr_1.2fr]">
              <div className="flex aspect-square items-center justify-center rounded-card bg-brand-100">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-8 border-accent-500 bg-white font-heading text-xl font-bold text-brand-900 sm:h-24 sm:w-24">
                  65%
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { icon: Clock3, label: "Timeline" },
                  { icon: CircleDollarSign, label: "Payments" },
                  { icon: ImageIcon, label: "Site Photos" },
                  { icon: FileText, label: "Documents" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="rounded-button border border-ink-300/20 bg-white p-2"
                  >
                    <Icon className="h-3.5 w-3.5 text-accent-600" />
                    <p className="mt-1 font-body text-[8px] font-semibold text-brand-900 sm:text-[9px]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 rounded-button border border-ink-300/20 bg-white p-3">
              <div className="flex items-center justify-between">
                <p className="font-body text-[9px] font-bold text-brand-900 sm:text-[10px]">
                  Milestone Progress
                </p>
                <p className="font-body text-[8px] text-ink-500">5 of 8</p>
              </div>
              <div className="mt-3 flex justify-between gap-1">
                {Array.from({ length: 8 }).map((_, index) => (
                  <span
                    key={index}
                    className={`flex h-5 w-5 items-center justify-center rounded-full text-[8px] ${
                      index < 5
                        ? "bg-accent-500 text-brand-900"
                        : "bg-brand-100 text-brand-700"
                    }`}
                  >
                    {index < 5 ? <Check className="h-2.5 w-2.5" /> : index + 1}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-8 right-3 w-32 rounded-[1.4rem] border-4 border-brand-900 bg-white p-2 shadow-card sm:-right-3 sm:w-40">
        <div className="rounded-[1rem] bg-brand-900 p-3">
          <div className="h-1.5 w-10 rounded-full bg-brand-100/30" />
          <p className="mt-5 font-body text-[8px] uppercase tracking-wider text-accent-500">
            Project Status
          </p>
          <p className="mt-1 font-heading text-sm font-bold text-white">65%</p>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-brand-100/20">
            <div className="h-full w-[65%] rounded-full bg-accent-500" />
          </div>
          <div className="mt-4 space-y-2">
            <div className="h-8 rounded-button bg-brand-700/60" />
            <div className="h-8 rounded-button bg-brand-700/60" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectTracking() {
  return (
    <section
      id="project-tracking"
      className="scroll-mt-24 bg-surface-50 py-16 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <DashboardPreview />

        <div>
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent-500">
            Always in the Loop
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-brand-900 sm:text-4xl">
            Track Your Project With Ease
          </h2>
          <p className="mt-5 font-body text-base leading-relaxed text-ink-500">
            We provide a client dashboard and mobile app to make the complete
            process easier and more transparent. Clients do not need to call
            again and again for every update because the main project
            information is available in one place.
          </p>

          <h3 className="mt-7 font-heading text-lg font-bold text-brand-900">
            Clients Can View:
          </h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {trackingFeatures.map(({ title, icon: Icon }) => (
              <li key={title} className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-100 text-accent-600">
                  <Icon className="h-4 w-4" aria-hidden />
                </span>
                <span className="font-body text-sm font-medium text-ink-900">
                  {title}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-7 border-l-2 border-accent-500 pl-4 font-body text-sm leading-relaxed text-ink-500">
            This system gives clients more clarity, comfort, and confidence
            throughout the project.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-2 font-body text-xs font-semibold text-brand-700">
              <ImageIcon className="h-4 w-4" aria-hidden />
              Site Photos
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent-100 px-4 py-2 font-body text-xs font-semibold text-accent-600">
              <MessageSquareText className="h-4 w-4" aria-hidden />
              Manager Updates
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

