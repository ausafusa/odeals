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
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      {/* Top Professional Banner */}
      <div className="w-full bg-gradient-to-r from-[#131921] to-[#232f3e] text-center py-2 px-4">
        <p className="text-xs sm:text-sm font-bold text-[#FFD814] tracking-wide uppercase">
          🚀 Worldwide Shipping Available | Best Amazon Deals
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        {/* Main Navbar Row */}
        <div className="flex items-center justify-between gap-4">
          <Logo />

          {/* Desktop Nav with Hover Effect */}
          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[15px] font-semibold text-gray-700 transition-all duration-300 hover:text-blue-600 hover:underline decoration-blue-600 underline-offset-8"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link 
            href="/categories" 
            className="hidden lg:block bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg hover:bg-blue-700 transition-transform hover:scale-105"
          >
            Explore Picks
          </Link>
        </div>

        {/* Mobile/Tablet Category Scroll */}
        <nav className="mt-4 flex gap-3 overflow-x-auto pb-2 lg:hidden scrollbar-hide">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-600 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
