import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { Navbar } from "@/components/navbar";
import { ThemeToggle } from "@/components/theme-toggle";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "ODeals | Curated Beauty and Gadget Picks",
    template: "%s | ODeals",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: {
    canonical: absoluteUrl("/"),
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    title: "ODeals | Curated Beauty and Gadget Picks",
    description: siteConfig.description,
    url: absoluteUrl("/"),
    siteName: siteConfig.name,
    images: [
      {
        url: "/logo-mark.svg",
        width: 128,
        height: 128,
        alt: "ODeals logo mark",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ODeals | Curated Beauty and Gadget Picks",
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F8FAFC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.contactEmail,
    description: siteConfig.description,
  };

  return (
    <html lang="en">
      <body>
        <JsonLd data={organizationSchema} />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ThemeToggle />
      </body>
    </html>
  );
}
