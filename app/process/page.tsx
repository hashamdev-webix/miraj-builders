import type { Metadata } from "next";
import ProcessHero from "@/components/process/ProcessHero";
import ProcessTrustStrip from "@/components/process/ProcessTrustStrip";
import PhaseTimeline from "@/components/process/PhaseTimeline";
import DesignApprovalCallout from "@/components/process/DesignApprovalCallout";
import ServiceTimelines from "@/components/process/ServiceTimelines";
import ProjectTracking from "@/components/process/ProjectTracking";
import PaymentUpdates from "@/components/process/PaymentUpdates";
import WhyProcessWorks from "@/components/process/WhyProcessWorks";
import ProcessCTA from "@/components/process/ProcessCTA";
import {
  constructionSteps,
  preProjectSteps,
  processSchemaSteps,
} from "@/components/process/processContent";
import { SITE } from "@/lib/site";

const pageTitle =
  "Our Construction Process | From Booking to Final Handover";
const pageDescription =
  "Explore the Miraj Builders construction process, from consultation, design approval and contract signing to milestone tracking, payments, project updates and final handover.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: "/process/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: pageTitle,
    description: pageDescription,
    url: "/process/",
    images: [
      {
        url: "/home/hero.jpg",
        alt: "Miraj Builders construction process from planning to handover",
      },
    ],
  },
};

const processJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: pageTitle,
  description: pageDescription,
  url: "https://mirajbuilders.com/process/",
  about: {
    "@type": "Thing",
    name: "Construction project management process",
  },
  mainEntity: {
    "@type": "ItemList",
    name: "Miraj Builders construction process stages",
    numberOfItems: processSchemaSteps.length,
    itemListElement: processSchemaSteps,
  },
};

export default function ProcessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(processJsonLd) }}
      />
      <ProcessHero />
      <ProcessTrustStrip />
      <PhaseTimeline
        phase="Phase 0"
        title="Pre-Project Process"
        subtitle="From Booking to Contract"
        introduction="Before construction starts, we complete booking, review, consultation, proposal, design approval, and contract signing. This helps keep the project clear, approved, and ready for smooth execution."
        steps={preProjectSteps}
      />
      <DesignApprovalCallout />
      <PhaseTimeline
        phase="Phase 1"
        title="Active Construction Timeline"
        subtitle="Turnkey Construction Milestones"
        introduction="After the project starts, work is managed through clear construction milestones. Clients can view each stage in the dashboard and app with updates, photos, and payment status."
        steps={constructionSteps}
        sectionClassName="bg-surface-50"
      />
      <ServiceTimelines />
      <ProjectTracking />
      <PaymentUpdates />
      <WhyProcessWorks />
      <ProcessCTA />
    </>
  );
}
