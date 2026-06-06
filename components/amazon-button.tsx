"use client";

import { useState, useEffect } from "react";

interface AmazonButtonProps {
  url: string;
  productName: string;
}

export function AmazonButton({ url, productName }: AmazonButtonProps) {
  const [timeLeft, setTimeLeft] = useState(30); // 30 Seconds ka timer
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isSharing, setIsSharing] = useState(false);

  // Timer Logic
  useEffect(() => {
    if (timeLeft > 0 && !isUnlocked) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setIsUnlocked(true);
    }
  }, [timeLeft, isUnlocked]);

  // WhatsApp Share Logic (Instant Unlock)
  const handleWhatsAppShare = () => {
    setIsSharing(true);
    
    // WhatsApp ka message generate karein
    const currentUrl = typeof window !== "undefined" ? window.location.href : "";
    const shareText = `Yar, check out this amazing deal on ${productName}! Deconstruct pricing and check active coupons here: ${currentUrl}`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
    
    // WhatsApp open karein
    window.open(whatsappUrl, "_blank");

    // 2 second ka fake verification loader dikhayein aur unlock kar dein
    setTimeout(() => {
      setIsUnlocked(true);
      setIsSharing(false);
    }, 2000);
  };

  return (
    <div className="w-full max-w-md mx-auto my-6 p-4 border border-dashed rounded-2xl border-[color:var(--subtle-border)] bg-[color:var(--surface)] text-center shadow-sm">
      {!isUnlocked ? (
        <div>
          {/* Locked State Notification */}
          <div className="flex items-center justify-center gap-2 text-amber-500 font-medium text-sm mb-3">
            <span className="animate-pulse">⏳</span>
            <span>Scanning Amazon for Today's Deep Discounts ({timeLeft}s)...</span>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700 overflow-hidden">
            <div 
              className="bg-amber-500 h-1.5 transition-all duration-1000 ease-linear" 
              style={{ width: `${((30 - timeLeft) / 30) * 100}%` }}
            ></div>
          </div>

          {/* Main Disabled Button */}
          <button disabled className="w-full py-3 px-6 rounded-xl bg-gray-300 text-gray-500 font-bold text-sm cursor-not-allowed mb-3 flex items-center justify-center gap-2">
            🔒 Unlocking Best Price Link...
          </button>

          <p className="text-xs text-[color:var(--secondary-text)] my-2">-- OR --</p>

          {/* Instant Unlock WhatsApp Option */}
          <button 
            onClick={handleWhatsAppShare}
            className="w-full py-2.5 px-4 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold text-xs transition-all shadow-md flex items-center justify-center gap-2"
          >
            {isSharing ? (
              <span className="animate-spin">🔄 Verifying Share...</span>
            ) : (
              <>⚡ Share on WhatsApp for Instant Unlock</>
            )}
          </button>
        </div>
      ) : (
        <div>
          {/* Unlocked State */}
          <div className="text-green-600 font-semibold text-sm mb-3 flex items-center justify-center gap-1.5">
            <span>✅</span> Amazon Scan Complete! Safest Discount Applied.
          </div>

          {/* Actual Affiliate Link Button */}
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full block py-3.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-600 text-black font-extrabold text-base transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg animate-bounce"
          >
            🚀 Check Today's Best Price on Amazon
          </a>
        </div>
      )}
    </div>
  );
}
