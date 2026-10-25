import Image from "next/image";
import type { Product } from "@/data/products";
import { formatRupiah } from "@/lib/format";
import ProductActions from "./ProductActions";
import StatusBadge from "./StatusBadge";

export default function ProductCard({ product, onOpen }: { product: Product; onOpen: (p: Product, trigger: HTMLElement) => void }) {
  return (
    <article className="product-card flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-warm transition-shadow hover:shadow-warm-lg">
      <button
        type="button"
        onClick={(e) => onOpen(product, e.currentTarget)}
        className="group relative block text-left"
        aria-label={`Lihat detail ${product.name}`}
      >
        <Image
          src={product.images[0]}
          alt={`Foto ${product.name}`}
          width={600}
          height={600}
          className={`aspect-square w-full object-cover ${product.status === "soldout" ? "opacity-60" : ""}`}
        />
        <StatusBadge status={product.status} className="absolute right-3 top-3 shadow-sm" />
      </button>
      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <h3 className="text-lg font-bold leading-tight">{product.name}</h3>
        <p className="mt-1 text-lg font-extrabold text-berry">{product.price ? formatRupiah(product.price) : "Harga menyesuaikan"}</p>
        <p className="mt-1 line-clamp-2 flex-1 text-base text-ink-soft">{product.description}</p>
        <div className="mt-3">
          <ProductActions product={product} compact />
        </div>
      </div>
    </article>
  );
}
