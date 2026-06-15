import ComingSoon from "@/components/ComingSoon";
import { createComingSoonMetadata } from "@/lib/metadata";

export const metadata = createComingSoonMetadata(
  "Blog",
  "Construction tips, industry insights, and project updates from Miraj Builders — coming soon."
);

export default function BlogPage() {
  return (
    <ComingSoon
      title="Blog Coming Soon"
      description="Construction tips, project stories, and industry insights are on their way. Please check back soon."
    />
  );
}
