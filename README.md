# Website i knit it!

Landing page + katalog produk untuk brand crochet **i knit it!** (amigurumi & custom crochet). Dibuat dengan Next.js, TypeScript, dan Tailwind CSS. Website ini statis: tanpa server dan tanpa database, jadi bisa di-hosting gratis.

## 1. Menjalankan di komputer sendiri

Pastikan Node.js (versi 20 ke atas) sudah terpasang, lalu di terminal:

```bash
npm install
npm run dev
```

Buka http://localhost:3000. Setiap kamu menyimpan perubahan, tampilan otomatis ter-update.

Untuk mengecek hasil akhir sebelum online: `npm run build` (hasilnya di folder `out/`).

## 2. Mengganti nomor WhatsApp, link Instagram, dan teks

Semuanya ada di satu file: **`src/config/site.ts`**. Ganti teks di antara tanda kutip:

```ts
whatsappNumber: "6281234567890",   // format 62..., tanpa + dan tanpa 0 di depan
instagramUrl: "https://www.instagram.com/iknit.it",
```

- Semua tombol "WhatsApp" di website otomatis memakai nomor ini, dengan pesan otomatis berisi nama produk.
- Semua tombol "Instagram" di produk otomatis memakai `instagramUrl`. Kosongkan (`""`) kalau mau tombolnya hilang.
- Tagline, cerita brand, arti nama, tiga poin keunggulan, dan info estimasi pengerjaan juga ada di file ini.
- Alamat website (`siteUrl`) diisi setelah website online.

## 3. Menambah, mengedit, menghapus produk

Buka **`src/data/products.ts`**. Setiap produk adalah satu blok `{ ... }`.

**Tambah:** salin satu blok, tempel di bawahnya, ubah isinya. `id` harus unik.

```ts
{
  id: "bunga-matahari",
  name: "Bunga Matahari",
  price: 45000,                 // angka saja, tanpa titik. Hapus baris ini untuk "Harga menyesuaikan"
  description: "Bunga rajut yang awet dan tidak layu.",
  images: ["/images/produk/bunga-matahari.jpg"],
  status: "preorder",           // preorder | ready | soldout
},
```

**Edit:** ubah nilai di dalam blok produknya. **Hapus:** hapus satu blok utuh dari `{` sampai `},`.
Tips: jangan lupa koma di akhir tiap baris dan tiap blok.

Opsional per produk: `instagramUrl` (link Instagram khusus produk itu) dan `orderMessage` (isi pesan WhatsApp otomatis).

Grid otomatis menyesuaikan jumlah produk. Kartu "Custom Order" juga hanya satu blok di file yang sama.

## 4. Mengganti foto dan logo

1. Taruh file foto (disarankan persegi 1:1, `.jpg`) ke folder **`public/images/produk/`**.
2. Tulis path-nya di `products.ts`, misalnya `"/images/produk/bunga-matahari.jpg"`.
3. Logo ada di `public/logo/iknitit-logo.jpg`. Kalau ganti nama file, ubah `logo` di `site.ts`. Logo yang sama juga dipakai sebagai ikon tab: salin ke `src/app/icon.jpg`.
4. Untuk preview link (WhatsApp/sosmed), ganti `public/images/og.png` (ukuran 1200x630).

## 5. Mengganti warna

Palet ada di `src/app/globals.css` (bagian `:root`): biru `#90CAF9`, pink `#F599C6`, kuning muda `#FEF2A0`, kuning tua `#FFC349`, hijau tua `#7EC151`, hijau muda `#B2D959`. Teks memakai `--ink`, dan `--berry` untuk teks harga/ikon supaya kontrasnya cukup terbaca.

## 6. Deploy gratis

Upload dulu project ini ke GitHub (repository baru).

**Vercel**
1. Buka vercel.com, login dengan akun GitHub.
2. Klik **Add New > Project**, pilih repository website.
3. Biarkan pengaturan bawaan (Framework: Next.js), klik **Deploy**.
4. Setelah selesai, kamu dapat alamat `https://nama-project.vercel.app`. Salin ke `siteUrl` di `site.ts`.

**Netlify**
1. Buka netlify.com, login dengan GitHub.
2. Klik **Add new site > Import an existing project**, pilih repository.
3. Isi **Build command:** `npm run build` dan **Publish directory:** `out`, lalu **Deploy**.

**GitHub Pages (opsional):** jalankan build dengan `NEXT_PUBLIC_BASE_PATH="/nama-repo" npm run build`, lalu publikasikan isi folder `out/`.

## 7. Rencana berikutnya: produk dari Google Sheets

Supaya produk bisa ditambah tanpa menyentuh kode:
1. Buat Google Sheets dengan kolom sama seperti data produk (id, name, price, description, images, status).
2. Klik **File > Share > Publish to web** dan pilih format CSV.
3. Ubah fungsi `getProducts()` di `src/data/products.ts` agar mengambil dan membaca CSV itu. Komponen tampilan tidak perlu diubah.
4. Karena website statis, atur Vercel/Netlify agar build ulang otomatis (misalnya terjadwal) supaya produk baru muncul.

Belum diimplementasikan; saat ini data produk dibaca langsung dari `products.ts`.
