export type RouteItem = {
  title: string;
  href: string;
  slug?: string;
  description?: string;
  priority?: boolean;
};

export type ServiceGroup = {
  title: string;
  items: RouteItem[];
};

// ─── Top-level public routes ──────────────────────────────────────────────────

export const PUBLIC_ROUTES: RouteItem[] = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about/" },
  { title: "Services", href: "/services/" },
  { title: "Projects", href: "/projects/" },
  { title: "Construction Rates", href: "/construction-rates/" },
  { title: "Our Process", href: "/process/" },
  { title: "Blog", href: "/blog/" },
  { title: "Contact", href: "/contact/" },
  { title: "Book Consultation", href: "/booking/" },
  { title: "Turnkey Construction", href: "/turnkey-construction/" },
];

// ─── Service groups ───────────────────────────────────────────────────────────

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    title: "Priority Services",
    items: [
      {
        title: "Turnkey Construction",
        href: "/services/turnkey-construction/",
        description:
          "Complete end-to-end construction from foundation to handover.",
        priority: true,
      },
      {
        title: "Grey Structure Construction",
        href: "/services/grey-structure-construction/",
        slug: "grey-structure-construction",
        description:
          "Foundation, columns, beams, slabs, and brick masonry work.",
        priority: true,
      },
      {
        title: "New Home Construction",
        href: "/services/new-home-construction/",
        slug: "new-home-construction",
        description:
          "Full new residential builds designed and constructed to your brief.",
        priority: true,
      },
      {
        title: "Construction Rates",
        href: "/construction-rates/",
        description:
          "Transparent per-sq-ft construction rate packages for Pakistan.",
        priority: true,
      },
    ],
  },
  {
    title: "Construction Services",
    items: [
      {
        title: "Residential Construction",
        href: "/services/residential-construction/",
        slug: "residential-construction",
        description: "Custom houses and villas built to the highest standards.",
      },
      {
        title: "Commercial Construction",
        href: "/services/commercial-construction/",
        slug: "commercial-construction",
        description:
          "Offices, plazas, and commercial spaces constructed with precision.",
      },
      {
        title: "Commercial Fit-Out",
        href: "/services/commercial-fit-out/",
        slug: "commercial-fit-out",
        description:
          "Interior fit-out for retail outlets, offices, and showrooms.",
      },
      {
        title: "Home Extension / Addition",
        href: "/services/home-extension/",
        slug: "home-extension",
        description:
          "Expand your living space with seamlessly integrated extensions.",
      },
      {
        title: "Renovation & Remodeling",
        href: "/services/renovation-remodeling/",
        slug: "renovation-remodeling",
        description:
          "Transform existing properties with expert renovation services.",
      },
    ],
  },
  {
    title: "Design & Planning",
    items: [
      {
        title: "Architectural Design & 3D",
        href: "/services/architectural-design/",
        slug: "architectural-design",
        description:
          "Concept design, floor plans, and 3D architectural visualization.",
      },
      {
        title: "Structural Design",
        href: "/services/structural-design/",
        slug: "structural-design",
        description:
          "Engineered structural drawings and calculations for safe builds.",
      },
      {
        title: "3D Elevation Design",
        href: "/services/3d-elevation-design/",
        slug: "3d-elevation-design",
        description:
          "Photo-realistic 3D exterior elevation renders before construction.",
      },
      {
        title: "Construction Supervision",
        href: "/services/construction-supervision/",
        slug: "construction-supervision",
        description:
          "On-site supervision to ensure quality and timeline adherence.",
      },
    ],
  },
  {
    title: "Interior & Finishing",
    items: [
      {
        title: "Interior Design & Finishing",
        href: "/services/interior-design/",
        slug: "interior-design",
        description:
          "Luxury interior design and full finishing for residential and commercial spaces.",
      },
      {
        title: "Exterior Elevation",
        href: "/services/exterior-elevation/",
        slug: "exterior-elevation",
        description:
          "Premium exterior cladding, texture, and facade finishing.",
      },
      {
        title: "False Ceiling & Woodwork",
        href: "/services/false-ceiling-woodwork/",
        slug: "false-ceiling-woodwork",
        description:
          "Gypsum false ceilings, POP work, and custom woodwork joinery.",
      },
      {
        title: "Painting Services",
        href: "/services/painting/",
        slug: "painting",
        description:
          "Interior and exterior painting with premium finishes and warranties.",
      },
      {
        title: "Flooring & Tiling",
        href: "/services/flooring-tiling/",
        slug: "flooring-tiling",
        description:
          "Marble, granite, ceramic, and porcelain flooring and tiling.",
      },
      {
        title: "Kitchen Cabinets & Wardrobes",
        href: "/services/kitchen-cabinets-wardrobes/",
        slug: "kitchen-cabinets-wardrobes",
        description:
          "Custom modular kitchens and fitted wardrobes built to measure.",
      },
    ],
  },
  {
    title: "Technical Works",
    items: [
      {
        title: "Electrical Works",
        href: "/services/electrical-works/",
        slug: "electrical-works",
        description:
          "Full electrical wiring, load planning, and DB installation.",
      },
      {
        title: "Plumbing & Sanitary",
        href: "/services/plumbing-sanitary/",
        slug: "plumbing-sanitary",
        description:
          "Concealed plumbing, sanitary fixtures, and drainage systems.",
      },
      {
        title: "HVAC / AC Installation",
        href: "/services/hvac-ac-installation/",
        slug: "hvac-ac-installation",
        description:
          "Ducted HVAC systems, split AC installation, and ventilation.",
      },
      {
        title: "Waterproofing",
        href: "/services/waterproofing/",
        slug: "waterproofing",
        description:
          "Roof, basement, and bathroom waterproofing with long-term guarantees.",
      },
      {
        title: "Solar Panels",
        href: "/services/solar-panels/",
        slug: "solar-panels",
        description:
          "On-grid and off-grid solar panel supply and installation.",
      },
      {
        title: "Smart Home & CCTV",
        href: "/services/smart-home-cctv/",
        slug: "smart-home-cctv",
        description:
          "Home automation, smart lighting, and CCTV security systems.",
      },
    ],
  },
];

// ─── Flat list of all service routes (with slugs only) ────────────────────────

export const ALL_SERVICE_ROUTES: RouteItem[] = SERVICE_GROUPS.flatMap((group) =>
  group.items.filter((item) => item.slug !== undefined),
);

// ─── Helper ───────────────────────────────────────────────────────────────────

export function findServiceBySlug(slug: string): RouteItem | undefined {
  return ALL_SERVICE_ROUTES.find((item) => item.slug === slug);
}
