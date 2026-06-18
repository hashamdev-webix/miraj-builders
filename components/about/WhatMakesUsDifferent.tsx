import {
  Users,
  Building,
  Receipt,
  Eye,
  Compass,
} from "lucide-react";
import SectionHeader from "../home/SectionHeader";

const differentiators = [
  {
    icon: Users,
    title: "One Team from Design to Handover",
    text: "We manage the complete project under one roof, including architectural design, grey structure, finishing, interiors, plumbing, painting, flooring, solar, CCTV, and maintenance services.",
  },
  {
    icon: Building,
    title: "Turnkey Construction Focus",
    text: "Our main strength is complete turnkey construction, where clients get planning, execution, finishing, installation, and final delivery through one managed process.",
  },
  {
    icon: Receipt,
    title: "Clear BOQ & Cost Planning",
    text: "We help clients understand the project scope, material options, labor requirements, and estimated cost before work begins.",
  },
  {
    icon: Eye,
    title: "Site Supervision & Quality Control",
    text: "Every project needs proper supervision. Our team monitors important construction stages to maintain quality, reduce mistakes, and keep the work aligned with the approved plan.",
  },
  {
    icon: Compass,
    title: "Practical Design & Build Solutions",
    text: "We design and build according to real needs, plot size, budget, lifestyle, and long-term usability, not just appearance.",
  },
];

export default function WhatMakesUsDifferent() {
  return (
    <section className="bg-surface-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Our Difference"
          title="What Makes Us Different"
        />

        <p className="mx-auto mt-6 max-w-3xl text-center font-body text-base leading-relaxed text-ink-500">
          We don&apos;t just build structures — we deliver a complete,
          professionally managed construction experience that clients can rely
          on from start to finish.
        </p>

        {/* Feature cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.slice(0, 3).map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-card border border-ink-300/20 bg-white p-6 transition-all hover:-translate-y-1 hover:border-accent-500/40 hover:shadow-card"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-card bg-accent-100 text-accent-600">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-heading text-base font-bold text-brand-900">
                {title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-ink-500">
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom two cards in wider layout */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {differentiators.slice(3).map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="flex gap-5 rounded-card border border-ink-300/20 bg-white p-6 transition-all hover:-translate-y-1 hover:border-accent-500/40 hover:shadow-card"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-card bg-accent-100 text-accent-600">
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-heading text-base font-bold text-brand-900">
                  {title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-ink-500">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
