import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";
import SiteShell from "@/components/SiteShell";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: SITE.name,
    template: `%s | ${SITE.name}`,
  },
  description: `${SITE.name} — ${SITE.tagline}. Premium construction and architecture services in Pakistan.`,
  metadataBase: new URL("https://mirajbuilders.com"),
  openGraph: {
    type: "website",
    siteName: SITE.name,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body className={`${sora.variable} ${inter.variable} font-body`}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
