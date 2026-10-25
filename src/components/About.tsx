import Image from "next/image";
import { siteConfig } from "@/config/site";
import { valueIcons } from "./Icons";
import Reveal from "./Reveal";

const cardColors = ["bg-butter", "bg-sky/50", "bg-bubble/40"];

export default function About() {
  const { about } = siteConfig;
  return (
    <section id="tentang" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <div className="grid items-center gap-8 md:grid-cols-[2fr_3fr] md:gap-12">
        <Reveal>
          <Image
            src={siteConfig.logo}
            alt="Logo i knit it! berupa bintang kuning di atas kain hijau"
            width={453}
            height={453}
            className="mx-auto aspect-square w-full max-w-xs rounded-full border-4 border-white shadow-warm-lg md:-rotate-3"
          />
        </Reveal>
        <Reveal delay={100}>
          <h2 className="text-3xl font-bold sm:text-4xl">{about.heading}</h2>
          <div className="mt-4 space-y-4 text-ink-soft">
            {about.story.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <p className="mt-5 rounded-3xl border-2 border-dashed border-sky bg-white/60 p-4 text-ink-soft">{about.nameMeaning}</p>
        </Reveal>
      </div>

      <ul className="mt-10 grid gap-4 sm:grid-cols-3">
        {about.values.map((v, i) => {
          const Icon = valueIcons[v.icon];
          return (
            <li key={v.title}>
              <Reveal delay={i * 100} className="h-full">
                <div className={`h-full rounded-3xl p-5 shadow-warm ${cardColors[i % cardColors.length]}`}>
                  <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-cream text-berry">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="text-xl font-bold">{v.title}</h3>
                  <p className="mt-1 text-ink-soft">{v.text}</p>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
