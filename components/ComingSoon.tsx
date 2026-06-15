import Link from "next/link";
import { SITE } from "@/lib/site";

interface ComingSoonProps {
  title?: string;
  description?: string;
}

export default function ComingSoon({
  title = "Coming Soon",
  description = "We&apos;re building this page for Miraj Builders. Please check back soon.",
}: ComingSoonProps) {
  return (
    <main className="min-h-screen bg-brand-900 flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background decorative gradient orbs */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
        style={{ background: "var(--color-accent-500)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-5 translate-x-1/3 translate-y-1/3"
        style={{ background: "var(--color-accent-500)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl w-full">
        {/* Monogram Badge */}
        <div className="mb-8 flex items-center justify-center w-20 h-20 rounded-full border-2 border-accent-500 bg-brand-700">
          <span
            className="text-accent-500 text-2xl font-bold tracking-widest"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {SITE.shortName}
          </span>
        </div>

        {/* Divider line */}
        <div className="w-16 h-px bg-accent-500 mb-8 opacity-60" />

        {/* Heading */}
        <h1
          className="text-4xl sm:text-5xl font-bold text-surface-50 mb-6 leading-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {title}
        </h1>

        {/* Description */}
        <p className="text-ink-300 text-lg leading-relaxed mb-10 max-w-prose">
          {description}
        </p>

        {/* CTA — back to home */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3 bg-accent-500 text-brand-900 font-semibold rounded-button hover:bg-accent-600 transition-colors duration-200"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Back to Home
        </Link>

        {/* Divider */}
        <div className="w-full h-px bg-brand-700 my-12" />

        {/* Contact line */}
        <p className="text-ink-300 text-sm">
          Questions?{" "}
          <a
            href={`tel:${SITE.phone.replace(/\s/g, "")}`}
            className="text-accent-500 hover:text-accent-600 transition-colors"
          >
            {SITE.phone}
          </a>{" "}
          &nbsp;&middot;&nbsp;{" "}
          <a
            href={`mailto:${SITE.email}`}
            className="text-accent-500 hover:text-accent-600 transition-colors"
          >
            {SITE.email}
          </a>
        </p>

        {/* Brand tagline */}
        <p
          className="mt-8 text-ink-500 text-xs tracking-widest uppercase"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {SITE.tagline}
        </p>
      </div>
    </main>
  );
}
