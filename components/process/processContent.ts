import {
  BadgeCheck,
  Building2,
  Cable,
  CalendarCheck,
  CalendarDays,
  ClipboardCheck,
  FileCheck2,
  FileText,
  Grid3X3,
  Hammer,
  Handshake,
  HardHat,
  Home,
  KeyRound,
  Layers3,
  LayoutDashboard,
  MapPinned,
  MessageCircle,
  Milestone,
  Paintbrush,
  PenLine,
  PlayCircle,
  Ruler,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
} from "lucide-react";

export const processTrustItems = [
  {
    title: "Booking Reference",
    description:
      "Every project inquiry receives a booking reference for easy tracking.",
    icon: CalendarCheck,
  },
  {
    title: "Dashboard Updates",
    description:
      "Clients can view work progress, photos, payments, and documents in one place.",
    icon: LayoutDashboard,
  },
  {
    title: "Design Approval",
    description:
      "Designs are approved before contract signing and project start.",
    icon: BadgeCheck,
  },
  {
    title: "Milestone Tracking",
    description:
      "Construction progress is updated step by step from foundation to handover.",
    icon: Milestone,
  },
] as const;

export const preProjectSteps = [
  {
    title: "Booking Received",
    description:
      "Your inquiry is received through our website, WhatsApp, or booking form. A booking reference is created so your request can be tracked properly. Example: BK-2026-0041.",
    icon: CalendarCheck,
  },
  {
    title: "Manager Review",
    description:
      "Our manager reviews your project details, service type, basic requirements, photos, and shared information.",
    icon: UserRoundCheck,
  },
  {
    title: "Consultation Confirmed",
    description:
      "After review, your consultation is confirmed and sent through WhatsApp or dashboard notification.",
    icon: MessageCircle,
  },
  {
    title: "Meeting Scheduled",
    description:
      "A site visit or video call is scheduled to discuss your project scope, budget, design needs, and timeline.",
    icon: CalendarDays,
  },
  {
    title: "Project Proposal Sent",
    description:
      "Our team prepares and shares a proposal with cost estimate, work scope, project timeline, and payment details.",
    icon: FileText,
  },
  {
    title: "Design Approval",
    description:
      "For construction, renovation, interior, and turnkey projects, design approval is required before moving forward. Clients can approve designs or request revisions through the dashboard or app.",
    icon: BadgeCheck,
  },
  {
    title: "Contract Signed",
    description:
      "Once the proposal, BOQ, payment terms, and design are approved, the contract is signed.",
    icon: PenLine,
  },
  {
    title: "Project Started",
    description:
      "After contract signing and required mobilization payment, the project officially starts.",
    icon: PlayCircle,
  },
] as const;

export const constructionSteps = [
  {
    title: "Foundation & DPC",
    description:
      "Site preparation, foundation work, DPC, and initial structural base are completed.",
    icon: MapPinned,
  },
  {
    title: "Grey Structure",
    description:
      "Columns, beams, slab, brickwork, and main structural work are completed.",
    icon: Building2,
  },
  {
    title: "Roof Slab",
    description:
      "RCC roof slab work is completed according to the approved structure plan.",
    icon: Layers3,
  },
  {
    title: "Plaster Work",
    description:
      "Internal and external plaster work is completed to prepare the project for finishing.",
    icon: Ruler,
  },
  {
    title: "Electrical & Plumbing",
    description:
      "MEP rough-in work, conduit, wiring, pipes, drainage, and plumbing lines are completed.",
    icon: Cable,
  },
  {
    title: "Flooring & Tiling",
    description:
      "Floor tiles, bathroom tiles, kitchen tiles, and other flooring work are completed.",
    icon: Grid3X3,
  },
  {
    title: "Paint & Ceiling",
    description:
      "Paint, false ceiling, finishing work, fixtures, and final detailing are completed.",
    icon: Paintbrush,
  },
  {
    title: "Handover & Warranty",
    description:
      "Final inspection is completed, documents are shared, and the project is handed over with warranty details where applicable.",
    icon: KeyRound,
  },
] as const;

export const serviceTimelines = [
  {
    title: "Electrical Installation Timeline",
    description:
      "A controlled installation sequence from the first site inspection to tested fixtures and final handover.",
    icon: Cable,
    steps: [
      "Site Inspection",
      "Material Approval",
      "Conduit Layout",
      "Wiring",
      "Fixtures",
      "Testing",
      "Handover",
    ],
  },
  {
    title: "Plumbing Installation Timeline",
    description:
      "A coordinated workflow for pipe routing, drainage, fixture installation, pressure testing, and delivery.",
    icon: Hammer,
    steps: [
      "Site Survey",
      "Pipe Procurement",
      "Rough-In",
      "Drain Lines",
      "Fixture Installation",
      "Pressure Test",
      "Handover",
    ],
  },
  {
    title: "Solar Installation Timeline",
    description:
      "An assessment-led process covering system delivery, mounting, electrical integration, testing, and handover.",
    icon: Sparkles,
    steps: [
      "Site Assessment",
      "Equipment Delivery",
      "Mounting",
      "Panels",
      "Inverter/Wiring",
      "Grid Connection",
      "Testing & Handover",
    ],
  },
] as const;

export const trackingFeatures = [
  { title: "Booking reference", icon: CalendarCheck },
  { title: "Current project status", icon: HardHat },
  { title: "Completed milestones", icon: Milestone },
  { title: "Upcoming milestones", icon: CalendarDays },
  { title: "Site progress photos", icon: Home },
  { title: "Design approval status", icon: BadgeCheck },
  { title: "Proposal and contract documents", icon: FileText },
  { title: "Payment status", icon: ClipboardCheck },
  { title: "Manager updates", icon: MessageCircle },
  { title: "Handover details", icon: FileCheck2 },
] as const;

export const processBenefits = [
  {
    title: "Clear Start",
    description:
      "Every project begins with consultation, review, and proper scope planning.",
    icon: Ruler,
  },
  {
    title: "Approved Designs",
    description:
      "Work starts only after design, proposal, and important details are approved.",
    icon: BadgeCheck,
  },
  {
    title: "Step-by-Step Updates",
    description:
      "Clients can track progress through dashboard, app, WhatsApp, and milestone updates.",
    icon: LayoutDashboard,
  },
  {
    title: "Professional Delivery",
    description:
      "Each project is completed with inspection, documentation, and final handover.",
    icon: Handshake,
  },
] as const;

export const processSchemaSteps = [
  ...preProjectSteps,
  ...constructionSteps,
].map((step, index) => ({
  "@type": "ListItem",
  position: index + 1,
  name: step.title,
  description: step.description,
}));

export type ProcessStep = (typeof preProjectSteps)[number] | (typeof constructionSteps)[number];
