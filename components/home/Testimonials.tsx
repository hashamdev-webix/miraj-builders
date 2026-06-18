import { Star } from "lucide-react";
import SectionHeader from "./SectionHeader";

// TODO: replace with REAL client testimonials before going live.
const testimonials = [
  {
    quote:
      "Miraj Builders handled our entire house from grey structure to finishing. Clear timelines, quality work, and no hidden costs.",
    name: "Ahmed Raza",
    detail: "10 Marla Home, Lahore",
  },
  {
    quote:
      "Professional team and transparent pricing. They kept us updated at every stage through their dashboard.",
    name: "Sana Malik",
    detail: "Home Renovation, Islamabad",
  },
  {
    quote:
      "From design to handover, everything was managed by one team. Highly recommended for turnkey construction.",
    name: "Bilal Hussain",
    detail: "1 Kanal Home, Faisalabad",
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
}

export default function Testimonials() {
  return (
    <section className="bg-surface-100 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Testimonials" title="What Our Clients Say" />
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map(({ quote, name, detail }) => (
            <figure
              key={name}
              className="flex flex-col rounded-card border border-ink-300/20 bg-white p-7 shadow-card"
            >
              <div className="flex gap-1 text-accent-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent-500" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 font-body text-sm leading-relaxed text-ink-900">
                &ldquo;{quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-100 font-heading text-sm font-bold text-accent-600">
                  {getInitials(name)}
                </span>
                <span>
                  <span className="block font-heading text-sm font-bold text-brand-900">
                    {name}
                  </span>
                  <span className="block font-body text-xs text-ink-500">
                    {detail}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
