import {
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  ClipboardList,
  FileCheck2,
  FileText,
  Hammer,
  Handshake,
  Home,
  ImageIcon,
  Layers,
  MessageSquareText,
  ReceiptText,
  ShieldCheck,
  Smartphone,
  Sparkles,
  WalletCards,
  Wrench,
} from "lucide-react";
import type { FaqItem } from "@/components/FaqAccordion";
import type { SubServiceTimelineStep } from "@/components/services/sub-service/SubServiceProcessTimeline";

export const greyStructureSeo = {
  title: "Grey Structure Construction in Pakistan | Rates, Scope & BOQ 2026",
  description:
    "Get professionally managed grey structure construction services with BOQ clarity, estimated rates, foundation, DPC, RCC, brickwork, roof slab, dashboard updates, and milestone tracking.",
  canonical: "/services/grey-structure-construction/",
};

export const greyStructureTrustBadges = [
  { label: "Strong Structural Work", icon: Building2 },
  { label: "Clear BOQ & Scope", icon: ReceiptText },
  { label: "Dashboard Updates", icon: Smartphone },
];

export const greyStructureHighlights = [
  {
    title: "Strong Structural Work",
    description:
      "Foundation, RCC, columns, beams, slab, roof, and brickwork are managed with proper planning and supervision.",
    icon: Building2,
  },
  {
    title: "Clear BOQ & Scope",
    description:
      "We share a clear scope of work, material details, payment stages, and project timeline before work starts.",
    icon: ReceiptText,
  },
  {
    title: "Dashboard Updates",
    description:
      "Clients can track milestones, site photos, documents, payment updates, and work progress in one place.",
    icon: Smartphone,
  },
  {
    title: "Ready for Finishing",
    description:
      "After grey structure completion, your project is ready for plumbing, electrical, flooring, paint, ceiling, and finishing work.",
    icon: Sparkles,
  },
];

export const greyStructureIncluded = [
  {
    area: "Site Preparation",
    detail: "Site cleaning, marking, layout, and initial preparation",
    icon: ClipboardList,
  },
  {
    area: "Foundation Work",
    detail:
      "Excavation, foundation, steel work, concrete, and base preparation",
    icon: Layers,
  },
  {
    area: "DPC Work",
    detail: "Damp proof course to help protect the structure from moisture",
    icon: ShieldCheck,
  },
  {
    area: "RCC Structure",
    detail: "Columns, beams, lintels, slab, roof slab, and concrete work",
    icon: Building2,
  },
  {
    area: "Brick Masonry",
    detail: "Walls, partitions, and masonry work according to the plan",
    icon: Hammer,
  },
  {
    area: "Roof Slab",
    detail: "Shuttering, steel fixing, concrete pouring, and curing",
    icon: Home,
  },
  {
    area: "Basic Service Provisions",
    detail:
      "Electrical conduits and plumbing sleeves where required by approved scope",
    icon: Wrench,
  },
  {
    area: "Structural Supervision",
    detail: "Site checks, milestone review, and quality monitoring",
    icon: ClipboardCheck,
  },
  {
    area: "Handover",
    detail: "Grey structure inspection and handover for finishing stage",
    icon: FileCheck2,
  },
];

export const greyStructureProcessSteps: SubServiceTimelineStep[] = [
  {
    title: "Inquiry & Booking",
    description:
      "You share your project details through our website, WhatsApp, or booking form. A booking reference is created for proper tracking.",
    icon: ClipboardList,
  },
  {
    title: "Site Review & Requirement Check",
    description:
      "Our team reviews the plot size, drawings, project type, soil condition, construction scope, and client requirements.",
    icon: Home,
  },
  {
    title: "BOQ & Cost Estimate",
    description:
      "We prepare a clear BOQ and cost estimate based on covered area, material grade, labour, and approved construction scope.",
    icon: ReceiptText,
  },
  {
    title: "Design & Drawing Approval",
    description:
      "Before work starts, drawings and structural requirements are reviewed and approved to avoid confusion during construction.",
    icon: FileText,
  },
  {
    title: "Foundation & DPC",
    description:
      "The project begins with site preparation, excavation, foundation work, steel fixing, concrete work, and DPC.",
    icon: Layers,
  },
  {
    title: "RCC & Brickwork",
    description:
      "Columns, beams, slab, roof, walls, brick masonry, and major structural work are completed with proper supervision.",
    icon: Hammer,
  },
  {
    title: "Basic MEP Provisions",
    description:
      "Electrical conduits, plumbing sleeves, and required rough-in provisions are added according to the approved scope.",
    icon: Wrench,
  },
  {
    title: "Quality Check & Handover",
    description:
      "After inspection, the grey structure is handed over for the next finishing stage or turnkey phase.",
    icon: FileCheck2,
  },
];

