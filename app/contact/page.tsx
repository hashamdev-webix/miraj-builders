import ComingSoon from "@/components/ComingSoon";
import { createComingSoonMetadata } from "@/lib/metadata";

export const metadata = createComingSoonMetadata(
  "Contact",
  "Get in touch with the Miraj Builders team. Contact page coming soon."
);

export default function ContactPage() {
  return (
    <ComingSoon
      title="Contact Page Coming Soon"
      description="Our contact page is being set up. In the meantime, reach us directly using the details below."
    />
  );
}
