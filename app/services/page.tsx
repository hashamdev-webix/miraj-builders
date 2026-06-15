import ComingSoon from "@/components/ComingSoon";
import { createComingSoonMetadata } from "@/lib/metadata";

export const metadata = createComingSoonMetadata(
  "Services",
  "Explore our full range of construction and design services. Coming soon."
);

export default function ServicesPage() {
  return (
    <ComingSoon
      title="Services Coming Soon"
      description="We are preparing the complete Miraj Builders services catalogue. Please check back soon."
    />
  );
}
