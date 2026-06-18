import SectionHeader from "@/components/home/SectionHeader";
import ServiceCard from "./ServiceCard";
import { finishingServices } from "./serviceContent";

export default function FinishingInstallationServices() {
  return (
    <section className="bg-surface-100 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Individual Trade Services"
          title="Finishing & Installation Services"
        />
        <p className="mx-auto mt-6 max-w-3xl text-center font-body text-base leading-relaxed text-ink-500">
          We also provide individual finishing and installation services for
          new construction, renovation, and maintenance projects.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {finishingServices.map((service) => (
            <ServiceCard key={service.title} {...service} variant="compact" />
          ))}
        </div>
      </div>
    </section>
  );
}
