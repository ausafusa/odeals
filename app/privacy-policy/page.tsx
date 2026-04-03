import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the ODeals privacy policy to understand how this affiliate website handles analytics, link clicks, and contact information.",
  alternates: {
    canonical: absoluteUrl("/privacy-policy"),
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="shell section-space">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
      <article className="surface-card p-5 sm:p-8">
        <span className="eyebrow">Privacy Policy</span>
        <h1 className="mt-4 section-title font-semibold">How ODeals handles visitor information</h1>
        <div className="mt-6 grid gap-5">
          {[
            {
              title: "Information we may collect",
              body:
                "ODeals may collect basic analytics information such as page visits, referral sources, device categories, and general interaction data to understand how visitors use the site.",
            },
            {
              title: "Affiliate link tracking",
              body:
                "When you click a product link, Amazon or other partners may use their own systems to track referrals and purchases. Those systems are governed by their own policies.",
            },
            {
              title: "Contact information",
              body:
                "If you contact us, any information you send is used only to respond to your message and support site operations.",
            },
            {
              title: "Policy updates",
              body:
                "This page may be updated as the site grows. Visitors should review it periodically for the latest information.",
            },
          ].map((section) => (
            <section key={section.title} className="meta-panel">
              <h2 className="text-xl font-semibold tracking-[-0.03em]">{section.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[color:var(--secondary-text)]">{section.body}</p>
            </section>
          ))}
        </div>
      </article>
    </div>
  );
}
