import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import NewHomeConstructionSections from "@/components/services/new-home/NewHomeConstructionSections";
import {
  newHomeIncluded,
  newHomeSeo,
  relatedServices,
} from "@/components/services/new-home/newHomeContent";

export const metadata: Metadata = {
  title: { absolute: newHomeSeo.title },
  description: newHomeSeo.description,
  alternates: { canonical: newHomeSeo.canonical },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: newHomeSeo.title,
    description: newHomeSeo.description,
    url: newHomeSeo.canonical,
    images: [
      {
        url: "/home/services/new-home.jpg",
        alt: "New home construction services by Miraj Builders in Pakistan",
      },
    ],
  },
};

const newHomeServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "New Home Construction Services",
  serviceType: "New Home Construction",
  description: newHomeSeo.description,
  url: `https://mirajbuilders.com${newHomeSeo.canonical}`,
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
    name: "New Home Construction Scope",
    itemListElement: newHomeIncluded.map((item, index) => ({
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
      name: "New Home Construction",
      item: "https://mirajbuilders.com/services/new-home-construction/",
    },
  ],
};

const relatedServicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Related New Home Construction Services",
  itemListElement: relatedServices.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: service.title,
    url: `https://mirajbuilders.com${service.href}`,
  })),
};

export default function NewHomeConstructionPage() {
  return (
    <>
      {[newHomeServiceJsonLd, breadcrumbJsonLd, relatedServicesJsonLd].map(
        (schema, index) => (
          <script
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ),
      )}
      <NewHomeConstructionSections />
    </>
  );
}
