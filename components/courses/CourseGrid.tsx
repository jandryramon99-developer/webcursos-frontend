import CourseCard from "./CourseCard";

interface Course {

  _id: string;

  title: string;

  slug: string;

  thumbnail: string;

  description: string;

  price: number;

  isFeatured: boolean;

  category?: {

    title: string;
  };
}

interface Props {

  courses: Course[];
}

export default function CourseGrid({

  courses,

}: Props) {

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

      {
        courses.map((course) => (

          <CourseCard
            key={course._id}
            course={course}
          />
        ))
      }

    </div>
  );
}