"use client";
import { useEffect, useState } from "react";

export function FloatingShare() {
  const [currentUrl, setCurrentUrl] = useState("");

  // Ye ensure karega ke link sirf browser mein load ho (Next.js error se bachne ke liye)
  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const shareText = "Check out this amazing deal on ODeals!";

  // WhatsApp aur Facebook ke direct links
  const waLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + " " + currentUrl)}`;
  const fbLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;

  // Mobile ke liye native share options
  const handleNativeShare = () => {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        text: shareText,
        url: currentUrl,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(currentUrl);
      alert("Link copied to clipboard!");
    }
  };

  if (!currentUrl) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
      {/* Facebook Button */}
      <a 
        href={fbLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-[#1877F2] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center w-12 h-12"
        aria-label="Share on Facebook"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
      </a>

      {/* WhatsApp Button */}
      <a 
        href={waLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center w-12 h-12"
        aria-label="Share on WhatsApp"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 0C5.385 0 0 5.388 0 12.035c0 2.12.551 4.195 1.6 6.02L.03 24l6.096-1.597A11.96 11.96 0 0012.031 24c6.646 0 12.034-5.388 12.034-12.035C24.065 5.388 18.677 0 12.031 0zm3.627 17.202c-.521 1.464-2.49 2.015-3.42 2.128-.93.113-2.148.06-4.64-1.222-2.91-1.5-4.78-4.57-4.92-4.76-.14-.19-1.17-1.57-1.17-3.01 0-1.44.75-2.15 1.02-2.44.27-.29.58-.36.78-.36.2 0 .4 0 .58.01.2.01.45-.08.69.51.25.6.85 2.08.92 2.24.07.16.12.35.02.54-.1.19-.15.31-.3.48-.15.17-.31.36-.45.5-.15.16-.31.33-.13.64.18.31.81 1.34 1.74 2.16 1.2.1 2.08 1.42 2.26 1.7.18.28.29.43.08.64-.21.21-.8.81-1.02 1.08-.22.27-.45.54-.15.85.3.31 1.34.81 1.84.81.5 0 .81-.31 1.08-1.02z"/></svg>
      </a>

      {/* Main Share Button (for other apps) */}
      <button 
        onClick={handleNativeShare}
        className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center w-12 h-12"
        aria-label="More Share Options"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
      </button>
    </div>
  );
}
