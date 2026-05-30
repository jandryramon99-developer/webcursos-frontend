"use client";

import Link from "next/link";
import { usePathname }
from "next/navigation";

import {
  LayoutDashboard,
  BookOpen,
  ShoppingBag,
} from "lucide-react";
import LogoutButton from "../LogoutButton";

/*
|--------------------------------------------------------------------------
| USER SIDEBAR
|--------------------------------------------------------------------------
*/

export default function UserSidebar() {
  const pathname = usePathname();
  return (

    <aside className="hidden lg:flex w-72 min-h-screen border-r border-zinc-800 bg-zinc-950 flex-col p-6">

      {/* LOGO */}

      <div>

        <h1 className="text-3xl font-black text-indigo-500">

          BGU

        </h1>

        <p className="text-zinc-500 text-sm mt-1">

          Learning Platform

        </p>

      </div>

      {/* MENU */}

      <nav className="mt-12 flex flex-col gap-3">

        <SidebarItem
          href="/dashboard"
          icon={<LayoutDashboard size={20} />}
          label="Dashboard"
          active={
            pathname ===
            "/dashboard"
          }
        />

        <SidebarItem
          href="/dashboard/my-courses"
          icon={<BookOpen size={20} />}
          label="Mis Cursos"
          active={
            pathname ===
            "/my-courses"
          }
        />

        <SidebarItem
          href="/courses"
          icon={<ShoppingBag size={20} />}
          label="Explorar Cursos"
          active={
            pathname ===
            "/courses"
          }
        />

      </nav>

      {/* FOOTER */}

      <div className="mt-auto"> 

        <LogoutButton/>

      </div>

    </aside>
  );
}

/*
|--------------------------------------------------------------------------
| SIDEBAR ITEM
|--------------------------------------------------------------------------
*/

function SidebarItem({

  href,

  icon,

  label,

  active,

}: {

  href: string;

  icon: React.ReactNode;

  label: string;

  active: boolean;
}) {

  return (

    <Link
      href={href}
      className={`flex items-center gap-3 px-4 py-3 rounded-2xl border transition

      ${
        active
          ? "bg-indigo-600 border-indigo-500 shadow-lg shadow-indigo-600/20"
          : "bg-zinc-900 border-zinc-800 hover:bg-zinc-800"
      }
      `}
    >

      {icon}

      <span>

        {label}

      </span>

    </Link>
  );
}