import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
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

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) return {};

  return {
    title: product.title,
    description: product.editorialSummary,
    alternates: {
      canonical: absoluteUrl(`/products/${product.slug}`),
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    redirect("/");
  }

  const youtubeEmbedUrl = getYouTubeEmbedUrl(product?.youtubeShortUrl);
  const relatedProducts = getRelatedProducts(product, 4);

  return (
    <div className="shell section-space">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: product.category, href: `/categories/${product.categorySlug}` },
          { label: product.title },
        ]}
      />

      <article>
        {/* HEADER */}
        <header className="grid gap-4 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="surface-card p-3 sm:p-4">
            <Image
              src={product.image}
              alt={product.title}
              width={800}
              height={700}
              className="rounded-xl object-cover"
            />
          </div>

          <div className="surface-card p-4 sm:p-6">
            <span className="eyebrow">{product.category}</span>
            <h1 className="mt-3 text-2xl font-semibold">{product.title}</h1>
            <p className="mt-3 text-sm text-[color:var(--secondary-text)]">
              {product.tagline}
            </p>

            <div className="mt-4">
              <a
                href={product.amazonUrl}
                target="_blank"
                className="cta-button amazon-button"
              >
                See Today’s Price
              </a>
            </div>
          </div>
        </header>

        {/* VIDEO SECTION */}
        {youtubeEmbedUrl && (
          <section className="mt-6">
            <div className="surface-card p-5">
              <h2 className="text-xl font-semibold mb-3">
                Watch before you buy
              </h2>

              <div className="aspect-[9/16] max-w-sm">
                <iframe
                  src={youtubeEmbedUrl}
                  className="w-full h-full rounded-xl"
                  allowFullScreen
                />
              </div>
            </div>
          </section>
        )}

        {/* SHARE */}
        <section className="mt-6">
          <div className="surface-card p-5">
            <h3 className="font-semibold mb-3">Share this product</h3>

            <div className="flex gap-3 flex-wrap">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${absoluteUrl(`/products/${product.slug}`)}`}
                target="_blank"
                className="cta-button"
              >
                Facebook
              </a>

              <a
                href={`https://twitter.com/intent/tweet?url=${absoluteUrl(`/products/${product.slug}`)}&text=${product.title}`}
                target="_blank"
                className="cta-button"
              >
                Twitter
              </a>

              <button
                onClick={() => navigator.clipboard.writeText(window.location.href)}
                className="cta-button"
              >
                Copy Link
              </button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-6">
          <div className="surface-card p-5">
            <h2 className="text-xl font-semibold mb-3">Quick answers</h2>

            {product.faqs.slice(0, 2).map((faq) => (
              <div key={faq.question} className="mb-3">
                <h3 className="font-semibold">{faq.question}</h3>
                <p className="text-sm text-[color:var(--secondary-text)]">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      </article>

      {/* RELATED */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">You may also like</h2>

        <div className="product-grid">
          {relatedProducts.map((item) => (
            <ProductCard key={item.slug} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
