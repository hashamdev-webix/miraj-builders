import SectionHeader from "@/components/home/SectionHeader";
import ServiceCard from "./ServiceCard";
import { designServices } from "./serviceContent";

export default function DesignPlanningServices() {
  return (
    <section className="bg-surface-100 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Plan Before You Build"
          title="Design & Planning Services"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {designServices.map((service) => (
            <ServiceCard key={service.title} {...service} variant="medium" />
          ))}
        </div>
      </div>
    </section>
  );
}
