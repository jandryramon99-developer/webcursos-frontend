"use client";
import Image from "next/image";
import Swal from "sweetalert2";

interface course {

    _id: string;
    title: string;
    slug: string;
    thumbnail: string;
    description: string;
    price: number;
}

interface Props {

  course: course;
}

export default function CourseSidebar({

  course,

}: Props) {

  const handleBuy =
    async () => {

      await Swal.fire({

        icon: "info",

        title:
          "Próximamente",

        text:
          "Aquí iniciaremos el flujo de compra.",

        background: "#18181b",

        color: "#fff",

        confirmButtonColor:
          "#4f46e5",
      });
    };

  return (

    <div className="sticky top-10">

      <div className="rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900">

        {/* IMAGE */}

        <div className="aspect-video bg-zinc-800">

          <Image
            src={course.thumbnail}
            alt={course.title}
            width={400}
            height={225}
            className="w-full h-full object-cover"
          />

        </div>

        {/* CONTENT */}

        <div className="p-8">

          {/* PRICE */}

          <div>

            <p className="text-zinc-500">

              Precio del curso

            </p>

            <h2 className="mt-2 text-5xl font-black">

              ${course.price}

            </h2>

          </div>

          {/* BUTTON */}

          <button
            onClick={handleBuy}
            className="cursor-pointer mt-8 w-full h-14 rounded-2xl bg-indigo-600 hover:bg-indigo-500 transition font-semibold text-lg"
          >

            Comprar curso

          </button>

          {/* FEATURES */}

          <div className="mt-10 space-y-4 text-zinc-400 text-sm">

            <p>
              ✔ Acceso completo
            </p>

            <p>
              ✔ Acceso desde cualquier dispositivo
            </p>

            <p>
              ✔ Actualizaciones futuras
            </p>

            <p>
              ✔ Certificado digital
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}