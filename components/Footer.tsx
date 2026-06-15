import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";
import { SERVICE_GROUPS } from "@/lib/routes";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const priorityServices = SERVICE_GROUPS[0]?.items || [];

  return (
    <footer className="border-t border-accent-500/20 bg-brand-900 text-surface-50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          {/* Brand & Contact */}
          <div className="lg:col-span-1">
            <Image
              src={SITE.assets.logoTransparent}
              alt={`${SITE.name} logo`}
              width={140}
              height={47}
              className="h-auto w-28 lg:w-32"
            />
            <p className="mt-6 font-body text-sm leading-relaxed text-surface-50/70">
              Premium construction and contracting services for reliable
              residential and commercial projects.
            </p>
            <div className="mt-6 space-y-2">
              <a
                href={`tel:${SITE.phone}`}
                className="block font-body text-sm text-accent-500 transition hover:text-accent-600"
              >
                {SITE.phone}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="block font-body text-sm text-accent-500 transition hover:text-accent-600"
              >
                {SITE.email}
              </a>
              <p className="font-body text-sm text-surface-50/70">
                {SITE.address}
              </p>
            </div>
          </div>

          {/* Priority Services */}
          <div>
            <h3 className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-accent-500">
              Priority Services
            </h3>
            <ul className="mt-6 space-y-3">
              {priorityServices.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="font-body text-sm text-surface-50/80 transition hover:text-accent-500"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-accent-500">
              Company
            </h3>
            <ul className="mt-6 space-y-3">
              <li>
                <Link
                  href="/projects/"
                  className="font-body text-sm text-surface-50/80 transition hover:text-accent-500"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/construction-rates/"
                  className="font-body text-sm text-surface-50/80 transition hover:text-accent-500"
                >
                  Construction Rates
                </Link>
              </li>
              <li>
                <Link
                  href="/process/"
                  className="font-body text-sm text-surface-50/80 transition hover:text-accent-500"
                >
                  Our Process
                </Link>
              </li>
              <li>
                <Link
                  href="/about/"
                  className="font-body text-sm text-surface-50/80 transition hover:text-accent-500"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/"
                  className="font-body text-sm text-surface-50/80 transition hover:text-accent-500"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact/"
                  className="font-body text-sm text-surface-50/80 transition hover:text-accent-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-accent-500">
              Contact
            </h3>
            <div className="mt-6 space-y-4">
              <div>
                <p className="font-body text-xs uppercase tracking-wider text-surface-50/50">
                  Phone
                </p>
                <a
                  href={`tel:${SITE.phone}`}
                  className="mt-1 block font-body text-sm text-surface-50/80 transition hover:text-accent-500"
                >
                  {SITE.phone}
                </a>
              </div>
              <div>
                <p className="font-body text-xs uppercase tracking-wider text-surface-50/50">
                  Email
                </p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="mt-1 block font-body text-sm text-surface-50/80 transition hover:text-accent-500"
                >
                  {SITE.email}
                </a>
              </div>
              <div>
                <p className="font-body text-xs uppercase tracking-wider text-surface-50/50">
                  Address
                </p>
                <p className="mt-1 font-body text-sm text-surface-50/80">
                  {SITE.address}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-brand-100/15 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
            <p className="font-body text-sm text-surface-50/55">
              © {currentYear} {SITE.name}. All rights reserved.
            </p>
            <p className="font-body text-sm text-surface-50/55">
              Public website foundation by Webix Solutions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
