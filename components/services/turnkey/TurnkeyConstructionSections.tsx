import Link from "next/link";
import { ArrowRight, Check, CircleDollarSign, FileText, ImageIcon } from "lucide-react";
import FaqAccordion from "@/components/FaqAccordion";
import SectionHeader from "@/components/home/SectionHeader";
import SubServiceHero from "@/components/services/sub-service/SubServiceHero";
import SubServiceProcessTimeline from "@/components/services/sub-service/SubServiceProcessTimeline";
import SubServiceCTA from "@/components/services/sub-service/SubServiceCTA";
import { SITE } from "@/lib/site";
import {
  costFactors,
  dashboardFeatures,
  relatedServices,
  turnkeyBenefits,
  turnkeyFaqs,
  turnkeyIncluded,
  turnkeyProcessSteps,
  turnkeyTrustBadges,
} from "./turnkeyContent";

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
                  Turnkey Project Overview
                </p>
                <p className="mt-1 font-body text-[8px] text-ink-500 sm:text-[10px]">
                  Design to Handover
                </p>
              </div>
              <span className="rounded-full bg-accent-100 px-2 py-1 font-body text-[8px] font-bold text-accent-600 sm:text-[10px]">
                In Progress
              </span>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-[0.8fr_1.2fr]">
              <div className="flex aspect-square items-center justify-center rounded-card bg-brand-100">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-8 border-accent-500 bg-white font-heading text-xl font-bold text-brand-900 sm:h-24 sm:w-24">
                  65%
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { icon: ImageIcon, label: "Site Photos" },
                  { icon: FileText, label: "Documents" },
                  { icon: CircleDollarSign, label: "Payments" },
                  { icon: Check, label: "Approvals" },
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
                  Milestone Progress
                </p>
                <p className="font-body text-[8px] text-ink-500">5 of 8</p>
              </div>
              <div className="mt-3 flex justify-between gap-1">
                {Array.from({ length: 8 }).map((_, index) => (
                  <span
                    key={index}
                    className={`flex h-5 w-5 items-center justify-center rounded-full text-[8px] ${
                      index < 5
                        ? "bg-accent-500 text-brand-900"
                        : "bg-brand-100 text-brand-700"
                    }`}
                  >
                    {index < 5 ? <Check className="h-2.5 w-2.5" /> : index + 1}
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

function QuickBenefitCards() {
  return (
    <section className="bg-surface-100 py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {turnkeyBenefits.map(({ title, description, icon: Icon }) => (
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

function TurnkeyIntro() {
  return (
    <section className="bg-surface-50 py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeader
            eyebrow="Complete Project Management"
            title="What Is Turnkey Construction?"
            align="left"
          />
          <div className="mt-6 space-y-4 font-body text-base leading-relaxed text-ink-500">
            <p>
              Turnkey construction means your complete project is managed by one
              professional team from planning to final handover. Instead of
              hiring separate contractors for structure, electrical work,
              plumbing, flooring, ceiling, paint, woodwork, and finishing, you
              work with one company that manages everything under an approved
              plan.
            </p>
            <p>
              This service is best for clients who want a more organized,
              transparent, and stress-free construction experience.
            </p>
          </div>
        </div>

        <div className="rounded-card border border-accent-500/25 bg-brand-900 p-8 text-surface-50 shadow-card">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent-500">
            Best For
          </span>
          <h2 className="mt-3 font-heading text-2xl font-bold">
            One professional team for design, construction, finishing, and
            delivery.
          </h2>
          <p className="mt-4 font-body text-sm leading-relaxed text-brand-100">
            Miraj Builders keeps the project scope, BOQ, payment stages,
            milestone reporting, and handover process clear from the start.
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
          eyebrow="Turnkey Scope"
          title="What Is Included in Turnkey Construction?"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {turnkeyIncluded.map(({ area, detail, icon: Icon }) => (
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

function ProjectTracking() {
  return (
    <section className="bg-surface-50 py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <DashboardPreview />

        <div>
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent-500">
            Dashboard & App Tracking
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-brand-900 sm:text-4xl">
            Track Your Project With Dashboard & App
          </h2>
          <div className="mt-5 space-y-4 font-body text-base leading-relaxed text-ink-500">
            <p>
              Our client dashboard and mobile app make the construction process
              more transparent and easy to follow. Clients can check important
              project updates without calling again and again.
            </p>
            <p>
              Clients can view current project status, completed milestones,
              upcoming milestones, site progress photos, design approval status,
              proposal and contract documents, payment updates, manager notes,
              and handover details.
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
            This gives clients more clarity, comfort, and confidence throughout
            the project.
          </p>
        </div>
      </div>
    </section>
  );
}

function CostAndWhyChoose() {
  return (
    <section className="bg-surface-100 py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="rounded-card border border-ink-300/20 bg-white p-8 shadow-card">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent-500">
            Cost Planning
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-brand-900">
            Turnkey Construction Cost
          </h2>
          <p className="mt-5 font-body text-base leading-relaxed text-ink-500">
            Turnkey construction cost depends on project size, covered area,
            design, material quality, finishing level, location, and approved
            scope of work. Before starting, we provide a clear BOQ and proposal
            so clients understand what is included and how payment stages will
            work.
          </p>
          <h3 className="mt-7 font-heading text-lg font-bold text-brand-900">
            Cost Factors:
          </h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {costFactors.map((factor) => (
              <li key={factor} className="flex items-center gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-100 text-accent-600">
                  <Check className="h-4 w-4" aria-hidden />
                </span>
                <span className="font-body text-sm font-medium text-ink-700">
                  {factor}
                </span>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-card border border-accent-500/25 bg-brand-900 p-8 text-surface-50 shadow-card">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent-500">
            Why Choose Us
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold">
            Professionally managed turnkey construction from planning to
            handover.
          </h2>
          <p className="mt-5 font-body text-base leading-relaxed text-brand-100">
            Miraj Builders provide turnkey construction with a complete,
            professionally managed process from planning to final handover.
            Instead of making clients deal with different contractors, workers,
            vendors, and daily site issues, our team manages everything under
            one clear plan.
          </p>
          <p className="mt-4 font-body text-base leading-relaxed text-brand-100">
            From design approval and BOQ confirmation to grey structure,
            electrical, plumbing, finishing, milestone tracking, and final
            inspection, every stage is handled with proper supervision and
            transparent communication.
          </p>
          <p className="mt-4 font-body text-base leading-relaxed text-brand-100">
            Clients can also track their project through our dashboard and
            mobile app, where they can view progress updates, site photos,
            documents, payment status, manager notes, and important approvals.
            This makes the construction journey more organized, easier to
            understand, and more comfortable for clients from start to finish.
          </p>
        </article>
      </div>
    </section>
  );
}

function RelatedServices() {
  return (
    <section className="bg-surface-50 py-16 lg:py-24">
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

export default function TurnkeyConstructionSections() {
  return (
    <>
      <SubServiceHero
        eyebrow="Turnkey Construction Services"
        title="Turnkey Construction Services"
        highlightedTitle="in Pakistan"
        subtitle="Complete design-to-handover construction solutions managed by one professional team."
        description="Build your home or commercial project with a turnkey construction service that covers planning, design approval, grey structure, electrical, plumbing, finishing, quality checks, and final handover. We keep your project clear and organized with milestone tracking, dashboard updates, app access, site photos, documents, and payment status."
        image="/home/services/turnkey.jpg"
        imageAlt="Turnkey construction project managed by Miraj Builders in Pakistan"
        imageBadgeTitle="Design to Final Handover"
        imageBadgeDescription="One team managing planning, construction, finishing, and reporting."
        actions={[
          { label: "Book Consultation", href: "/booking/", variant: "primary" },
          {
            label: "WhatsApp Us",
            href: `https://wa.me/${SITE.whatsapp}`,
            variant: "secondary",
            external: true,
          },
        ]}
        trustBadges={turnkeyTrustBadges}
      />
      <QuickBenefitCards />
      <TurnkeyIntro />
      <IncludedServices />
      <SubServiceProcessTimeline
        eyebrow="Our Process"
        title="Our Turnkey Construction Process"
        description="A clear step-by-step journey from inquiry and BOQ approval to dashboard updates and final handover."
        steps={turnkeyProcessSteps}
        sectionClassName="bg-surface-50"
      />
      <ProjectTracking />
      <CostAndWhyChoose />
      <RelatedServices />
      <FaqAccordion
        faqs={turnkeyFaqs}
        eyebrow="FAQs"
        title="FAQs About Turnkey Construction"
        sectionClassName="bg-surface-100"
      />
      <SubServiceCTA
        eyebrow="Request Estimate"
        title="Ready to Start Your Turnkey Construction Project?"
        description="Build your project with a professional team that manages every stage from design to final handover. We keep your construction journey clear, organized, and easy to track."
        image="/home/services/hero.jpg"
      />
    </>
  );
}
