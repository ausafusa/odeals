"use client";
import { useState, useEffect } from "react";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check agar user ne pehle accept kiya hai
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-white p-4 rounded-xl shadow-lg border border-gray-200 z-50 animate-in fade-in slide-in-from-bottom-5">
      <p className="text-sm text-gray-600 mb-4">
        Hum aapke experience ko behtar banane aur analytics ke liye cookies ka istemal karte hain. 
        Hamari <a href="/privacy-policy" className="text-blue-600 underline">Privacy Policy</a> parhein.
      </p>
      <button 
        onClick={acceptCookies}
        className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-bold hover:bg-blue-700 transition"
      >
        Accept
      </button>
    </div>
  );
}
