import Image from "next/image";

import Link from "next/link";

import { Star } from "lucide-react";

interface Props {

  product: {

    _id: string;

    title: string;

    slug: string;

    thumbnail: string;

    description: string;

    price: number;

    isFeatured: boolean;

    category?: {

      title: string;
    };
  };
}

export default function ProductCard({

  product,

}: Props) {

  return (

    <div className="group relative overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-indigo-500/40 transition-all duration-300">

      {/* IMAGE */}

      <div className="relative h-56 overflow-hidden">

        <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            sizes="400px"
            className="object-cover group-hover:scale-105 transition duration-500"
        />

        {
          product.isFeatured && (

            <div className="absolute top-4 left-4 flex items-center gap-2 bg-yellow-500 text-black text-xs font-bold px-3 py-2 rounded-full">

              <Star className="w-4 h-4" />

              Destacado

            </div>
          )
        }

      </div>

      {/* CONTENT */}

      <div className="p-6">

        {/* CATEGORY */}

        <span className="text-indigo-400 text-sm font-medium">

          {product.category?.title || "General"}

        </span>

        {/* TITLE */}

        <h3 className="mt-3 text-2xl font-bold text-white line-clamp-2">

          {product.title}

        </h3>

        {/* DESCRIPTION */}

        <p className="mt-4 text-zinc-400 text-sm leading-relaxed line-clamp-3">

          {product.description}

        </p>

        {/* FOOTER */}

        <div className="mt-8 flex items-center justify-between">

          <div>

            <p className="text-zinc-500 text-sm">

              Precio

            </p>

            <p className="text-2xl font-black text-white">

              ${product.price}

            </p>

          </div>

          <Link
            href={`/products/${product.slug}`}
            className="px-5 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 transition font-medium text-white"
          >

            Ver curso

          </Link>

        </div>

      </div>

    </div>
  );
}