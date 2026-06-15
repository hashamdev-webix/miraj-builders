import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";
import { createComingSoonMetadata } from "@/lib/metadata";
import { ALL_SERVICE_ROUTES, findServiceBySlug } from "@/lib/routes";

// ─── Static params for all service slugs ─────────────────────────────────────

export function generateStaticParams() {
  return ALL_SERVICE_ROUTES.map((route) => ({ slug: route.slug as string }));
}

// ─── Per-page metadata ────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = findServiceBySlug(params.slug);

  if (!service) {
    return createComingSoonMetadata("Service Not Found");
  }

  return createComingSoonMetadata(
    service.title,
    `${service.title} services page for Miraj Builders is being prepared.`
  );
}

// ─── Page component ───────────────────────────────────────────────────────────

export default function ServiceSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = findServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <ComingSoon
      title={`${service.title} Coming Soon`}
      description={`${service.title} services page for Miraj Builders is being prepared. Please check back soon.`}
    />
  );
}
