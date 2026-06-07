import Link from "next/link";
import { Logo } from "@/components/logo";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/categories", label: "Categories" },
  { href: "/categories/beauty", label: "Beauty" },
  { href: "/categories/gadgets", label: "Gadgets" },
  { href: "/categories/home-kitchen", label: "Home & Kitchen" },
  { href: "/affiliate-disclaimer", label: "Disclosure" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--subtle-border)] bg-[color:var(--header-bg)] backdrop-blur-xl">
      {/* Top Professional Banner */}
      <div className="w-full bg-gradient-to-r from-[#131921] to-[#1a232e] text-center py-2 px-4 shadow-sm">
        <p className="text-xs sm:text-sm font-semibold text-[#ffd700] tracking-wide">
          🚀 Worldwide Shipping Available | Best Amazon Deals Delivered to Your Doorstep
        </p>
      </div>

      <div className="shell py-3 sm:py-4">
        {/* Main Navbar Row */}
        <div className="flex items-center justify-between gap-3">
          <Logo />

          <nav className="hidden items-center gap-5 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[color:var(--secondary-text)] transition-colors hover:text-[color:var(--primary-text)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link href="/categories" className="cta-button cta-primary px-4 text-sm whitespace-nowrap">
            Explore picks
          </Link>
        </div>

        {/* Mobile/Tablet Category Scroll */}
        <nav className="mt-4 flex gap-2 overflow-x-auto pb-1 lg:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full border border-[color:var(--subtle-border)] bg-[color:var(--surface)] px-4 py-2 text-sm font-medium text-[color:var(--secondary-text)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
