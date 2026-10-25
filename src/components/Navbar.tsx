"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { whatsappLink } from "@/lib/format";
import { LinkButton } from "./Button";
import { CloseIcon, MenuIcon, WhatsAppIcon } from "./Icons";

const links = [
  { href: "#produk", label: "Produk" },
  { href: "#tentang", label: "Tentang" },
  { href: "#cara-order", label: "Cara Order" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const wa = whatsappLink(siteConfig.whatsappGreeting);

  return (
    <header className="sticky top-0 z-40 border-b-2 border-dashed border-sky bg-cream/95 backdrop-blur">
      <nav aria-label="Navigasi utama" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#" className="flex min-h-11 items-center gap-2 whitespace-nowrap font-display text-xl font-bold text-ink sm:text-2xl">
          <Image src={siteConfig.logo} alt="" width={36} height={36} className="h-9 w-9 rounded-full" />
          {siteConfig.name}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="inline-flex min-h-11 items-center font-semibold text-ink hover:text-berry">{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LinkButton href={wa} target="_blank" rel="noopener noreferrer" size="sm" className="max-md:hidden whitespace-nowrap">
            <WhatsAppIcon className="h-5 w-5" /> Order via WhatsApp
          </LinkButton>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink md:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <div
        id="menu-mobile"
        inert={!open}
        className={`grid bg-cream transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none md:hidden ${
          open ? "grid-rows-[1fr] border-t border-sky opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-4 pb-5 pt-2">
            <ul>
              {links.map((l, i) => (
                <li
                  key={l.href}
                  style={{ transitionDelay: open ? `${80 + i * 60}ms` : "0ms" }}
                  className={`transition-[opacity,transform] duration-300 motion-reduce:transition-none ${open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"}`}
                >
                  <a href={l.href} onClick={() => setOpen(false)} className="flex min-h-12 items-center border-b border-dashed border-sky text-lg font-semibold">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div
              style={{ transitionDelay: open ? `${80 + links.length * 60}ms` : "0ms" }}
              className={`transition-[opacity,transform] duration-300 motion-reduce:transition-none ${open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"}`}
            >
              <LinkButton href={wa} target="_blank" rel="noopener noreferrer" className="mt-4 w-full">
                <WhatsAppIcon className="h-5 w-5" /> Order via WhatsApp
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
