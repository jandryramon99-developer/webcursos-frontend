import Link from 'next/dist/client/link';
import Image from 'next/image';

interface ProductCardProps {

  slug: string;

  title: string;

  thumbnail: string;

  description: string;

  price: number;

  isFeatured: boolean;

  productType: string;

  category?: {

    _id: string;

    title: string;

    slug: string;
  },
  topics: {

    _id: string;
    title: string;
  }[];

}

export default function ProductCard({slug, title, thumbnail, description, isFeatured, topics, productType }: ProductCardProps) {
  return (
    <div
      className="group bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-indigo-500/40 transition"
    >

      {/* IMAGEN */}

      <div className="relative h-52 overflow-hidden">

        <Image
          src={thumbnail}
          alt={title}
          fill
          sizes="400px"
          priority
          className="object-cover group-hover:scale-105 transition duration-500"
        />

      </div>

      {/* CONTENIDO */}

      <div className="p-6">

      
        <span className="bg-indigo-500/20 text-indigo-300 text-xs px-3 py-1 rounded-full">

          Producto Nuevo

        </span>
        

        <h3 className="mt-4 text-2xl font-bold text-white line-clamp-2">

          {title}

        </h3>

        <p className="mt-3 text-zinc-400 line-clamp-2">

          {description}

        </p>

        {/* FOOTER */}

        <div className="mt-6 flex items-center justify-between">

          <div className="text-sm text-zinc-500">

            {productType === "course"
            ? `${topics.length} temas`
            : productType === "download"
            ? "Descarga disponible"
            : "Acceso inmediato"
          }

          </div>

          <Link 
          href={`/products/${slug}`}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 transition rounded-xl text-sm font-medium text-white">

            Ver producto

          </Link>

        </div>

      </div>

    </div>
  );
}