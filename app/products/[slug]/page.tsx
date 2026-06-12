// app/products/[slug]/page.tsx ko iss se replace karein
import { notFound } from "next/navigation";
import Link from "next/link";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { PostLayout } from "@/components/post-layout"; // <--- Professional Layout humne design kiya tha

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  // Related products logic (same category, excluding current product)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4);

  // Schema data for SEO
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.tagline,
    image: product.image,
    brand: {
      "@type": "Brand",
      name: product.title.split(' ')[0] // Get first word as brand name
    },
    offers: {
      "@type": "Offer",
      url: (product as any).amazonUrl,
      availability: "https://schema.org/InStock"
    }
  };

  return (
    <div className="shell py-8 sm:py-12 animate-fade-in">
      {/* Schema data bind kar diya */}
      <JsonLd data={productSchema} />

      {/* Breadcrumbs */}
      <div className="mb-6 flex items-center gap-2 text-xs font-medium text-[color:var(--secondary-text)] sm:text-sm">
        <Link href="/" className="hover:text-[color:var(--primary-text)]">Home</Link>
        <span>/</span>
        <Link href={`/categories/${product.categorySlug}`} className="capitalize hover:text-[color:var(--primary-text)]">
          {product.category}
        </Link>
        <span>/</span>
        <span className="truncate text-[color:var(--primary-text)] max-w-[150px] sm:max-w-none">{product.title}</span>
      </div>

      {/* Ye professional layout hai, jis m description sab kuch dikhega */}
      <PostLayout
        title={product.title}
        imageUrl={product.image}
        rating={4.8} // Abhi hardcoded, agar data m ho toh product.rating likhein
        reviewCount={100} // Abhi hardcoded, agar data m ho toh product.reviewCount likhein
        productName={product.title}
        productUrl={(product as any).amazonUrl}
        description={(product as any).editorialSummary} // Editorial summary yahan pass hogi
        pros={(product as any).benefits} // Benefits ko pros m pass kar diya
        cons={(product as any).thingsToKnow} // thingsToKnow ko cons m pass kar diya
        faqs={(product as any).faqs} // FAQs incorrectly pass ho rahe they pehle
      />

      {/* Related Products Section (Waisa hi rahega) */}
      {relatedProducts.length > 0 && (
        <div className="mt-16 sm:mt-24 border-t border-[color:var(--subtle-border)] pt-12">
          <h2 className="text-xl font-bold text-[color:var(--primary-text)] sm:text-2xl mb-6">
            Related Products
          </h2>
          {/* Pro Mobile 2-Column Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Extra types for type safety (optional but recommended)
type JsonLdProps = { data: object };
function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
