import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import SectionHeader from "../home/SectionHeader";

const highlights = [
  "Complete start-to-finish building solutions under one team",
  "Homes, villas, farmhouses, apartments, offices, shops & commercial buildings",
  "Practical solutions based on project size, budget & client requirements",
  "Clear planning, supervision, quality control & communication at every stage",
];

export default function WhoWeAre() {
  return (
    <section className="bg-surface-50 py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        {/* LEFT — image */}
        <div className="relative">
          <div
            className="absolute -left-4 -top-4 hidden h-full w-full rounded-card border-2 border-accent-500/40 lg:block"
            aria-hidden
          />
          <div className="relative aspect-4/3 overflow-hidden rounded-card bg-brand-900 shadow-card">
            <Image
              src="/about/story.png"
              alt="Miraj Builders team discussing project blueprints"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* RIGHT — content */}
        <div>
          <SectionHeader
            eyebrow="Who We Are"
            title="A Construction & Project Management Team"
            align="left"
          />

          <div className="mt-6 max-w-xl space-y-4">
            <p className="font-body text-base leading-relaxed text-ink-500">
              We are a construction and project management team focused on
              complete start-to-finish building solutions. Instead of making
              clients deal with separate contractors for design, grey structure,
              finishing, interiors, plumbing, painting, flooring, and
              installation work, we bring everything together under one managed
              process.
            </p>
            <p className="font-body text-base leading-relaxed text-ink-500">
              Our work is built around planning, supervision, quality control,
              and clear communication. Whether you are building a new house,
              starting a grey structure project, renovating an old property, or
              planning a full turnkey construction project, our team helps you
              move from idea to execution with a clear path.
            </p>
          </div>

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
        </div>
      </div>
    </section>
  );
}
