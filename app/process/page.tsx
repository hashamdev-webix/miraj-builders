import ComingSoon from "@/components/ComingSoon";
import { createComingSoonMetadata } from "@/lib/metadata";

export const metadata = createComingSoonMetadata(
  "Our Process",
  "Learn how Miraj Builders manages every project from design to handover."
);

export default function ProcessPage() {
  return (
    <ComingSoon
      title="Our Process Coming Soon"
      description="We are documenting our step-by-step construction and design process. Please check back soon."
    />
  );
}
