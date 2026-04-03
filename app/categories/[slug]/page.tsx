import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { ProductCard } from "@/components/product-card";
import { categories, getCategoryBySlug, getProductsByCategory } from "@/lib/products";
import { absoluteUrl } from "@/lib/site";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {};
  }

  return {
    title: `${category.title} Picks`,
    description: category.seoDescription,
    alternates: {
      canonical: absoluteUrl(`/categories/${category.slug}`),
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const products = getProductsByCategory(category.slug);
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
      {
        "@type": "ListItem",
        position: 3,
        name: category.title,
        item: absoluteUrl(`/categories/${category.slug}`),
      },
    ],
  };

  return (
    <div className="shell section-space">
      <JsonLd data={breadcrumbSchema} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Categories", href: "/categories" },
          { label: category.title },
        ]}
      />

      <section className="surface-card px-5 py-6 sm:px-8 sm:py-8">
        <span className="eyebrow">{category.title}</span>
        <h1 className="mt-4 section-title font-semibold">{category.heading}</h1>
        <p className="mt-4 max-w-2xl section-copy">
          {category.description}
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-[color:var(--secondary-text)]">
          {category.intro}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href="/categories" className="cta-button cta-secondary">
            All categories
          </Link>
          <Link href="/" className="cta-button cta-primary">
            Back to homepage
          </Link>
        </div>
      </section>

      <section className="pt-10 sm:pt-14">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow">{products.length} products</span>
            <h2 className="mt-4 section-title font-semibold">{category.title} picks</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[color:var(--secondary-text)]">
            Product pages include key benefits, best-for guidance, things to know, FAQs, and related recommendations to improve usefulness for shoppers and search engines.
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
