import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function HomeCTA() {
  return (
    <section className="relative overflow-hidden bg-brand-900 py-16 text-surface-50 lg:py-20">
      <div
        className="absolute inset-0 bg-linear-to-br from-brand-900 via-brand-900 to-brand-700"
        aria-hidden
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-heading text-3xl font-bold sm:text-4xl">
          Ready to Build or Renovate Your Property?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl font-body text-base leading-relaxed text-brand-100">
          From architectural design and grey structure construction to turnkey
          construction, renovation, interior finishing, plumbing, painting,
          flooring, solar panels, and CCTV installation — we provide complete
          construction services from start to finish.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/contact/"
            className="inline-flex items-center justify-center gap-2 rounded-button bg-accent-500 px-7 py-3.5 font-body text-sm font-semibold text-brand-900 transition-colors hover:bg-accent-600"
          >
            Get Free Construction Estimate
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact/"
            className="inline-flex items-center justify-center gap-2 rounded-button border border-surface-50/30 px-7 py-3.5 font-body text-sm font-semibold text-surface-50 transition-colors hover:border-accent-500 hover:text-accent-500"
          >
            <Phone className="h-4 w-4" />
            Talk to Construction Expert
          </Link>
        </div>
      </div>
    </section>
  );
}
