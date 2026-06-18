"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SITE } from "@/lib/site";
import { SERVICE_GROUPS } from "@/lib/routes";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);

  const pathname = usePathname();

  // Normalize path helper
  const normalizePath = (path: string) => {
    if (path.length > 1 && path.endsWith("/")) {
      return path.slice(0, -1);
    }
    return path;
  };

  const currentPath = normalizePath(pathname);

  // Route active helpers
  const isExactActive = (href: string) => {
    return currentPath === normalizePath(href);
  };

  const isServicesRouteActive =
    currentPath === "/services" ||
    currentPath.startsWith("/services/") ||
    currentPath === "/turnkey-construction";

  const isBookingActive = isExactActive("/booking");

  // Desktop nav class helper with important overrides
  const getDesktopNavClass = (active: boolean) =>
    [
      "relative text-sm font-semibold transition-colors duration-200",
      active
        ? "!text-accent-500 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-accent-500"
        : "!text-surface-50 hover:!text-accent-500",
    ].join(" ");

  // Services button class helper
  const getServicesButtonClass = () =>
    [
      "relative inline-flex items-center gap-1 text-sm font-semibold transition-colors duration-200",
      isServicesRouteActive
        ? "!text-accent-500 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-accent-500"
        : "!text-surface-50 hover:!text-accent-500",
    ].join(" ");

  // Mobile nav class helper
  const getMobileNavClass = (active: boolean) =>
    [
      "block rounded-button px-4 py-3 text-sm font-semibold transition-colors duration-200",
      active
        ? "!bg-accent-500 !text-brand-900"
        : "!text-surface-50 hover:!bg-brand-700 hover:!text-accent-500",
    ].join(" ");

  return (
    <header className="sticky top-0 z-50 border-b border-accent-500/20 bg-brand-900">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">{SITE.name}</span>
            <Image
              src={SITE.assets.logoTransparent}
              alt={`${SITE.name} logo`}
              width={120}
              height={40}
              className="h-auto w-20 sm:w-24 lg:w-28"
              priority
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-button p-2.5 text-surface-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop navigation */}
        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className={getDesktopNavClass(isExactActive("/"))}
            aria-current={isExactActive("/") ? "page" : undefined}
          >
            Home
          </Link>

          <Link
            href="/about/"
            className={getDesktopNavClass(isExactActive("/about"))}
            aria-current={isExactActive("/about") ? "page" : undefined}
          >
            About Us
          </Link>

          {/* Services with mega menu */}
          <div
            className="relative"
            onMouseEnter={() => setServicesMenuOpen(true)}
            onMouseLeave={() => setServicesMenuOpen(false)}
          >
            <Link
              href="/services/"
              className={getServicesButtonClass()}
              aria-expanded={servicesMenuOpen}
              aria-current={isServicesRouteActive ? "page" : undefined}
              onFocus={() => setServicesMenuOpen(true)}
            >
              Services
              <svg
                className="h-5 w-5 flex-none"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>

            {/* Mega menu dropdown */}
            {servicesMenuOpen && (
              <div
                className="fixed left-1/2 top-20 z-50 w-[min(1120px,calc(100vw-2rem))] -translate-x-1/2 max-h-[72vh] overflow-y-auto rounded-b-card border border-brand-100 bg-surface-50 p-8 shadow-card"
              >
                <div className="grid gap-6 lg:grid-cols-3 xl:grid-cols-5">
                  {SERVICE_GROUPS.map((group) => (
                    <div key={group.title}>
                      <h3 className="mb-4 font-heading text-xs font-bold uppercase tracking-[0.18em] text-accent-500">
                        {group.title}
                      </h3>
                      <ul className="space-y-2">
                        {group.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className="group block rounded-card p-3 transition hover:bg-accent-100/60"
                              onClick={() => setServicesMenuOpen(false)}
                            >
                              <p className="font-body text-sm font-bold text-ink-900 transition group-hover:text-accent-600">
                                {item.title}
                              </p>
                              {item.description && (
                                <p className="mt-1 font-body text-xs leading-5 text-ink-500">
                                  {item.description}
                                </p>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/projects/"
            className={getDesktopNavClass(isExactActive("/projects"))}
            aria-current={isExactActive("/projects") ? "page" : undefined}
          >
            Projects
          </Link>
          <Link
            href="/construction-rates/"
            className={getDesktopNavClass(isExactActive("/construction-rates"))}
            aria-current={
              isExactActive("/construction-rates") ? "page" : undefined
            }
          >
            Construction Rates
          </Link>
          <Link
            href="/process/"
            className={getDesktopNavClass(isExactActive("/process"))}
            aria-current={isExactActive("/process") ? "page" : undefined}
          >
            Our Process
          </Link>
          <Link
            href="/contact/"
            className={getDesktopNavClass(isExactActive("/contact"))}
            aria-current={isExactActive("/contact") ? "page" : undefined}
          >
            Contact
          </Link>
        </nav>

        {/* CTA button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/booking/"
            className={`rounded-button bg-accent-500 px-6 py-3 font-body text-sm font-bold !text-brand-900 transition hover:bg-accent-600 ${
              isBookingActive ? "ring-2 ring-accent-100" : ""
            }`}
            aria-current={isBookingActive ? "page" : undefined}
          >
            Book Consultation
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="max-h-[calc(100vh-5rem)] space-y-1 overflow-y-auto border-t border-accent-500/20 px-6 pb-6 pt-6">
            <Link
              href="/"
              className={getMobileNavClass(isExactActive("/"))}
              onClick={() => setMobileMenuOpen(false)}
              aria-current={isExactActive("/") ? "page" : undefined}
            >
              Home
            </Link>

            <Link
              href="/about/"
              className={getMobileNavClass(isExactActive("/about"))}
              onClick={() => setMobileMenuOpen(false)}
              aria-current={isExactActive("/about") ? "page" : undefined}
            >
              About Us
            </Link>

            {/* Services section in mobile */}
            <div className="space-y-2">
              <Link
                href="/services/"
                className={getMobileNavClass(isServicesRouteActive)}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={isServicesRouteActive ? "page" : undefined}
              >
                Services
              </Link>
              {SERVICE_GROUPS.map((group) => (
                <div key={group.title} className="space-y-1 pl-3">
                  <div className="px-3 py-1 font-body text-xs font-bold uppercase tracking-[0.18em] text-accent-500/70">
                    {group.title}
                  </div>
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block rounded-button px-3 py-2 font-body text-sm font-semibold transition-colors duration-200 ${
                        isExactActive(item.href)
                          ? "!bg-accent-500/20 !text-accent-500"
                          : "!text-surface-50 hover:!bg-brand-700 hover:!text-accent-500"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                      aria-current={
                        isExactActive(item.href) ? "page" : undefined
                      }
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              ))}
            </div>

            <Link
              href="/projects/"
              className={getMobileNavClass(isExactActive("/projects"))}
              onClick={() => setMobileMenuOpen(false)}
              aria-current={isExactActive("/projects") ? "page" : undefined}
            >
              Projects
            </Link>
            <Link
              href="/construction-rates/"
              className={getMobileNavClass(
                isExactActive("/construction-rates"),
              )}
              onClick={() => setMobileMenuOpen(false)}
              aria-current={
                isExactActive("/construction-rates") ? "page" : undefined
              }
            >
              Construction Rates
            </Link>
            <Link
              href="/process/"
              className={getMobileNavClass(isExactActive("/process"))}
              onClick={() => setMobileMenuOpen(false)}
              aria-current={isExactActive("/process") ? "page" : undefined}
            >
              Our Process
            </Link>
            <Link
              href="/contact/"
              className={getMobileNavClass(isExactActive("/contact"))}
              onClick={() => setMobileMenuOpen(false)}
              aria-current={isExactActive("/contact") ? "page" : undefined}
            >
              Contact
            </Link>

            {/* Mobile CTA */}
            <div className="pt-4">
              <Link
                href="/booking/"
                className={`block w-full rounded-button bg-accent-500 px-6 py-3 text-center font-body text-base font-bold !text-brand-900 transition hover:bg-accent-600 ${
                  isBookingActive ? "ring-2 ring-accent-100" : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={isBookingActive ? "page" : undefined}
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
