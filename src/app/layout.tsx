import type { Metadata, Viewport } from "next";
import { Fraunces, Nunito } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";

const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"], display: "swap" });
const nunito = Nunito({ variable: "--font-nunito", subsets: ["latin"], display: "swap" });

const title = `${siteConfig.name} | Amigurumi & Crochet Custom`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title,
  description: siteConfig.description,
  openGraph: {
    title,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    locale: "id_ID",
    type: "website",
    images: [{ url: "/images/og.png", width: 1200, height: 630, alt: `${siteConfig.name} - amigurumi & crochet custom` }],
  },
  twitter: { card: "summary_large_image", title, description: siteConfig.description, images: ["/images/og.png"] },
};

export const viewport: Viewport = { themeColor: "#FFFBE6", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${fraunces.variable} ${nunito.variable}`}>
      <body>{children}</body>
    </html>
  );
}
