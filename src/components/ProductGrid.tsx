"use client";

import { useRef, useState } from "react";
import type { Product } from "@/data/products";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import Reveal from "./Reveal";

export default function ProductGrid({ products }: { products: Product[] }) {
  const [selected, setSelected] = useState<Product | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  return (
    <section id="produk" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <Reveal>
        <h2 className="text-3xl font-bold sm:text-4xl">Katalog Produk</h2>
        <p className="mt-2 max-w-xl text-ink-soft">Semua produk sistem pre-order. Ketuk produk untuk lihat detail, atau langsung order lewat WhatsApp.</p>
      </Reveal>

      <ul className="mt-6 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4 max-[359px]:grid-cols-1">
        {products.map((p) => (
          <li key={p.id}>
            <ProductCard
              product={p}
              onOpen={(prod, el) => {
                triggerRef.current = el;
                setSelected(prod);
              }}
            />
          </li>
        ))}
      </ul>

      {selected && (
        <ProductModal
          product={selected}
          onClose={() => {
            setSelected(null);
            triggerRef.current?.focus();
          }}
        />
      )}
    </section>
  );
}
