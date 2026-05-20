import Link from "next/link";

export default function Navbar() {

  return (

    /*
      Navbar principal.
    */

    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-md">

      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* LOGO */}

        <Link
          href="/"
          className="flex items-center gap-3"
        >

          <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center font-bold text-white">
            B
          </div>

          <div>

            <h1 className="font-bold text-lg text-white">
              BGU Academy
            </h1>

          </div>

        </Link>

        {/* MENÚ */}

        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-300">

          <Link
            href="/"
            className="hover:text-white transition"
          >
            Inicio
          </Link>

          <Link
            href="/courses"
            className="hover:text-white transition"
          >
            Cursos
          </Link>

          <Link
            href="/about"
            className="hover:text-white transition"
          >
            Nosotros
          </Link>

        </nav>

        {/* BOTONES */}

        <div className="flex items-center gap-4">

          <Link
            href="/login"
            className="hidden sm:block text-sm text-zinc-300 hover:text-white"
          >
            Iniciar sesión
          </Link>

          <Link
            href="/register"
            className="bg-indigo-600 hover:bg-indigo-500 transition px-5 py-2 rounded-xl text-sm font-medium text-white"
          >
            Registrarse
          </Link>

        </div>

      </div>

    </header>
  );
}