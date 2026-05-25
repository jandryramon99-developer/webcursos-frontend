"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client"; 
import { LogOut } from "lucide-react";

export default function LogoutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      // 👈 Usamos el método nativo que destruye el token y las cookies
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            // Se ejecuta inmediatamente después de borrar las cookies de sesión con éxito
            router.push("/login");
            router.refresh(); // Limpia los estados del layout del servidor
          },
          onError: (ctx) => {
            // Si el backend responde con un error al intentar revocar el token
            console.error("Error devuelto por Better-Auth:", ctx.error);
            alert(`No se pudo cerrar la sesión: ${ctx.error.message}`);
          }
        }
      });
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
      alert("Ocurrió un error inesperado al intentar cerrar la sesión.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleLogout}
      disabled={loading}
      className="cursor-pointer w-full flex items-center justify-center gap-3 bg-zinc-900 hover:bg-zinc-800 transition border border-zinc-800 rounded-2xl py-4 text-zinc-300"
    >
      <LogOut size={20}/>
      {loading ? "Saliendo..." : "Cerrar Sesión"}
    </button>
  );
}