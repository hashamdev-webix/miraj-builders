import Link from "next/link";
import {
  ArrowRight,
  Check,
  CircleDollarSign,
  FileText,
  Globe2,
  ImageIcon,
} from "lucide-react";
import FaqAccordion from "@/components/FaqAccordion";
import SectionHeader from "@/components/home/SectionHeader";
import SubServiceHero from "@/components/services/sub-service/SubServiceHero";
import SubServiceProcessTimeline from "@/components/services/sub-service/SubServiceProcessTimeline";
import SubServiceCTA from "@/components/services/sub-service/SubServiceCTA";
import { SITE } from "@/lib/site";
import {
  constructionMilestones,
  costFactors,
  dashboardFeatures,
  newHomeFaqs,
  newHomeHighlights,
  newHomeIncluded,
  newHomeProcessSteps,
  newHomeTrustBadges,
  plotSizeGuides,
  relatedServices,
  whyChooseCopy,
} from "./newHomeContent";

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
                  New Home Project
                </p>
                <p className="mt-1 font-body text-[8px] text-ink-500 sm:text-[10px]">
                  Planning to Handover
                </p>
              </div>
              <span className="rounded-full bg-accent-100 px-2 py-1 font-body text-[8px] font-bold text-accent-600 sm:text-[10px]">
                In Progress
              </span>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-[0.8fr_1.2fr]">
              <div className="flex aspect-square items-center justify-center rounded-card bg-brand-100">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-8 border-accent-500 bg-white font-heading text-xl font-bold text-brand-900 sm:h-24 sm:w-24">
                  68%
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
                  Home Progress
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

