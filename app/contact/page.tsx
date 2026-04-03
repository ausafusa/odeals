import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact ODeals for general questions about the site, editorial recommendations, or affiliate disclosure information.",
  alternates: {
    canonical: absoluteUrl("/contact"),
  },
};

export default function ContactPage() {
  return (
    <div className="shell section-space">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
      <article className="surface-card p-5 sm:p-8">
        <span className="eyebrow">Contact</span>
        <h1 className="mt-4 section-title font-semibold">Questions about ODeals</h1>
        <p className="mt-4 max-w-2xl section-copy">
          For general site feedback, editorial questions, or disclosure-related inquiries,
          reach out using the contact details below.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <section className="meta-panel">
            <h2 className="text-xl font-semibold tracking-[-0.03em]">Email</h2>
            <p className="mt-3 text-sm leading-7 text-[color:var(--secondary-text)]">
              {siteConfig.contactEmail}
            </p>
          </section>
          <section className="meta-panel">
            <h2 className="text-xl font-semibold tracking-[-0.03em]">Helpful links</h2>
            <div className="mt-3 flex flex-col gap-2 text-sm font-medium text-[color:var(--accent)]">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/affiliate-disclaimer">Affiliate Disclaimer</Link>
              <Link href="/categories">Browse Categories</Link>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
