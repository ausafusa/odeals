import { AmazonButton } from "./amazon-button";

interface FAQItem {
  q: string;
  a: string;
}

interface PostLayoutProps {
  title: string;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  productName: string;
  productUrl: string;
  description: string; // Simple text ya HTML string
  pros?: string[];     // ["Pro 1", "Pro 2"] ki shakwal mein
  cons?: string[];     // ["Con 1", "Con 2"] ki shakwal mein
  faqs?: FAQItem[];    // [{q: "Sawal", a: "Jawab"}] ki shakwal mein
}

export function PostLayout({ 
  title, imageUrl, rating, reviewCount, productName, productUrl, description, pros, cons, faqs 
}: PostLayoutProps) {
  return (
    <article className="max-w-3xl mx-auto p-4 md:p-8 bg-white rounded-xl shadow-sm mt-8 border border-gray-100">
      
      {/* 1. Title & Stars */}
      <header className="mb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 leading-tight">{title}</h1>
        <div className="flex items-center gap-2 my-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className={`w-5 h-5 ${i < Math.floor(rating) ? "fill-current" : "text-gray-300"}`} viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm font-bold text-gray-700">{rating} / 5.0</span>
          <span className="text-xs text-gray-500">({reviewCount} reviews)</span>
        </div>
      </header>

      {/* 2. Image */}
      <div className="w-full h-auto bg-gray-50 rounded-2xl mb-6 flex items-center justify-center border border-gray-200 overflow-hidden">
         <img src={imageUrl} alt={title} className="object-cover w-full max-h-[400px]" />
      </div>

      {/* 3. Description */}
      <div className="prose prose-lg text-gray-700 mb-8">
        <h2 className="text-xl font-bold mb-2 text-gray-900">Product Overview</h2>
        <p>{description}</p>
      </div>

      {/* 4. Pros & Cons (Automatic generated agar data doge) */}
      {(pros || cons) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          {pros && (
            <div className="p-4 bg-green-50 rounded-xl border border-green-100">
              <h4 className="font-bold text-green-800 mb-2">Pros 👍</h4>
              <ul className="text-sm text-green-700 list-disc pl-4 space-y-1">
                {pros.map((pro, i) => <li key={i}>{pro}</li>)}
              </ul>
            </div>
          )}
          {cons && (
            <div className="p-4 bg-red-50 rounded-xl border border-red-100">
              <h4 className="font-bold text-red-800 mb-2">Cons 👎</h4>
              <ul className="text-sm text-red-700 list-disc pl-4 space-y-1">
                {cons.map((con, i) => <li key={i}>{con}</li>)}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* 5. FAQs (Automatic generated) */}
      {faqs && faqs.length > 0 && (
        <div className="mt-8 border-t pt-6">
          <h2 className="text-xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 text-sm mb-1">Q: {faq.q}</h4>
                <p className="text-gray-600 text-sm">A: {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 6. Amazon Button */}
      <section className="mt-8 border-t pt-6">
        <AmazonButton url={productUrl} productName={productName} />
      </section>
      
    </article>
  );
}
