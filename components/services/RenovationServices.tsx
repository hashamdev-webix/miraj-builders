import SectionHeader from "@/components/home/SectionHeader";
import ServiceCard from "./ServiceCard";
import { renovationServices } from "./serviceContent";

export default function RenovationServices() {
  return (
    <section className="bg-surface-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Upgrade Existing Spaces"
          title="Renovation & Remodeling Services"
        />

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
          {renovationServices.map((service) => (
            <ServiceCard key={service.title} {...service} variant="medium" />
          ))}
        </div>
      </div>
    </section>
  );
}
