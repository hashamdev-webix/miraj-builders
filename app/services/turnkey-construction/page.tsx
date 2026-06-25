import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import TurnkeyConstructionSections from "@/components/services/turnkey/TurnkeyConstructionSections";
import {
  relatedServices,
  turnkeyIncluded,
  turnkeySeo,
} from "@/components/services/turnkey/turnkeyContent";

export const metadata: Metadata = {
  title: { absolute: turnkeySeo.title },
  description: turnkeySeo.description,
  alternates: { canonical: turnkeySeo.canonical },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: turnkeySeo.title,
    description: turnkeySeo.description,
    url: turnkeySeo.canonical,
    images: [
      {
        url: "/home/services/turnkey.jpg",
        alt: "Turnkey construction services by Miraj Builders in Pakistan",
      },
    ],
  },
};

const turnkeyServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Turnkey Construction Services",
  serviceType: "Turnkey Construction",
  description: turnkeySeo.description,
  url: `https://mirajbuilders.com${turnkeySeo.canonical}`,
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
    name: "Turnkey Construction Scope",
    itemListElement: turnkeyIncluded.map((item, index) => ({
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
      name: "Turnkey Construction",
      item: "https://mirajbuilders.com/services/turnkey-construction/",
    },
  ],
};

const relatedServicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Related Turnkey Construction Services",
  itemListElement: relatedServices.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: service.title,
    url: `https://mirajbuilders.com${service.href}`,
  })),
};

export default function TurnkeyConstructionPage() {
  return (
    <>
      {[turnkeyServiceJsonLd, breadcrumbJsonLd, relatedServicesJsonLd].map(
        (schema, index) => (
          <script
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ),
      )}
      <TurnkeyConstructionSections />
    </>
  );
}
