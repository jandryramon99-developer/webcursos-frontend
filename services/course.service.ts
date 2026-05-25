import api from "@/lib/axios";

/*
|--------------------------------------------------------------------------
| GET COURSES
|--------------------------------------------------------------------------
*/

export const getCourses =
  async () => {

    const response =
      await api.get("/api/courses");

    return response.data;
};

export const getCourseBySlug =
  async (
    slug: string
  ) => {

    const response =
      await api.get(

        `/api/courses/${slug}`
      );

    return response.data;
};
