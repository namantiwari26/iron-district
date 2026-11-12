export default function IronLogo({ size = 36, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Background square */}
      <rect width="36" height="36" fill="#D62020" rx="2" />
      {/* X strokes */}
      <line x1="8" y1="8" x2="28" y2="28" stroke="#EDEDED" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="28" y1="8" x2="8" y2="28" stroke="#EDEDED" strokeWidth="3.5" strokeLinecap="round" />
      {/* Vertical slash accent */}
      <line x1="18" y1="4" x2="18" y2="32" stroke="#EDEDED" strokeWidth="1.5" strokeLinecap="round" opacity="0.35" />
    </svg>
  );
}

