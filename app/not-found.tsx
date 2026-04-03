import Link from "next/link";

export default function NotFound() {
  return (
    <div className="shell flex min-h-[60vh] items-center justify-center py-16">
      <div className="glass-card max-w-xl rounded-[2rem] px-8 py-10 text-center">
        <p className="eyebrow">Page not found</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em]">
          This offer slipped away.
        </h1>
        <p className="mt-4 text-[color:var(--secondary-text)]">
          Head back to the homepage to browse available categories and demo products.
        </p>
        <Link href="/" className="cta-button cta-primary mt-6">
          Return home
        </Link>
      </div>
    </div>
  );
}
