import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import ContactHero from "@/components/contact/ContactHero";
import ContactDetails from "@/components/contact/ContactDetails";
import WhyContact from "@/components/contact/WhyContact";
import OfficeLocation from "@/components/contact/OfficeLocation";
import ContactCTA from "@/components/contact/ContactCTA";

const pageTitle =
  "Contact Miraj Builders | Construction Estimate & Site Visit";
const pageDescription =
  "Contact Miraj Builders for turnkey construction, grey structure, renovation, architectural design, interiors, finishing, and complete construction project estimates in Pakistan.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: "/contact/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: pageTitle,
    description: pageDescription,
    url: "/contact/",
    images: [
      {
        url: "/about/story.png",
        alt: "Contact Miraj Builders to discuss a construction project",
      },
    ],
  },
};

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: pageTitle,
  description: pageDescription,
  url: "https://mirajbuilders.com/contact/",
  mainEntity: {
    "@type": "GeneralContractor",
    name: SITE.name,
    url: "https://mirajbuilders.com",
    telephone: SITE.phone,
    email: SITE.email,
    areaServed: "Pakistan",
    address: {
      "@type": "PostalAddress",
      addressCountry: "PK",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: SITE.phone,
      email: SITE.email,
      availableLanguage: ["English", "Urdu"],
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
      />
      <ContactHero />
      <ContactDetails />
      <WhyContact />
      <OfficeLocation />
      <ContactCTA />
    </>
  );
}
