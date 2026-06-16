import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import HomeHero from "@/components/home/HomeHero";
import ServicesOverview from "@/components/home/ServicesOverview";
import FinishingStrip from "@/components/home/FinishingStrip";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import AreasWeServe from "@/components/home/AreasWeServe";
import FaqAccordion from "@/components/home/FaqAccordion";
import HomeCTA from "@/components/home/HomeCTA";

export const metadata: Metadata = {
  title: {
    absolute:
      "Construction Company in Pakistan | Turnkey & Grey Structure Services",
  },
  description:
    "Professional construction company in Pakistan providing turnkey construction, grey structure, new home construction, renovation, architectural design, interior finishing, plumbing, painting, flooring, solar and CCTV installation services.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title:
      "Construction Company in Pakistan | Turnkey & Grey Structure Services",
    description:
      "Complete turnkey and grey structure construction services in Pakistan — from architectural design to finishing, interiors, and final handover.",
  },
};

// Update the URL/logo once a custom domain is live (placeholder: current Vercel URL).
const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: SITE.name,
  url: "https://miraj-builders.vercel.app",
  logo: "https://miraj-builders.vercel.app/brand/logo-transparent.png",
  description:
    "Professional turnkey and grey structure construction company in Pakistan offering design, construction, renovation, interior finishing, and installation services.",
  areaServed: [
    "Lahore",
    "Islamabad",
    "Multan",
    "Faisalabad",
    "Rawalpindi",
    "Pakistan",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <HomeHero />
      <ServicesOverview />
      <FinishingStrip />
      <ProcessTimeline />
      <WhyChooseUs />
      <AreasWeServe />
      <FaqAccordion />
      <HomeCTA />
    </>
  );
}
