interface Props {

  categories: string[];

  selectedCategory: string;

  onSelect:
    (category: string) => void;
}

export default function CourseFilters({

  categories,

  selectedCategory,

  onSelect,

}: Props) {

  return (

    <div className="flex flex-wrap gap-3 mt-8">

      {
        categories.map((category) => (

          <button
            key={category}
            onClick={() =>
              onSelect(category)
            }
            className={`
              px-5 py-3 rounded-2xl border transition text-sm font-medium

              ${
                selectedCategory === category

                  ? "bg-indigo-600 border-indigo-500 text-white"

                  : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white"
              }
            `}
          >

            {category}

          </button>
        ))
      }

    </div>
  );
}