import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { ProductCard } from "@/components/product-card";
import { getProductBySlug, getRelatedProducts, products } from "@/lib/products";
import { absoluteUrl, siteConfig } from "@/lib/site";
function getYouTubeEmbedUrl(url?: string) {
  if (!url) return null;

  const shortMatch = url.match(/youtube\.com\/shorts\/([^?&/]+)/);
  if (shortMatch) {
    return `https://www.youtube.com/embed/${shortMatch[1]}`;
  }

  const watchMatch = url.match(/[?&]v=([^&]+)/);
  if (watchMatch) {
    return `https://www.youtube.com/embed/${watchMatch[1]}`;
  }

  return null;
}
type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {};
  }

  return {
    title: product.title,
    description: `${product.editorialSummary} Key benefits, who it is best for, and what shoppers should know before visiting Amazon.`,
    alternates: {
      canonical: absoluteUrl(`/products/${product.slug}`),
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product, 4);
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
        name: product.category,
        item: absoluteUrl(`/categories/${product.categorySlug}`),
      },
      {
        "@type": "ListItem",
        position: 4,
        name: product.title,
        item: absoluteUrl(`/products/${product.slug}`),
      },
    ],
  };
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.editorialSummary,
    image: [absoluteUrl(product.image)],
    category: product.category,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    isRelatedTo: relatedProducts.map((item) => ({
      "@type": "Product",
      name: item.title,
      url: absoluteUrl(`/products/${item.slug}`),
    })),
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: product.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="shell section-space">
      <JsonLd data={[breadcrumbSchema, productSchema, faqSchema]} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Categories", href: "/categories" },
          { label: product.category, href: `/categories/${product.categorySlug}` },
          { label: product.title },
        ]}
      />

      <article>
        <header className="grid gap-4 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="surface-card p-3 sm:p-4">
            <div className="card-media rounded-[1.1rem] p-4">
              <div className="absolute inset-x-8 top-5 h-32 rounded-full bg-[rgba(37,99,235,0.12)] blur-3xl" />
              <Image
                src={product.image}
                alt={product.title}
                width={800}
                height={700}
                sizes="(max-width: 767px) 92vw, (max-width: 1279px) 48vw, 38vw"
                className="relative z-10 mx-auto h-full w-full max-w-xl rounded-[0.95rem] object-cover"
                priority
              />
            </div>
          </div>

          <div className="surface-card p-4 sm:p-6">
            <span className="eyebrow">{product.category}</span>
            <h1 className="mt-3 text-[1.8rem] font-semibold tracking-[-0.04em] sm:text-[2.5rem] sm:leading-[2.8rem]">
              {product.title}
            </h1>
            <p className="mt-3 text-sm leading-6 text-[color:var(--secondary-text)] sm:text-base">
              {product.tagline}
            </p>

            <div className="mt-4 grid gap-2 sm:grid-cols-3">
              {[
                { label: "Best for", value: product.bestFor[0] },
                { label: "Top reason", value: product.benefits[0] },
                { label: "Link type", value: "Paid Amazon link" },
              ].map((item) => (
                <div key={item.label} className="meta-panel">
                  <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--secondary-text)]">
                    {item.label}
                  </div>
                  <div className="mt-2 text-sm font-medium leading-6 text-[color:var(--primary-text)]">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 space-y-3">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-[color:var(--secondary-text)]">
                Paid link to Amazon
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={product.amazonUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="cta-button amazon-button w-full sm:w-auto"
                >
                  See Today&apos;s Price
                </a>
                <Link
                  href={`/categories/${product.categorySlug}`}
                  className="cta-button cta-secondary w-full sm:w-auto"
                >
                  More {product.category}
                </Link>
              </div>
            </div>

            <div className="mobile-sticky-cta -mx-5 px-5 py-4 sm:hidden">
              <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.14em] text-[color:var(--secondary-text)]">
                Paid link to Amazon
              </p>
              <a
                href={product.amazonUrl}
                target="_blank"
                rel="noreferrer"
                className="cta-button amazon-button w-full"
              >
                See Today&apos;s Price
              </a>
            </div>
          </div>
        </header>

        <section className="grid gap-4 pt-4 lg:grid-cols-[1fr_1fr]">
          <div className="surface-card p-4 sm:p-5">
            <h2 className="text-xl font-semibold tracking-[-0.03em]">Best for</h2>
            <div className="mt-3 grid gap-2">
              {product.bestFor.slice(0, 2).map((item) => (
                <div key={item} className="meta-panel text-sm leading-6 text-[color:var(--secondary-text)]">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="surface-card p-4 sm:p-5">
            <h2 className="text-xl font-semibold tracking-[-0.03em]">Things to know</h2>
            <div className="mt-3 grid gap-2">
              {product.thingsToKnow.slice(0, 2).map((item) => (
                <div key={item} className="meta-panel text-sm leading-6 text-[color:var(--secondary-text)]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-4 pt-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="surface-card p-4 sm:p-5">
            <h2 className="text-xl font-semibold tracking-[-0.03em]">Key benefits</h2>
            <ul className="benefit-list mt-3">
              {product.benefits.slice(0, 4).map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>

          <div className="surface-card p-4 sm:p-5">
            <h2 className="text-xl font-semibold tracking-[-0.03em]">Why we picked it</h2>
            <p className="mt-3 text-sm leading-6 text-[color:var(--secondary-text)] sm:text-base">
              {product.whyWePickedIt}
            </p>
          </div>
        </section>

        <section className="pt-4">
          <div className="surface-card p-4 sm:p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="eyebrow">FAQ</span>
                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">
                  Quick answers
                </h2>
              </div>
            </div>
            <div className="mt-4 grid gap-3">
              {product.faqs.slice(0, 2).map((faq) => (
                <div key={faq.question} className="meta-panel">
                  <h3 className="text-base font-semibold text-[color:var(--primary-text)]">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[color:var(--secondary-text)]">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </article>

      <section className="pt-6 sm:pt-8">
        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow">Related picks</span>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
              You may also like
            </h2>
          </div>
          <Link href="/categories" className="text-sm font-semibold text-[color:var(--accent)]">
            Back to categories
          </Link>
        </div>
        <div className="product-grid">
          {relatedProducts.map((item) => (
            <ProductCard key={item.slug} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
