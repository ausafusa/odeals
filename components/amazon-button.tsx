interface AmazonButtonProps {
  url: string;
  productName: string;
}

export function AmazonButton({ url, productName }: AmazonButtonProps) {
  const dealsLink = "https://amzn.to/4xf26js"; // Bonus Affiliate link

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
          <span className="text-xs font-semibold text-gray-500">OR EXPLORE</span>
          <hr className="flex-grow border-gray-200" />
      </div>

      {/* Section 2: Bonus Deals Link */}
      <div className="bonus-deals-card space-y-4">
        <h4 className="text-xs font-bold text-emerald-700 uppercase tracking-widest text-center">Daily Bonus Savings</h4>
        <a 
          href={dealsLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="group w-full flex items-center justify-center gap-3 p-4 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold text-md shadow-md hover:shadow-xl hover:scale-[1.01] transition-all duration-300"
        >
          <span className="text-lg">🔥</span> 
          <span>UNLOCK DAILY AMAZING DEALS</span>
          <svg className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </a>
      </div>
    </div>
  );
}
