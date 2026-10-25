import { siteConfig } from "@/config/site";
import { StarIcon } from "./Icons";
import Reveal from "./Reveal";

const steps = [
  { title: "Pilih produk atau kirim idemu", text: "Lihat katalog, atau pilih Custom Order kalau punya karakter dan desain sendiri." },
  { title: "Chat via WhatsApp / DM", text: "Kirim pesan untuk konfirmasi model, warna, harga, dan jadwal pengerjaan." },
  { title: "Bayar & tunggu dirajut", text: "Setelah pembayaran terkonfirmasi, pesananmu mulai dirajut lalu dikirim kalau sudah jadi." },
];

const stepColors = ["bg-bubble", "bg-sky", "bg-sun"];

export default function HowToOrder() {
  return (
    <section id="cara-order" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <Reveal>
        <h2 className="text-3xl font-bold sm:text-4xl">Cara Order</h2>
        <p className="mt-2 text-ink-soft">Gampang kok, cuma tiga langkah.</p>
      </Reveal>

      <ol className="mt-8 grid gap-4 md:grid-cols-3">
        {steps.map((s, i) => (
          <li key={s.title}>
            <Reveal delay={i * 100} className="h-full">
              <div className="h-full rounded-3xl bg-white p-5 shadow-warm">
                <span className={`flex h-12 w-12 items-center justify-center rounded-full border-2 border-ink font-display text-xl font-bold text-ink ${stepColors[i]}`} aria-hidden="true">
                  {i + 1}
                </span>
                <h3 className="mt-3 text-xl font-bold"><span className="sr-only">Langkah {i + 1}: </span>{s.title}</h3>
                <p className="mt-1 text-ink-soft">{s.text}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>

      <Reveal delay={150}>
        <div className="mt-6 grid gap-4 rounded-3xl border-2 border-dashed border-sky bg-butter p-5 sm:grid-cols-2">
          <div>
            <h3 className="flex items-center gap-2 text-lg font-bold"><StarIcon className="h-6 w-6 text-berry" /> Estimasi pengerjaan</h3>
            <p className="mt-1 text-ink-soft">{siteConfig.order.estimate}</p>
          </div>
          <div>
            <h3 className="flex items-center gap-2 text-lg font-bold"><StarIcon className="h-6 w-6 text-berry" /> Pesan custom</h3>
            <p className="mt-1 text-ink-soft">{siteConfig.order.custom}</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
