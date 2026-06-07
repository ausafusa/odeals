interface AmazonButtonProps {
  url: string;
  productName: string;
}

export function AmazonButton({ url, productName }: AmazonButtonProps) {
  const dealsLink = "https://amzn.to/4xf26js";

  return (
    <div className="flex flex-col gap-5 mt-8 p-6 bg-gray-50/50 rounded-2xl border border-gray-100 shadow-inner">
      
      {/* Section 1: Main Product Button */}
      <div className="main-deal-card space-y-4">
        <h4 className="text-xs font-bold text-blue-600 uppercase tracking-widest text-center">Featured Product</h4>
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="group w-full flex items-center justify-between p-5 rounded-2xl bg-white border border-blue-100 shadow-sm hover:border-blue-400 hover:shadow-lg transition-all duration-300"
        >
          <div className="flex flex-col">
            <span className="text-lg font-bold text-[#1a1a1a] group-hover:text-blue-700 transition">Get It on Amazon.com</span>
            <span className="text-sm text-gray-600">Official Link for <span className='font-semibold'>{productName}</span></span>
          </div>
          <div className="p-3 bg-blue-50 rounded-full">
              <svg className="w-6 h-6 text-blue-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </div>
        </a>
      </div>

      <div className="flex items-center gap-3">
          <hr className="flex-grow border-gray-200" />
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Wait, There's More</span>
          <hr className="flex-grow border-gray-200" />
      </div>

      {/* Section 2: Bonus Deals Link */}
      <div className="bonus-deals-card space-y-4 relative">
        <div className="absolute inset-0 bg-emerald-500 rounded-full blur-md opacity-40 animate-pulse"></div>
        
        <a 
          href={dealsLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative group w-full flex items-center justify-center gap-3 p-4 rounded-full bg-gradient-to-r from-emerald-600 to-green-500 text-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-emerald-400/50"
        >
          <span className="text-2xl animate-pulse group-hover:scale-110 transition-transform duration-300">🔥</span> 
          
          <div className="flex flex-col items-center leading-tight z-10">
            <span className="text-[15px] sm:text-[17px] font-extrabold tracking-widest uppercase text-white drop-shadow-md">
              UNLOCK 1,000+ DEALS
            </span>
            <span className="text-xs sm:text-sm font-medium text-emerald-50 mt-1">
              <span className="font-extrabold text-[#1a1a1a] bg-[#FFD814] px-2 py-0.5 rounded shadow-sm">UP TO 43% OFF</span>
            </span>
          </div>
          
          {/* Ye rahi animation class */}
          <svg className="w-8 h-8 text-white animate-point z-10 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.5} d="M13 5l7 7m0 0l-7 7m7-7H5" /></svg>
        </a>
      </div>
    </div>
  );
}
