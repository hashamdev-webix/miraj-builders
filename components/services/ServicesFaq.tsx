import FaqAccordion from "@/components/FaqAccordion";
import { servicesFaqs } from "./serviceContent";

export default function ServicesFaq() {
  return (
    <FaqAccordion
      faqs={servicesFaqs}
      eyebrow="Services FAQs"
      title="Frequently Asked Questions About Our Services"
      sectionClassName="bg-surface-100"
    />
  );
}
