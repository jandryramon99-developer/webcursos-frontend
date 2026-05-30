"use client";
import { env } from "@/lib/env";
import { useMemo, useState } from "react";

import Image from "next/image";

import Link from "next/link";

import { useRouter } from "next/navigation";

import Swal from "sweetalert2";

import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  LoaderCircle,
} from "lucide-react";

import { authClient } from "@/lib/auth-client";

import api from "@/lib/axios";


/*
|--------------------------------------------------------------------------
| LOGIN PAGE
|--------------------------------------------------------------------------
*/

export default function LoginPage() {

  /*
  |--------------------------------------------------------------------------
  | ROUTER
  |--------------------------------------------------------------------------
  */
  const router = useRouter();
  /*
  |--------------------------------------------------------------------------
  | STATES
  |--------------------------------------------------------------------------
  */

  const [formData, setFormData] =
    useState({

      email: "",

      password: "",
    });

  const [loading, setLoading] =
    useState(false);

  const [showPassword, setShowPassword] =
    useState(false);

  /*
  |--------------------------------------------------------------------------
  | EMAIL VALIDATION
  |--------------------------------------------------------------------------
  */

  const isEmailValid =
    useMemo(() => {

      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        .test(formData.email);

    }, [formData.email]);

    /*
    |--------------------------------------------------------------------------
    | HANDLE CHANGE
    |--------------------------------------------------------------------------
    */

    const handleChange =
      (
        e: React.ChangeEvent<HTMLInputElement>
      ) => {

        setFormData({

          ...formData,

          [e.target.name]:
            e.target.value,
        });
      };

    /*
    |--------------------------------------------------------------------------
    | LOGIN
    |--------------------------------------------------------------------------
    */

      const handleSubmit =
      async (
        e: React.FormEvent
      ) => {

        e.preventDefault();

        try {

          /*
          |--------------------------------------------------------------------------
          | VALIDATIONS
          |--------------------------------------------------------------------------
          */

          if (!isEmailValid) {

            await Swal.fire({

              icon: "error",

              title:
                "Correo inválido",

              text:
                "Ingresa un correo válido.",

              background: "#18181b",

              color: "#fff",

              confirmButtonColor:
                "#4f46e5",
            });

            return;
          }

          if (
            formData.password.length < 6
          ) {

            await Swal.fire({

              icon: "warning",

              title:
                "Contraseña inválida",

              text:
                "La contraseña debe tener al menos 6 caracteres.",

              background: "#18181b",

              color: "#fff",

              confirmButtonColor:
                "#4f46e5",
            });

            return;
          }

          /*
          |--------------------------------------------------------------------------
          | LOADING
          |--------------------------------------------------------------------------
          */

          setLoading(true);

          /*
          |--------------------------------------------------------------------------
          | CHECK PROVIDER
          |--------------------------------------------------------------------------
          */

          const providerResponse =
            await api.post(

              "/api/users/check-provider",

              {
                email:
                  formData.email,
              }
            );

          const provider =
            providerResponse
              .data
              .provider;

          /*
          |--------------------------------------------------------------------------
          | GOOGLE ACCOUNT
          |--------------------------------------------------------------------------
          */

          if (
            provider === "google"
          ) {

            await Swal.fire({

              icon: "info",

              title:
                "Cuenta registrada con Google",

              html: `
                <div style="line-height:1.7; margin-top:10px;">

                  <p>
                    Esta cuenta fue creada usando Google.
                  </p>

                  <p style="margin-top:10px;">
                    Debes iniciar sesión usando:
                  </p>

                  <div style="
                    margin-top:16px;
                    background:#fff;
                    color:#000;
                    padding:12px;
                    border-radius:14px;
                    font-weight:600;
                  ">
                    Continuar con Google
                  </div>

                </div>
              `,

              background: "#18181b",

              color: "#fff",

              confirmButtonColor:
                "#4f46e5",
            });

            return;
          }

          /*
          |--------------------------------------------------------------------------
          | LOGIN
          |--------------------------------------------------------------------------
          */

          const {
            data,
            error,
          } =
            await authClient.signIn.email({

              email:
                formData.email,

              password:
                formData.password,
            });
console.log(
  "LOGIN DATA:",
  data
);

console.log(
  "LOGIN ERROR:",
  error
);
          /*
          |--------------------------------------------------------------------------
          | LOGIN ERROR
          |--------------------------------------------------------------------------
          */

          if (error) {

            console.error(
              error.code,
              error.message
            );

            await Swal.fire({

              icon: "error",

              title:
                "Credenciales incorrectas",

              text:
                "Correo o contraseña incorrectos.",

              background: "#18181b",

              color: "#fff",

              confirmButtonColor:
                "#4f46e5",
            });

            return;
          }

          /*
          |--------------------------------------------------------------------------
          | USER
          |--------------------------------------------------------------------------
          */

          const currentUser =
            data?.user;

          /*
          |--------------------------------------------------------------------------
          | EMAIL NOT VERIFIED
          |--------------------------------------------------------------------------
          */

          if (
            currentUser &&
            !currentUser.emailVerified
          ) {

            await Swal.fire({

              icon: "warning",

              title:
                "Correo no verificado",

              html: `
                <div style="line-height:1.7; margin-top:10px;">

                  <p>
                    Tu cuenta aún no ha sido verificada.
                  </p>

                  <p style="margin-top:10px;">
                    Puedes seguir explorando la plataforma, pero algunas funciones premium estarán bloqueadas
                    hasta verificar tu correo.
                  </p>

                </div>
              `,

              background: "#18181b",

              color: "#fff",

              confirmButtonText:
                "Entendido",

              confirmButtonColor:
                "#4f46e5",
            });
          }
      
          router.push("/dashboard");
          

        } catch (error) {

          console.error(error);

          await Swal.fire({

            icon: "error",

            title:
              "Error",

            text:
              "No se pudo iniciar sesión.",

            background: "#18181b",

            color: "#fff",

            confirmButtonColor:
              "#4f46e5",
          });

        } finally {

          setLoading(false);
        }
      };

    /*
    |--------------------------------------------------------------------------
    | GOOGLE LOGIN
    |--------------------------------------------------------------------------
    */

    const handleGoogleLogin =
    async () => {

      try {

        await authClient.signIn.social({

          provider: "google",

          callbackURL:
            `${env.FRONTEND_URL}/dashboard`,
        });

      } catch (error) {

        console.error(error);

        await Swal.fire({

          icon: "error",

          title:
            "Error Google",

          text:
            "No se pudo iniciar sesión con Google.",

          background: "#18181b",

          color: "#fff",

          confirmButtonColor:
            "#4f46e5",
        });
      }
    };

  return (

    <main className="min-h-screen bg-black flex items-center justify-center px-6 py-20 overflow-hidden relative">

      {/* GLOW */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-175 bg-indigo-600/20 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-100 h-100 bg-purple-600/10 blur-[120px] rounded-full" />

      {/* CARD */}

      <div className="relative z-10 w-full max-w-md bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 shadow-2xl">

        {/* HEADER */}

        <div className="text-center">

          <div className="mx-auto w-16 h-16 rounded-2xl bg-indigo-600 flex items-center justify-center text-white text-2xl font-black shadow-lg shadow-indigo-600/30">

            B

          </div>

          <h1 className="mt-6 text-4xl font-black text-white tracking-tight">

            Bienvenido

          </h1>

          <p className="mt-3 text-zinc-400 leading-relaxed">

            Inicia sesión para continuar aprendiendo.

          </p>

        </div>

        {/* FORM */}

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-5"
        >

          {/* EMAIL */}

          <div>

            <label className="text-sm text-zinc-400">

              Correo electrónico

            </label>

            <div className="mt-2 relative">

              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />

              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="correo@gmail.com"
                className={`w-full rounded-2xl bg-zinc-800 border pl-12 pr-4 py-4 text-white outline-none transition
                
                ${
                  formData.email.length > 0
                    ? isEmailValid
                      ? "border-green-500"
                      : "border-red-500"
                    : "border-zinc-700"
                }
                `}
              />

            </div>

          </div>

          {/* PASSWORD */}

          <div>

            <div className="flex items-center justify-between">

              <label className="text-sm text-zinc-400">

                Contraseña

              </label>

              <Link
                href="/forgot-password"
                className="text-sm text-indigo-400 hover:text-indigo-300 transition"
              >

                ¿Olvidaste tu contraseña?

              </Link>

            </div>

            <div className="mt-2 relative">

              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full rounded-2xl bg-zinc-800 border border-zinc-700 focus:border-indigo-500 transition pl-12 pr-14 py-4 text-white outline-none"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
                className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white transition"
              >

                {showPassword
                  ? <EyeOff />
                  : <Eye />}

              </button>

            </div>

          </div>

          {/* BUTTON */}

          <button
            type="submit"
            disabled={loading}
            className="cursor-pointer w-full mt-4 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 transition rounded-2xl py-4 text-white font-semibold shadow-lg shadow-indigo-600/20 flex items-center justify-center gap-3"
          >

            {loading ? (

              <>
                <LoaderCircle className="animate-spin w-5 h-5" />
                Ingresando...
              </>

            ) : (

              "Iniciar sesión"
            )}

          </button>

          {/* DIVIDER */}

          <div className="relative my-6">

            <div className="absolute inset-0 flex items-center">

              <div className="w-full border-t border-zinc-800" />

            </div>

            <div className="relative flex justify-center text-sm">

              <span className="bg-zinc-900 px-4 text-zinc-500">

                o continúa con

              </span>

            </div>

          </div>

          {/* GOOGLE */}

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="cursor-pointer w-full flex items-center justify-center gap-4 bg-white hover:bg-zinc-100 transition rounded-2xl py-4 text-black font-semibold shadow-lg"
          >

            <Image
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              width={24}
              height={24}
            />

            Continuar con Google

          </button>

          {/* REGISTER */}

          <p className="text-center text-sm text-zinc-500 mt-8">

            ¿No tienes una cuenta?{" "}

            <Link
              href="/register"
              className="text-indigo-400 hover:text-indigo-300 transition font-medium"
            >

              Crear cuenta

            </Link>

          </p>

        </form>

      </div>

    </main>
  );
}