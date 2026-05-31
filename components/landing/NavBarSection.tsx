"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (

    /*
      Navbar principal.
    */

    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center font-bold text-white">
            D
          </div>
          <div>
            <h1 className="font-bold text-lg text-white">DigiPro</h1>
          </div>
        </Link>

        {/* MENÚ ESCRITORIO */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
          <Link href="/" className="hover:text-white transition">Inicio</Link>
          <Link href="/products" className="hover:text-white transition">Productos</Link>
          <Link href="/about" className="hover:text-white transition">Nosotros</Link>
        </nav>

        {/* BOTONES ESCRITORIO + BOTÓN HAMBURGUESA */}
        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden sm:block text-sm text-zinc-300 hover:text-white">
            Iniciar sesión
          </Link>
          <Link href="/register" className="hidden sm:block bg-indigo-600 hover:bg-indigo-500 transition px-5 py-2 rounded-xl text-sm font-medium text-white">
            Registrarse
          </Link>

          {/* BOTÓN HAMBURGUESA (Solo móvil) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-zinc-300 hover:text-white focus:outline-none p-2"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MENÚ DESPLEGABLE MÓVIL */}
      <div className={`md:hidden bg-black/95 border-b border-white/10 transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0 overflow-hidden"}`}>
        <nav className="flex flex-col px-6 gap-4 text-base text-zinc-300">
          <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-white transition py-2">Inicio</Link>
          <Link href="/products" onClick={() => setIsOpen(false)} className="hover:text-white transition py-2">Productos</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-white transition py-2">Nosotros</Link>
          <hr className="border-white/10 my-2 sm:hidden" />
          <Link href="/login" onClick={() => setIsOpen(false)} className="sm:hidden text-zinc-300 hover:text-white text-center py-2">
            Iniciar sesión
          </Link>
          <Link href="/register" onClick={() => setIsOpen(false)} className="sm:hidden bg-indigo-600 hover:bg-indigo-500 text-center transition px-5 py-2 rounded-xl text-sm font-medium text-white w-full">
            Registrarse
          </Link>
        </nav>
      </div>
    </header>

  );
}