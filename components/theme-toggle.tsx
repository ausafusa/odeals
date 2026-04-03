"use client";

import { useEffect, useState } from "react";

type ThemeMode = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>("light");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("odeals-theme") as ThemeMode | null;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    const nextTheme = savedTheme ?? systemTheme;
    document.body.dataset.theme = nextTheme;
    setTheme(nextTheme);
    setReady(true);
  }, []);

  function toggleTheme() {
    const nextTheme: ThemeMode = theme === "dark" ? "light" : "dark";
    document.body.dataset.theme = nextTheme;
    window.localStorage.setItem("odeals-theme", nextTheme);
    setTheme(nextTheme);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle theme-toggle-floating"
      aria-label={ready && theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      title={ready && theme === "dark" ? "Light mode" : "Dark mode"}
    >
      {ready && theme === "dark" ? (
        <svg
          aria-hidden="true"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
          <path d="M12 3V5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M12 18.5V21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M3 12H5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M18.5 12H21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M5.6 5.6L7.3 7.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M16.7 16.7L18.4 18.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M16.7 7.3L18.4 5.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M5.6 18.4L7.3 16.7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ) : (
        <svg
          aria-hidden="true"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 15.5C18.2 15.8 17.35 16 16.45 16C12.34 16 9 12.66 9 8.55C9 7.65 9.2 6.8 9.5 6C6.86 6.94 5 9.45 5 12.4C5 16.15 8.05 19.2 11.8 19.2C14.75 19.2 17.26 17.34 18.2 14.7C17.94 14.99 17.54 15.26 17.1 15.43"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}
