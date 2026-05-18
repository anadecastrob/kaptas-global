export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src="/logo-branco.png"
      alt="Kaptas Global"
      className={`h-8 w-auto ${className}`}
    />
  );
}
