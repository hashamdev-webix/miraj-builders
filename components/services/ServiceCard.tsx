import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

export type ServiceCardData = {
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
  icon: LucideIcon;
  image?: string;
  imageAlt?: string;
  bestFor?: string;
};

type ServiceCardProps = ServiceCardData & {
  variant?: "featured" | "medium" | "compact";
};

export default function ServiceCard({
  title,
  description,
  href,
  ctaLabel,
  icon: Icon,
  image,
  imageAlt,
  bestFor,
  variant = "medium",
}: ServiceCardProps) {
  if (variant === "compact") {
    return (
      <article className="group flex h-full flex-col rounded-card border border-ink-300/20 bg-white p-6 transition-all hover:-translate-y-1 hover:border-accent-500/40 hover:shadow-card">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-100 text-accent-600 transition-colors group-hover:bg-accent-500 group-hover:text-brand-900">
          <Icon className="h-6 w-6" aria-hidden />
        </span>
        <h3 className="mt-4 font-heading text-base font-bold text-brand-900">
          {title}
        </h3>
        <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-ink-500">
          {description}
        </p>
        <Link
          href={href}
          className="mt-5 inline-flex items-center gap-1.5 font-body text-sm font-semibold text-accent-500 transition-colors group-hover:text-accent-600"
        >
          {ctaLabel}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </article>
    );
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-card border border-ink-300/20 bg-white shadow-card transition-all hover:-translate-y-1 hover:border-accent-500/40 hover:shadow-lg">
      {image ? (
        <div
          className={`relative overflow-hidden bg-brand-900 ${
            variant === "featured" ? "aspect-16/10" : "aspect-16/9"
          }`}
        >
          <Image
            src={image}
            alt={imageAlt ?? title}
            fill
            sizes={
              variant === "featured"
                ? "(max-width: 768px) 100vw, 33vw"
                : "(max-width: 768px) 100vw, 50vw"
            }
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div
            className="absolute inset-0 bg-linear-to-t from-brand-900/55 via-brand-900/5 to-transparent"
            aria-hidden
          />
        </div>
      ) : null}

      <div
        className={`relative flex flex-1 flex-col ${
          image ? "p-6 pt-9" : "p-6"
        }`}
      >
        <span
          className={`flex h-12 w-12 items-center justify-center rounded-full bg-accent-500 text-brand-900 shadow-card ${
            image ? "absolute -top-6 left-6 border-4 border-white" : ""
          }`}
        >
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <h3
          className={`font-heading font-bold text-brand-900 ${
            variant === "featured" ? "text-xl" : "text-lg"
          }`}
        >
          {title}
        </h3>
        <p className="mt-3 font-body text-sm leading-relaxed text-ink-500">
          {description}
        </p>
        {bestFor ? (
          <p className="mt-4 rounded-button bg-accent-100/70 px-4 py-3 font-body text-sm leading-relaxed text-ink-500">
            <span className="font-semibold text-brand-900">Best for:</span>{" "}
            {bestFor}
          </p>
        ) : null}
        <Link
          href={href}
          className="mt-5 inline-flex items-center gap-1.5 font-body text-sm font-semibold text-accent-500 transition-colors group-hover:text-accent-600"
        >
          {ctaLabel}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
