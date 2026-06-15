import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export function createComingSoonMetadata(
  title: string,
  description?: string
): Metadata {
  return {
    title: `${title} | ${SITE.name}`,
    description: description ?? `${title} page for ${SITE.name} is coming soon.`,
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
      },
    },
  };
}
