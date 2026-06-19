import Link from "next/link";
import { ArrowRight, Clock3, MapPin } from "lucide-react";
import SectionHeader from "@/components/home/SectionHeader";
import { SITE } from "@/lib/site";

export default function OfficeLocation() {
  return (
    <section id="visit-us" className="scroll-mt-20 bg-surface-50 py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <div
          className="relative min-h-80 overflow-hidden rounded-card bg-brand-900 shadow-card"
          aria-label="Office location information"
        >
          <div
            className="absolute inset-0 bg-linear-to-br from-brand-900 via-brand-900 to-brand-700"
            aria-hidden
          />
          <div
            className="absolute -left-10 top-16 h-1 w-80 rotate-12 bg-accent-500/20"
            aria-hidden
          />
          <div
            className="absolute -right-10 bottom-20 h-1 w-96 -rotate-12 bg-brand-100/15"
            aria-hidden
          />
          <div
            className="absolute left-1/3 top-0 h-full w-px rotate-6 bg-brand-100/10"
            aria-hidden
          />
          <div
            className="absolute right-1/4 top-0 h-full w-px -rotate-6 bg-accent-500/15"
            aria-hidden
          />

          <div className="relative flex min-h-80 flex-col items-center justify-center px-8 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-500 text-brand-900 shadow-card">
              <MapPin className="h-8 w-8" aria-hidden />
            </span>
            <p className="mt-5 font-heading text-xl font-bold text-surface-50">
              Miraj Builders Office
            </p>
            <p className="mt-2 font-body text-sm text-brand-100">
              {SITE.address}
            </p>
            <p className="mt-4 max-w-sm font-body text-xs leading-relaxed text-surface-50/60">
              The exact map location will be added when the final office address
              is confirmed.
            </p>
          </div>
        </div>

        <div>
          <SectionHeader
            eyebrow="Office Location"
            title="Visit Us"
            align="left"
          />
          <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-ink-500">
            We recommend booking a meeting in advance so our construction
            expert can properly review your requirements.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-4 rounded-card border border-ink-300/20 bg-white p-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-100 text-accent-600">
                <MapPin className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-accent-500">
                  Office Address
                </p>
                <p className="mt-1 font-body text-sm font-semibold text-brand-900">
                  {SITE.address}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-card border border-ink-300/20 bg-white p-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-100 text-accent-600">
                <Clock3 className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-accent-500">
                  Working Hours
                </p>
                <p className="mt-1 font-body text-sm font-semibold text-brand-900">
                  {SITE.workingHours}
                </p>
              </div>
            </div>
          </div>

          <Link
            href="#estimate-form"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-button bg-accent-500 px-7 py-3.5 font-body text-sm font-semibold text-brand-900 transition-colors hover:bg-accent-600"
          >
            Book Site Visit
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