function QuickHighlightCards() {
  return (
    <section className="bg-surface-100 py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {newHomeHighlights.map(({ title, description, icon: Icon }) => (
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

function NewHomeIntro() {
  return (
    <section className="bg-surface-50 py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeader
            eyebrow="Custom House Construction"
            title="What Is New Home Construction?"
            align="left"
          />
          <div className="mt-6 space-y-4 font-body text-base leading-relaxed text-ink-500">
            <p>
              New home construction means building a residential property from
              the ground up according to approved drawings, design requirements,
              construction scope, and client preferences. It starts with
              planning, site review, BOQ, and foundation work, then moves
              through grey structure, electrical, plumbing, plaster, flooring,
              paint, ceiling, finishing, and final handover.
            </p>
            <p>
              In Pakistan, many clients search for this service as house
              construction services, new house construction, home construction
              company, or custom home builders. The goal is the same: to build a
              safe, well-planned, and professionally managed home with clear
              communication at every stage.
            </p>
            <p>
              Our process is designed to help clients avoid confusion,
              contractor mismanagement, unclear costs, and poor coordination
              between different workers.
            </p>
          </div>
        </div>

        <div className="rounded-card border border-accent-500/25 bg-brand-900 p-8 text-surface-50 shadow-card">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent-500">
            Best For
          </span>
          <h2 className="mt-3 font-heading text-2xl font-bold">
            5 Marla, 10 Marla, 1 Kanal, and custom residential projects built
            from the ground up.
          </h2>
          <p className="mt-4 font-body text-sm leading-relaxed text-brand-100">
            Miraj Builders keeps planning, drawings, BOQ, supervision,
            milestone updates, and final handover organized under one structured
            process.
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
          eyebrow="New Home Scope"
          title="What We Include in New Home Construction"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {newHomeIncluded.map(({ area, detail, icon: Icon }) => (
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

function PlotSizeSection() {
  return (
    <section className="bg-surface-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Plot Size Guide"
          title="House Construction by Plot Size"
        />
        <p className="mx-auto mt-5 max-w-3xl text-center font-body text-base leading-relaxed text-ink-500">
          Every home is different, but plot size helps clients understand the
          planning and cost direction before starting the project.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {plotSizeGuides.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="group h-full rounded-card border border-ink-300/20 bg-white p-7 shadow-card transition-all hover:-translate-y-1 hover:border-accent-500/40"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-100 text-accent-600 transition-colors group-hover:bg-accent-500 group-hover:text-brand-900">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mt-5 font-heading text-xl font-bold text-brand-900">
                {title}
              </h3>
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

function OverseasClients() {
  return (
    <section className="bg-surface-100 py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-card border border-accent-500/25 bg-brand-900 p-8 text-surface-50 shadow-card">
          <span className="flex h-14 w-14 items-center justify-center rounded-card bg-accent-500 text-brand-900">
            <Globe2 className="h-7 w-7" aria-hidden />
          </span>
          <h2 className="mt-6 font-heading text-3xl font-bold">
            Building a Home From Abroad?
          </h2>
          <p className="mt-5 font-body text-base leading-relaxed text-brand-100">
            Miraj Builders makes it easier for overseas Pakistanis to build a
            new home in Pakistan with confidence and transparency. Many overseas
            clients want to construct a home but cannot visit the site
            regularly, which is why our client dashboard and mobile app provide
            easy access to important project updates in one place.
          </p>
        </div>

        <div className="rounded-card border border-ink-300/20 bg-white p-8 shadow-card">
          <h3 className="font-heading text-2xl font-bold text-brand-900">
            Remote project visibility without relying only on phone calls.
          </h3>
          <p className="mt-4 font-body text-base leading-relaxed text-ink-500">
            Through the dashboard and app, overseas clients can view site
            progress photos, milestone status, payment updates, project
            documents, design approvals, and manager notes without depending
            only on phone calls. This helps make the construction journey more
            transparent, organized, and comfortable, even when the client is
            living outside Pakistan.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {[
              "Site progress photos",
              "Milestone status",
              "Payment updates",
              "Project documents",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-100 text-accent-600">
                  <Check className="h-4 w-4" aria-hidden />
                </span>
                <span className="font-body text-sm font-semibold text-ink-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
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
            Track Your Home Construction Through Dashboard & App
          </h2>
          <div className="mt-5 space-y-4 font-body text-base leading-relaxed text-ink-500">
            <p>
              We make new home construction easier for clients by providing
              project updates through our client dashboard and mobile app.
              Instead of calling again and again for every small update, clients
              can check important information anytime.
            </p>
          </div>

          <h3 className="mt-7 font-heading text-lg font-bold text-brand-900">
            Clients can view:
          </h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
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
            the home-building journey.
          </p>
        </div>
      </div>
    </section>
  );
}

function ConstructionMilestones() {
  return (
    <section className="bg-surface-100 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Project Milestones"
          title="Typical New Home Construction Milestones"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {constructionMilestones.map(({ stage, work, icon: Icon }, index) => (
            <article
              key={stage}
              className="group relative h-full rounded-card border border-ink-300/20 bg-white p-6 pt-8 shadow-card transition-all hover:-translate-y-1 hover:border-accent-500/40"
            >
              <span className="absolute -top-4 left-6 flex h-9 w-9 items-center justify-center rounded-full border-4 border-surface-100 bg-accent-500 font-heading text-xs font-bold text-brand-900">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="flex h-11 w-11 items-center justify-center rounded-card bg-brand-100 text-brand-700 transition-colors group-hover:bg-brand-900 group-hover:text-accent-500">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-4 font-heading text-base font-bold leading-snug text-brand-900">
                {stage}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-ink-500">
                {work}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CostAndWhyChoose() {
  return (
    <section className="bg-surface-50 py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="rounded-card border border-ink-300/20 bg-white p-8 shadow-card">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent-500">
            Cost Planning
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-brand-900">
            New Home Construction Cost
          </h2>
          <p className="mt-5 font-body text-base leading-relaxed text-ink-500">
            New home construction cost depends on the covered area, plot size,
            design, material quality, structural requirements, finishing level,
            location, labour rates, and approved scope of work.
          </p>
          <h3 className="mt-7 font-heading text-lg font-bold text-brand-900">
            Main cost factors include:
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
          <p className="mt-7 rounded-button bg-accent-100/70 px-4 py-3 font-body text-sm leading-relaxed text-ink-500">
            Before starting work, we provide a clear BOQ and proposal so clients
            understand the estimated cost, included work, excluded items, and
            payment stages.
          </p>
        </article>

        <article className="rounded-card border border-accent-500/25 bg-brand-900 p-8 text-surface-50 shadow-card">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent-500">
            Why Choose Us
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold">
            Why Choose Us for New Home Construction?
          </h2>
          <p className="mt-5 font-body text-base leading-relaxed text-brand-100">
            {whyChooseCopy}
          </p>
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
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

export default function NewHomeConstructionSections() {
  return (
    <>
      <SubServiceHero
        eyebrow="New Home Construction Services"
        title="New Home Construction Services"
        highlightedTitle="in Pakistan"
        subtitle="Custom House Construction From Planning to Handover"
        description="Build your new home with a professional construction team that manages every stage with planning, clarity, and care. Our new home construction service is designed for clients who want to build a house from the ground up with proper consultation, approved drawings, BOQ clarity, quality supervision, milestone tracking, and transparent project updates. Whether you are planning a 5 Marla, 10 Marla, 1 Kanal, or larger residential project, our team helps you manage the complete home-building journey from foundation and grey structure to finishing and final handover, depending on your approved scope."
        image="/home/services/new-home.jpg"
        imageAlt="Modern new home construction project by Miraj Builders in Pakistan"
        imageBadgeTitle="Planning to Final Handover"
        imageBadgeDescription="Custom residential construction with BOQ clarity and milestone tracking."
        actions={[
          { label: "Book Consultation", href: "/booking/", variant: "primary" },
          {
            label: "WhatsApp Us",
            href: `https://wa.me/${SITE.whatsapp}`,
            variant: "secondary",
            external: true,
          },
        ]}
        trustBadges={newHomeTrustBadges}
      />
      <QuickHighlightCards />
      <NewHomeIntro />
      <IncludedServices />
      <PlotSizeSection />
      <SubServiceProcessTimeline
        eyebrow="Our Process"
        title="Our New Home Construction Process"
        description="A structured eight-step journey from inquiry, consultation, drawings, scope, and BOQ to foundation, finishing, inspection, and handover."
        steps={newHomeProcessSteps}
        sectionClassName="bg-surface-100"
      />
      <OverseasClients />
      <ProjectTracking />
      <ConstructionMilestones />
      <CostAndWhyChoose />
      <RelatedServices />
      <FaqAccordion
        faqs={newHomeFaqs}
        eyebrow="FAQs"
        title="FAQs About New Home Construction"
        sectionClassName="bg-surface-50"
      />
      <SubServiceCTA
        eyebrow="Build With Clarity"
        title="Ready to Build Your New Home?"
        description="Start your new home construction with a professional team that keeps your project planned, supervised, and easy to track. From foundation to final handover, we manage every stage with clarity, quality, and transparent communication."
      />
    </>
  );
}
