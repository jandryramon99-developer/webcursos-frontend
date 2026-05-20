import {
  BookOpen,
  Trophy,
  Video,
} from "lucide-react";

const benefits = [
  {
    title: "Contenido premium",
    description:
      "Cursos organizados y explicados paso a paso.",

    icon: BookOpen,
  },

  {
    title: "Clases en video",
    description:
      "Aprende desde cualquier lugar y dispositivo.",

    icon: Video,
  },

  {
    title: "Certificados",
    description:
      "Obtén certificados al completar tus cursos.",

    icon: Trophy,
  },
];

export default function BenefitsSection() {

  return (

    <section className="pb-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-6">

          {benefits.map((item, index) => (

            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8"
            >

              <item.icon className="w-12 h-12 text-indigo-400" />

              <h3 className="mt-6 text-2xl font-bold text-white">

                {item.title}

              </h3>

              <p className="mt-4 text-zinc-400">

                {item.description}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}