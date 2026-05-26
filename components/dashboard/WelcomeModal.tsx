"use client";

import { useEffect } from "react";

import Swal from "sweetalert2";

interface Props {

  userName: string;
}

export default function WelcomeModal({

  userName,

}: Props) {

  useEffect(() => {

    /*
    |--------------------------------------------------------------------------
    | LOGIN SUCCESS
    |--------------------------------------------------------------------------
    */

    const loginSuccess =
      sessionStorage.getItem(
        "login-success"
      );

    if (!loginSuccess)
      return;

    /*
    |--------------------------------------------------------------------------
    | REMOVE FLAG
    |--------------------------------------------------------------------------
    */

    sessionStorage.removeItem(
      "login-success"
    );

    /*
    |--------------------------------------------------------------------------
    | SHOW MODAL
    |--------------------------------------------------------------------------
    */
    const formattedName = userName
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
      Swal.fire({

      icon: "success",

      title:
        `Bienvenido ${formattedName} 👋`,

      html: `
        <div style="line-height:1.7; margin-top:10px;">

          <p>
            Inicio de sesión exitoso.
          </p>

          <p style="
            margin-top:10px;
            color:#a1a1aa;
          ">
            Nos alegra verte nuevamente.
          </p>

        </div>
      `,

      background: "#18181b",

      color: "#fff",

      confirmButtonColor:
        "#4f46e5",

      confirmButtonText:
        "Continuar",
    });

  }, [userName]);

  return null;
}