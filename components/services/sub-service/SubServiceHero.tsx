import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, MessageSquare } from "lucide-react";

type HeroAction = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
  external?: boolean;
};

type TrustBadge = {
  label: string;
  icon: LucideIcon;
};

type SubServiceHeroProps = {
  eyebrow: string;
  title: string;
  highlightedTitle?: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  imageBadgeTitle: string;
  imageBadgeDescription: string;
  actions: HeroAction[];
  trustBadges: TrustBadge[];
};

export default function SubServiceHero({
  eyebrow,
  title,
  highlightedTitle,
  subtitle,
  description,
  image,
  imageAlt,
  imageBadgeTitle,
  imageBadgeDescription,
  actions,
  trustBadges,
}: SubServiceHeroProps) {
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
              {eyebrow}
            </span>
          </div>

          <h1 className="mt-5 font-heading text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
            {title}
            {highlightedTitle ? (
              <>
                {" "}
                <span className="text-accent-500">{highlightedTitle}</span>
              </>
            ) : null}
          </h1>

          <p className="mt-6 max-w-xl font-heading text-lg font-semibold leading-relaxed text-brand-100">
            {subtitle}
          </p>
          <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-brand-100">
            {description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {actions.map((action) => {
              const className =
                action.variant === "primary"
                  ? "inline-flex items-center justify-center gap-2 rounded-button bg-accent-500 px-7 py-3.5 font-body text-sm font-semibold text-brand-900 transition-colors hover:bg-accent-600"
                  : "inline-flex items-center justify-center gap-2 rounded-button border border-surface-50/30 px-7 py-3.5 font-body text-sm font-semibold text-surface-50 transition-colors hover:border-accent-500 hover:text-accent-500";

              const content = (
                <>
                  {action.variant === "secondary" ? (
                    <MessageSquare className="h-4 w-4" aria-hidden />
                  ) : null}
                  {action.label}
                  {action.variant === "primary" ? (
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  ) : null}
                </>
              );

              if (action.external) {
                return (
                  <a
                    key={action.label}
                    href={action.href}
                    target="_blank"
                    rel="noreferrer"
                    className={className}
                  >
                    {content}
                  </a>
                );
              }

              return (
                <Link key={action.label} href={action.href} className={className}>
                  {content}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="relative">
          <div
            className="absolute -bottom-4 -right-4 hidden h-full w-full rounded-card border-2 border-accent-500/40 lg:block"
            aria-hidden
          />
          <div className="relative aspect-4/3 overflow-hidden rounded-card bg-brand-700 shadow-card">
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-linear-to-t from-brand-900/75 via-brand-900/10 to-transparent"
              aria-hidden
            />
            <div className="absolute bottom-5 left-5 right-5 rounded-card border border-surface-50/15 bg-brand-900/85 px-5 py-4 backdrop-blur-sm sm:right-auto">
              <p className="font-heading text-sm font-bold text-surface-50">
                {imageBadgeTitle}
              </p>
              <p className="mt-1 font-body text-xs text-brand-100">
                {imageBadgeDescription}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-14">
        <div className="grid grid-cols-1 gap-4 rounded-card border border-surface-50/10 bg-brand-900/40 p-6 sm:grid-cols-3">
          {trustBadges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center justify-center gap-3 sm:justify-start"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-500/15 text-accent-500">
                <Icon className="h-5 w-5" aria-hidden />
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
