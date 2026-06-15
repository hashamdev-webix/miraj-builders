import ComingSoon from "@/components/ComingSoon";
import { createComingSoonMetadata } from "@/lib/metadata";

export const metadata = createComingSoonMetadata(
  "Book Consultation",
  "Book a free consultation with Miraj Builders. Booking page coming soon."
);

export default function BookingPage() {
  return (
    <ComingSoon
      title="Book Consultation Coming Soon"
      description="Our online consultation booking system is being prepared. Please contact us directly for now."
    />
  );
}
