import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {

  return (

    /*
      Hero principal landing.
    */

    <section className="relative overflow-hidden py-20 lg:py-28">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

        {/* TEXTO */}

        <div>

          <span className="bg-indigo-500/20 text-indigo-300 px-4 py-2 rounded-full text-sm">

            Aprende sin límites

          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-black leading-tight text-white">

            Aprende con los
            <span className="text-indigo-500">
              {" "}mejores cursos{" "}
            </span>
            en línea

          </h1>

          <p className="mt-6 text-zinc-400 text-lg leading-relaxed max-w-xl">

            Plataforma educativa enfocada en estudiantes de Bachillerato General Unificado.

          </p>

          {/* BOTONES */}

          <div className="mt-10 flex flex-col sm:flex-row gap-4">

            <Link
              href="/courses"
              className="bg-indigo-600 hover:bg-indigo-500 transition px-8 py-4 rounded-2xl font-semibold text-center text-white"
            >
              Ver cursos
            </Link>

            <Link
              href="/about"
              className="border border-white/10 hover:border-white/20 transition px-8 py-4 rounded-2xl text-center text-white"
            >
              Conocer más
            </Link>

          </div>

        </div>

        {/* IMAGEN */}

        <div className="relative">

          <div className="relative h-75 md:h-125 rounded-3xl overflow-hidden border border-white/10">

            <Image
              src="/hero-section.png"
              alt="Curso"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />

          </div>

        </div>

      </div>

    </section>
  );
}