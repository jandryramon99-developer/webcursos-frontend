import api from "@/lib/axios";

/*
|--------------------------------------------------------------------------
| GET PRODUCTS
|--------------------------------------------------------------------------
*/

export const getProducts =
  async () => {

    const response =
      await api.get("/api/products");

    return response.data;
};

export const getProductBySlug =
  async (
    slug: string
  ) => {

    const response =
      await api.get(

        `/api/products/${slug}`
      );

    return response.data;
};
