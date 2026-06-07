export function AmazonButton({ url, productName }: AmazonButtonProps) {
  const dealsLink = "https://amzn.to/4xf26js"; 

  return (
    <div className="flex flex-col gap-3 mt-6">
      {/* View Product Button */}
      <a 
        href={url} 
        target="_blank" 
        className="w-full text-center px-5 py-3 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-500 transition"
      >
        View {productName} on Amazon
      </a>

      {/* Bonus Deals Button */}
      <a 
        href={dealsLink} 
        target="_blank" 
        className="w-full text-center px-5 py-3 rounded-lg border-2 border-green-600 text-green-700 text-sm font-bold hover:bg-green-50 transition"
      >
        🎁 View Today's Top Amazon Deals
      </a>
    </div>
  );
}
