import Image from "next/image";
interface Props {

  user: {

    name?: string;

    email?: string;

    image?: string;

  } | null;
}

/*
|--------------------------------------------------------------------------
| DASHBOARD HEADER
|--------------------------------------------------------------------------
*/

export default function DashboardHeader({

  user,

}: Props) {

  return (

    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

      <div>

        <h1 className="capitalize text-4xl font-black text-white">

          Hola, {user?.name || "Usuario"} 👋

        </h1>

        <p className="text-zinc-400 mt-2">

          Continúa aprendiendo hoy.

        </p>

      </div>

      {/* USER */}

      <div className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-3">

        <div className="w-12 h-12 rounded-full overflow-hidden bg-indigo-600 flex items-center justify-center font-bold text-white">

          {
            user?.image ? (

              <Image
                src={user.image}
                alt={user.name || "User Avatar"} 
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />

            ) : (

              <span className="capitalize">

                {
                  user?.name?.charAt(0) || "U"
                }

              </span>
            )
          }

        </div>

        <div>

          <p className="capitalize font-bold text-white">

            {user?.name || "Usuario"}

          </p>

          <p className="text-sm text-zinc-400">

            {user?.email || "Sin correo"}

          </p>
            
        </div>

      </div>

    </div>
  );
}