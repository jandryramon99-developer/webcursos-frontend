//import Image from "next/image";

import Footer from "@/components/landing/Footer";
import HeroSection from "@/components/landing/HeroSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import CTASection from "@/components/landing/CTASection";
import Navbar from "@/components/landing/NavBarSection";
import FeaturedCourses from "@/components/landing/FeaturedCourses";  
import { getCourses } from "@/services/course.service";



export default async function Home() {
  const courses = await getCourses();
  
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      <Navbar />

      <HeroSection />

      {/* Enviamos todos los cursos juntos en una sola sección */}
      <FeaturedCourses courses={courses} />
      <BenefitsSection />

      <CTASection />

      <Footer />

    </main>
  );
}
