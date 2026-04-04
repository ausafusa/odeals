import HomeSearch from "@/components/home-search";
import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { ProductCard } from "@/components/product-card";
import { categories, trendingProducts } from "@/lib/products";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Curated Beauty and Gadget Picks",
  description:
    "Browse ODeals for mobile-friendly beauty and gadget recommendations, editorial summaries, and Amazon shopping links with clear affiliate disclosures.",
  alternates: {
    canonical: absoluteUrl("/"),
  },
};

export default function HomePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
    ],
  };

  return (
    <div className="pb-10 sm:pb-14">
      <JsonLd data={breadcrumbSchema} />

      <section className="shell pt-4 sm:pt-6">
        <div className="glass-card rounded-[1.5rem] px-4 py-4 sm:px-6 sm:py-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-2">
              <span className="eyebrow">Curated daily</span>
              <h1 className="text-[1.75rem] font-semibold leading-8 tracking-[-0.04em] sm:text-[2.3rem] sm:leading-[2.6rem]">
                Best Amazon picks, faster.
                <HomeSearch />
              </h1>
              <p className="max-w-xl text-sm leading-6 text-[color:var(--secondary-text)]">
                Fast mobile browsing, compact product cards, and clearly labeled paid Amazon links.
              </p>
            </div>
            <Link href="#trending" className="cta-button cta-primary w-full sm:w-auto">
              See Today&apos;s Picks
            </Link>
          </div>
        </div>
      </section>

      <section id="trending" className="shell section-space">
        <div className="mb-4 flex items-end justify-between gap-3">
          <div>
            <span className="eyebrow">Trending products</span>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
              Popular picks right now
            </h2>
          </div>
        </div>
        <div className="product-grid">
          {trendingProducts.slice(0, 4).map((product, index) => (
            <div key={product.slug} className="relative">
              <div className="pointer-events-none absolute left-3 top-3 z-20 rounded-full bg-[color:var(--primary-text)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                {index === 0 ? "Popular pick" : index === 1 ? "Trending" : "Curated by experts"}
              </div>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      <section className="shell">
        <div className="surface-card p-4 sm:p-6">
          <div className="mb-4 flex items-end justify-between gap-3">
            <div>
              <span className="eyebrow">Browse categories</span>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                Shop by category
              </h2>
            </div>
            <Link href="/categories" className="text-sm font-semibold text-[color:var(--accent)]">
              View all categories
            </Link>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="surface-card p-4 transition-transform duration-150 hover:-translate-y-0.5"
              >
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--accent)]">
                  {category.title}
                </div>
                <h3 className="mt-2 text-xl font-semibold tracking-[-0.04em]">
                  {category.heading}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[color:var(--secondary-text)]">
                  {category.intro}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="shell section-space">
        <div className="surface-card p-4 sm:p-6">
          <div className="mb-4">
            <span className="eyebrow">Why trust ODeals</span>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
              Built for quick decisions, not clutter
            </h2>
          </div>
          <div className="trust-points sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-3">
            {[
              "Compact cards help shoppers compare fast on phones.",
              "Paid Amazon links are clearly labeled near every CTA.",
              "Curated selections reduce overwhelm and friction.",
              "Fast lightweight pages are tuned for mobile traffic.",
            ].map((item) => (
              <div key={item} className="meta-panel text-sm leading-6 text-[color:var(--secondary-text)]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="shell">
        <div className="mb-4 flex items-end justify-between gap-3">
          <div>
            <span className="eyebrow">Latest picks</span>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
              More compact picks to browse quickly
            </h2>
          </div>
        </div>
        <div className="product-grid">
          {trendingProducts.slice(4, 6).map((product, index) => (
            <div key={product.slug} className="relative">
              <div className="pointer-events-none absolute left-3 top-3 z-20 rounded-full bg-white/92 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[color:var(--primary-text)]">
                {index === 0 ? "Latest pick" : "New browse"}
              </div>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      <section className="shell section-space">
        <div className="glass-card rounded-[1.5rem] p-4 sm:p-6">
          <span className="eyebrow">Editorial note</span>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[color:var(--secondary-text)] sm:text-base">
            ODeals publishes general product recommendations for discovery and comparison.
            We do not list live prices or availability unless they are dynamically managed.
            Always review the current Amazon listing before making a purchase.
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Link href="/affiliate-disclaimer" className="cta-button cta-secondary w-full sm:w-auto">
              Read affiliate disclaimer
            </Link>
            <Link href="/privacy-policy" className="cta-button cta-secondary w-full sm:w-auto">
              Read privacy policy
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
