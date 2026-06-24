import Link from "next/link";
import {
  Droplets,
  Paintbrush,
  LayoutGrid,
  Layers,
  Sun,
  Video,
} from "lucide-react";

const finishing = [
  {
    label: "Plumbing Services",
    href: "/services/plumbing-sanitary/",
    icon: Droplets,
  },
  { label: "Painting Services", href: "/services/painting/", icon: Paintbrush },
  {
    label: "Flooring Installation",
    href: "/services/flooring-tiling/",
    icon: LayoutGrid,
  },
  {
    label: "Woodwork & False Ceiling",
    href: "/services/false-ceiling-woodwork/",
    icon: Layers,
  },
  {
    label: "Solar Panels Installation",
    href: "/services/solar-panels/",
    icon: Sun,
  },
  {
    label: "CCTV Installation",
    href: "/services/smart-home-cctv/",
    icon: Video,
  },
];

export default function FinishingStrip() {
  return (
    <section className="bg-surface-50 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 text-center">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent-500">
            Finishing &amp; Installation Services
          </span>
          <p className="mx-auto mt-3 max-w-2xl font-body text-sm text-ink-500">
            We also provide individual finishing and installation services as
            part of complete construction.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {finishing.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              className="group flex flex-col items-center gap-3 rounded-card border border-ink-300/20 bg-white p-5 text-center transition-all hover:-translate-y-1 hover:border-accent-500/40 hover:shadow-card"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-100 text-accent-600 transition-colors group-hover:bg-accent-500 group-hover:text-brand-900">
                <Icon className="h-6 w-6" />
              </span>
              <span className="font-body text-xs font-semibold text-brand-900">
                {label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
