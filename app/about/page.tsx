import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import AboutHero from "@/components/about/AboutHero";
import WhoWeAre from "@/components/about/WhoWeAre";
import OurStory from "@/components/about/OurStory";
import WhatMakesUsDifferent from "@/components/about/WhatMakesUsDifferent";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About Us | Turnkey Construction Company in Pakistan",
  description:
    "Learn about our construction company in Pakistan. We provide turnkey construction, grey structure, new home construction, renovation, architectural design, interiors, finishing, installation, and complete project management services.",
  alternates: { canonical: "/about/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: "About Us | Turnkey Construction Company in Pakistan",
    description:
      "Professional turnkey construction company in Pakistan — from architectural design and grey structure to finishing, interiors, and final handover.",
  },
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: `About ${SITE.name}`,
  description:
    "Learn about Miraj Builders — a professional turnkey construction company in Pakistan helping homeowners, investors, and businesses build with confidence.",
  mainEntity: {
    "@type": "GeneralContractor",
    name: SITE.name,
    url: "https://miraj-builders.vercel.app",
    description:
      "Professional turnkey and grey structure construction company in Pakistan offering design, construction, renovation, interior finishing, and installation services.",
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <AboutHero />
      <WhoWeAre />
      <OurStory />
      <WhatMakesUsDifferent />
      <AboutCTA />
    </>
  );
}
