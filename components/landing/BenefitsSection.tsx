import {
  Package,
  ShieldCheck,
  Zap,
  RefreshCw,
} from "lucide-react";

const stats = [
  {
    value: "+500",
    title: "Productos Digitales",
    description:
      "Cursos, plantillas, guías, recursos y herramientas listas para usar.",
    icon: Package,
  },

  {
    value: "24/7",
    title: "Acceso Permanente",
    description:
      "Compra una vez y accede cuando quieras desde cualquier dispositivo.",
    icon: Zap,
  },

  {
    value: "∞",
    title: "Actualizaciones",
    description:
      "Muchos productos reciben mejoras y nuevas versiones constantemente.",
    icon: RefreshCw,
  },

  {
    value: "100%",
    title: "Compra Segura",
    description:
      "Pagos protegidos y acceso inmediato a tus productos digitales.",
    icon: ShieldCheck,
  },
];

export default function BenefitsSection() {

  return (

    <section className="py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="text-center max-w-3xl mx-auto mb-16">

          <span className="inline-flex items-center rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">

            ¿Por qué DigiPro?

          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-black text-white">

            Todo lo que necesitas para crecer digitalmente

          </h2>

          <p className="mt-6 text-lg text-zinc-400 leading-relaxed">

            Accede a cursos, plantillas, herramientas,
            recursos y productos digitales diseñados para
            ayudarte a aprender, emprender y obtener resultados.

          </p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          {stats.map((item, index) => (

            <div
              key={index}
              className="
                group
                rounded-3xl
                border
                border-zinc-800
                bg-zinc-900
                p-8
                transition-all
                duration-300
                hover:border-indigo-500/40
                hover:-translate-y-2
              "
            >

              {/* Icon */}

              <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center">

                <item.icon className="w-7 h-7 text-indigo-400" />

              </div>

              {/* Number */}

              <h3 className="mt-8 text-5xl font-black text-white">

                {item.value}

              </h3>

              {/* Title */}

              <h4 className="mt-5 text-xl font-bold text-white">

                {item.title}

              </h4>

              {/* Description */}

              <p className="mt-4 text-zinc-400 leading-relaxed">

                {item.description}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}