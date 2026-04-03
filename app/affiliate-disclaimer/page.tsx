import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Affiliate Disclaimer",
  description:
    "Read the ODeals affiliate disclaimer explaining Amazon Associates links, editorial recommendations, and purchase transparency.",
  alternates: {
    canonical: absoluteUrl("/affiliate-disclaimer"),
  },
};

export default function AffiliateDisclaimerPage() {
  return (
    <div className="shell section-space">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Affiliate Disclaimer" }]} />
      <article className="surface-card p-5 sm:p-8">
        <span className="eyebrow">Affiliate Disclaimer</span>
        <h1 className="mt-4 section-title font-semibold">How affiliate links work on ODeals</h1>
        <div className="mt-6 grid gap-5">
          {[
            {
              title: "Amazon Associates disclosure",
              body: "As an Amazon Associate, we earn from qualifying purchases.",
            },
            {
              title: "Editorial process",
              body:
                "Products on ODeals are presented as editorial recommendations and category suggestions. Content is designed to help visitors compare product types and understand why a recommendation may be useful.",
            },
            {
              title: "Link transparency",
              body:
                "Paid link notices are shown near Amazon calls to action so visitors understand that outbound shopping links may be affiliate links.",
            },
            {
              title: "Pricing and availability",
              body:
                "ODeals does not guarantee pricing, stock, or listing details. Always review the current Amazon product page before purchasing.",
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
