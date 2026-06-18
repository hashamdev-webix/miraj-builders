import { Target, Lightbulb, Handshake } from "lucide-react";
import SectionHeader from "../home/SectionHeader";

const storyPoints = [
  {
    icon: Target,
    title: "The Problem We Saw",
    text: "Many construction projects become difficult because clients have to manage different people for drawings, materials, labor, finishing, and installation. This often leads to delays, unclear costs, quality issues, and communication gaps.",
  },
  {
    icon: Lightbulb,
    title: "Our Solution",
    text: "We provide a complete construction experience where planning, design, structure, finishing, and handover are managed through one professional team. From the first consultation to the final site inspection, our focus is to keep the project clear, controlled, and professionally executed.",
  },
  {
    icon: Handshake,
    title: "Our Goal",
    text: "Our goal is not only to complete buildings, but to build trust through reliable work, transparent estimates, and long-term client relationships.",
  },
];

export default function OurStory() {
  return (
    <section className="bg-surface-100 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Our Story"
          title="Why Miraj Builders Was Created"
        />

        <p className="mx-auto mt-6 max-w-3xl text-center font-body text-base leading-relaxed text-ink-500">
          Our company was created to solve a common problem in the construction
          industry — fragmented project management that causes stress, delays,
          and budget overruns for clients.
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {storyPoints.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group relative rounded-card border border-ink-300/20 bg-white p-8 transition-all hover:-translate-y-1 hover:border-accent-500/40 hover:shadow-card"
            >
              {/* decorative top accent */}
              <span
                className="absolute left-0 top-0 h-1 w-0 rounded-tl-card rounded-tr-card bg-accent-500 transition-all group-hover:w-full"
                aria-hidden
              />
              <span className="flex h-14 w-14 items-center justify-center rounded-card bg-accent-100 text-accent-600">
                <Icon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-bold text-brand-900">
                {title}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-ink-500">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
