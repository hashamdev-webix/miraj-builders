import SectionHeader from "@/components/home/SectionHeader";
import ServiceCard from "./ServiceCard";
import { coreServices } from "./serviceContent";

export default function CoreServices() {
  return (
    <section className="bg-surface-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Complete Project Solutions"
          title="Core Construction Services"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {coreServices.map((service) => (
            <ServiceCard key={service.title} {...service} variant="featured" />
          ))}
        </div>
      </div>
    </section>
  );
}
