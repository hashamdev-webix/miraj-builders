import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function AboutHero() {
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
        {/* LEFT */}
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-accent-500" aria-hidden />
            <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent-500">
              About Our Construction Company
            </span>
          </div>

          <h1 className="mt-5 font-heading text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
            About Our{" "}
            <span className="text-accent-500">
              Miraj Construction Company
            </span>
          </h1>

          <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-brand-100">
            Miraj Builders is a professional turnkey construction company
            helping homeowners, investors, and businesses build with confidence
            from the first plan to the final handover. Our purpose is simple: to
            make construction more organized, transparent, and stress-free by
            giving clients one reliable team for design, build, finishing, and
            delivery.
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
              <MessageSquare className="h-4 w-4" />
              Discuss Your Project
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          <div
            className="absolute -bottom-4 -right-4 hidden h-full w-full rounded-card border-2 border-accent-500/40 lg:block"
            aria-hidden
          />
          <div className="relative aspect-4/3 overflow-hidden rounded-card bg-brand-700 shadow-card">
            <Image
              src="/about/hero.png"
              alt="Miraj Builders construction team working on a modern residential project in Pakistan"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-linear-to-t from-brand-900/70 via-transparent to-transparent"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </section>
  );
}
