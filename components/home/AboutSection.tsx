import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SectionHeader from "./SectionHeader";

const highlights = [
  "End-to-end project management — one team, every stage",
  "Quality materials and skilled, supervised labor",
  "Transparent, BOQ-based pricing with no hidden costs",
  "Clear timelines from design to final handover",
];

export default function AboutSection() {
  return (
    <section className="bg-surface-50 py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <div className="relative">
          <div
            className="absolute -left-4 -top-4 hidden h-full w-full rounded-card border-2 border-accent-500/40 lg:block"
            aria-hidden
          />
          <div className="relative aspect-4/3 overflow-hidden rounded-card bg-brand-900 shadow-card">
            <Image
              src="/home/about.jpg"
              alt="Miraj Builders construction team on site"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <SectionHeader
            eyebrow="About Miraj Builders"
            title="A Construction Partner You Can Build On"
            align="left"
          />
          <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-ink-500">
            Miraj Builders is a professional turnkey construction company in
            Pakistan, delivering complete residential and commercial projects —
            from architectural design and grey structure to finishing,
            interiors, and installation. With one experienced team managing
            every stage, we keep your project organized, transparent, and on
            schedule.
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 font-body text-sm text-ink-900"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" />
                {item}
              </li>
            ))}
          </ul>
          <Link
            href="/about/"
            className="mt-8 inline-flex items-center gap-2 rounded-button bg-accent-500 px-6 py-3 font-body text-sm font-semibold text-brand-900 transition-colors hover:bg-accent-600"
          >
            Learn More About Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
