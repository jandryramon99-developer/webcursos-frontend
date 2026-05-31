//import Image from "next/image";

import Footer from "@/components/landing/Footer";
import HeroSection from "@/components/landing/HeroSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import CTASection from "@/components/landing/CTASection";
import Navbar from "@/components/landing/NavBarSection";
import FeaturedCourses from "@/components/landing/FeaturedProducts";  
import { getProducts } from "@/services/product.service";



export default async function Home() {
  const products = await getProducts();
  
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      <Navbar />

      <HeroSection />

      <FeaturedCourses products={products} />
      <BenefitsSection />

      <CTASection />

      <Footer />

    </main>
  );
}
