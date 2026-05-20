import Link from "next/link";

export default function CTASection() {

  return (

    <section className="pb-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-linear-to-r from-indigo-700 to-indigo-500 rounded-3xl p-10 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">

          <div>

            <h2 className="text-4xl font-black text-white">

              Empieza hoy tu aprendizaje

            </h2>

            <p className="mt-4 text-white/80 max-w-2xl">

              Accede a cursos premium organizados por categorías.

            </p>

          </div>

          <Link
            href="/register"
            className="bg-white text-black font-bold px-8 py-4 rounded-2xl"
          >
            Crear cuenta
          </Link>

        </div>

      </div>

    </section>
  );
}