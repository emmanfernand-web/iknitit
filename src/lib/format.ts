import { siteConfig } from "@/config/site";
import type { Product } from "@/data/products";

export function formatRupiah(value: number): string {
  return "Rp" + new Intl.NumberFormat("id-ID").format(value);
}

export function whatsappLink(message: string): string {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function productOrderMessage(product: Product): string {
  return product.orderMessage ?? `Halo i knit it!, aku mau pre-order "${product.name}". Boleh tahu estimasi pengerjaannya?`;
}
