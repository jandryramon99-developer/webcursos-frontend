

import CourseCard from "../courses/CourseCard";

// 1. Definimos la interfaz para un curso individual
interface Course {
  _id: string;
  title: string;
  thumbnail: string;
  description: string;
  topics: string[];
}

// 2. Modificamos las props para recibir el arreglo de cursos
interface FeaturedCoursesProps {
  courses: Course[];
}


export default function FeaturedCourses({ courses }: FeaturedCoursesProps) {

  return (

    /*
      Cursos destacados.
    */

    <section className="py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}

        <div className="mb-12">

          <span className="text-indigo-400 text-sm">
            Cursos disponibles
          </span>

          <h2 className="mt-2 text-4xl font-black text-white">
            Empieza a aprender hoy
          </h2>

        </div>

        {/* GRID */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {courses.map(course => (
              <CourseCard
                key={course._id}
                _id={course._id}
                title={course.title}
                thumbnail={course.thumbnail}
                description={course.description}
                topics={course.topics}
              />
            ))}

        </div>

      </div>

    </section>
  );
}