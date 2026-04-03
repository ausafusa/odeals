import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { ProductCard } from "@/components/product-card";
import { categories, products } from "@/lib/products";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Product Categories",
  description:
    "Browse ODeals categories for beauty and gadget recommendations with clear editorial summaries and mobile-friendly product discovery.",
  alternates: {
    canonical: absoluteUrl("/categories"),
  },
};

export default function CategoriesPage() {
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
      {
        "@type": "ListItem",
        position: 2,
        name: "Categories",
        item: absoluteUrl("/categories"),
      },
    ],
  };

  return (
    <div className="shell section-space">
      <JsonLd data={breadcrumbSchema} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Categories" },
        ]}
      />

      <section className="surface-card px-5 py-6 sm:px-8 sm:py-8">
        <span className="eyebrow">Shop by category</span>
        <h1 className="mt-4 section-title font-semibold">
          Categories built for clear comparisons on every screen size
        </h1>
        <p className="mt-4 max-w-2xl section-copy">
          Browse cleanly organized collections, compare standout product types,
          and move between category pages and detailed reviews without losing context on mobile.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="surface-card p-5 transition-transform duration-150 hover:-translate-y-0.5"
            >
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--accent)]">
                {category.title}
              </div>
              <div className="mt-3 text-2xl font-semibold">{category.heading}</div>
              <p className="mt-3 text-sm leading-7 text-[color:var(--secondary-text)]">
                {category.intro}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="pt-10 sm:pt-14">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow">All demo products</span>
            <h2 className="mt-4 section-title font-semibold">Everything on ODeals</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[color:var(--secondary-text)]">
            All product pages include editorial context, category links, FAQs, and Amazon disclosure text to keep the site helpful and policy-friendly.
          </p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
