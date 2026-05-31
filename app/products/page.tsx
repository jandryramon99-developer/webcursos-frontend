
"use client";

import { useEffect, useMemo, useState } from "react";

import ProductGrid from "@/components/products/ProductGrid";

import ProductSearch from "@/components/products/ProductSearch";

import ProductFilters from "@/components/products/ProductFilters";

import EmptyProducts from "@/components/products/EmptyProducts";

import { getProducts } from "@/services/product.service";

interface product {

  _id: string;

  title: string;

  slug: string;

  thumbnail: string;

  description: string;

  price: number;

  isFeatured: boolean;

  category?: {

    _id: string;

    title: string;

    slug: string;
  };
}

/*
|--------------------------------------------------------------------------
| COURSES PAGE
|--------------------------------------------------------------------------
*/

export default function ProductsPage() {

  /*
  |--------------------------------------------------------------------------
  | STATES
  |--------------------------------------------------------------------------
  */

  const [products, setProducts] =
    useState<product[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("Todos");

  /*
  |--------------------------------------------------------------------------
  | GET COURSES
  |--------------------------------------------------------------------------
  */

  useEffect(() => {

    const fetchProducts =
      async () => {

        try {

          const data =
            await getProducts();

          setProducts(data);

        } catch (error) {

          console.error(error);

        } finally {

          setLoading(false);
        }
      };

    fetchProducts();

  }, []);

  /*
  |--------------------------------------------------------------------------
  | CATEGORIES
  |--------------------------------------------------------------------------
  */

  const categories =
    useMemo(() => {

      const unique =
        new Set(

          products
            .map(
              (product) =>
                product.category?.title
            )
            .filter(
                (title): title is string =>

                Boolean(title)
            )
        );

      return [

        "Todos",

        ...Array.from(unique),
      ];

    }, [products]);

  /*
  |--------------------------------------------------------------------------
  | FILTERED PRODUCTS
  |--------------------------------------------------------------------------
  */

  const filteredProducts =
    useMemo(() => {

      return products.filter((product) => {

        const matchSearch =
          product.title
            .toLowerCase()
            .includes(
              search.toLowerCase()
            );

        const matchCategory =
          selectedCategory === "Todos"

            ? true

            : product.category?.title ===
              selectedCategory;

        return (
          matchSearch &&
          matchCategory
        );
      });

    }, [
      products,
      search,
      selectedCategory,
    ]);

  return (

    <main className="min-h-screen bg-black text-white">

      {/* HERO */}

      <section className="relative overflow-hidden border-b border-zinc-800">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-200 bg-indigo-600/20 blur-[160px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-6 py-18">

          <div className="max-w-3xl">

            <span className="inline-flex px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-sm font-medium">

              DigiPro - Plataforma de productos digitales
            </span>

            <h1 className="mt-6 text-4xl lg:text-5xl font-black tracking-tight leading-tight">

              Explora todos nuestros productos

            </h1>

            <p className="mt-6 text-zinc-400 text-lg leading-relaxed">

              Descubre cursos, plantillas, ebooks, herramientas y recursos digitales diseñados para ayudarte a aprender, crear y crecer.

            </p>

          </div>

        </div>

      </section>

      {/* CONTENT */}

      <section className="max-w-7xl mx-auto px-6 py-12">

        {/* SEARCH */}

        <ProductSearch
          value={search}
          onChange={setSearch}
        />

        {/* FILTERS */}

        <ProductFilters
          categories={categories}
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />

        {/* COUNT */}

        <div className="mt-10 flex items-center justify-between">

          <div>

            <h2 className="text-2xl font-bold">

              Productos disponibles

            </h2>

            <p className="text-zinc-400 mt-1">

              {filteredProducts.length} productos encontrados

            </p>

          </div>

        </div>

        {/* GRID */}

        <div className="mt-10">

          {
            loading ? (

              <p className="text-zinc-400">

                Cargando productos...

              </p>

            ) : filteredProducts.length === 0 ? (

              <EmptyProducts />

            ) : (

              <ProductGrid
                products={filteredProducts}
              />
            )
          }

        </div>

      </section>

    </main>
  );
}