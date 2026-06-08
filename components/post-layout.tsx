import { ReactNode } from "react";
import { AmazonButton } from "./amazon-button";

// Star Rating Component (Built-in)
function ProductRating({ rating, reviewCount }: { rating: number; reviewCount: number }) {
  return (
    <div className="flex items-center gap-2 my-4">
      <div className="flex text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className={`w-5 h-5 ${i < Math.floor(rating) ? "fill-current" : "text-gray-300"}`} viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="text-sm font-bold text-gray-700">{rating} / 5.0</span>
      <span className="text-xs text-gray-500">({reviewCount} verified reviews)</span>
    </div>
  );
}

interface PostLayoutProps {
  title: string;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  productName: string;
  productUrl: string;
  children: ReactNode; // Yahan aapki details/description aayegi
}

export function PostLayout({ 
  title, 
  imageUrl, 
  rating, 
  reviewCount, 
  productName, 
  productUrl,
  children 
}: PostLayoutProps) {
  return (
    <article className="max-w-3xl mx-auto p-4 md:p-8 bg-white rounded-xl shadow-sm mt-8 border border-gray-100">
      
      {/* Title & Rating */}
      <header className="mb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 leading-tight">{title}</h1>
        <ProductRating rating={rating} reviewCount={reviewCount} />
      </header>

      {/* Product Image */}
      <div className="w-full h-auto bg-gray-50 rounded-2xl mb-8 flex items-center justify-center border border-gray-200 overflow-hidden">
         <img src={imageUrl} alt={title} className="object-cover w-full max-h-[400px]" />
      </div>

      {/* Main Content (Description, Pros/Cons etc) */}
      <div className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed mb-8">
        {children}
      </div>

      {/* Amazon Action Button */}
      <section className="mt-10 border-t border-gray-100 pt-8">
        <AmazonButton url={productUrl} productName={productName} />
      </section>
      
    </article>
  );
}
