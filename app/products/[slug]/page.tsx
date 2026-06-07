import { notFound } from "next/navigation";
import Link from "next/link";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { AmazonButton } from "@/components/amazon-button";

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

  return (
    <div className="shell py-8 sm:py-12 animate-fade-in">
      {/* Breadcrumbs */}
      <div className="mb-6 flex items-center gap-2 text-xs font-medium text-[color:var(--secondary-text)] sm:text-sm">
        <Link href="/" className="hover:text-[color:var(--primary-text)]">Home</Link>
        <span>/</span>
        <Link href={`/categories/${product.category}`} className="capitalize hover:text-[color:var(--primary-text)]">
          {product.category.replace("-", " ")}
        </Link>
        <span>/</span>
        <span className="truncate text-[color:var(--primary-text)] max-w-[150px] sm:max-w-none">{product.title}</span>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
        {/* Product Image */}
        <div className="flex items-center justify-center rounded-2xl border border-[color:var(--subtle-border)] bg-[color:var(--surface)] p-6 sm:p-8">
          <img 
            src={product.image} 
            alt={product.title} 
            className="max-h-[300px] w-auto object-contain sm:max-h-[400px]"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">
          <span className="inline-block self-start rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            {product.category.replace("-", " ")}
          </span>
          <h1 className="mt-3 text-2xl font-extrabold tracking-tight text-[color:var(--primary-text)] sm:text-4xl">
            {product.title}
          </h1>

          {/* Dynamic Locked Pro Amazon Button */}
          <div className="mt-6">
            <AmazonButton url={(product as any).amazonUrl} productName={product.title} />
          </div>
        </div>
      </div>

      {/* Related Products Section */}
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
