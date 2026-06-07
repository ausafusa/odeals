"use client";
export function FloatingShare() {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        text: "Check out this amazing deal!",
        url: window.location.href,
      }).catch(console.error);
    } else {
      // Fallback for desktop: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <button 
      onClick={handleShare}
      className="fixed bottom-6 right-6 z-50 bg-[#FFD814] text-black p-4 rounded-full shadow-2xl hover:scale-110 transition-transform border border-black"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    </button>
  );
}
