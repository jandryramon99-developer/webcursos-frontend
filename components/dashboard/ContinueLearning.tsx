import DashboardCourseCard
from "./DashboardCourseCard";

interface Course {
  _id: string;
  slug: string;
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
| CONTINUE LEARNING
|--------------------------------------------------------------------------
*/

export default function ContinueLearning({

  courses,

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