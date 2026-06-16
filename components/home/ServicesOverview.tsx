import Link from "next/link";
import Image from "next/image";
import {
  KeyRound,
  Building2,
  Home,
  PencilRuler,
  Hammer,
  Sofa,
  ArrowRight,
} from "lucide-react";
import SectionHeader from "./SectionHeader";

const services = [
  {
    title: "Turnkey Construction",
    copy: "Complete start-to-finish construction service, including design, grey structure, finishing, interior work, plumbing, painting, flooring, woodwork, and final handover.",
    href: "/turnkey-construction/",
    cta: "View Turnkey Construction",
    icon: KeyRound,
    image: "/home/services/turnkey.jpg",
  },
  {
    title: "Grey Structure Construction",
    copy: "Strong grey structure work including foundation, brickwork, RCC slab, plaster, plumbing lines, electrical conduits, water tanks, and boundary walls.",
    href: "/services/grey-structure-construction/",
    cta: "View Grey Structure Service",
    icon: Building2,
    image: "/home/services/grey-structure.jpg",
  },
  {
    title: "New Home Construction",
    copy: "Professional house construction for 5 Marla, 10 Marla, 1 Kanal, and custom-size homes with planning, structure, finishing, and handover.",
    href: "/services/new-home-construction/",
    cta: "Start New Home Construction",
    icon: Home,
    image: "/home/services/new-home.jpg",
  },
  {
    title: "Architectural Design & 3D Elevation",
    copy: "Practical floor plans, architectural design, working drawings, 3D front elevation, exterior elevation, and design planning before construction.",
    href: "/services/architectural-design/",
    cta: "View Design Services",
    icon: PencilRuler,
    image: "/home/services/architecture.jpg",
  },
  {
    title: "Renovation & Remodeling",
    copy: "Complete renovation for homes, offices, kitchens, bathrooms, shops, flooring, painting, plumbing upgrades, and interior remodeling.",
    href: "/services/renovation-remodeling/",
    cta: "View Renovation Services",
    icon: Hammer,
    image: "/home/services/renovation.jpg",
  },
  {
    title: "Interior Finishing",
    copy: "Interior design, false ceiling, woodwork, wardrobes, media walls, lighting, flooring, painting, kitchen design, and finishing work.",
    href: "/services/interior-design/",
    cta: "View Interior Services",
    icon: Sofa,
    image: "/home/services/interior.jpg",
  },
];

export default function ServicesOverview() {
  return (
    <section className="bg-surface-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Our Services"
          title="Complete Construction Services Under One Roof"
        />

        <div className="mx-auto mt-6 max-w-3xl text-center">
          <p className="font-body text-base leading-relaxed text-ink-500">
            We make construction simple by managing design, structure,
            finishing, and installation through one professional team — you do
            not need to deal with multiple contractors for different stages of
            your project. From the first layout to the final handover, we
            deliver a smooth experience with proper cost planning, skilled
            labor, quality materials, and site supervision.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, copy, href, cta, icon: Icon, image }) => (
            <Link
              key={title}
              href={href}
              className="group flex flex-col overflow-hidden rounded-card border border-ink-300/20 bg-white shadow-card transition-all hover:-translate-y-1 hover:border-accent-500/40 hover:shadow-lg"
            >
              <div className="relative aspect-16/10 overflow-hidden bg-brand-900">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-linear-to-t from-brand-900/40 to-transparent"
                  aria-hidden
                />
              </div>

              <div className="relative flex flex-1 flex-col p-6 pt-9">
                <span className="absolute -top-6 left-6 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-accent-500 text-brand-900 shadow-card">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-heading text-lg font-bold text-brand-900">
                  {title}
                </h3>
                <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-ink-500">
                  {copy}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 font-body text-sm font-semibold text-accent-500 transition-colors group-hover:text-accent-600">
                  {cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
