import { getProductBySlug }
from "@/services/product.service";

import ProductHero
from "@/components/product-detail/ProductHero";

import ProductSidebar
from "@/components/product-detail/ProductSidebar";

import CourseCurriculum
from "@/components/product-detail/CourseCurriculum";

import DownloadFeatures
from "@/components/product-detail/DownloadFeatures";

import ResourceFeatures
from "@/components/product-detail/ResourceFeatures";

export default async function ProductPage({

  params,

}: {

  params: Promise<{
    slug: string;
  }>;
}) {

  const { slug } =
    await params;

  const product =
    await getProductBySlug(
      slug
    );

  return (

    <main className="min-h-screen bg-black text-white">

      <ProductHero
        product={product}
      />

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-12">

          {/* LEFT */}

          <div>

            {/* DESCRIPTION */}

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

              <h2 className="text-3xl font-bold">

                Descripción

              </h2>

              <p className="mt-6 text-zinc-400 leading-relaxed whitespace-pre-line">

                {product.description}

              </p>

            </div>

            {/* TYPE CONTENT */}

            <div className="mt-10">

              {
                product.productType === "course" && (

                  <CourseCurriculum
                    topics={product.topics}
                  />

                )
              }

              {
                product.productType === "download" && (

                  <DownloadFeatures
                    items={
                      product.downloadItems || []
                    }
                  />

                )
              }

              {
                product.productType === "resource" && (

                  <ResourceFeatures
                    items={
                      product.resourceItems || []
                    }
                  />

                )
              }

            </div>

          </div>

          {/* SIDEBAR */}

          <div>

            <ProductSidebar
              product={product}
            />

          </div>

        </div>

      </section>

    </main>
  );
}