export const dashboardFeatures = [
  { title: "Current project status", icon: ClipboardCheck },
  { title: "Completed milestones", icon: BadgeCheck },
  { title: "Upcoming milestones", icon: Sparkles },
  { title: "Foundation and slab updates", icon: Building2 },
  { title: "Site progress photos", icon: ImageIcon },
  { title: "BOQ and documents", icon: FileText },
  { title: "Payment status", icon: WalletCards },
  { title: "Manager notes", icon: MessageSquareText },
  { title: "Inspection updates", icon: ShieldCheck },
  { title: "Handover details", icon: FileCheck2 },
];

export const greyStructureRates = [
  {
    grade: "Standard Grade",
    bestFor: "Basic structural work with standard material quality",
    rate: "PKR 2,600 - 2,800 / sq. ft.",
  },
  {
    grade: "Premium Grade",
    bestFor: "Better material control and improved construction supervision",
    rate: "PKR 2,800 - 3,100 / sq. ft.",
  },
  {
    grade: "A+ Grade",
    bestFor:
      "Higher quality material, stronger supervision, and premium execution",
    rate: "PKR 3,100 - 3,400+ / sq. ft.",
  },
];

export const costFactors = [
  "Covered Area",
  "Material Quality",
  "Soil Condition",
  "Structural Design",
  "Labour & Market Rates",
  "Location",
];

export const notIncluded = [
  "Floor tiles",
  "Wall paint",
  "False ceiling",
  "Woodwork",
  "Doors and wardrobes",
  "Kitchen cabinets",
  "Sanitary fixtures",
  "Electrical fixtures",
  "Lighting fixtures",
  "Interior design",
  "Exterior elevation finishing",
  "Decorative work",
];

export const relatedServices = [
  { title: "Turnkey Construction", href: "/services/turnkey-construction/" },
  { title: "New Home Construction", href: "/services/new-home-construction/" },
  { title: "Construction Rates", href: "/construction-rates/" },
  {
    title: "Architectural Design & 3D",
    href: "/services/architectural-design/",
  },
  { title: "Electrical Works", href: "/services/electrical-works/" },
  { title: "Plumbing & Sanitary", href: "/services/plumbing-sanitary/" },
  { title: "Interior Design & Finishing", href: "/services/interior-design/" },
  { title: "Renovation & Remodeling", href: "/services/renovation/" },
];

export const greyStructureFaqs: FaqItem[] = [
  {
    question: "What is grey structure construction?",
    answer:
      "Grey structure construction is the basic structural stage of a building. It includes foundation, DPC, RCC work, columns, beams, slab, roof, brickwork, and walls before finishing work starts.",
  },
  {
    question: "What is included in grey structure work?",
    answer:
      "Grey structure usually includes site preparation, foundation, DPC, RCC structure, brick masonry, roof slab, and basic service provisions depending on the approved scope.",
  },
  {
    question: "What is not included in grey structure?",
    answer:
      "Grey structure normally does not include tiles, paint, false ceiling, woodwork, sanitary fixtures, lighting fixtures, interior finishing, or decorative work.",
  },
  {
    question: "What is the grey structure construction rate in Pakistan?",
    answer:
      "Grey structure construction cost usually ranges between PKR 2,600 to PKR 3,400+ per square foot depending on material quality, location, covered area, soil condition, and project scope.",
  },
  {
    question: "How much does a 5 Marla grey structure cost?",
    answer:
      "A 5 Marla grey structure may cost around PKR 49.4 lakh to 64.6 lakh based on an estimated covered area of 1,900 sq. ft. and rate range of PKR 2,600 to 3,400 per sq. ft.",
  },
  {
    question: "How much does a 10 Marla grey structure cost?",
    answer:
      "A 10 Marla grey structure may cost around PKR 88.4 lakh to 1.15 crore based on an estimated covered area of 3,400 sq. ft. and rate range of PKR 2,600 to 3,400 per sq. ft.",
  },
  {
    question: "Is grey structure cheaper than turnkey construction?",
    answer:
      "Yes, grey structure is cheaper than turnkey construction because it does not include finishing work such as flooring, paint, ceiling, woodwork, sanitary fixtures, and final interior details.",
  },
  {
    question: "Can I track grey structure progress online?",
    answer:
      "Yes, clients can track project progress, milestone updates, site photos, payment status, documents, and manager notes through the client dashboard and mobile app.",
  },
  {
    question: "Do you provide BOQ before construction starts?",
    answer:
      "Yes, a BOQ and cost estimate are shared before work starts so clients can understand the scope, material details, cost range, and payment stages clearly.",
  },
];
