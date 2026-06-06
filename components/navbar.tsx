import Link from "next/link";
import { Logo } from "@/components/logo";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/categories", label: "Categories" },
  { href: "/categories/beauty", label: "Beauty" },
  { href: "/categories/gadgets", label: "Gadgets" },
   { href: "/categories/gadgets", label: "Home & Kitchen" },
  { href: "/affiliate-disclaimer", label: "Disclosure" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--subtle-border)] bg-[color:var(--header-bg)] backdrop-blur-xl">
      <div className="shell py-3 sm:py-4">
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

          <Link href="/categories" className="cta-button cta-primary px-4 text-sm">
            Explore picks
          </Link>
        </div>

        <nav className="mt-3 flex gap-2 overflow-x-auto pb-1 lg:hidden">
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
