import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
      <path d="M12.04 2a9.82 9.82 0 0 0-8.5 14.73L2 22l5.4-1.42A9.94 9.94 0 1 0 12.04 2Zm0 17.99a8 8 0 0 1-4.08-1.12l-.29-.17-3.2.84.86-3.12-.19-.32a7.93 7.93 0 1 1 6.9 3.89Zm4.35-5.94c-.24-.12-1.41-.7-1.63-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.19a7.21 7.21 0 0 1-1.33-1.65c-.14-.24-.01-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.47-.39-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.16 1.51.1.46-.07 1.41-.58 1.61-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

export default function ProcessCTA() {
  return (
    <section className="relative overflow-hidden bg-brand-900 py-16 text-surface-50 lg:py-20">
      <Image
        src="/home/services/hero.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-25"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-linear-to-r from-brand-900 via-brand-900/95 to-brand-900/70"
        aria-hidden
      />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent-500">
          Let&apos;s Build with Clarity
        </span>
        <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl">
          Ready to Start Your Construction Project?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl font-body text-base leading-relaxed text-brand-100">
          Plan your project with a professional team that keeps every stage
          clear, organized, and easy to track.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/booking/"
            className="inline-flex items-center justify-center gap-2 rounded-button bg-accent-500 px-7 py-3.5 font-body text-sm font-semibold text-brand-900 transition-colors hover:bg-accent-600"
          >
            Book Consultation
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-button border border-surface-50/30 px-7 py-3.5 font-body text-sm font-semibold text-surface-50 transition-colors hover:border-accent-500 hover:text-accent-500"
          >
            <WhatsAppIcon />
            Contact Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

