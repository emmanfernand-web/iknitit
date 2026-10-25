import { getProducts } from "@/data/products";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProductGrid from "@/components/ProductGrid";
import HowToOrder from "@/components/HowToOrder";
import SocialCta from "@/components/SocialCta";
import Footer from "@/components/Footer";
import StitchDivider from "@/components/StitchDivider";

export default async function Home() {
  const products = await getProducts();
  return (
    <>
      <a
        href="#produk"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-cream"
      >
        Lewati ke produk
      </a>
      <Navbar />
      <main>
        <Hero />
        <StitchDivider />
        <About />
        <StitchDivider />
        <ProductGrid products={products} />
        <StitchDivider />
        <HowToOrder />
        <StitchDivider />
        <SocialCta />
      </main>
      <Footer />
    </>
  );
}
