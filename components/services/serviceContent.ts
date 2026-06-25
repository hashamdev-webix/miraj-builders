import {
  Building2,
  Droplets,
  Hammer,
  Home,
  KeyRound,
  Layers,
  LayoutGrid,
  Paintbrush,
  PencilRuler,
  Sofa,
  Sun,
  Video,
} from "lucide-react";
import type { FaqItem } from "@/components/FaqAccordion";
import type { ServiceCardData } from "./ServiceCard";

export const coreServices: ServiceCardData[] = [
  {
    title: "Turnkey Construction",
    description:
      "A complete start-to-finish construction solution for clients who want one team to manage the full project. Our turnkey construction service covers design, grey structure, finishing, interiors, plumbing, painting, flooring, woodwork, installations, and handover.",
    bestFor:
      "Complete homes, villas, offices, commercial buildings, and full project management.",
    href: "/services/turnkey-construction/",
    ctaLabel: "View Turnkey Construction",
    icon: KeyRound,
    image: "/home/services/turnkey.jpg",
    imageAlt:
      "Turnkey construction project managed by Miraj Builders in Pakistan",
  },
  {
    title: "Grey Structure Construction",
    description:
      "Strong grey structure construction for homes and commercial buildings, including foundation, brickwork, RCC slab, plaster, plumbing lines, electrical conduits, water tanks, and boundary walls.",
    bestFor:
      "Clients who want the main structure completed before finishing work.",
    href: "/services/grey-structure-construction/",
    ctaLabel: "View Grey Structure Construction",
    icon: Building2,
    image: "/home/services/grey-structure.jpg",
    imageAlt:
      "Grey structure construction work for a residential building in Pakistan",
  },
  {
    title: "New Home Construction",
    description:
      "Professional new home construction services for clients building a house from the ground up. We help with planning, design, structure, finishing, and complete handover.",
    bestFor: "5 Marla, 10 Marla, 1 Kanal, and custom-size homes.",
    href: "/services/new-home-construction/",
    ctaLabel: "View New Home Construction",
    icon: Home,
    image: "/home/services/new-home.jpg",
    imageAlt: "Modern new home construction project in Pakistan",
  },
];

export const designServices: ServiceCardData[] = [
  {
    title: "Architectural Design Services",
    description:
      "We create practical and well-planned building designs according to your plot size, lifestyle, budget, and construction goals. Our services include layouts, floor plans, working drawings, and space planning.",
    href: "/services/architectural-design/",
    ctaLabel: "View Architectural Design Services",
    icon: PencilRuler,
    image: "/home/services/architecture.jpg",
    imageAlt: "Architectural plans and design work for a construction project",
  },
  {
    title: "3D Design & Front Elevation",
    description:
      "Visualize your project before construction with 3D views, front elevation design, exterior elevation design, and material concepts.",
    href: "/services/3d-elevation-design/",
    ctaLabel: "View 3D Elevation Design",
    icon: Building2,
    image: "/home/services/hero.jpg",
    imageAlt: "Modern house front elevation design concept",
  },
  {
    title: "Interior Design & Finishing",
    description:
      "We design and finish interiors for homes, offices, shops, and commercial spaces, including ceilings, lighting, wardrobes, media walls, kitchens, bathrooms, flooring, and wall finishes.",
    href: "/services/interior-design/",
    ctaLabel: "View Interior Design Services",
    icon: Sofa,
    image: "/home/services/interior.jpg",
    imageAlt: "Premium interior design and finishing for a modern living space",
  },
];

export const renovationServices: ServiceCardData[] = [
  {
    title: "Renovation Services",
    description:
      "Upgrade your home, office, shop, kitchen, bathroom, or commercial space with professional renovation services. We handle repairs, remodeling, flooring, painting, plumbing, ceiling work, and interior upgrades.",
    href: "/services/renovation-remodeling/",
    ctaLabel: "View Renovation Services",
    icon: Hammer,
    image: "/home/services/renovation.jpg",
    imageAlt: "Professional home renovation and remodeling work",
  },
  {
    title: "Home Extension / Addition",
    description:
      "Expand your living space with a carefully planned home extension or addition that integrates with the layout and structure of your existing property.",
    href: "/services/home-extension/",
    ctaLabel: "View Home Extension Services",
    icon: Home,
    image: "/home/about.jpg",
    imageAlt: "Residential construction work for a home extension project",
  },
];

export const finishingServices: ServiceCardData[] = [
  {
    title: "Plumbing Services",
    description:
      "Complete plumbing work for water supply, drainage, bathrooms, kitchens, sanitary fittings, water tanks, and leakage repair.",
    href: "/services/plumbing-sanitary/",
    ctaLabel: "View Plumbing Services",
    icon: Droplets,
  },
  {
    title: "Painting Services",
    description:
      "Interior and exterior painting, wall putty, primer, texture paint, ceiling paint, repainting, and commercial painting.",
    href: "/services/painting/",
    ctaLabel: "View Painting Services",
    icon: Paintbrush,
  },
  {
    title: "Flooring Services",
    description:
      "Tile, marble, wooden, vinyl, laminate, epoxy flooring, floor repair, and flooring installation.",
    href: "/services/flooring-tiling/",
    ctaLabel: "View Flooring Services",
    icon: LayoutGrid,
  },
  {
    title: "Woodwork & False Ceiling",
    description:
      "Kitchen cabinets, wardrobes, doors, frames, TV media walls, partitions, wall panels, and ceiling designs.",
    href: "/services/false-ceiling-woodwork/",
    ctaLabel: "View Woodwork Services",
    icon: Layers,
  },
  {
    title: "Solar Panels Installation",
    description:
      "Solar panel setup, inverter installation, wiring, mounting, battery setup, inspection, and maintenance.",
    href: "/services/solar-panels/",
    ctaLabel: "View Solar Installation Services",
    icon: Sun,
  },
  {
    title: "CCTV Installation Services",
    description:
      "Home, office, shop, and commercial CCTV installation with DVR/NVR setup, mobile viewing, and maintenance support.",
    href: "/services/smart-home-cctv/",
    ctaLabel: "View CCTV Installation Services",
    icon: Video,
  },
];

export const servicesFaqs: FaqItem[] = [
  {
    question: "What construction services do you provide in Pakistan?",
    answer:
      "We provide complete construction services for residential and commercial projects, including turnkey construction, grey structure, new home construction, renovation, architectural design, interior finishing, plumbing, painting, flooring, solar panels, and CCTV installation.",
  },
  {
    question: "Do you provide complete turnkey construction?",
    answer:
      "Yes. Our turnkey construction service covers design, grey structure, finishing, interiors, plumbing, painting, flooring, woodwork, installations, and final handover through one experienced team.",
  },
  {
    question: "What is included in grey structure construction?",
    answer:
      "Grey structure construction includes foundation, brickwork, RCC slab, plaster, plumbing lines, electrical conduits, water tanks, and boundary walls.",
  },
  {
    question: "Can you build and finish a new home from the ground up?",
    answer:
      "Yes. We help with planning, design, structure, finishing, and complete handover for 5 Marla, 10 Marla, 1 Kanal, and custom-size homes.",
  },
  {
    question: "Can I hire Miraj Builders for an individual finishing service?",
    answer:
      "Yes. Plumbing, painting, flooring, woodwork, false ceiling, solar panel installation, and CCTV installation are available for new construction, renovation, and maintenance projects.",
  },
  {
    question: "How can I get a construction estimate?",
    answer:
      "Contact our team to discuss your plot, project type, location, required services, and budget. We will guide you on the right service and the next steps for a clear project estimate.",
  },
];
