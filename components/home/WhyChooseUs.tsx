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
  MonitorSmartphone,
  ClipboardCheck,
} from "lucide-react";
import SectionHeader from "./SectionHeader";

const features = [
  {
    icon: Users,
    title: "One Team for Complete Work",
    text: "Design, construction, finishing, and installations — all under one roof.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Reliability",
    text: "Quality materials and proper construction standards on every project.",
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
  {
    icon: MonitorSmartphone,
    title: "Live Project Tracking",
    text: "Track progress, timelines, and updates via our app and website dashboard.",
  },
  {
    icon: ClipboardCheck,
    title: "Plan-Driven Execution",
    text: "We follow the approved plan and avoid unnecessary changes.",
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
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Why Choose Us" title="Why Choose Us?" />
        <div className="mx-auto mt-6 max-w-3xl space-y-4 text-center">
          <p className="font-body text-base leading-relaxed text-ink-500">
            We deliver reliable construction solutions with a focus on quality,
            transparency, and professional project management. From planning and
            design to construction, finishing, and handover, every stage is
            handled with proper supervision and clear communication.
          </p>
          <p className="font-body text-base leading-relaxed text-ink-500">
            Clients can also track project progress, timelines, and updates
            through our app and website dashboard. We follow the approved
            project plan carefully and avoid unnecessary changes, keeping every
            project organized, transparent, and aligned with client
            expectations.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, text }) => (
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

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col justify-center rounded-card bg-brand-900 p-8 text-surface-50 shadow-card">
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
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-button bg-accent-500 px-6 py-3 font-body text-sm font-semibold text-brand-900 transition-colors hover:bg-accent-600"
            >
              Request BOQ Estimate
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex flex-col items-start justify-center rounded-card border border-ink-300/20 bg-white p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-100 text-accent-600">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-3 font-heading text-2xl font-bold text-brand-900">
                  {value}
                </p>
                <p className="font-body text-xs text-ink-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
