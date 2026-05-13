export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <svg viewBox="0 0 100 100" className="w-8 h-8 text-current" fill="none" stroke="currentColor" strokeWidth="6" strokeLinejoin="miter">
        <path d="M 10,10 L 30,10 L 50,30 L 70,10 L 90,10 L 50,50 L 90,90 L 70,90 L 50,70 L 30,90 L 10,90 Z" />
      </svg>
      <span className="text-[24px] font-bold tracking-tight lowercase">
        aptasglobal
      </span>
    </div>
  );
}
