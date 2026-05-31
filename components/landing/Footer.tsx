import Link from "next/link";

export default function Footer() {

  return (

    <footer className="relative border-t border-zinc-800 overflow-hidden">

      {/* Glow */}

      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[500px] h-[200px] bg-indigo-600/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-3 gap-12">

          {/* BRAND */}

          <div>

            <h2 className="text-4xl font-black text-white">

              Digi<span className="text-indigo-500">Pro</span>

            </h2>

            <p className="mt-6 text-zinc-400 max-w-lg leading-relaxed">

              Plataforma de productos digitales diseñada
              para ayudarte a aprender, crear y crecer.

            </p>

          </div>

          {/* PLATAFORMA */}

          <div>

            <h3 className="text-white font-bold mb-6">

              Plataforma

            </h3>

            <div className="flex flex-col gap-4 text-zinc-400">

              <Link
                href="/"
                className="hover:text-white transition"
              >
                Inicio
              </Link>

              <Link
                href="/products"
                className="hover:text-white transition"
              >
                Productos
              </Link>

              <Link
                href="/login"
                className="hover:text-white transition"
              >
                Iniciar sesión
              </Link>

              <Link
                href="/register"
                className="hover:text-white transition"
              >
                Crear cuenta
              </Link>

            </div>

          </div>

          {/* BENEFICIOS */}

          <div>

            <h3 className="text-white font-bold mb-6">

              ¿Por qué DigiPro?

            </h3>

            <div className="space-y-4 text-zinc-400">

              <p>
                ⚡ Acceso inmediato a tus productos.
              </p>

              <p>
                🌎 Disponible 24/7 desde cualquier dispositivo.
              </p>

              <p>
                🔒 Compra segura y protegida.
              </p>

              <p>
                🚀 Plataforma en constante crecimiento.
              </p>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="mt-16 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

        {/* Bottom */}

        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-zinc-500 text-sm">

            © 2026 DigiPro. Todos los derechos reservados.

          </p>

          <p className="text-zinc-600 text-sm">

            Construido para aprender, crear y crecer 🚀

          </p>

        </div>

      </div>

    </footer>

  );
}