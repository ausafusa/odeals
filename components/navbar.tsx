import Link from 'next/link';

export function Navbar() {
  return (
    <div className="w-full flex flex-col">
      {/* Dynamic Global Shipping Banner */}
      <div className="w-full bg-gradient-to-r from-[#131921] to-[#1a232e] text-center py-2 px-4 shadow-md border-b border-[#ffd700]/20">
        <p className="text-[11px] sm:text-sm font-semibold text-white tracking-wide">
          🌎 <span className="text-[#ffd700]">Verified Global Shipping</span> |
          <span className="text-[#a0a0a0]"> Exclusive Deals Delivered to your doorstep.</span>
        </p>
      </div>

      {/* Navigation Bar */}
      <nav className="w-full bg-white border-b shadow-sm">
        <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-extrabold text-[#1a1a1a]">oDeals<span className="text-blue-600">.</span></span>
          </Link>
          
          <div className="flex gap-4 items-center">
            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition">Home</Link>
            <a href="https://amzn.to/4xf26js" target="_blank" className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-md hover:bg-blue-700 transition">
              Shop Now
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
