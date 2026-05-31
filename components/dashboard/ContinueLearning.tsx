import DashboardProductCard from "./DashboardProductCard";

import { Product } from "@/types/product";

interface Props {

  products: Product[];
}

/*
|--------------------------------------------------------------------------
| CONTINUE LEARNING
|--------------------------------------------------------------------------
*/

export default function ContinueLearning({

  products,

}: Props) {

  return (

    <section className="mt-12">

      <div className="mb-6">

        <h2 className="text-2xl font-bold text-white">

          Continúa aprendiendo

        </h2>

        <p className="text-zinc-400 mt-1">

          Retoma donde lo dejaste.

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