import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

type ComingSoonProps = {
  title?: string;
  description?: string;
};

export default function ComingSoon({
  title = "Coming Soon",
  description = "We're building this page for Miraj Builders. Please check back soon.",
}: ComingSoonProps) {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-brand-900 px-6 py-16 text-center text-surface-50">
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-100/10" />
      <div className="absolute bottom-0 right-0 h-72 w-72 translate-x-1/3 translate-y-1/3 rounded-full bg-brand-100/10" />

      <section className="relative z-10 mx-auto w-full max-w-4xl">
        <Image
          src={SITE.assets.logoTransparent}
          alt={`${SITE.name} logo`}
          width={260}
          height={260}
          priority
          className="mx-auto h-auto w-40 sm:w-48 md:w-56"
        />

        <div className="mx-auto mt-8 h-px w-20 bg-accent-500" />

        <h1 className="mt-10 font-heading text-4xl font-bold tracking-tight text-surface-50 sm:text-5xl md:text-6xl">
          {title}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl font-body text-base leading-8 text-surface-50/75 sm:text-lg">
          {description}
        </p>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-button bg-accent-500 px-8 py-4 font-body text-sm font-bold text-brand-900 shadow-card transition hover:bg-accent-600"
          >
            Back to Home
          </Link>
        </div>

        <div className="mx-auto mt-14 h-px max-w-3xl bg-brand-100/20" />

        <p className="mt-8 font-body text-sm text-surface-50/70">
          Questions? {SITE.phone} <span className="mx-2 text-accent-500">•</span>{" "}
          {SITE.email}
        </p>

        <p className="mt-8 font-heading text-xs uppercase tracking-[0.3em] text-surface-50/35">
          {SITE.tagline}
        </p>
      </section>
    </main>
  );
}
