import {
  BadgeCheck,
  Building2,
  ClipboardCheck,
  ClipboardList,
  DraftingCompass,
  FileCheck2,
  FileText,
  Hammer,
  Handshake,
  Home,
  ImageIcon,
  KeyRound,
  Landmark,
  Layers,
  MessageSquareText,
  Paintbrush,
  ReceiptText,
  ShieldCheck,
  Smartphone,
  Sparkles,
  WalletCards,
  Zap,
  Droplets,
} from "lucide-react";
import type { FaqItem } from "@/components/FaqAccordion";
import type { SubServiceTimelineStep } from "@/components/services/sub-service/SubServiceProcessTimeline";

export const turnkeySeo = {
  title: "Turnkey Construction Services in Pakistan | Design to Handover",
  description:
    "Get professionally managed turnkey construction services from design and grey structure to finishing and final handover. Track progress through dashboard, app updates, milestone photos, and clear project reporting.",
  canonical: "/services/turnkey-construction/",
};

export const turnkeyTrustBadges = [
  { label: "Design to Handover", icon: KeyRound },
  { label: "Milestone-Based Updates", icon: ClipboardCheck },
  { label: "Dashboard & App Tracking", icon: Smartphone },
];

export const turnkeyBenefits = [
  {
    title: "One Team",
    description:
      "Design, construction, finishing, and handover managed under one process.",
    icon: Handshake,
  },
  {
    title: "Clear BOQ",
    description:
      "Scope, cost details, payment stages, and timeline are shared before work starts.",
    icon: ReceiptText,
  },
  {
    title: "Dashboard Updates",
    description:
      "Clients can track progress, photos, documents, payments, and manager updates.",
    icon: Smartphone,
  },
  {
    title: "Final Handover",
    description:
      "Inspection, documentation, completion updates, and warranty details where applicable.",
    icon: BadgeCheck,
  },
];

export const turnkeyIncluded = [
  {
    area: "Design & Planning",
    detail: "Layout, drawings, 3D design, BOQ, scope, and timeline",
    icon: DraftingCompass,
  },
  {
    area: "Grey Structure",
    detail: "Foundation, DPC, columns, beams, brickwork, RCC, roof slab",
    icon: Building2,
  },
  {
    area: "Electrical Work",
    detail: "Conduit, wiring, lighting points, DB setup, fixtures, testing",
    icon: Zap,
  },
  {
    area: "Plumbing & Sanitary",
    detail: "Water lines, drainage, sanitary points, fixtures, pressure testing",
    icon: Droplets,
  },
  {
    area: "Flooring & Tiling",
    detail: "Floor tiles, bathroom tiles, kitchen tiles, wood or other flooring",
    icon: Layers,
  },
  {
    area: "Paint & Ceiling",
    detail: "Interior paint, exterior paint, false ceiling, lighting, finishing",
    icon: Paintbrush,
  },
  {
    area: "Interior Finishing",
    detail: "Doors, windows, woodwork, fixtures, and final details",
    icon: Sparkles,
  },
  {
    area: "Handover",
    detail: "Final inspection, documents, warranty details, and project delivery",
    icon: FileCheck2,
  },
];

export const turnkeyProcessSteps: SubServiceTimelineStep[] = [
  {
    title: "Inquiry & Booking",
    description:
      "Share your project details through our website, WhatsApp, or booking form.",
    icon: ClipboardList,
  },
  {
    title: "Consultation & Site Review",
    description:
      "Our team reviews your requirements and schedules a site visit or video consultation.",
    icon: Home,
  },
  {
    title: "Proposal & BOQ",
    description:
      "We prepare a clear proposal with scope, estimated cost, timeline, and payment stages.",
    icon: ReceiptText,
  },
  {
    title: "Design Approval",
    description:
      "Drawings, layouts, or 3D renders are shared for approval before work starts.",
    icon: DraftingCompass,
  },
  {
    title: "Contract & Project Start",
    description:
      "Once the proposal, BOQ, payment terms, and design are approved, the project begins.",
    icon: FileText,
  },
  {
    title: "Construction Milestones",
    description:
      "The project moves through foundation, grey structure, roof slab, plaster, MEP, flooring, paint, ceiling, and finishing.",
    icon: Hammer,
  },
  {
    title: "Dashboard & App Updates",
    description:
      "Clients can view progress photos, documents, payment status, manager notes, and milestone updates.",
    icon: Smartphone,
  },
  {
    title: "Final Handover",
    description:
      "After inspection and quality checks, the project is handed over with documents and warranty details where applicable.",
    icon: KeyRound,
  },
];

export const dashboardFeatures = [
  { title: "Current project status", icon: ClipboardCheck },
  { title: "Completed milestones", icon: BadgeCheck },
  { title: "Upcoming milestones", icon: Landmark },
  { title: "Site progress photos", icon: ImageIcon },
  { title: "Design approval status", icon: DraftingCompass },
  { title: "Proposal and contract documents", icon: FileText },
  { title: "Payment updates", icon: WalletCards },
  { title: "Manager notes", icon: MessageSquareText },
  { title: "Handover details", icon: ShieldCheck },
];

export const costFactors = [
  "Covered area",
  "Grey structure requirements",
  "Material quality",
  "Flooring and tile selection",
  "Kitchen and bathroom fittings",
  "Ceiling and lighting design",
  "Woodwork and doors",
  "Exterior elevation",
  "Labor and timeline",
  "Finishing level",
];

export const relatedServices = [
  { title: "New Home Construction", href: "/services/new-home-construction/" },
  {
    title: "Grey Structure Construction",
    href: "/services/grey-structure-construction/",
  },
  { title: "Interior Design & Finishing", href: "/services/interior-design/" },
  { title: "Architectural Design & 3D", href: "/services/architectural-design/" },
  { title: "Electrical Works", href: "/services/electrical-works/" },
  { title: "Plumbing & Sanitary", href: "/services/plumbing-sanitary/" },
  { title: "Painting Services", href: "/services/painting/" },
  { title: "Construction Rates", href: "/construction-rates/" },
];

export const turnkeyFaqs: FaqItem[] = [
  {
    question: "What does turnkey construction mean?",
    answer:
      "Turnkey construction means one company manages the complete project from design and planning to construction, finishing, inspection, and final handover.",
  },
  {
    question: "Does turnkey construction include grey structure?",
    answer:
      "Yes, turnkey construction usually includes grey structure along with electrical, plumbing, flooring, paint, ceiling, finishing, and handover, depending on the approved scope.",
  },
  {
    question: "Is turnkey construction better than hiring separate contractors?",
    answer:
      "Yes. It is better for clients who want one point of contact, better coordination, clear updates, and less daily stress.",
  },
  {
    question: "Can I approve the design before work starts?",
    answer:
      "Yes. Design approval is completed before execution. Clients can approve drawings, layouts, or 3D renders, or request revisions.",
  },
  {
    question: "How will I get project updates?",
    answer:
      "You can receive updates through WhatsApp, the client dashboard, and the mobile app, including site photos, milestone progress, documents, payment status, and manager notes.",
  },
  {
    question: "How is turnkey construction cost calculated?",
    answer:
      "Cost depends on covered area, material quality, design, finishing level, labor, timeline, and project scope. A proposal and BOQ are shared before work starts.",
  },
];
