"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeader from "./SectionHeader";

const faqs = [
  {
    q: "Do you provide complete turnkey construction?",
    a: "Yes, we provide complete turnkey construction from design and grey structure to finishing, interiors, installation work, and final handover.",
  },
  {
    q: "What is included in grey structure construction?",
    a: "Grey structure usually includes foundation, brickwork, RCC slab, plaster, plumbing lines, electrical conduits, water tanks, and boundary walls.",
  },
  {
    q: "Can you help with building a new house?",
    a: "Yes, we provide new home construction services, including design, cost planning, grey structure, finishing, and final handover.",
  },
  {
    q: "Do you provide renovation services?",
    a: "Yes, we provide renovation services for homes, offices, kitchens, bathrooms, shops, flooring, painting, plumbing, and interior remodeling.",
  },
  {
    q: "Can I get a construction cost estimate?",
    a: "Yes, you can request a BOQ-based estimate according to your plot size, design, location, material selection, and required services.",
  },
  {
    q: "Do you provide plumbing, painting, flooring, solar, and CCTV separately?",
    a: "Yes, these services are available as part of complete construction projects or as separate finishing and installation services.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-surface-50 py-16 lg:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeader eyebrow="FAQs" title="Frequently Asked Questions" />

        <div className="mt-10 flex flex-col gap-3">
          {faqs.map(({ q, a }, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={q}
                className="overflow-hidden rounded-card border border-ink-300/20 bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-heading text-base font-semibold text-brand-900"
                >
                  {q}
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-accent-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 font-body text-sm leading-relaxed text-ink-500">
                      {a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
