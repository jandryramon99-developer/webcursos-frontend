import {
  BookOpen,
  Clock3,
  Trophy,
} from "lucide-react";

/*
|--------------------------------------------------------------------------
| DASHBOARD STATS
|--------------------------------------------------------------------------
*/

export default function DashboardStats() {

  return (

    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

      <StatCard
        title="Cursos Comprados"
        value="3"
        icon={<BookOpen />}
      />

      <StatCard
        title="Horas Aprendidas"
        value="24h"
        icon={<Clock3 />}
      />

      <StatCard
        title="Progreso General"
        value="68%"
        icon={<Trophy />}
      />

    </section>
  );
}

/*
|--------------------------------------------------------------------------
| STAT CARD
|--------------------------------------------------------------------------
*/

function StatCard({

  title,

  value,

  icon,

}: {

  title: string;

  value: string;

  icon: React.ReactNode;
}) {

  return (

    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-zinc-400">

            {title}

          </p>

          <h2 className="text-4xl font-black mt-3">

            {value}

          </h2>

        </div>

        <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center">

          {icon}

        </div>

      </div>

    </div>
  );
}