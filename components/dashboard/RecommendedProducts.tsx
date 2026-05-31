import DashboardProductCard
from "./DashboardProductCard";

import { Product } from "@/types/product";

interface Props {

  products: Product[];
}
export default function RecommendedProducts({

  products,

}: Props) {

  return (

    <section className="mt-14">

      <div className="mb-6">

        <h2 className="text-2xl font-bold text-white">

          Cursos disponibles

        </h2>

        <p className="text-zinc-400 mt-1">

          Descubre nuevos cursos.

        </p>

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {products.map((product) => (

          <DashboardProductCard
            key={product._id}
            product={product}
          />
        ))}

      </div>

    </section>
  );
}