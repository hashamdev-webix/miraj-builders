"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeader from "@/components/home/SectionHeader";

export type FaqItem = {
  question: string;
  answer: string;
};

const defaultFaqs: FaqItem[] = [
  {
    question: "Do you provide complete turnkey construction?",
    answer:
      "Yes, we provide complete turnkey construction from design and grey structure to finishing, interiors, installation work, and final handover.",
  },
  {
    question: "What is included in grey structure construction?",
    answer:
      "Grey structure usually includes foundation, brickwork, RCC slab, plaster, plumbing lines, electrical conduits, water tanks, and boundary walls.",
  },
  {
    question: "Can you help with building a new house?",
    answer:
      "Yes, we provide new home construction services, including design, cost planning, grey structure, finishing, and final handover.",
  },
  {
    question: "Do you provide renovation services?",
    answer:
      "Yes, we provide renovation services for homes, offices, kitchens, bathrooms, shops, flooring, painting, plumbing, and interior remodeling.",
  },
  {
    question: "Can I get a construction cost estimate?",
    answer:
      "Yes, you can request a BOQ-based estimate according to your plot size, design, location, material selection, and required services.",
  },
  {
    question:
      "Do you provide plumbing, painting, flooring, solar, and CCTV separately?",
    answer:
      "Yes, these services are available as part of complete construction projects or as separate finishing and installation services.",
  },
];

type FaqAccordionProps = {
  faqs?: FaqItem[];
  eyebrow?: string;
  title?: string;
  sectionClassName?: string;
};

export default function FaqAccordion({
  faqs = defaultFaqs,
  eyebrow = "FAQs",
  title = "Frequently Asked Questions",
  sectionClassName = "bg-surface-50",
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <section className={`${sectionClassName} py-16 lg:py-24`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeader eyebrow={eyebrow} title={title} />

        <div className="mt-10 flex flex-col gap-3">
          {faqs.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;

            return (
              <div
                key={question}
                className="overflow-hidden rounded-card border border-ink-300/20 bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-heading text-base font-semibold text-brand-900"
                >
                  {question}
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-accent-500 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  id={panelId}
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 font-body text-sm leading-relaxed text-ink-500">
                      {answer}
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
