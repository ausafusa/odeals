import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

import { getProductBySlug, getRelatedProducts } from "@/lib/products";
import { ProductCard } from "@/components/product-card";

// ✅ YouTube helper (SHORT → EMBED)
function getYouTubeEmbedUrl(url?: string) {
  if (!url) return null;

  const shortMatch = url.match(/youtube\.com\/shorts\/([^?&/]+)/);
  if (shortMatch) {
    return `https://www.youtube.com/embed/${shortMatch[1]}`;
  }

  const watchMatch = url.match(/[?&]v=([^?&]+)/);
  if (watchMatch) {
    return `https://www.youtube.com/embed/${watchMatch[1]}`;
  }

  return null;
}

export default async function ProductPage({ params }: any) {
  const { slug } = await params;

  const product = getProductBySlug(slug);

  // ✅ 404 → redirect to home
  if (!product) {
    redirect("/");
  }

  const relatedProducts = getRelatedProducts(product, 4);

  const youtubeEmbedUrl = getYouTubeEmbedUrl(product.youtubeShortUrl);

  return (
    <div className="shell py-6 sm:py-10">
      
      {/* PRODUCT HEADER */}
      <div className="grid md:grid-cols-2 gap-6 items-center">
        
        <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-[var(--border-color)]">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold">
            {product.title}
          </h1>

          <p className="mt-3 text-sm text-[color:var(--secondary-text)]">
            {product.tagline}
          </p>

          <Link
            href={product.amazonUrl}
            target="_blank"
            className="mt-5 inline-block px-5 py-3 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition"
          >
            See Today’s Deal
          </Link>
        </div>
      </div>

      {/* VIDEO SECTION */}
      {youtubeEmbedUrl && (
        <section className="mt-10">
          <h2 className="text-lg font-semibold mb-3">
            Watch before you buy
          </h2>

          <div className="aspect-video w-full max-w-md rounded-xl overflow-hidden border border-[var(--border-color)]">
            <iframe
              src={youtubeEmbedUrl}
              className="w-full h-full"
              allowFullScreen
            />
          </div>
        </section>
      )}

      {/* BENEFITS */}
      <section className="mt-10">
        <h2 className="text-lg font-semibold mb-3">Key benefits</h2>

        <ul className="space-y-2 text-sm text-[color:var(--secondary-text)]">
          {product.benefits.map((b: string, i: number) => (
            <li key={i}>• {b}</li>
          ))}
        </ul>
      </section>

      {/* FAQ (ONLY KEEP THIS) */}
      <section className="mt-10">
        <h2 className="text-lg font-semibold mb-3">FAQ</h2>

        <div className="space-y-3">
          {product.faqs.map((faq: any, i: number) => (
            <div
              key={i}
              className="p-4 rounded-xl border border-[var(--border-color)]"
            >
              <p className="font-medium">{faq.question}</p>
              <p className="text-sm mt-1 text-[color:var(--secondary-text)]">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* RELATED PRODUCTS */}
      <section className="mt-12">
        <h2 className="text-lg font-semibold mb-4">
          Related products
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {relatedProducts.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
