import ComingSoon from "@/components/ComingSoon";
import { createComingSoonMetadata } from "@/lib/metadata";

export const metadata = createComingSoonMetadata(
  "Miraj Builders Website Coming Soon",
  "The Miraj Builders public website is being prepared."
);

export default function HomePage() {
  return (
    <ComingSoon
      title="Miraj Builders Website Coming Soon"
      description="Our public website foundation is ready. Full service pages will be added step by step."
    />
  );
}
