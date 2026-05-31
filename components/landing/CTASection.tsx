import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {

  return (

    <section className="pb-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">

          {/* Glow */}

          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-transparent to-purple-500/10" />

          <div className="relative px-8 py-12 md:px-14 md:py-14 text-center">

            <span className="inline-flex items-center rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">

              🚀 Acceso inmediato

            </span>

            <h2 className="mt-8 text-4xl md:text-6xl font-black text-white">

              Comienza hoy en DigiPro
            </h2>

            <p className="mt-6 max-w-2xl mx-auto text-lg text-zinc-400 leading-relaxed">

              Descubre cursos, plantillas, ebooks,
              herramientas y recursos digitales diseñados
              para ayudarte a aprender, crear y crecer.

            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

              <Link
                href="/products"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  bg-indigo-600
                  hover:bg-indigo-500
                  px-8
                  py-4
                  font-semibold
                  text-white
                  transition
                "
              >
                Explorar productos
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href="/register"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-zinc-700
                  bg-zinc-800
                  hover:bg-zinc-700
                  px-8
                  py-4
                  font-semibold
                  text-white
                  transition
                "
              >
                Crear cuenta gratis
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}