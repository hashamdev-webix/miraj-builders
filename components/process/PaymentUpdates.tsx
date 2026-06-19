import { CalendarClock, ReceiptText, WalletCards } from "lucide-react";

const paymentItems = [
  { title: "Paid amount", icon: ReceiptText },
  { title: "Due amount", icon: WalletCards },
  { title: "Upcoming payment stage", icon: CalendarClock },
] as const;

export default function PaymentUpdates() {
  return (
    <section className="bg-surface-100 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-card bg-brand-900 p-7 text-surface-50 shadow-card sm:p-10 lg:grid lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-12">
          <div
            className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-accent-500/10 blur-3xl"
            aria-hidden
          />
          <div className="relative">
            <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent-500">
              Clear Financial Progress
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl">
              Payment &amp; Milestone Updates
            </h2>
            <div className="mt-5 max-w-2xl space-y-4">
              <p className="font-body text-base leading-relaxed text-brand-100">
                Project payments are connected with construction milestones.
                Clients can view paid amount, due amount, upcoming payment
                stage, and retention details through the dashboard or app.
              </p>
              <p className="font-body text-base leading-relaxed text-brand-100">
                This keeps the project payment process clear and organized for
                both the client and our team.
              </p>
            </div>
          </div>

          <div className="relative mt-8 grid gap-3 sm:grid-cols-3 lg:mt-0 lg:grid-cols-1">
            {paymentItems.map(({ title, icon: Icon }) => (
              <div
                key={title}
                className="flex items-center gap-4 rounded-card border border-surface-50/15 bg-brand-700/45 p-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-500 text-brand-900">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <span className="font-body text-sm font-semibold text-surface-50">
                  {title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

