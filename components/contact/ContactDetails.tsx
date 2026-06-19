import {
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import SectionHeader from "@/components/home/SectionHeader";
import { SITE } from "@/lib/site";
import ContactForm from "./ContactForm";

const contactItems = [
  {
    title: "Call Us",
    value: SITE.phone,
    href: `tel:${SITE.phone}`,
    icon: Phone,
  },
  {
    title: "WhatsApp",
    value: SITE.phone,
    href: `https://wa.me/${SITE.whatsapp}`,
    icon: MessageCircle,
  },
  {
    title: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    icon: Mail,
  },
  {
    title: "Office Address",
    value: SITE.address,
    icon: MapPin,
  },
  {
    title: "Working Hours",
    value: SITE.workingHours,
    icon: Clock3,
  },
];

export default function ContactDetails() {
  return (
    <section className="bg-surface-50 py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <SectionHeader
            eyebrow="Contact Information"
            title="Get in Touch"
            align="left"
          />
          <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-ink-500">
            Choose the contact method that works best for you, or share your
            project information through the estimate form.
          </p>

          <address className="mt-8 grid gap-4 not-italic sm:grid-cols-2 lg:grid-cols-1">
            {contactItems.map(({ title, value, href, icon: Icon }) => {
              const content = (
                <>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-100 text-accent-600 transition-colors group-hover:bg-accent-500 group-hover:text-brand-900">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block font-body text-xs font-semibold uppercase tracking-[0.16em] text-accent-500">
                      {title}
                    </span>
                    <span className="mt-1 block font-body text-sm font-semibold text-brand-900">
                      {value}
                    </span>
                  </span>
                </>
              );

              return href ? (
                <a
                  key={title}
                  href={href}
                  className="group flex items-center gap-4 rounded-card border border-ink-300/20 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-accent-500/40 hover:shadow-card"
                  target={title === "WhatsApp" ? "_blank" : undefined}
                  rel={title === "WhatsApp" ? "noreferrer" : undefined}
                >
                  {content}
                </a>
              ) : (
                <div
                  key={title}
                  className="group flex items-center gap-4 rounded-card border border-ink-300/20 bg-white p-5"
                >
                  {content}
                </div>
              );
            })}
          </address>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
