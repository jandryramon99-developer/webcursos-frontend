import api from "@/lib/axios";

export const getCurrentUser =
  async (
    cookieHeader?: string
  ) => {

    try {

      const response =
        await api.get(

          "/api/users/me",

          {
            headers: {

              ...(cookieHeader
                ? {
                    Cookie:
                      cookieHeader,
                  }
                : {}),
            },
          }
        );

      return response.data;

    } catch (error) {

      console.error(error);

      return null;
    }
};