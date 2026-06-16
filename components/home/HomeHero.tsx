import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Users, Clock } from "lucide-react";

const trustBadges = [
  { icon: ShieldCheck, label: "Quality Workmanship" },
  { icon: Users, label: "Experienced Team" },
  { icon: Clock, label: "On-Time Delivery" },
];

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-brand-900 text-surface-50">
      <div
        className="absolute inset-0 bg-linear-to-br from-brand-900 via-brand-900 to-brand-700"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
        {/* LEFT: copy */}
        <div>
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent-500">
            Professional Turnkey Construction Company in Pakistan
          </span>

          <h1 className="mt-4 font-heading text-4xl font-bold leading-tight sm:text-5xl">
            Complete Construction Services in Pakistan{" "}
            <span className="text-accent-500">
              for Homes &amp; Commercial Projects
            </span>
          </h1>

          <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-brand-100">
            Plan, build, and complete your project with a professional turnkey
            construction company in Pakistan. We manage everything from
            architectural design and grey structure construction to finishing,
            renovation, interiors, plumbing, painting, flooring, solar
            installation, CCTV setup, and final handover.
          </p>
          <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-brand-100">
            With one experienced team managing every stage, your construction
            project stays organized, transparent, and ready for smooth delivery.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center gap-2 rounded-button bg-accent-500 px-7 py-3.5 font-body text-sm font-semibold text-brand-900 transition-colors hover:bg-accent-600"
            >
              Get Free Estimate
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center gap-2 rounded-button border border-surface-50/30 px-7 py-3.5 font-body text-sm font-semibold text-surface-50 transition-colors hover:border-accent-500 hover:text-accent-500"
            >
              Book Site Visit
            </Link>
          </div>
        </div>

        {/* RIGHT: image */}
        <div className="relative">
          <div className="relative aspect-4/3 overflow-hidden rounded-card bg-brand-700 shadow-card">
            <Image
              src="/home/hero.jpg"
              alt="Modern home built by Miraj Builders in Pakistan"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-linear-to-t from-brand-900/60 to-transparent"
              aria-hidden
            />
          </div>
        </div>
      </div>

      {/* trust strip */}
      <div className="relative mx-auto max-w-7xl px-6 pb-14">
        <div className="grid grid-cols-1 gap-4 rounded-card border border-surface-50/10 bg-brand-900/50 p-6 sm:grid-cols-3">
          {trustBadges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center justify-center gap-3 sm:justify-start"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-500/15 text-accent-500">
                <Icon className="h-5 w-5" />
              </span>
              <span className="font-body text-sm font-medium text-surface-50">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
