import ComingSoon from "@/components/ComingSoon";
import { createComingSoonMetadata } from "@/lib/metadata";

export const metadata = createComingSoonMetadata(
  "Construction Rates",
  "Transparent per-sq-ft construction rate packages for Pakistan — coming soon."
);

export default function ConstructionRatesPage() {
  return (
    <ComingSoon
      title="Construction Rates Coming Soon"
      description="We are preparing transparent, up-to-date construction rate packages. Please check back soon."
    />
  );
}
