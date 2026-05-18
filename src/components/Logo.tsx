export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src="/logo-branco.png"
      alt="Kaptas Global"
      width={600}
      height={120}
      fetchPriority="high"
      decoding="async"
      className={`h-8 w-auto ${className}`}
    />
  );
}
