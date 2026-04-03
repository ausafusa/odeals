import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <Link
        href={`/products/${product.slug}`}
        className="card-media group block p-3"
      >
        <div className="absolute inset-x-5 top-4 h-16 rounded-full bg-[rgba(37,99,235,0.12)] blur-2xl" />
        <Image
          src={product.image}
          alt={product.title}
          width={640}
          height={480}
          sizes="(max-width: 639px) 44vw, (max-width: 1023px) 30vw, 22vw"
          className="relative z-10 h-full w-full rounded-[0.9rem] object-cover"
        />
      </Link>

      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <div className="mb-2 flex items-center justify-between gap-2">
          <span className="rounded-full bg-[color:var(--soft-surface)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[color:var(--accent)]">
            {product.category}
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[color:var(--secondary-text)]">
            Trending
          </span>
        </div>
        <Link
          href={`/products/${product.slug}`}
          className="line-clamp-2 text-[0.98rem] font-semibold leading-5 tracking-[-0.03em] text-[color:var(--primary-text)]"
        >
          {product.title}
        </Link>
        <p className="mt-2 line-clamp-2 text-[12px] leading-[1.15rem] text-[color:var(--secondary-text)]">
          Best for: {product.bestFor[0]}
        </p>
        <div className="mt-2 space-y-1.5">
          {product.benefits.slice(0, 2).map((benefit) => (
            <div key={benefit} className="flex items-start gap-1.5 text-[11px] leading-4 text-[color:var(--secondary-text)]">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
              <span className="line-clamp-2">{benefit}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 border-t border-[color:var(--subtle-border)] pt-3" />
        <div className="mt-auto flex flex-col gap-2">
          <p className="text-[10px] font-medium text-[color:var(--secondary-text)]">
            Paid link to Amazon
          </p>
          <a
            href={product.amazonUrl}
            target="_blank"
            rel="noreferrer"
            className="cta-button amazon-button w-full px-3 py-2 text-[12px]"
          >
            See Today&apos;s Price
          </a>
          <Link
            href={`/products/${product.slug}`}
            className="text-center text-[11px] font-semibold text-[color:var(--accent)]"
          >
            Why we picked it
          </Link>
        </div>
      </div>
    </article>
  );
}
