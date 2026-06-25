import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import GreyStructureSections from "@/components/services/grey-structure/GreyStructureSections";
import {
  greyStructureSeo,
  greyStructureIncluded,
  relatedServices,
} from "@/components/services/grey-structure/greyStructureContent";

export const metadata: Metadata = {
  title: { absolute: greyStructureSeo.title },
  description: greyStructureSeo.description,
  alternates: { canonical: greyStructureSeo.canonical },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: greyStructureSeo.title,
    description: greyStructureSeo.description,
    url: greyStructureSeo.canonical,
    images: [
      {
        url: "/home/services/grey-structure.jpg",
        alt: "Grey structure construction services by Miraj Builders in Pakistan",
      },
    ],
  },
};

const greyStructureServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Grey Structure Construction Services",
  serviceType: "Grey Structure Construction",
  description: greyStructureSeo.description,
  url: `https://mirajbuilders.com${greyStructureSeo.canonical}`,
  provider: {
    "@type": "LocalBusiness",
    name: SITE.name,
    telephone: SITE.phone,
    email: SITE.email,
    address: SITE.address,
  },
  areaServed: {
    "@type": "Country",
    name: "Pakistan",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Grey Structure Construction Scope",
    itemListElement: greyStructureIncluded.map((item, index) => ({
      "@type": "Offer",
      position: index + 1,
      itemOffered: {
        "@type": "Service",
        name: item.area,
        description: item.detail,
      },
    })),
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://mirajbuilders.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://mirajbuilders.com/services/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Grey Structure Construction",
      item: "https://mirajbuilders.com/services/grey-structure-construction/",
    },
  ],
};

const relatedServicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Related Grey Structure Construction Services",
  itemListElement: relatedServices.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: service.title,
    url: `https://mirajbuilders.com${service.href}`,
  })),
};

export default function GreyStructureConstructionPage() {
  return (
    <>
      {[
        greyStructureServiceJsonLd,
        breadcrumbJsonLd,
        relatedServicesJsonLd,
      ].map((schema, index) => (
        <script
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <GreyStructureSections />
    </>
  );
}
