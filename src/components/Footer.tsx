import { siteConfig } from "@/config/site";
import { whatsappLink } from "@/lib/format";
import Image from "next/image";
import { InstagramIcon, TikTokIcon, WhatsAppIcon } from "./Icons";

export default function Footer() {
  const links = [
    { href: siteConfig.instagramUrl, label: "Instagram", Icon: InstagramIcon },
    { href: siteConfig.tiktokUrl, label: "TikTok", Icon: TikTokIcon },
    { href: whatsappLink(siteConfig.whatsappGreeting), label: "WhatsApp", Icon: WhatsAppIcon },
  ].filter((l) => l.href);

  return (
    <footer className="mt-8 bg-ink text-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="flex items-center justify-center gap-2 font-display text-2xl font-bold sm:justify-start">
            <Image src={siteConfig.logo} alt="" width={36} height={36} className="h-9 w-9 rounded-full" /> {siteConfig.name}
          </p>
          <p className="mt-1 text-cream/80">{siteConfig.tagline}</p>
        </div>
        <ul className="flex flex-wrap justify-center gap-3">
          {links.map(({ href, label, Icon }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-cream/40 px-4 font-bold hover:bg-cream/10">
                <Icon className="h-5 w-5" /> {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="border-t border-cream/20 py-4 text-center text-sm text-cream/80">
        &copy; {new Date().getFullYear()} {siteConfig.name}. Dirajut dengan sepenuh hati.
      </p>
    </footer>
  );
}
