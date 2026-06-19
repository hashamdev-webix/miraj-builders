import { ClipboardCheck, Layers3, MessagesSquare } from "lucide-react";
import SectionHeader from "@/components/home/SectionHeader";

const reasons = [
  {
    icon: MessagesSquare,
    title: "Professional Project Guidance",
    text: "Discuss your construction plans with a professional team that understands design, structure, finishing, renovation, and project management.",
  },
  {
    icon: ClipboardCheck,
    title: "Clear Scope & Next Steps",
    text: "Share your requirements so we can guide you toward the right service, expected project scope, and practical next steps.",
  },
  {
    icon: Layers3,
    title: "One Team for Complete Work",
    text: "Get coordinated support for turnkey construction, grey structure, new homes, renovation, interiors, finishing, and installations.",
  },
];

export default function WhyContact() {
  return (
    <section className="bg-surface-100 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Plan with Confidence"
          title="Why Contact Miraj Builders?"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reasons.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-card border border-ink-300/20 bg-white p-7 transition-all hover:-translate-y-1 hover:border-accent-500/40 hover:shadow-card"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-card bg-accent-100 text-accent-600">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mt-5 font-heading text-lg font-bold text-brand-900">
                {title}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-ink-500">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
