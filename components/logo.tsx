import Link from "next/link";

type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <Link href="/" className="flex items-center gap-3">
      {!compact ? (
        <div className="leading-none">
          <div className="flex items-baseline gap-0.5 text-[1.15rem] font-semibold tracking-[-0.05em] text-[color:var(--primary-text)] sm:text-[1.25rem]">
            <span className="text-[color:var(--accent)]">O</span>
            <span>Deals</span>
          </div>

          <div className="mt-1 text-[10px] uppercase tracking-[0.22em] text-[color:var(--secondary-text)] sm:text-[11px]">
            odeals.shop
          </div>
        </div>
      ) : (
        <div className="flex items-baseline gap-0.5 text-[1rem] font-semibold tracking-[-0.05em] text-[color:var(--primary-text)]">
          <span className="text-[color:var(--accent)]">O</span>
          <span>Deals</span>
        </div>
      )}
    </Link>
  );
}
