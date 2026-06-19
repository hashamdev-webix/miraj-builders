import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3 } from "lucide-react";

export default function ProcessHero() {
  return (
    <section className="relative overflow-hidden bg-brand-900 text-surface-50">
      <div
        className="absolute inset-0 bg-linear-to-br from-brand-900 via-brand-900 to-brand-700"
        aria-hidden
      />
      <div
        className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent-500/10 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -left-32 bottom-0 h-60 w-60 rounded-full bg-accent-500/5 blur-2xl"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-accent-500" aria-hidden />
            <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent-500">
              Our Process
            </span>
          </div>

          <h1 className="mt-5 font-heading text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
            Our <span className="text-accent-500">Construction Process</span>
          </h1>

          <h2 className="mt-5 font-heading text-xl font-semibold leading-snug text-surface-50 sm:text-2xl">
            Clear Planning. Transparent Updates. Professional Handover.
          </h2>

          <div className="mt-5 max-w-xl space-y-4">
            <p className="font-body text-base leading-relaxed text-brand-100">
              We follow a step-by-step construction process that keeps your
              project organized from the first booking to final handover. Every
              stage is planned, reviewed, and updated properly so clients always
              know what is happening, what is completed, and what comes next.
            </p>
            <p className="font-body text-base leading-relaxed text-brand-100">
              To make the process easier, clients can track project status,
              milestone updates, site photos, documents, approvals, and payment
              progress through our client dashboard and mobile app.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/booking/"
              className="inline-flex items-center justify-center gap-2 rounded-button bg-accent-500 px-7 py-3.5 font-body text-sm font-semibold text-brand-900 transition-colors hover:bg-accent-600"
            >
              Book Consultation
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="#project-tracking"
              className="inline-flex items-center justify-center gap-2 rounded-button border border-surface-50/30 px-7 py-3.5 font-body text-sm font-semibold text-surface-50 transition-colors hover:border-accent-500 hover:text-accent-500"
            >
              <BarChart3 className="h-4 w-4" aria-hidden />
              Track Project Updates
            </Link>
          </div>
        </div>

        <div className="relative">
          <div
            className="absolute -bottom-4 -right-4 hidden h-full w-full rounded-card border-2 border-accent-500/40 lg:block"
            aria-hidden
          />
          <div className="relative aspect-4/3 overflow-hidden rounded-card bg-brand-700 shadow-card">
            <Image
              src="/home/hero.jpg"
              alt="Construction planning table representing the Miraj Builders project process"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-linear-to-t from-brand-900/90 via-brand-900/20 to-transparent"
              aria-hidden
            />
            <div className="absolute inset-x-5 bottom-5 rounded-card border border-surface-50/15 bg-brand-900/85 p-5 backdrop-blur-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-accent-500">
                    Project Visibility
                  </p>
                  <p className="mt-1 font-heading text-sm font-bold text-surface-50 sm:text-base">
                    From first inquiry to final handover
                  </p>
                </div>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-500 text-brand-900">
                  <BarChart3 className="h-5 w-5" aria-hidden />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

