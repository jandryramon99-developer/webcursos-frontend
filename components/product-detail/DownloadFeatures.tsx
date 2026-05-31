import {
  Download
} from "lucide-react";

interface Props {

  items: string[];
}

export default function DownloadFeatures({

  items,

}: Props) {

  return (

    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

      <h2 className="text-3xl font-bold">

        Contenido incluido

      </h2>

      <div className="mt-8 space-y-4">

        {
          items.map(
            (item, index) => (

              <div
                key={index}
                className="flex items-center gap-4"
              >

                <Download
                  className="w-5 h-5 text-indigo-400"
                />

                <span className="text-zinc-300">

                  {item}

                </span>

              </div>
            )
          )
        }

      </div>

    </div>
  );
}