import ComingSoon from "@/components/ComingSoon";
import { createComingSoonMetadata } from "@/lib/metadata";

export const metadata = createComingSoonMetadata(
  "Turnkey Construction",
  "Complete end-to-end turnkey construction services by Miraj Builders — coming soon."
);

export default function TurnkeyConstructionPage() {
  return (
    <ComingSoon
      title="Turnkey Construction Coming Soon"
      description="Our complete turnkey construction service page is being prepared. Please check back soon."
    />
  );
}
