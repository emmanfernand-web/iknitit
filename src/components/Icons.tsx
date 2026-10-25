type IconProps = { className?: string };
const base = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };

export function YarnIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M4.5 9c4-2 11-2 15 0M3.8 13c5-2.5 11.500-2.500 16.400 0M6 17.500c3.500-1.500 8.500-1.500 12 0" />
      <path d="M17 19.500c2 .5 3.500 1.500 3.500 2" />
    </svg>
  );
}

export function HookIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M19 3 6 16" />
      <path d="M19 3c1.500 1.500 1 3.500-.5 4" />
      <path d="M6 16 4 21l5-2" />
      <path d="M13 9.500l1.500 1.500" />
    </svg>
  );
}

export function HeartIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 20s-7.500-4.500-7.500-10A4.500 4.500 0 0 1 12 7a4.500 4.500 0 0 1 7.500 3c0 5.500-7.500 10-7.500 10Z" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 20l1.300-4.200A8 8 0 1 1 8.200 18.800L4 20Z" />
      <path d="M9 8.500c0 3 2.500 5.500 5.500 6l1-1.200-1.800-1-.8.700c-.8-.4-1.600-1.200-2-2l.7-.8-1-1.800L9 8.500Z" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3.500" y="3.500" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r=".6" fill="currentColor" />
    </svg>
  );
}

export function TikTokIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M14 4v10.500a3.500 3.500 0 1 1-3.500-3.500" />
      <path d="M14 4c.3 2.500 1.800 4 4.500 4.200" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function StarIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3.500l2.600 5.300 5.800.8-4.200 4.100 1 5.800L12 16.800l-5.200 2.700 1-5.800-4.200-4.100 5.800-.8L12 3.500Z" />
    </svg>
  );
}

export const valueIcons = { hook: HookIcon, yarn: YarnIcon, heart: HeartIcon, star: StarIcon };
