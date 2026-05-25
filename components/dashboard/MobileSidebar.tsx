"use client";

import { useState } from "react";

import Link from "next/link";

import { usePathname }
from "next/navigation";
import LogoutButton from "../LogoutButton";

import {
  Menu,
  X,
  LayoutDashboard,
  BookOpen,
  ShoppingBag,
} from "lucide-react";

/*
|--------------------------------------------------------------------------
| MOBILE SIDEBAR
|--------------------------------------------------------------------------
*/

export default function MobileSidebar() {

  /*
  |--------------------------------------------------------------------------
  | PATHNAME
  |--------------------------------------------------------------------------
  */

  const pathname =
    usePathname();

  /*
  |--------------------------------------------------------------------------
  | STATE
  |--------------------------------------------------------------------------
  */

  const [open, setOpen] =
    useState(false);

  return (

    <>

      {/* TOPBAR */}

      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 h-20 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-xl flex items-center justify-between px-6">

        {/* LEFT */}

        <div className="flex items-center gap-4">

          {/* MENU */}

          <button
            onClick={() =>
              setOpen(!open)
            }
            className="p-2 rounded-xl bg-zinc-900 border border-zinc-800"
          >

            {open ? (

              <X className="text-white" />

            ) : (

              <Menu className="text-white" />

            )}

          </button>

          {/* LOGO */}

          <div>

            <h1 className="text-2xl font-black text-indigo-500">

              BGU

            </h1>

          </div>

        </div>

      </header>

      {/* OVERLAY */}

      {open && (

        <div
          onClick={() =>
            setOpen(false)
          }
          className="lg:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
        />

      )}

      {/* SIDEBAR */}

      <aside
        className={`lg:hidden fixed top-20 left-0 z-50 h-[calc(100vh-80px)] w-72 bg-zinc-950 border-r border-zinc-800 p-6 transition-transform duration-300 ease-in-out
        
        ${
          open
            ? "translate-x-0"
            : "-translate-x-full"
        }
        `}
      >

        {/* MENU */}

        <nav className="flex flex-col gap-3">

          <MobileItem
            href="/dashboard"
            label="Dashboard"
            icon={<LayoutDashboard size={20} />}
            active={
              pathname ===
              "/dashboard"
            }
            onClick={() =>
              setOpen(false)
            }
          />

          <MobileItem
            href="/dashboard/my-courses"
            label="Mis Cursos"
            icon={<BookOpen size={20} />}
            active={
              pathname.includes(
                "/my-courses"
              )
            }
            onClick={() =>
              setOpen(false)
            }
          />

          <MobileItem
            href="/dashboard/courses"
            label="Explorar Cursos"
            icon={<ShoppingBag size={20} />}
            active={
              pathname.includes(
                "/courses"
              )
            }
            onClick={() =>
              setOpen(false)
            }
          />

        </nav>

        {/* FOOTER */}

        <div className="absolute bottom-8 left-6 right-6">

        <LogoutButton/>

        </div>

      </aside>

    </>
  );
}

/*
|--------------------------------------------------------------------------
| MOBILE ITEM
|--------------------------------------------------------------------------
*/

function MobileItem({

  href,

  label,

  icon,

  active,

  onClick,

}: {

  href: string;

  label: string;

  icon: React.ReactNode;

  active: boolean;

  onClick: () => void;
}) {

  return (

    <Link
      href={href}
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-4 rounded-2xl transition text-white border
      
      ${
        active
          ? "bg-indigo-600 border-indigo-500 shadow-lg shadow-indigo-600/20"
          : "bg-zinc-900 border-zinc-800 hover:bg-zinc-800"
      }
      `}
    >

      {icon}

      <span className="font-medium">

        {label}

      </span>

    </Link>
  );
}