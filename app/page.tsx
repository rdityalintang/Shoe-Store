import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { PageIntro } from "@/components/motion/page-intro";
import { FeaturedProducts } from "@/components/featured-products";
import { Categories } from "@/components/categories";
import { Features } from "@/components/features";
import { PromoBanner } from "@/components/promo-banner";
import { Testimonials } from "@/components/testimonials";
import { Newsletter } from "@/components/newsletter";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <PageIntro />
      <Navbar />
      <main>
        <Hero />
        <FeaturedProducts />
        <Categories />
        <Features />
        <PromoBanner />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
