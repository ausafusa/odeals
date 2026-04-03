import Link from "next/link";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--subtle-border)] bg-[color:var(--surface)]">
      <div className="shell grid gap-8 py-10 md:grid-cols-[1fr_auto] md:items-end">
        <div className="space-y-3">
          <Logo />
          <p className="max-w-2xl text-sm leading-6 text-[color:var(--secondary-text)]">
            ODeals - curated deals for smarter shopping.
          </p>
          <p className="text-sm leading-6 text-[color:var(--secondary-text)]">
            Find trending products, compare quickly, and shop with confidence.
          </p>
          <p className="text-sm leading-6 text-[color:var(--secondary-text)]">
            As an Amazon Associate, we earn from qualifying purchases.
          </p>
        </div>

        <div className="flex flex-col items-start gap-3 text-sm font-medium text-[color:var(--secondary-text)] md:items-end">
          <Link href="/">Home</Link>
          <Link href="/categories">Categories</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/affiliate-disclaimer">Affiliate Disclaimer</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
