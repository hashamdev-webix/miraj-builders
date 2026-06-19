import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export default function ContactHero() {
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
              Start with a Clear Project Conversation
            </span>
          </div>

          <h1 className="mt-5 font-heading text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
            Contact <span className="text-accent-500">Miraj Builders</span>
          </h1>

          <div className="mt-6 max-w-xl space-y-4">
            <p className="font-body text-base leading-relaxed text-brand-100">
              Planning to build, renovate, or finish your property? Contact
              Miraj Builders to discuss your project with a professional
              construction team. We help clients with turnkey construction,
              grey structure, new home construction, renovation, architectural
              design, interiors, finishing, and complete project management.
            </p>
            <p className="font-body text-base leading-relaxed text-brand-100">
              Share your project details with us, and our team will guide you
              with the right service, estimated scope, and next steps.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#estimate-form"
              className="inline-flex items-center justify-center gap-2 rounded-button bg-accent-500 px-7 py-3.5 font-body text-sm font-semibold text-brand-900 transition-colors hover:bg-accent-600"
            >
              Get Free Estimate
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#visit-us"
              className="inline-flex items-center justify-center gap-2 rounded-button border border-surface-50/30 px-7 py-3.5 font-body text-sm font-semibold text-surface-50 transition-colors hover:border-accent-500 hover:text-accent-500"
            >
              <MapPin className="h-4 w-4" />
              Book Site Visit
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
              src="/about/story.png"
              alt="Miraj Builders team reviewing construction project plans"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-linear-to-t from-brand-900/70 via-transparent to-transparent"
              aria-hidden
            />
            <div className="absolute bottom-5 left-5 rounded-card border border-surface-50/15 bg-brand-900/85 px-5 py-4 backdrop-blur-sm">
              <p className="font-heading text-sm font-bold text-surface-50">
                Professional Project Consultation
              </p>
              <p className="mt-1 font-body text-xs text-brand-100">
                Scope, service guidance, and clear next steps
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
