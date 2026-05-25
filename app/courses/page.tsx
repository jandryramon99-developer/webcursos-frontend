// app/courses/page.tsx

"use client";

import { useEffect, useMemo, useState } from "react";

import CourseGrid from "@/components/courses/CourseGrid";

import CourseSearch from "@/components/courses/CourseSearch";

import CourseFilters from "@/components/courses/CourseFilters";

import EmptyCourses from "@/components/courses/EmptyCourses";

import { getCourses } from "@/services/course.service";

/*
|--------------------------------------------------------------------------
| TYPES
|--------------------------------------------------------------------------
*/

interface Course {

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

export default function CoursesPage() {

  /*
  |--------------------------------------------------------------------------
  | STATES
  |--------------------------------------------------------------------------
  */

  const [courses, setCourses] =
    useState<Course[]>([]);

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

    const fetchCourses =
      async () => {

        try {

          const data =
            await getCourses();

          setCourses(data);

        } catch (error) {

          console.error(error);

        } finally {

          setLoading(false);
        }
      };

    fetchCourses();

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

          courses
            .map(
              (course) =>
                course.category?.title
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

    }, [courses]);

  /*
  |--------------------------------------------------------------------------
  | FILTERED COURSES
  |--------------------------------------------------------------------------
  */

  const filteredCourses =
    useMemo(() => {

      return courses.filter((course) => {

        const matchSearch =
          course.title
            .toLowerCase()
            .includes(
              search.toLowerCase()
            );

        const matchCategory =
          selectedCategory === "Todos"

            ? true

            : course.category?.title ===
              selectedCategory;

        return (
          matchSearch &&
          matchCategory
        );
      });

    }, [
      courses,
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

              Plataforma educativa

            </span>

            <h1 className="mt-6 text-4xl lg:text-5xl font-black tracking-tight leading-tight">

              Explora todos nuestros cursos

            </h1>

            <p className="mt-6 text-zinc-400 text-lg leading-relaxed">

              Aprende con cursos modernos, dinámicos y diseñados para potenciar tu conocimiento.

            </p>

          </div>

        </div>

      </section>

      {/* CONTENT */}

      <section className="max-w-7xl mx-auto px-6 py-12">

        {/* SEARCH */}

        <CourseSearch
          value={search}
          onChange={setSearch}
        />

        {/* FILTERS */}

        <CourseFilters
          categories={categories}
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />

        {/* COUNT */}

        <div className="mt-10 flex items-center justify-between">

          <div>

            <h2 className="text-2xl font-bold">

              Cursos disponibles

            </h2>

            <p className="text-zinc-400 mt-1">

              {filteredCourses.length} cursos encontrados

            </p>

          </div>

        </div>

        {/* GRID */}

        <div className="mt-10">

          {
            loading ? (

              <p className="text-zinc-400">

                Cargando cursos...

              </p>

            ) : filteredCourses.length === 0 ? (

              <EmptyCourses />

            ) : (

              <CourseGrid
                courses={filteredCourses}
              />
            )
          }

        </div>

      </section>

    </main>
  );
}