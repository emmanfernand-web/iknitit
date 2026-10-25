import { siteConfig } from "@/config/site";
import type { Product } from "@/data/products";
import { productOrderMessage, whatsappLink } from "@/lib/format";
import { LinkButton } from "./Button";
import { InstagramIcon, WhatsAppIcon } from "./Icons";

export default function ProductActions({ product, compact = false }: { product: Product; compact?: boolean }) {
  const instagram = product.instagramUrl ?? siteConfig.instagramUrl;
  const size = compact ? "sm" : "md";
  return (
    <div className="flex flex-col gap-2">
      <LinkButton
        href={whatsappLink(productOrderMessage(product))}
        target="_blank"
        rel="noopener noreferrer"
        size={size}
        aria-label={`Pre-order ${product.name} via WhatsApp`}
      >
        <WhatsAppIcon className="h-5 w-5" /> {compact ? "WhatsApp" : "Order via WhatsApp"}
      </LinkButton>
      {instagram && (
        <LinkButton
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          variant="ghost"
          size={size}
          aria-label={`Lihat ${product.name} di Instagram`}
        >
          <InstagramIcon className="h-5 w-5" /> {compact ? "Instagram" : "Lihat di Instagram"}
        </LinkButton>
      )}
    </div>
  );
}
