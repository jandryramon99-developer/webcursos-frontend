import Image from "next/image";

import Link from "next/link";

interface Props {

  course: {

    _id: string;

    title: string;

    slug: string;

    description: string;

    thumbnail: string;

    category?: {

      title: string;
    };
  };
}

/*
|--------------------------------------------------------------------------
| DASHBOARD COURSE CARD
|--------------------------------------------------------------------------
*/

export default function DashboardCourseCard({

  course,

}: Props) {

  return (

    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden">

      {/* IMAGE */}

      <div className="relative aspect-video">

        <Image
          src={course.thumbnail}
          alt={course.title}
          fill
          className="object-cover"
        />

      </div>

      {/* CONTENT */}

      <div className="p-6">

        <span className="px-3 py-1 rounded-full bg-indigo-600/20 text-indigo-400 text-sm">

          {course.category?.title || "Sin categoría"}

        </span>

        <h3 className="text-2xl font-bold text-white mt-4">

          {course.title}

        </h3>

        <p className="text-zinc-400 mt-3">

          {course.description}

        </p>

        {/* BUTTON */}

        <Link
          href={`/products/${course.slug}`}
          className="mt-6 inline-flex bg-indigo-600 hover:bg-indigo-500 transition px-5 py-3 rounded-2xl font-medium text-white"
        >

          Ver curso

        </Link>

      </div>

    </div>
  );
}