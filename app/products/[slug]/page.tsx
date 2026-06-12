import { notFound } from "next/navigation";
import Link from "next/link";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { PostLayout } from "@/components/post-layout"; // Hamara banaya hua layout

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

  // Related products logic
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4);

  return (
    <div className="shell py-8 sm:py-12 animate-fade-in">
      {/* Breadcrumbs */}
      <div className="mb-6 flex items-center gap-2 text-xs font-medium text-[color:var(--secondary-text)] sm:text-sm">
        <Link href="/" className="hover:text-[color:var(--primary-text)]">Home</Link>
        <span>/</span>
        <Link href={`/categories/${product.categorySlug}`} className="capitalize hover:text-[color:var(--primary-text)]">
          {product.category}
        </Link>
        <span>/</span>
        <span className="truncate text-[color:var(--primary-text)]">{product.title}</span>
      </div>

      {/* Yahan hum data map kar rahe hain */}
      <PostLayout
        title={product.title}
        imageUrl={product.image}
        rating={4.8} 
        reviewCount={125}
        productName={product.title}
        productUrl={product.amazonUrl}
        description={product.editorialSummary} // Yahan aapka content show hoga
        pros={product.benefits} // List of strings
        cons={product.thingsToKnow} // List of strings
        faqs={product.faqs.map(f => ({ q: f.question, a: f.answer }))} // Mapping FAQ format
      />

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16 border-t pt-12">
          <h2 className="text-xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
        </div>
      )}
    </div>
  );
}
