import ProductCard from "./ProductCard";

import { Product } from "@/types/product";

interface FeaturedProductsProps {
  products: Product[];
}



export default function FeaturedProducts({ products }: FeaturedProductsProps) {

  return (

    /*
      Productos destacados.
    */

    <section className="py-10">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}

        <div className="mb-12">

          <span className="text-indigo-400 text-sm">
            Nuevos productos
          </span>

          <h2 className="mt-2 text-4xl font-black text-white">
            Empieza hoy
          </h2>

        </div>

        {/* GRID */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products
            .sort(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
            )
            .slice(0, 6)
            .map((p) => (

              <ProductCard
                key={p._id}
                slug={p.slug}
                title={p.title}
                price={p.price}
                productType={p.productType}
                thumbnail={p.thumbnail}
                description={p.description}
                topics={p.topics}
              />

          ))}
          

        </div>

      </div>

    </section>
  );
}