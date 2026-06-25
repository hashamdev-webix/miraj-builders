import Link from "next/link";
import {
  ArrowRight,
  Check,
  CircleDollarSign,
  FileText,
  ImageIcon,
  X,
} from "lucide-react";
import FaqAccordion from "@/components/FaqAccordion";
import SectionHeader from "@/components/home/SectionHeader";
import SubServiceHero from "@/components/services/sub-service/SubServiceHero";
import SubServiceProcessTimeline from "@/components/services/sub-service/SubServiceProcessTimeline";
import SubServiceCTA from "@/components/services/sub-service/SubServiceCTA";
import { SITE } from "@/lib/site";
import {
  costFactors,
  dashboardFeatures,
  greyStructureFaqs,
  greyStructureHighlights,
  greyStructureIncluded,
  greyStructureProcessSteps,
  greyStructureRates,
  greyStructureTrustBadges,
  notIncluded,
  relatedServices,
} from "./greyStructureContent";

function DashboardPreview() {
  return (
    <div className="relative mx-auto w-full max-w-2xl" aria-hidden>
      <div className="overflow-hidden rounded-card border border-brand-100/15 bg-brand-900 p-3 shadow-card sm:p-4">
        <div className="flex items-center gap-2 border-b border-brand-100/15 pb-3">
          <span className="h-2.5 w-2.5 rounded-full bg-accent-500" />
          <span className="h-2.5 w-2.5 rounded-full bg-brand-100/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-brand-100/20" />
          <span className="ml-2 font-body text-[10px] uppercase tracking-[0.18em] text-brand-100/60">
            Client Dashboard
          </span>
        </div>

        <div className="grid min-h-80 grid-cols-[72px_1fr] gap-3 pt-3 sm:grid-cols-[116px_1fr]">
          <div className="rounded-button bg-brand-700/55 p-2.5 sm:p-3">
            <div className="mb-5 h-7 rounded bg-accent-500/90" />
            {[68, 84, 60, 76, 52].map((width, index) => (
              <div
                key={width}
                className={`mb-3 h-2 rounded-full ${
                  index === 0 ? "bg-accent-500/70" : "bg-brand-100/25"
                }`}
                style={{ width: `${width}%` }}
              />
            ))}
          </div>

          <div className="rounded-button bg-surface-50 p-3 sm:p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-heading text-[10px] font-bold text-brand-900 sm:text-xs">
                  Grey Structure Project
                </p>
                <p className="mt-1 font-body text-[8px] text-ink-500 sm:text-[10px]">
                  Foundation to Roof Slab
                </p>
              </div>
              <span className="rounded-full bg-accent-100 px-2 py-1 font-body text-[8px] font-bold text-accent-600 sm:text-[10px]">
                In Progress
              </span>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-[0.8fr_1.2fr]">
              <div className="flex aspect-square items-center justify-center rounded-card bg-brand-100">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-8 border-accent-500 bg-white font-heading text-xl font-bold text-brand-900 sm:h-24 sm:w-24">
                  55%
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { icon: ImageIcon, label: "Site Photos" },
                  { icon: FileText, label: "Documents" },
                  { icon: CircleDollarSign, label: "Payments" },
                  { icon: Check, label: "Milestones" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="rounded-button border border-ink-300/20 bg-white p-2"
                  >
                    <Icon className="h-3.5 w-3.5 text-accent-600" />
                    <p className="mt-1 font-body text-[8px] font-semibold text-brand-900 sm:text-[9px]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 rounded-button border border-ink-300/20 bg-white p-3">
              <div className="flex items-center justify-between">
                <p className="font-body text-[9px] font-bold text-brand-900 sm:text-[10px]">
                  Structure Progress
                </p>
                <p className="font-body text-[8px] text-ink-500">4 of 7</p>
              </div>
              <div className="mt-3 flex justify-between gap-1">
                {Array.from({ length: 7 }).map((_, index) => (
                  <span
                    key={index}
                    className={`flex h-5 w-5 items-center justify-center rounded-full text-[8px] ${
                      index < 4
                        ? "bg-accent-500 text-brand-900"
                        : "bg-brand-100 text-brand-700"
                    }`}
                  >
                    {index < 4 ? <Check className="h-2.5 w-2.5" /> : index + 1}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuickHighlightCards() {
  return (
    <section className="bg-surface-100 py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {greyStructureHighlights.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="h-full rounded-card border border-ink-300/20 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:border-accent-500/40"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-100 text-accent-600">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <h2 className="mt-4 font-heading text-lg font-bold text-brand-900">
                {title}
              </h2>
              <p className="mt-3 font-body text-sm leading-relaxed text-ink-500">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function GreyStructureIntro() {
  return (
    <section className="bg-surface-50 py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeader
            eyebrow="Core Structural Work"
            title="What Is Grey Structure Construction?"
            align="left"
          />
          <div className="mt-6 space-y-4 font-body text-base leading-relaxed text-ink-500">
            <p>
              Grey structure construction is the main structural stage of a
              building. In Pakistan, many people also call it dhancha, which
              includes the basic foundation, walls, RCC structure, roof slab,
              and essential base work before finishing starts.
            </p>
            <p>
              In simple words, grey structure is the stage where the building
              shape is completed, but final finishing such as tiles, paint,
              woodwork, false ceiling, sanitary fixtures, and interior design
              are not completed yet.
            </p>
            <p>
              Grey structure work usually includes the bunyad or foundation,
              sarya or steel reinforcement, cement, concrete, eentain or bricks,
              rait and bajri, walls, beams, slab, roof, and basic embedded
              service provisions depending on the approved scope.
            </p>
          </div>
        </div>

        <div className="rounded-card border border-accent-500/25 bg-brand-900 p-8 text-surface-50 shadow-card">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent-500">
            Best For
          </span>
          <h2 className="mt-3 font-heading text-2xl font-bold">
            Clients who want a strong building structure first and want to
            manage finishing separately later.
          </h2>
          <p className="mt-4 font-body text-sm leading-relaxed text-brand-100">
            This service is ideal for clients who want a strong building
            structure first and want to manage finishing separately later.
          </p>
          <Link
            href="/booking/"
            className="mt-6 inline-flex items-center gap-2 rounded-button bg-accent-500 px-5 py-3 font-body text-sm font-semibold text-brand-900 transition-colors hover:bg-accent-600"
          >
            Request Estimate
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}

function IncludedServices() {
  return (
    <section className="bg-surface-100 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Grey Structure Scope"
          title="What Is Included in Grey Structure Construction?"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {greyStructureIncluded.map(({ area, detail, icon: Icon }) => (
            <article
              key={area}
              className="group flex h-full gap-4 rounded-card border border-ink-300/20 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:border-accent-500/40"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-card bg-brand-100 text-brand-700 transition-colors group-hover:bg-accent-500 group-hover:text-brand-900">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <h2 className="font-heading text-lg font-bold text-brand-900">
                  {area}
                </h2>
                <p className="mt-2 font-body text-sm leading-relaxed text-ink-500">
                  {detail}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CostAndRates() {
  return (
    <section className="bg-surface-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Cost Planning"
          title="Grey Structure Construction Cost in Pakistan"
        />
        <div className="mt-8 space-y-4 text-center font-body text-base leading-relaxed text-ink-500">
          <p className="mx-auto max-w-3xl">
            Grey structure cost depends on project size, covered area, city,
            soil condition, material quality, labour rate, structural design,
            basement requirements, and approved scope of work.
          </p>
          <div className="mx-auto max-w-2xl rounded-card border border-accent-500/30 bg-accent-100/50 px-6 py-4">
            <p className="font-heading text-lg font-bold text-brand-900">
              Estimated Market Range
            </p>
            <p className="mt-2 font-heading text-2xl font-bold text-accent-600">
              PKR 2,600 to PKR 3,400+ per square foot
            </p>
            <p className="mt-2 text-sm text-ink-500">
              This is an estimated range only. Final pricing should always be
              calculated after reviewing drawings, covered area, material grade,
              BOQ, and site conditions.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {greyStructureRates.map(({ grade, bestFor, rate }) => (
            <article
              key={grade}
              className="rounded-card border border-ink-300/20 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:border-accent-500/40"
            >
              <h3 className="font-heading text-xl font-bold text-brand-900">
                {grade}
              </h3>
              <p className="mt-3 font-body text-sm text-ink-500">{bestFor}</p>
              <p className="mt-5 font-heading text-2xl font-bold text-accent-600">
                {rate}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center font-body text-sm text-ink-500">
          <strong>Note:</strong> Rates may vary depending on cement, steel,
          bricks, labour, city, covered area, and market changes. These
          estimates are for guidance only. Actual cost depends on the final
          drawings, covered area, soil condition, foundation depth, material
          selection, and approved BOQ.
        </p>
      </div>
    </section>
  );
}

function ProjectTracking() {
  return (
    <section className="bg-surface-100 py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <DashboardPreview />

        <div>
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent-500">
            Dashboard & App Tracking
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-brand-900 sm:text-4xl">
            Track Grey Structure Progress With Dashboard & App
          </h2>
          <div className="mt-5 space-y-4 font-body text-base leading-relaxed text-ink-500">
            <p>
              We make grey structure construction easier for clients through our
              client dashboard and mobile app. Instead of calling again and
              again for every update, clients can view important project
              information in one place.
            </p>
          </div>

          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {dashboardFeatures.map(({ title, icon: Icon }) => (
              <li key={title} className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-100 text-accent-600">
                  <Icon className="h-4 w-4" aria-hidden />
                </span>
                <span className="font-body text-sm font-medium text-ink-900">
                  {title}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-7 border-l-2 border-accent-500 pl-4 font-body text-sm leading-relaxed text-ink-500">
            This system gives clients more clarity, comfort, and confidence
            during the complete construction process.
          </p>
        </div>
      </div>
    </section>
  );
}

function GreyVsTurnkey() {
  return (
    <section className="bg-surface-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Comparison"
          title="Grey Structure vs Turnkey Construction"
        />
        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[640px] rounded-card border border-ink-300/20 bg-white shadow-card">
            <thead>
              <tr className="border-b border-ink-300/20 bg-surface-100">
                <th className="px-6 py-4 text-left font-heading text-base font-bold text-brand-900">
                  Feature
                </th>
                <th className="px-6 py-4 text-left font-heading text-base font-bold text-brand-900">
                  Grey Structure Construction
                </th>
                <th className="px-6 py-4 text-left font-heading text-base font-bold text-brand-900">
                  Turnkey Construction
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  feature: "Main Purpose",
                  grey: "Build the main structure",
                  turnkey: "Complete project from structure to final finishing",
                },
                {
                  feature: "Foundation & DPC",
                  grey: "Included",
                  turnkey: "Included",
                },
                {
                  feature: "RCC & Brickwork",
                  grey: "Included",
                  turnkey: "Included",
                },
                {
                  feature: "Electrical & Plumbing",
                  grey: "Basic provisions may be included",
                  turnkey: "Complete as per approved scope",
                },
                {
                  feature: "Flooring & Tiling",
                  grey: "Not included",
                  turnkey: "Included",
                },
                {
                  feature: "Paint & Ceiling",
                  grey: "Not included",
                  turnkey: "Included",
                },
                {
                  feature: "Interior Finishing",
                  grey: "Not included",
                  turnkey: "Included",
                },
                {
                  feature: "Best For",
                  grey: "Clients who want to manage finishing later",
                  turnkey: "Clients who want one team to manage everything",
                },
                {
                  feature: "Final Handover",
                  grey: "Structure handover",
                  turnkey: "Ready-to-use or move-in-ready handover",
                },
              ].map((row) => (
                <tr
                  key={row.feature}
                  className="border-b border-ink-300/10 last:border-b-0"
                >
                  <td className="px-6 py-4 font-body text-sm font-semibold text-brand-900">
                    {row.feature}
                  </td>
                  <td className="px-6 py-4 font-body text-sm text-ink-500">
                    {row.grey}
                  </td>
                  <td className="px-6 py-4 font-body text-sm text-ink-500">
                    {row.turnkey}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function WhatAffectsCost() {
  return (
    <section className="bg-surface-100 py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="rounded-card border border-ink-300/20 bg-white p-8 shadow-card">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent-500">
            Cost Factors
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-brand-900">
            What Affects Grey Structure Cost?
          </h2>
          <ul className="mt-7 grid gap-4">
            {costFactors.map((factor) => (
              <li key={factor} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-100 text-accent-600">
                  <Check className="h-4 w-4" aria-hidden />
                </span>
                <div>
                  <span className="font-heading text-base font-bold text-brand-900">
                    {factor}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-card border border-ink-300/20 bg-white p-8 shadow-card">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent-500">
            Not Included
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-brand-900">
            What Is Not Included in Grey Structure?
          </h2>
          <p className="mt-5 font-body text-base leading-relaxed text-ink-500">
            Grey structure does not usually include finishing work unless it is
            added to the approved scope.
          </p>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {notIncluded.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <X className="h-4 w-4 shrink-0 text-ink-300" aria-hidden />
                <span className="font-body text-sm text-ink-500">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 rounded-card border border-accent-500/30 bg-accent-100/50 px-5 py-4 font-body text-sm leading-relaxed text-ink-700">
            If you want complete finishing with structure, our{" "}
            <Link
              href="/services/turnkey-construction/"
              className="font-semibold text-accent-600 underline hover:text-accent-500"
            >
              Turnkey Construction
            </Link>{" "}
            service is the better option.
          </p>
        </article>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="bg-surface-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <article className="rounded-card border border-accent-500/25 bg-brand-900 p-8 text-surface-50 shadow-card lg:p-12">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent-500">
            Why Choose Us
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl">
            Why Choose Us for Grey Structure Construction?
          </h2>
          <div className="mt-6 space-y-4 font-body text-base leading-relaxed text-brand-100">
            <p>
              We provide grey structure construction with a clear,
              professionally managed process that helps clients build with
              confidence. Our team manages the core construction stages with
              proper planning, BOQ clarity, material supervision, milestone
              tracking, and regular project updates.
            </p>
            <p>
              From foundation and DPC to RCC, brickwork, roof slab, and
              structural handover, every stage is handled according to the
              approved scope and construction plan.
            </p>
            <p>
              Clients can also track progress through our dashboard and mobile
              app, where they can view site photos, payment updates, documents,
              manager notes, and milestone status. This makes the grey structure
              process more transparent, organized, and easier for clients to
              follow from start to completion.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

function RelatedServices() {
  return (
    <section className="bg-surface-100 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Explore More" title="Related Services" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {relatedServices.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group rounded-card border border-ink-300/20 bg-white p-5 shadow-card transition-all hover:-translate-y-1 hover:border-accent-500/40"
            >
              <span className="font-heading text-base font-bold text-brand-900">
                {service.title}
              </span>
              <span className="mt-4 inline-flex items-center gap-1.5 font-body text-sm font-semibold text-accent-500 transition-colors group-hover:text-accent-600">
                View Service
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function GreyStructureSections() {
  return (
    <>
      <SubServiceHero
        eyebrow="Grey Structure Construction Services"
        title="Grey Structure Construction Services"
        highlightedTitle="in Pakistan"
        subtitle="Strong Foundation. Reliable Structure. Transparent Project Updates."
        description="Build your project on a strong and professionally managed structure with our grey structure construction services. We handle the core construction stages of your building, including site preparation, foundation, DPC, RCC work, columns, beams, slab, brickwork, roof slab, and essential structural supervision."
        image="/home/services/grey-structure.jpg"
        imageAlt="Grey structure construction project managed by Miraj Builders in Pakistan"
        imageBadgeTitle="Foundation to Roof Slab"
        imageBadgeDescription="Core structural work with BOQ clarity and milestone tracking."
        actions={[
          { label: "Book Consultation", href: "/booking/", variant: "primary" },
          {
            label: "WhatsApp Us",
            href: `https://wa.me/${SITE.whatsapp}`,
            variant: "secondary",
            external: true,
          },
        ]}
        trustBadges={greyStructureTrustBadges}
      />
      <QuickHighlightCards />
      <GreyStructureIntro />
      <IncludedServices />
      <CostAndRates />
      <SubServiceProcessTimeline
        eyebrow="Our Process"
        title="Our Grey Structure Construction Process"
        description="A clear step-by-step journey from inquiry and BOQ approval to quality checks and handover."
        steps={greyStructureProcessSteps}
        sectionClassName="bg-surface-50"
      />
      <ProjectTracking />
      <GreyVsTurnkey />
      <WhatAffectsCost />
      <WhyChooseUs />
      <RelatedServices />
      <FaqAccordion
        faqs={greyStructureFaqs}
        eyebrow="FAQs"
        title="FAQs About Grey Structure Construction"
        sectionClassName="bg-surface-100"
      />
      <SubServiceCTA
        eyebrow="Request Estimate"
        title="Ready to Start Your Grey Structure Project?"
        description="Build your project with a strong foundation and a professionally managed construction team. We keep your grey structure work clear, organized, and easy to track through proper planning, BOQ transparency, dashboard updates, site photos, and milestone-based progress."
        image="/home/services/construction-site.jpg"
      />
    </>
  );
}
