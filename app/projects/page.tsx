import ComingSoon from "@/components/ComingSoon";
import { createComingSoonMetadata } from "@/lib/metadata";

export const metadata = createComingSoonMetadata(
  "Projects",
  "Miraj Builders project portfolio will be available soon."
);

export default function ProjectsPage() {
  return (
    <ComingSoon
      title="Projects Coming Soon"
      description="We are preparing the Miraj Builders project portfolio. Please check back soon."
    />
  );
}
