import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import ServicesHero from "@/components/services/ServicesHero";
import CoreServices from "@/components/services/CoreServices";
import DesignPlanningServices from "@/components/services/DesignPlanningServices";
import RenovationServices from "@/components/services/RenovationServices";
import FinishingInstallationServices from "@/components/services/FinishingInstallationServices";
import ProcessTimeline from "@/components/ProcessTimeline";
import ServicesFaq from "@/components/services/ServicesFaq";
import ServicesCTA from "@/components/services/ServicesCTA";
import {
  coreServices,
  designServices,
  finishingServices,
  renovationServices,
} from "@/components/services/serviceContent";

const pageTitle =
  "Construction Services in Pakistan | Turnkey, Grey Structure & Renovation";
const pageDescription =
  "Explore professional construction services in Pakistan, including turnkey construction, grey structure, new home construction, renovation, architectural design, interior finishing, plumbing, painting, flooring, solar and CCTV installation.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: "/services/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: pageTitle,
    description: pageDescription,
    url: "/services/",
    images: [
      {
        url: "/home/services/hero.jpg",
        alt: "Construction services by Miraj Builders in Pakistan",
      },
    ],
  },
};

const allServices = [
  ...coreServices,
  ...designServices,
  ...renovationServices,
  ...finishingServices,
];

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: pageTitle,
  description: pageDescription,
  url: "https://mirajbuilders.com/services/",
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: allServices.length,
    itemListElement: allServices.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.title,
      url: `https://mirajbuilders.com${service.href}`,
    })),
  },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <ServicesHero />
      <CoreServices />
      <DesignPlanningServices />
      <RenovationServices />
      <FinishingInstallationServices />
      <ProcessTimeline eyebrow="How We Work" />
      <ServicesFaq />
      <ServicesCTA />
    </>
  );
}
