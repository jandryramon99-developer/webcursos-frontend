"use client";

import { Search } from "lucide-react";

interface Props {

  value: string;

  onChange:
    (value: string) => void;
}

export default function CourseSearch({

  value,

  onChange,

}: Props) {

  return (

    <div className="sticky top-0 z-30 bg-black/80 backdrop-blur-xl py-6">

      <div className="relative">

        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500 w-5 h-5" />

        <input
          type="text"
          value={value}
          onChange={(e) =>
            onChange(
              e.target.value
            )
          }
          placeholder="Buscar cursos..."
          className="w-full h-16 rounded-3xl bg-zinc-900 border border-zinc-800 pl-14 pr-5 text-white outline-none focus:border-indigo-500 transition"
        />

      </div>

    </div>
  );
}