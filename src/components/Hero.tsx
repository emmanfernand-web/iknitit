import Image from "next/image";
import { siteConfig } from "@/config/site";
import { whatsappLink } from "@/lib/format";
import { LinkButton } from "./Button";
import { StarIcon } from "./Icons";
import Reveal from "./Reveal";

const polaroid = "absolute w-[56%] rounded-3xl border-4 border-white object-cover shadow-warm-lg";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-10 md:grid-cols-2 md:gap-12 md:py-16">
      <Reveal>
        <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-sun px-4 py-1 text-sm font-bold text-ink">
          <StarIcon className="h-4 w-4" /> Amigurumi &amp; crochet custom
        </p>
        <h1 className="text-4xl font-bold text-balance text-ink sm:text-5xl lg:text-6xl">{siteConfig.tagline}</h1>
        <p className="mt-4 max-w-md text-lg text-ink-soft">
          Boneka rajut mungil yang lucu, dibuat dengan tangan. Pilih dari katalog, atau ceritakan idemu dan kami rajutkan khusus buat kamu.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <LinkButton href="#produk">Lihat Produk</LinkButton>
          <LinkButton href={whatsappLink(siteConfig.whatsappGreeting)} target="_blank" rel="noopener noreferrer" variant="secondary">
            Chat via WhatsApp
          </LinkButton>
        </div>
      </Reveal>

      <Reveal delay={120}>
        <div className="relative mx-auto aspect-square w-full max-w-md" role="img" aria-label="Tiga amigurumi buatan i knit it!: Miffy, Snoopy, dan Hello Kitty">
          <div className="absolute inset-[6%] rounded-full bg-sky" aria-hidden="true" />
          <div className="absolute right-[2%] top-[4%] h-[26%] w-[26%] rounded-full bg-bubble" aria-hidden="true" />
          <div className="absolute bottom-[4%] left-[6%] h-[20%] w-[20%] rounded-full bg-sun" aria-hidden="true" />
          <Image src="/images/produk/tanned-hello-kitty.jpg" alt="" width={600} height={600} priority className={`${polaroid} left-[2%] top-[4%] -rotate-6`} />
          <Image src="/images/produk/take-off-snoopy.jpeg" alt="" width={600} height={600} priority className={`${polaroid} right-[2%] top-[14%] rotate-6`} />
          <Image src="/images/produk/miffy-w-scarf.jpg" alt="" width={600} height={600} priority className={`${polaroid} bottom-[2%] left-[18%] -rotate-2`} />
        </div>
      </Reveal>
    </section>
  );
}
