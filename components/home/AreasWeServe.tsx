import { MapPin } from "lucide-react";

const cities = ["Lahore", "Islamabad", "Multan", "Faisalabad", "Rawalpindi"];

export default function AreasWeServe() {
  return (
    <section className="bg-surface-100 py-12">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent-500">
          Areas We Serve
        </span>
        <p className="mx-auto mt-3 max-w-2xl font-body text-sm leading-relaxed text-ink-500">
          We provide construction, renovation, design, finishing, and
          installation services across Pakistan, including Lahore, Islamabad,
          Multan, Faisalabad, Rawalpindi, and nearby areas.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {cities.map((city) => (
            <span
              key={city}
              className="inline-flex items-center gap-1.5 rounded-full border border-accent-500/30 bg-white px-4 py-2 font-body text-sm font-medium text-brand-900"
            >
              <MapPin className="h-4 w-4 text-accent-500" />
              {city}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
