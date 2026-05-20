//import Image from "next/image";

import Footer from "@/components/landing/Footer";
import HeroSection from "@/components/landing/HeroSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import CTASection from "@/components/landing/CTASection";
import Navbar from "@/components/landing/NavBarSection";
import FeaturedCourses from "@/components/landing/FeaturedCourses";  

const BACKEND_URL = !!process.env.NEXT_PUBLIC_VERCEL_ENV ? process.env.NEXT_PUBLIC_BACKEND_URL : "http://localhost:4000";


async function getCourses() {
  const res = await fetch(BACKEND_URL + "/courses", { cache: "no-store" });
  console.log("Código de respuesta de la API:", res.status); 
  if (!res.ok) throw new Error("Error al obtener los cursos");
  return res.json();
  
}

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
