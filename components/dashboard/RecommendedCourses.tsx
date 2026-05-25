import DashboardCourseCard
from "./DashboardCourseCard";

interface Course {
  _id: string;
  title: string;
  thumbnail: string;
  description: string;
  isFeatured: boolean;
  topics: string[];
}

interface Props {
  courses: Course[];
}

/*
|--------------------------------------------------------------------------
| RECOMMENDED COURSES
|--------------------------------------------------------------------------
*/

export default function RecommendedCourses({

  courses,

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

        {courses.map((course) => (

          <DashboardCourseCard
            key={course._id}
            course={course}
          />
        ))}

      </div>

    </section>
  );
}