import {
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  ClipboardList,
  DraftingCompass,
  FileCheck2,
  FileText,
  Hammer,
  Home,
  ImageIcon,
  KeyRound,
  Layers,
  MessageSquareText,
  Paintbrush,
  ReceiptText,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
  WalletCards,
  Zap,
  Droplets,
} from "lucide-react";
import type { FaqItem } from "@/components/FaqAccordion";
import type { SubServiceTimelineStep } from "@/components/services/sub-service/SubServiceProcessTimeline";

export const newHomeSeo = {
  title: "New Home Construction Services in Pakistan | Custom House Builders",
  description:
    "Build your new home with Miraj Builders. Professional new home construction services in Pakistan with planning, approved drawings, BOQ clarity, quality supervision, milestone tracking, dashboard updates, and final handover.",
  canonical: "/services/new-home-construction/",
};

export const newHomeTrustBadges = [
  { label: "Ground-Up Home Building", icon: Home },
  { label: "Clear BOQ & Timeline", icon: ReceiptText },
  { label: "Dashboard & App Updates", icon: Smartphone },
];

export const newHomeHighlights = [
  {
    title: "Ground-Up Home Building",
    description:
      "We manage new house construction from site planning and foundation to structure, finishing, and handover.",
    icon: Home,
  },
  {
    title: "Clear BOQ & Timeline",
    description:
      "Before work starts, we share the scope of work, estimated cost, payment stages, material details, and project timeline.",
    icon: ReceiptText,
  },
  {
    title: "Dashboard & App Updates",
    description:
      "Clients can track project milestones, site photos, documents, payments, approvals, and manager updates online.",
    icon: Smartphone,
  },
  {
    title: "Flexible Construction Scope",
    description:
      "Choose grey structure, complete home construction, or turnkey construction based on your budget and project goals.",
    icon: ClipboardCheck,
  },
];

export const newHomeIncluded = [
  {
    area: "Consultation & Planning",
    detail: "Project discussion, plot review, budget planning, and timeline guidance",
    icon: Users,
  },
  {
    area: "Drawing Review",
    detail:
      "Layout review, design coordination, approval checks, and construction planning",
    icon: DraftingCompass,
  },
  {
    area: "BOQ & Estimate",
    detail: "Scope of work, material details, cost estimate, and payment stages",
    icon: ReceiptText,
  },
  {
    area: "Foundation Work",
    detail: "Excavation, foundation, steel work, concrete, and DPC",
    icon: Layers,
  },
  {
    area: "Grey Structure",
    detail: "Columns, beams, RCC, brickwork, slab, roof, and structural supervision",
    icon: Building2,
  },
  {
    area: "Electrical Work",
    detail:
      "Conduit work, wiring points, lighting points, DB setup, fixtures, and testing",
    icon: Zap,
  },
  {
    area: "Plumbing & Sanitary",
    detail:
      "Water lines, drainage, sanitary points, pipe installation, and pressure testing",
    icon: Droplets,
  },
  {
    area: "Plaster & Surface Work",
    detail: "Internal plaster, external plaster, wall leveling, and preparation",
    icon: Paintbrush,
  },
  {
    area: "Flooring & Tiling",
    detail: "Floor tiles, bathroom tiles, kitchen tiles, and selected flooring work",
    icon: Sparkles,
  },
  {
    area: "Paint & Ceiling",
    detail: "Interior paint, exterior paint, false ceiling, lighting, and finishing",
    icon: Paintbrush,
  },
  {
    area: "Woodwork & Fixtures",
    detail:
      "Doors, windows, wardrobes, kitchen work, and fixtures as per approved scope",
    icon: Hammer,
  },
  {
    area: "Final Handover",
    detail:
      "Final inspection, completion updates, documents, and warranty details where applicable",
    icon: FileCheck2,
  },
];

export const plotSizeGuides = [
  {
    title: "5 Marla House Construction",
    description:
      "A 5 Marla house requires smart planning, space optimization, proper structure, and careful finishing decisions. This option is suitable for small families, rental homes, and compact residential projects.",
    icon: Home,
  },
  {
    title: "10 Marla House Construction",
    description:
      "A 10 Marla house gives more flexibility for bedrooms, living areas, kitchen planning, parking, terrace, and better interior flow. It is one of the most common residential construction choices.",
    icon: Building2,
  },
  {
    title: "1 Kanal House Construction",
    description:
      "A 1 Kanal house usually includes larger covered area, more design detail, stronger elevation planning, premium finishing options, and a more detailed construction timeline.",
    icon: KeyRound,
  },
  {
    title: "Larger Residential Projects",
    description:
      "For larger homes, farmhouses, villas, or custom residential projects, we prepare a detailed scope, BOQ, timeline, and milestone plan according to the approved design and client requirements.",
    icon: Sparkles,
  },
];

