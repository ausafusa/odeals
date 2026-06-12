import { notFound } from "next/navigation";
import Link from "next/link";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { AmazonButton } from "@/components/amazon-button";
import { PostLayout } from "@/components/post-layout"; // <--- Ye import lazmi hai

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

// ... generateStaticParams waisa hi rahega ...

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="shell py-8 sm:py-12">
      {/* PostLayout ko use karein */}
      <PostLayout
        title={product.title}
        imageUrl={product.image}
        rating={4.8} // Agar aapke data mein rating hai toh product.rating likhein
        reviewCount={100} // Agar data mein hai toh product.reviewCount
        productName={product.title}
        productUrl={(product as any).amazonUrl}
        description={(product as any).description || "Product description goes here..."}
        pros={(product as any).pros}
        cons={(product as any).cons}
        faqs={(product as any).faqs}
      />
      
      {/* Related Products niche hi rahenge */}
      {/* ... relatedProducts logic ... */}
    </div>
  );
}
