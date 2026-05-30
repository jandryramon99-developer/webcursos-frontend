"use client";

import Swal from "sweetalert2";

import api from "@/lib/axios";

/*
|--------------------------------------------------------------------------
| PROPS
|--------------------------------------------------------------------------
*/

interface Props {

  email: string;
}

/*
|--------------------------------------------------------------------------
| VERIFY EMAIL BANNER
|--------------------------------------------------------------------------
*/

export default function VerifyEmailBanner({

  email,

}: Props) {

  /*
  |--------------------------------------------------------------------------
  | RESEND EMAIL
  |--------------------------------------------------------------------------
  */

  const handleResend =
    async () => {

      try {

        await api.post(

          "/api/users/resend-verification",

          {
            email,
          }
        );

        await Swal.fire({

          icon: "success",

          title:
            "Correo reenviado",

          text:
            "Revisa tu bandeja de entrada.",

          background: "#18181b",

          color: "#fff",

          confirmButtonColor:
            "#4f46e5",
        });

      } catch (error) {

        console.error(error);

        await Swal.fire({

          icon: "error",

          title:
            "Error",

          text:
            "No se pudo reenviar el correo.",

          background: "#18181b",

          color: "#fff",

          confirmButtonColor:
            "#4f46e5",
        });
      }
    };

  return (

    <div className="mb-8 rounded-3xl border border-yellow-500/20 bg-yellow-500/10 p-6">

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        {/* TEXT */}

        <div>

          <h2 className="text-xl font-bold text-yellow-400">

            Verifica tu correo electrónico

          </h2>

          <p className="text-zinc-300 mt-2">

            Tu correo electrónico aún no ha sido verificado.
            Verifica tu cuenta para desbloquear todas las funciones de DigiPro.

          </p>

        </div>

        {/* BUTTON */}

        <button
          onClick={handleResend}
          className="cursor-pointer bg-yellow-500 hover:bg-yellow-400 transition text-black font-semibold px-6 py-3 rounded-2xl"
        >

          Enviar correo de verificación

        </button>

      </div>

    </div>
  );
}