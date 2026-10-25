/**
 * DAFTAR PRODUK i knit it!
 * Tambah produk = salin satu blok { ... } lalu ubah isinya.
 * Lihat README.md untuk panduan lengkapnya.
 */

export type ProductStatus = "ready" | "preorder" | "soldout";

export type Product = {
  id: string;
  name: string;
  /** Harga dalam rupiah, angka saja tanpa titik. Kosongkan untuk "Harga menyesuaikan". */
  price?: number;
  description: string;
  /** Foto pertama jadi foto utama. Taruh file di folder public/images/produk */
  images: string[];
  status: ProductStatus;
  /** Opsional: link Instagram khusus produk ini. Kalau kosong, pakai link di src/config/site.ts */
  instagramUrl?: string;
  /** Opsional: isi pesan WhatsApp otomatis. Kalau kosong, dibuat dari nama produk. */
  orderMessage?: string;
};

const products: Product[] = [
  {
    id: "miffy-w-scarf",
    name: "Miffy w/ Scarf",
    price: 85000,
    description:
      "Amigurumi Miffy berbulu lembut dengan syal rajut warna-warni. Mungil, empuk, dan cocok jadi hadiah atau teman di meja.",
    images: ["/images/produk/miffy-w-scarf.jpg"],
    status: "preorder",
  },
  {
    id: "take-off-snoopy",
    name: "Take-off Snoopy",
    price: 160000,
    description:
      "Snoopy dalam gaya pilot lengkap dengan topi aviator dan syal merah. Detail kecilnya dirajut satu per satu.",
    images: ["/images/produk/take-off-snoopy.jpeg"],
    status: "preorder",
  },
  {
    id: "tanned-hello-kitty",
    name: "Tanned Hello Kitty",
    price: 155000,
    description:
      "Hello Kitty versi liburan pantai dengan kulit tan, rok hijau, dan bunga di telinga. Ceria banget buat koleksi.",
    images: ["/images/produk/tanned-hello-kitty.jpg"],
    status: "preorder",
  },
  {
    id: "custom-order",
    name: "Custom Order",
    description:
      "Punya karakter, hewan peliharaan, atau ide hadiah sendiri? Ceritakan ke kami, nanti dirajut khusus buat kamu. Bisa amigurumi, gantungan kunci, bunga, tas, sampai baju.",
    images: ["/images/produk/custom.svg"],
    status: "preorder",
    orderMessage: "Halo i knit it!, aku mau pesan custom. Ide aku: ",
  },
];

/**
 * Satu-satunya pintu masuk data produk untuk seluruh website.
 * Nanti isinya bisa diganti membaca Google Sheets (CSV), komponen tidak perlu diubah.
 */
export async function getProducts(): Promise<Product[]> {
  return products;
}
