import type { ProductStatus } from "@/data/products";

const map: Record<ProductStatus, { label: string; cls: string }> = {
  ready: { label: "Ready", cls: "bg-lime text-ink" },
  preorder: { label: "Pre-order", cls: "bg-sun text-ink" },
  soldout: { label: "Habis", cls: "bg-[#E4E6EE] text-ink" },
};

export default function StatusBadge({ status, className = "" }: { status: ProductStatus; className?: string }) {
  const s = map[status];
  return <span className={`inline-block rounded-full px-3 py-1 text-xs font-extrabold ${s.cls} ${className}`}>{s.label}</span>;
}
