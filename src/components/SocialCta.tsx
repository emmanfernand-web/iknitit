import { siteConfig } from "@/config/site";
import { whatsappLink } from "@/lib/format";
import { LinkButton } from "./Button";
import { InstagramIcon, WhatsAppIcon } from "./Icons";
import Reveal from "./Reveal";

export default function SocialCta() {
  return (
    <section id="ikuti" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <Reveal>
        <div className="rounded-[2rem] bg-sky p-6 text-center sm:p-10">
          <h2 className="text-3xl font-bold sm:text-4xl">Ikuti proses pembuatannya</h2>
          <p className="mx-auto mt-2 max-w-md text-ink">Intip karya terbaru dan cara tiap amigurumi dirajut di Instagram.</p>
          <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
            {siteConfig.instagramUrl && (
              <LinkButton href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer">
                <InstagramIcon className="h-5 w-5" /> Instagram
              </LinkButton>
            )}
            <LinkButton href={whatsappLink(siteConfig.whatsappGreeting)} target="_blank" rel="noopener noreferrer" variant="ghost">
              <WhatsAppIcon className="h-5 w-5" /> WhatsApp
            </LinkButton>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
