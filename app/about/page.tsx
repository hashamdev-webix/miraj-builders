import ComingSoon from "@/components/ComingSoon";
import { createComingSoonMetadata } from "@/lib/metadata";

export const metadata = createComingSoonMetadata(
  "About Miraj Builders",
  "Learn about our story, team, and values at Miraj Builders."
);

export default function AboutPage() {
  return (
    <ComingSoon
      title="About Miraj Builders Coming Soon"
      description="Our story, team, and company values page is being prepared. Please check back soon."
    />
  );
}
