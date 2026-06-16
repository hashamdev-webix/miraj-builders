import Link from "next/link";
import {
  Users,
  ShieldCheck,
  Receipt,
  Clock,
  ArrowRight,
  Building2,
  Award,
  HardHat,
} from "lucide-react";
import SectionHeader from "./SectionHeader";

const features = [
  {
    icon: Users,
    title: "One Team for Complete Work",
    text: "Design, construction, finishing, installations & maintenance — all under one roof.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Reliability",
    text: "We use quality materials and follow proper construction standards.",
  },
  {
    icon: Receipt,
    title: "Transparent Pricing",
    text: "Clear, BOQ-based estimates with no hidden costs.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    text: "We value your time and deliver projects on schedule.",
  },
];

// TODO: confirm these figures with the client
const stats = [
  { icon: Building2, value: "250+", label: "Projects Completed" },
  { icon: Award, value: "10+", label: "Years of Experience" },
  { icon: Users, value: "150+", label: "Happy Clients" },
  { icon: HardHat, value: "50+", label: "Skilled Workers" },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-surface-50 py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
        {/* LEFT */}
        <div>
          <SectionHeader
            eyebrow="Why Choose Us"
            title="Why Choose Us?"
            align="left"
          />
          <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-ink-500">
            We are committed to delivering reliable construction solutions with
            a focus on quality, transparency, and professional project
            management. From initial planning and design to construction,
            finishing, and final handover, our team ensures every stage is
            handled with attention to detail, proper supervision, and clear
            communication.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {features.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-card bg-accent-100 text-accent-600">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-heading text-base font-bold text-brand-900">
                    {title}
                  </h3>
                  <p className="mt-1 font-body text-sm leading-relaxed text-ink-500">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-6">
          <div className="rounded-card bg-brand-900 p-8 text-surface-50 shadow-card">
            <h3 className="font-heading text-2xl font-bold">
              Get a Clear Construction Cost Estimate
            </h3>
            <p className="mt-3 font-body text-sm leading-relaxed text-brand-100">
              Before starting work, you should know the expected cost of your
              project. We help with BOQ-based estimates for grey structure,
              turnkey construction, new home construction, renovation, flooring,
              painting, plumbing, and finishing work.
            </p>
            <Link
              href="/contact/"
              className="mt-6 inline-flex items-center gap-2 rounded-button bg-accent-500 px-6 py-3 font-body text-sm font-semibold text-brand-900 transition-colors hover:bg-accent-600"
            >
              Request BOQ Estimate
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-card border border-ink-300/20 bg-white p-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-100 text-accent-600">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-heading text-2xl font-bold text-brand-900">
                    {value}
                  </p>
                  <p className="font-body text-xs text-ink-500">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
