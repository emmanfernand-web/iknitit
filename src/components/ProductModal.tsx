"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Product } from "@/data/products";
import { formatRupiah } from "@/lib/format";
import { CloseIcon } from "./Icons";
import ProductActions from "./ProductActions";
import StatusBadge from "./StatusBadge";

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  const [index, setIndex] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  });

  useEffect(() => {
    closeRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onCloseRef.current();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const items = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      const current = document.activeElement;
      if (e.shiftKey && (current === first || !dialogRef.current.contains(current))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && (current === last || !dialogRef.current.contains(current))) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  return (
    <div
      className="backdrop fixed inset-0 z-50 flex items-end justify-center bg-ink/70 sm:items-center sm:p-6"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="sheet relative max-h-[92dvh] w-full max-w-3xl overflow-y-auto rounded-t-[2rem] bg-cream shadow-warm-lg sm:max-h-[88dvh] sm:rounded-[2rem]"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Tutup detail produk"
          className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-cream/95 shadow-warm"
        >
          <CloseIcon className="h-6 w-6" />
        </button>

        <div className="grid gap-5 p-4 sm:grid-cols-2 sm:p-6">
          <div>
            <Image
              src={product.images[index]}
              alt={`Foto ${product.name} ${index + 1} dari ${product.images.length}`}
              width={800}
              height={800}
              className="aspect-square w-full rounded-3xl object-cover"
            />
            {product.images.length > 1 && (
              <ul className="mt-3 flex gap-2">
                {product.images.map((src, i) => (
                  <li key={src}>
                    <button
                      type="button"
                      onClick={() => setIndex(i)}
                      aria-label={`Tampilkan foto ${i + 1}`}
                      aria-current={i === index}
                      className={`block h-14 w-14 overflow-hidden rounded-xl border-2 ${i === index ? "border-ink" : "border-transparent opacity-80"}`}
                    >
                      <Image src={src} alt="" width={112} height={112} className="h-full w-full object-cover" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2 pr-12 sm:pr-0">
              <StatusBadge status={product.status} />
              
            </div>
            <h3 id="modal-title" className="mt-2 text-2xl font-bold sm:text-3xl">{product.name}</h3>
            <p className="mt-1 text-xl font-extrabold text-berry">{product.price ? formatRupiah(product.price) : "Harga menyesuaikan"}</p>
            <p className="mt-3 flex-1 text-ink-soft">{product.description}</p>
            <div className="mt-5">
              <ProductActions product={product} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
