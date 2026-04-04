"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { products } from "@/lib/products";

export default function HomeSearch() {
  const [query, setQuery] = useState("");

  const filteredProducts = useMemo(() => {
    const q = query.trim().toLowerCase();

    if (!q) return [];

    return products.filter((product) => {
      return (
        product.title.toLowerCase().includes(q) ||
        product.slug.toLowerCase().includes(q) ||
        product.tagline.toLowerCase().includes(q) ||
        product.shortBenefits.toLowerCase().includes(q) ||
        product.bestFor.join(" ").toLowerCase().includes(q)
      );
    });
  }, [query]);

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
          Search any product from our picks
        </h2>

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search product name... e.g. mirror, facial brush, projector"
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
        />

        {query && (
          <div className="mt-4 space-y-2">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="block rounded-xl border border-slate-200 p-3 hover:border-blue-500 dark:border-slate-700"
                >
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">
                    {product.title}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {product.shortBenefits}
                  </div>
                </Link>
              ))
            ) : (
              <div className="text-sm text-slate-500">
                No matching product found. Try another keyword.
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
