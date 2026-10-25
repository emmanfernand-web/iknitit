/**
 * PUSAT PENGATURAN WEBSITE i knit it!
 * Semua info brand ada di sini. Ganti isi di antara tanda kutip "..." saja.
 * Nilai bertanda (PLACEHOLDER) belum asli dan perlu diganti.
 */
export const siteConfig = {
  name: "i knit it!",
  tagline: "you imagine it, i knit it!",
  description:
    "i knit it! adalah brand crochet handmade yang dikenal lewat amigurumi lucu. Semua bisa dicustom: karakter, hadiah, gantungan kunci, sampai tas dan baju rajut.",

  // Alamat website setelah online (PLACEHOLDER), dipakai untuk preview link di WhatsApp/sosmed.
  siteUrl: "https://iknitit.vercel.app",

  // === LINK ORDER (PLACEHOLDER) ===
  // Nomor WhatsApp, format 62 tanpa tanda + dan tanpa 0 di depan.
  whatsappNumber: "6281234567890",
  // Link Instagram. Dipakai untuk tombol Instagram di semua produk.
  instagramUrl: "https://www.instagram.com/iknit.it",
  // TikTok tidak dipakai di katalog. Isi kalau mau muncul di footer, kosongkan kalau tidak.
  tiktokUrl: "",

  // Pesan otomatis WhatsApp untuk tombol umum (navbar, hero, footer)
  whatsappGreeting: "Halo i knit it!, aku mau tanya-tanya soal amigurumi-nya ya.",

  logo: "/logo/iknitit-logo.jpg",

  about: {
    heading: "Cerita di balik i knit it!",
    story: [
      "i knit it! berawal dari hobi merajut hal-hal lucu buat seru-seruan. Setelah boneka pertamaku jadi, yaitu Miffy, banyak yang suka dan mulai minta dibuatkan versi mereka sendiri.",
      "Dari situ aku sadar rajut bisa jadi apa saja: amigurumi, gantungan kunci, bunga, tas, sampai baju. Melihat orang senang dengan hasilnya bikin hobi ini jadi usaha.",
    ],
    nameMeaning:
      "Nama i knit it! datang dari reaksi \"I need it!\" waktu kita lihat sesuatu yang lucu, digabung dengan \"knit\" dari dunia benang dan kerajinan tangan.",
    values: [
      {
        title: "Spesialis amigurumi",
        text: "Boneka rajut mungil yang bulat dan lucu jadi ciri khas kami.",
        icon: "yarn" as const,
      },
      {
        title: "Bisa custom",
        text: "Punya ide? Hampir apa pun bisa dirajut, tidak terbatas katalog.",
        icon: "star" as const,
      },
      {
        title: "Terasa personal",
        text: "Dibuat dari idemu, jadi setiap hasilnya punya cerita sendiri.",
        icon: "heart" as const,
      },
    ],
  },

  // Info cara order (PLACEHOLDER untuk estimasi hari)
  order: {
    estimate:
      "Semua produk sistem pre-order karena dirajut satu per satu. Estimasi pengerjaan sekitar 7-14 hari, tergantung model dan antrean.",
    custom:
      "Punya ide karakter, hadiah untuk pasangan, atau souvenir acara? Kirim referensimu, nanti dibantu hitung harga dan waktunya. Namanya juga handmade, hasil akhir bisa sedikit berbeda dari foto.",
  },
};

export type SiteConfig = typeof siteConfig;
