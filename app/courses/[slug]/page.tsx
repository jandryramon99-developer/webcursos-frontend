import { getCourseBySlug }
from "@/services/course.service";

import CourseHero
from "@/components/course-detail/CourseHero";

import CourseSidebar
from "@/components/course-detail/CourseSidebar";

import CourseCurriculum
from "@/components/course-detail/CourseCurriculum";

/*
|--------------------------------------------------------------------------
| PAGE
|--------------------------------------------------------------------------
*/

export default async function CoursePage({

  params,

}: {

  params: Promise<{

    slug: string;
  }>;
}) {

  /*
  |--------------------------------------------------------------------------
  | PARAMS
  |--------------------------------------------------------------------------
  */

  const { slug } =
    await params;

  /*
  |--------------------------------------------------------------------------
  | COURSE
  |--------------------------------------------------------------------------
  */

  const course =
    await getCourseBySlug(
      slug
    );

  return (

    <main className="min-h-screen bg-black text-white">

      {/* HERO */}

      <CourseHero
        course={course}
      />

      {/* CONTENT */}

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

                {course.description}

              </p>

            </div>

            {/* CURRICULUM */}

            <div className="mt-10">

              <CourseCurriculum
                topics={course.topics}
              />

            </div>

          </div>

          {/* SIDEBAR */}

          <div>

            <CourseSidebar
              course={course}
            />

          </div>

        </div>

      </section>

    </main>
  );
}