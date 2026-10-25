import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

const variants = {
  primary: "bg-bubble text-ink border-2 border-ink hover:bg-[#f27fb8] shadow-[0_3px_0_0_var(--ink)] active:translate-y-0.5 active:shadow-none",
  secondary: "bg-sky text-ink border-2 border-ink hover:bg-[#7bbcf3] shadow-[0_3px_0_0_var(--ink)] active:translate-y-0.5 active:shadow-none",
  ghost: "bg-transparent text-ink border-2 border-ink/70 hover:bg-butter",
};

const size = {
  md: "min-h-11 px-5 text-base",
  sm: "min-h-11 px-4 text-sm",
};

type Common = { variant?: keyof typeof variants; size?: keyof typeof size };

function cls(v: keyof typeof variants, s: keyof typeof size, extra?: string) {
  return `inline-flex items-center justify-center gap-2 rounded-full font-bold transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${variants[v]} ${size[s]} ${extra ?? ""}`;
}

export function LinkButton({ variant = "primary", size: s = "md", className, ...props }: Common & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a {...props} className={cls(variant, s, className)} />;
}

export function Button({ variant = "primary", size: s = "md", className, ...props }: Common & ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button type="button" {...props} className={cls(variant, s, className)} />;
}
