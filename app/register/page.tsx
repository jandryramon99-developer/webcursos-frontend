"use client";

import { useMemo, useState } from "react";

import Image from "next/image";

import Link from "next/link";

import Swal from "sweetalert2";

import { useRouter } from "next/navigation";

import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  CheckCircle2,
  XCircle,
} from "lucide-react";

import { authClient } from "@/lib/auth-client";

/*
|--------------------------------------------------------------------------
| REGISTER PAGE
|--------------------------------------------------------------------------
*/

export default function RegisterPage() {
  const router =useRouter();
  /*
  |--------------------------------------------------------------------------
  | STATES
  |--------------------------------------------------------------------------
  */

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  /*
  |--------------------------------------------------------------------------
  | EMAIL VALIDATION
  |--------------------------------------------------------------------------
  */

  const isEmailValid = useMemo(() => {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      .test(email);

  }, [email]);

  /*
  |--------------------------------------------------------------------------
  | PASSWORD RULES
  |--------------------------------------------------------------------------
  */

  const passwordRules = {

    minLength:
      password.length >= 8,

    uppercase:
      /[A-Z]/.test(password),

    lowercase:
      /[a-z]/.test(password),

    number:
      /[0-9]/.test(password),

    special:
      /[^A-Za-z0-9]/.test(password),
  };

  /*
  |--------------------------------------------------------------------------
  | PASSWORD SCORE
  |--------------------------------------------------------------------------
  */

  const passwordScore =
    Object.values(passwordRules)
      .filter(Boolean)
      .length;

  /*
  |--------------------------------------------------------------------------
  | PASSWORD STRENGTH
  |--------------------------------------------------------------------------
  */

  const passwordStrength =
    useMemo(() => {

      if (passwordScore <= 2)
        return {
          label: "Débil",
          width: "33%",
          color:
            "bg-red-500",
        };

      if (passwordScore <= 4)
        return {
          label: "Media",
          width: "66%",
          color:
            "bg-yellow-500",
        };

      return {
        label: "Fuerte",
        width: "100%",
        color:
          "bg-green-500",
      };

    }, [passwordScore]);

  /*
  |--------------------------------------------------------------------------
  | REGISTER
  |--------------------------------------------------------------------------
  */

  const handleRegister =
    async () => {

      try {

        /*
        |--------------------------------------------------------------------------
        | VALIDATIONS
        |--------------------------------------------------------------------------
        */

        if (!name.trim()) {

          Swal.fire({

            icon: "warning",

            title: "Nombre requerido",

            text:
              "Ingresa tu nombre completo.",

            background: "#18181b",

            color: "#fff",

            confirmButtonColor:
              "#4f46e5",
          });

          return;
        }

        if (!isEmailValid) {

          Swal.fire({

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

        if (passwordScore < 5) {

          Swal.fire({

            icon: "error",

            title:
              "Contraseña insegura",

            text:
              "La contraseña debe cumplir todos los requisitos.",

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
        | REGISTER
        |--------------------------------------------------------------------------
        */

        const { data, error } = await authClient.signUp.email({
          name,
          email,
          password,
          callbackURL: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/dashboard`,
        });

        console.log(data);

        if (error) {
          console.error("Error capturado:", error.code, error.message);

          // 2. Si el código de error es que el usuario ya existe, mostramos una alerta amigable
          if (error.code === "USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL") {
            Swal.fire({
              icon: "warning",
              title: "Correo ya registrado",
              text: "Este correo electrónico ya está asociado a una cuenta. Intenta iniciar sesión.",
              background: "#18181b",
              color: "#fff",
              confirmButtonColor: "#4f46e5",
            });
          } else {
            // 3. Alerta genérica para cualquier otro error del servidor o base de datos
            Swal.fire({
              icon: "error",
              title: "Error al registrar",
              text: error.message || "Ocurrió un problema en el servidor.",
              background: "#18181b",
              color: "#fff",
              confirmButtonColor: "#4f46e5",
            });
          }

          return; // Importante: detenemos la ejecución para que no muestre el SweetAlert de éxito
        }


        /*
        |--------------------------------------------------------------------------
        | SUCCESS
        |--------------------------------------------------------------------------
        */

       await Swal.fire({

        icon: "success",

        title:
          "Cuenta creada",

        text:
          "Tu cuenta fue creada correctamente.",

        background: "#18181b",

        color: "#fff",

        confirmButtonColor:
          "#4f46e5",
      });

      /*
      |--------------------------------------------------------------------------
      | REDIRECT
      |--------------------------------------------------------------------------
      */

      router.push("/dashboard");

      router.refresh();

        /*
        |--------------------------------------------------------------------------
        | RESET FORM
        |--------------------------------------------------------------------------
        */

        setName("");

        setEmail("");

        setPassword("");

      } catch (error) {

        console.error(error);

        Swal.fire({

          icon: "error",

          title:
            "Error",

          text:
            "No se pudo registrar el usuario.",

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
          callbackURL: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/dashboard`, // Redirige al usuario al dashboard después de iniciar sesión con Google
        });

      } catch (error) {

        console.error(error);

        Swal.fire({

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

  {/* BACKGROUND GLOW */}

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

            Crear cuenta

          </h1>

          <p className="mt-3 text-zinc-400 leading-relaxed">

            Empieza a aprender hoy.

          </p>

        </div>

        {/* FORM */}

        <div className="mt-8 space-y-5">

          {/* NAME */}

          <div>

            <label className="text-sm text-zinc-400">

              Nombre completo

            </label>

            <div className="mt-2 relative">

              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />

              <input
                type="text"
                placeholder="Juan Pérez"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                className="w-full bg-zinc-800 border border-zinc-700 focus:border-indigo-500 transition rounded-2xl pl-12 pr-4 py-4 text-white outline-none"
              />

            </div>

          </div>

          {/* EMAIL */}

          <div>

            <label className="text-sm text-zinc-400">

              Correo electrónico

            </label>

            <div className="mt-2 relative">

              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />

              <input
                type="email"
                placeholder="correo@gmail.com"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className={`w-full border rounded-2xl pl-12 pr-4 py-4 text-white outline-none transition
                  
                  ${
                    email.length > 0
                      ? isEmailValid
                        ? "bg-zinc-800 border-green-500"
                        : "bg-zinc-800 border-red-500"
                      : "bg-zinc-800 border-zinc-700"
                  }
                `}
              />

            </div>

          </div>

          {/* PASSWORD */}

          <div>

            <label className="text-sm text-zinc-400">

              Contraseña

            </label>

            <div className="mt-2 relative">

              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="********"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                className="w-full bg-zinc-800 border border-zinc-700 focus:border-indigo-500 transition rounded-2xl pl-12 pr-14 py-4 text-white outline-none"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400"
              >

                {showPassword
                  ? <EyeOff />
                  : <Eye />}

              </button>

            </div>

            {/* PASSWORD BAR */}

            <div className="mt-4">

              <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">

                <div
                  className={`h-full transition-all duration-500 ${passwordStrength.color}`}
                  style={{
                    width:
                      passwordStrength.width,
                  }}
                />

              </div>

              <div className="mt-2 flex items-center justify-between">

                <span className="text-sm text-zinc-400">

                  Seguridad:

                </span>

                <span
                  className={`text-sm font-medium
                  
                  ${
                    passwordStrength.label === "Débil"
                      ? "text-red-400"
                      : passwordStrength.label === "Media"
                      ? "text-yellow-400"
                      : "text-green-400"
                  }
                `}
                >

                  {passwordStrength.label}

                </span>

              </div>

            </div>

            {/* RULES */}

            <div className="mt-5 space-y-2">

              <PasswordRule
                valid={
                  passwordRules.minLength
                }
                text="Mínimo 8 caracteres"
              />

              <PasswordRule
                valid={
                  passwordRules.uppercase
                }
                text="Una letra mayúscula"
              />

              <PasswordRule
                valid={
                  passwordRules.lowercase
                }
                text="Una letra minúscula"
              />

              <PasswordRule
                valid={
                  passwordRules.number
                }
                text="Un número"
              />

              <PasswordRule
                valid={
                  passwordRules.special
                }
                text="Un carácter especial"
              />

            </div>

          </div>

          {/* BUTTON */}

          <button
            onClick={handleRegister}
            disabled={loading}
            className="w-full mt-6 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 transition rounded-2xl py-4 text-white font-semibold shadow-lg shadow-indigo-600/20 cursor-pointer"         >

            {loading
              ? "Creando cuenta..."
              : "Crear cuenta"}

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

          {/* GOOGLE BUTTON */}

          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-4 bg-white hover:bg-zinc-100 transition rounded-2xl py-4 text-black font-semibold shadow-lg cursor-pointer"
          >

            <Image
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              width={24}
              height={24}
            />

            Continuar con Google

          </button>

          {/* LOGIN */}

          <p className="text-center text-sm text-zinc-500 mt-6">

            ¿Ya tienes una cuenta?{" "}

            <Link
              href="/login"
              className="text-indigo-400 hover:text-indigo-300 transition"
            >
              Iniciar sesión
            </Link>

          </p>

        </div>

      </div>

    </main>
  );
}

/*
|--------------------------------------------------------------------------
| PASSWORD RULE COMPONENT
|--------------------------------------------------------------------------
*/

function PasswordRule({

  valid,

  text,

}: {

  valid: boolean;

  text: string;
}) {

  return (

    <div className="flex items-center gap-3 text-sm">

      {valid ? (

        <CheckCircle2 className="w-4 h-4 text-green-400" />

      ) : (

        <XCircle className="w-4 h-4 text-red-400" />

      )}

      <span
        className={
          valid
            ? "text-green-400"
            : "text-zinc-500"
        }
      >

        {text}

      </span>

    </div>
  );
}