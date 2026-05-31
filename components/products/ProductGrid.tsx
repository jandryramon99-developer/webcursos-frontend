import ProductCard from "./ProductCard";

interface product {

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
}

interface Props {

  products: product[];
}

export default function ProductGrid({

  products,

}: Props) {

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

      {
        products.map((product) => (

          <ProductCard
            key={product._id}
            product={product}
          />
        ))
      }

    </div>
  );
}