export default function StitchDivider() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4" aria-hidden="true">
      <svg className="block h-3 w-full text-sky" preserveAspectRatio="none">
        <line x1="0" y1="6" x2="100%" y2="6" stroke="currentColor" strokeWidth="3" strokeDasharray="10 9" strokeLinecap="round" strokeOpacity="1" />
      </svg>
    </div>
  );
}
