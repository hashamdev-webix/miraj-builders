import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { SITE } from "@/lib/site";
import { SERVICE_GROUPS } from "@/lib/routes";

const companyLinks = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about/" },
  { title: "Projects", href: "/projects/" },
  { title: "Our Process", href: "/process/" },
  { title: "Blog", href: "/blog/" },
  { title: "Contact", href: "/contact/" },
];

function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M13.5 22v-9h3l.5-3.5h-3.5V7.25c0-1.01.28-1.7 1.75-1.7H17V2.42c-.3-.04-1.35-.12-2.57-.12-2.55 0-4.3 1.56-4.3 4.42V9.5H7.25V13h2.88v9h3.37Z" />
    </svg>
  );
}

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12.04 2a9.82 9.82 0 0 0-8.5 14.73L2 22l5.4-1.42A9.94 9.94 0 1 0 12.04 2Zm0 17.99a8 8 0 0 1-4.08-1.12l-.29-.17-3.2.84.86-3.12-.19-.32a7.93 7.93 0 1 1 6.9 3.89Zm4.35-5.94c-.24-.12-1.41-.7-1.63-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.19a7.21 7.21 0 0 1-1.33-1.65c-.14-.24-.01-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.47-.39-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.16 1.51.1.46-.07 1.41-.58 1.61-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

const socialItems = [
  {
    label: "WhatsApp",
    href: `https://wa.me/${SITE.whatsapp}`,
    icon: WhatsAppIcon,
    external: true,
  },
  {
    label: "Facebook",
    href: SITE.socials.facebook,
    icon: FacebookIcon,
    external: false,
  },
  {
    label: "Instagram",
    href: SITE.socials.instagram,
    icon: InstagramIcon,
    external: false,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const priorityServices = SERVICE_GROUPS[0]?.items || [];

  return (
    <footer className="border-t border-accent-500/20 bg-brand-900 text-surface-50">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
        <div className="grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.9fr_0.85fr_1.25fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <span className="sr-only">{SITE.name}</span>
              <Image
                src={SITE.assets.logoTransparent}
                alt={`${SITE.name} logo`}
                width={140}
                height={47}
                className="h-auto w-28 lg:w-32"
              />
            </Link>
            <p className="mt-2 max-w-sm font-body text-sm leading-7 text-surface-50/70">
              Professional construction, design, renovation, and finishing
              services for residential and commercial projects across Pakistan.
            </p>
            <p className="mt-4 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-accent-500">
              {SITE.tagline}
            </p>

            <div className="mt-6 flex items-center gap-3" aria-label="Social media">
              {socialItems.map(({ label, href, icon: Icon, external }) =>
                external ? (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-50/15 bg-brand-700/40 text-surface-50/80 transition-all hover:-translate-y-0.5 hover:border-accent-500 hover:bg-accent-500 hover:text-brand-900"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ) : (
                  <Link
                    key={label}
                    href={href}
                    aria-label={`${label} — Home`}
                    title={`${label} link coming soon`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-50/15 bg-brand-700/40 text-surface-50/80 transition-all hover:-translate-y-0.5 hover:border-accent-500 hover:bg-accent-500 hover:text-brand-900"
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                ),
              )}
            </div>
          </div>

          {/* Priority Services */}
          <div>
            <h3 className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-accent-500">
              Services
            </h3>
            <ul className="mt-6 space-y-3">
              {priorityServices.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="font-body text-sm leading-6 text-surface-50/75 transition hover:text-accent-500"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services/"
                  className="inline-flex font-body text-sm font-semibold text-accent-500 transition hover:text-accent-600"
                >
                  View All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-accent-500">
              Company
            </h3>
            <ul className="mt-6 space-y-3">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-body text-sm leading-6 text-surface-50/75 transition hover:text-accent-500"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-accent-500">
              Get in Touch
            </h3>
            <address className="mt-6 space-y-5 not-italic">
              <a
                href={`tel:${SITE.phone}`}
                className="group flex items-start gap-3"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-500/12 text-accent-500 transition group-hover:bg-accent-500 group-hover:text-brand-900">
                  <Phone className="h-4 w-4" aria-hidden />
                </span>
                <span>
                  <span className="block font-body text-xs uppercase tracking-wider text-surface-50/45">
                    Phone
                  </span>
                  <span className="mt-1 block font-body text-sm text-surface-50/80 transition group-hover:text-accent-500">
                    {SITE.phone}
                  </span>
                </span>
              </a>

              <a
                href={`mailto:${SITE.email}`}
                className="group flex items-start gap-3"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-500/12 text-accent-500 transition group-hover:bg-accent-500 group-hover:text-brand-900">
                  <Mail className="h-4 w-4" aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="block font-body text-xs uppercase tracking-wider text-surface-50/45">
                    Email
                  </span>
                  <span className="mt-1 block break-all font-body text-sm text-surface-50/80 transition group-hover:text-accent-500">
                    {SITE.email}
                  </span>
                </span>
              </a>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-500/12 text-accent-500">
                  <MapPin className="h-4 w-4" aria-hidden />
                </span>
                <span>
                  <span className="block font-body text-xs uppercase tracking-wider text-surface-50/45">
                    Office
                  </span>
                  <span className="mt-1 block font-body text-sm leading-6 text-surface-50/80">
                    {SITE.address}
                  </span>
                </span>
              </div>

            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-brand-100/15 pt-7">
          <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
            <p className="font-body text-xs text-surface-50/50 sm:text-sm">
              © {currentYear} {SITE.name}. All rights reserved.
            </p>
            <p className="font-body text-xs text-surface-50/50 sm:text-sm">
              Website by Webix Solutions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
