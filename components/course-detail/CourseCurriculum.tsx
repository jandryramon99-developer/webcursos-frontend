"use client";

import { useState } from "react";

import {
  ChevronDown,
  PlayCircle,
  Lock,
} from "lucide-react";
interface Topic {
  _id: number;
  title: string;
  slug: string;
  videos?: {
    _id: number;
    title: string;
    duration: string;
    isPreview: boolean;
  }[];
}
interface Props {

  topics: Topic[];
}

export default function CourseCurriculum({

  topics,

}: Props) {

  const [openIndex, setOpenIndex] =
    useState<number | null>(0);

  return (

    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

      <h2 className="text-3xl font-bold">

        Contenido del curso

      </h2>

      <div className="mt-8 space-y-4">

        {
          topics.map(

            (
              topic,
              index
            ) => {

              const isOpen =
                openIndex === index;

              return (

                <div
                  key={topic._id}
                  className="rounded-2xl border border-zinc-800 overflow-hidden"
                >

                  {/* HEADER */}

                  <button
                    onClick={() =>
                      setOpenIndex(

                        isOpen
                          ? null
                          : index
                      )
                    }
                    className="w-full flex items-center justify-between px-6 py-5 bg-zinc-950 hover:bg-zinc-900 transition"
                  >

                    <div className="text-left">

                      <h3 className="font-semibold text-lg">

                        {topic.title}

                      </h3>

                      <p className="text-zinc-500 text-sm mt-1">

                        {
                          topic.videos?.length || 0
                        } videos

                      </p>

                    </div>

                    <ChevronDown
                      className={`transition ${
                        isOpen
                          ? "rotate-180"
                          : ""
                      }`}
                    />

                  </button>

                  {/* VIDEOS */}

                  {
                    isOpen && (

                      <div className="border-t border-zinc-800">

                        {
                          topic.videos?.map(

                            (video: { _id: number; title: string; duration: string; isPreview: boolean }) => (

                              <div
                                key={video._id}
                                className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 last:border-none"
                              >

                                <div className="flex items-center gap-4">

                                  {
                                    video.isPreview ? (

                                      <PlayCircle className="w-5 h-5 text-indigo-400" />

                                    ) : (

                                      <Lock className="w-5 h-5 text-zinc-500" />
                                    )
                                  }

                                  <div>

                                    <p className="font-medium">

                                      {video.title}

                                    </p>

                                    <p className="text-zinc-500 text-sm">

                                      {video.duration}

                                    </p>

                                  </div>

                                </div>

                                <span className="text-xs text-zinc-500">

                                  {
                                    video.isPreview

                                      ? "Preview"

                                      : "Bloqueado"
                                  }

                                </span>

                              </div>
                            )
                          )
                        }

                      </div>
                    )
                  }

                </div>
              );
            }
          )
        }

      </div>

    </div>
  );
}