export const newHomeProcessSteps: SubServiceTimelineStep[] = [
  {
    title: "Inquiry & Booking",
    description:
      "You share your project details through our website, WhatsApp, or booking form. A booking reference is created so your inquiry can be tracked properly.",
    icon: ClipboardList,
  },
  {
    title: "Consultation & Site Review",
    description:
      "Our team reviews your plot size, location, design needs, construction goals, budget range, and expected timeline. We can arrange an on-site visit or video consultation depending on your preference.",
    icon: Home,
  },
  {
    title: "Drawings, Scope & BOQ",
    description:
      "Before work starts, we review the drawings, prepare the scope of work, and share a BOQ or cost estimate. This helps clients understand what is included, what is excluded, and how payment stages will work.",
    icon: ReceiptText,
  },
  {
    title: "Design Approval",
    description:
      "For new home construction, design approval is an important step. Layouts, drawings, 3D renders, elevation plans, or finishing ideas are reviewed and approved before execution begins.",
    icon: DraftingCompass,
  },
  {
    title: "Contract & Project Start",
    description:
      "Once the proposal, BOQ, payment terms, and design requirements are approved, the contract is signed and the project officially starts.",
    icon: FileText,
  },
  {
    title: "Foundation & Grey Structure",
    description:
      "The project begins with foundation, DPC, RCC, columns, beams, slab, brickwork, roof slab, and other structural work. These stages are supervised carefully because they create the strength of the home.",
    icon: Building2,
  },
  {
    title: "Electrical, Plumbing & Finishing",
    description:
      "After the structure is completed, electrical, plumbing, plaster, flooring, tiling, ceiling, paint, woodwork, fixtures, and finishing work are completed according to the approved scope.",
    icon: Hammer,
  },
  {
    title: "Final Inspection & Handover",
    description:
      "Before handover, our team checks the completed work, reviews pending items, shares documents, and completes the final delivery process.",
    icon: FileCheck2,
  },
];

export const dashboardFeatures = [
  { title: "Current project status", icon: ClipboardCheck },
  { title: "Completed milestones", icon: BadgeCheck },
  { title: "Upcoming milestones", icon: Sparkles },
  { title: "Site progress photos", icon: ImageIcon },
  { title: "Design approval status", icon: DraftingCompass },
  { title: "BOQ and documents", icon: FileText },
  { title: "Payment updates", icon: WalletCards },
  { title: "Manager notes", icon: MessageSquareText },
  { title: "Inspection updates", icon: ShieldCheck },
  { title: "Handover details", icon: FileCheck2 },
];

export const constructionMilestones = [
  {
    stage: "Planning & Approval",
    work: "Consultation, drawings, BOQ, timeline, and design approval",
    icon: DraftingCompass,
  },
  {
    stage: "Foundation & DPC",
    work: "Site preparation, excavation, foundation, steel, concrete, and DPC",
    icon: Layers,
  },
  {
    stage: "Grey Structure",
    work: "Columns, beams, slab, roof, brickwork, and RCC work",
    icon: Building2,
  },
  {
    stage: "Plaster & Surface Preparation",
    work: "Internal plaster, external plaster, wall leveling, and preparation",
    icon: Paintbrush,
  },
  {
    stage: "Electrical & Plumbing",
    work: "Conduit, wiring, pipes, drainage, fixture points, and testing",
    icon: Zap,
  },
  {
    stage: "Flooring & Tiling",
    work: "Floor tiles, bathroom tiles, kitchen tiles, and flooring installation",
    icon: Sparkles,
  },
  {
    stage: "Paint, Ceiling & Finishing",
    work: "Paint, ceiling, lighting, woodwork, doors, windows, and fixtures",
    icon: Hammer,
  },
  {
    stage: "Final Handover",
    work: "Inspection, completion updates, documents, and warranty details",
    icon: FileCheck2,
  },
];

export const costFactors = [
  "Plot size and covered area",
  "Soil condition and foundation requirements",
  "Grey structure material quality",
  "Cement, steel, bricks, sand, and crush rates",
  "Electrical and plumbing scope",
  "Flooring and tile selection",
  "Kitchen and bathroom fittings",
  "Ceiling and lighting design",
  "Woodwork and doors",
  "Exterior elevation",
  "Labour and timeline",
  "Finishing level",
];

export const relatedServices = [
  { title: "Turnkey Construction", href: "/services/turnkey-construction/" },
  {
    title: "Grey Structure Construction",
    href: "/services/grey-structure-construction/",
  },
  { title: "Construction Rates", href: "/construction-rates/" },
  {
    title: "Architectural Design & 3D",
    href: "/services/architectural-design/",
  },
  { title: "Interior Design & Finishing", href: "/services/interior-design/" },
  { title: "Electrical Works", href: "/services/electrical-works/" },
  { title: "Plumbing & Sanitary", href: "/services/plumbing-sanitary/" },
  { title: "Painting Services", href: "/services/painting/" },
  { title: "Exterior Elevation", href: "/services/exterior-elevation/" },
];

export const newHomeFaqs: FaqItem[] = [
  {
    question: "What does new home construction include?",
    answer:
      "New home construction can include planning, drawings, BOQ, foundation, grey structure, electrical work, plumbing, plaster, flooring, paint, ceiling, finishing, inspection, and handover depending on the approved scope.",
  },
  {
    question: "Do I need approved drawings before construction starts?",
    answer:
      "Yes, drawings and design requirements should be reviewed and approved before construction starts to avoid confusion and changes during execution.",
  },
  {
    question: "Can overseas clients track home construction online?",
    answer:
      "Yes, overseas clients can track project status, milestone updates, site photos, documents, payment progress, design approvals, and manager notes through the dashboard and mobile app.",
  },
  {
    question: "How is new home construction cost calculated?",
    answer:
      "Cost is calculated based on covered area, plot size, material quality, structural design, labour rate, finishing level, location, and approved scope of work.",
  },
  {
    question: "Can I choose my own materials?",
    answer:
      "Yes, material selection can be discussed during the BOQ and proposal stage. Final material quality depends on the approved scope and package.",
  },
];

export const whyChooseCopy =
  "We provide new home construction with a complete and professionally managed process that keeps every stage clear, organized, and easier for clients to follow. Our team manages planning, BOQ, design approval, grey structure, electrical, plumbing, finishing, quality checks, and final handover according to the approved scope. Instead of dealing with multiple contractors and daily site confusion, clients get one structured process with regular updates, milestone tracking, site photos, payment status, documents, and manager notes through our dashboard and mobile app. This helps make the complete home-building journey more transparent, comfortable, and reliable from start to finish.";
