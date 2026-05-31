import Image from "next/image";
import { Star } from "lucide-react";
interface product {
  thumbnail: string;
  title: string;
  description: string;
  category?: {
    title: string;
  };
  isFeatured: boolean;
}

interface Props {

  product: product;
}

export default function CourseHero({

  product,

}: Props) {

  return (

    <section className="relative overflow-hidden border-b border-zinc-800">

      {/* BACKGROUND */}

      <div className="absolute inset-0">

        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          className="object-cover opacity-20"
        />

      </div>

      {/* OVERLAY */}

      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* GLOW */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-200 bg-indigo-600/20 blur-[180px] rounded-full" />

      {/* CONTENT */}

      <div className="relative max-w-7xl mx-auto px-6 py-16">

        <div className="max-w-4xl">

          {/* CATEGORY */}

          <span className="inline-flex px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-sm font-medium">

            {product.category?.title}

          </span>

          {/* FEATURED */}

          {
            product.isFeatured && (

              <div className="ml-2 inline-flex gap-2 bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold">

                <Star className="w-3.5 h-3.5" />

                Producto destacado

              </div>
            )
          }

          {/* TITLE */}

          <h1 className="mt-8 text-4xl lg:text-6xl font-black leading-tight tracking-tight">

            {product.title}

          </h1>

          {/* DESCRIPTION */}

          <p className="mt-8 text-zinc-300 text-md leading-relaxed">

            {product.description}

          </p>

        </div>

      </div>

    </section>
  );
}