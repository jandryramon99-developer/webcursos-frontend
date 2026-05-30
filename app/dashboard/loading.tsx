"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const router = useRouter();

  const [authorized, setAuthorized] =
    useState<boolean | null>(null);

  useEffect(() => {

    const checkSession =
      async () => {

        try {

          const session =
            await authClient.getSession();

          if (!session?.data?.user) {

            setAuthorized(false);

            router.replace("/login");

            return;
          }

          setAuthorized(true);

        } catch (error) {

          console.error(
            "SESSION ERROR:",
            error
          );

          setAuthorized(false);

          router.replace("/login");
        }
      };

    checkSession();

  }, [router]);

  /*
  |--------------------------------------------------------------------------
  | AUTH CHECK LOADER
  |--------------------------------------------------------------------------
  */

  if (authorized === null) {

    return (

      <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6">

        {/* Logo Loader */}

        <div className="w-20 h-20 rounded-3xl bg-indigo-600/20 flex items-center justify-center">

          <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />

        </div>

        {/* Brand */}

        <h1 className="mt-8 text-3xl font-black text-white">

          DigiPro

        </h1>

        {/* Status */}

        <p className="mt-3 text-zinc-400 text-center">

          Comprobando tu sesión...

        </p>

        {/* Progress */}

        <div className="mt-8 w-64 h-2 bg-zinc-900 rounded-full overflow-hidden">

          <div className="h-full w-1/2 bg-indigo-500 rounded-full animate-pulse" />

        </div>

      </div>

    );
  }

  /*
  |--------------------------------------------------------------------------
  | REDIRECTING
  |--------------------------------------------------------------------------
  */

  if (authorized === false) {

    return null;
  }

  /*
  |--------------------------------------------------------------------------
  | AUTHORIZED
  |--------------------------------------------------------------------------
  */

  return children;
}