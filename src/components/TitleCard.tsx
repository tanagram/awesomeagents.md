import { Neuton } from "next/font/google";

const neuton = Neuton({ weight: ["400", "700"] });

export function TitleCard() {
  return (
    <div className="flex h-full flex-col justify-between border-t-4 border-solid border-t-black p-6 md:max-w-[400px] dark:border-t-white">
      <div className="flex flex-col gap-4">
        <h1 className={`flex flex-col text-3xl text-white ${neuton.className}`}>
          <span className="ml-[19px] italic">awesome</span>
          <span className="-mt-4 text-6xl font-bold">AGENTS.md</span>
        </h1>
        <p className="text-secondary-white">
          Recommended patterns, rules, and techniques across xx libraries and
          languages to get the best results from coding agents.
        </p>

        <p className="text-secondary-white">
          <strong>Editor:</strong> Feifan Zhou
        </p>

        <p className="text-secondary-white">
          <strong>Authors:</strong> x, y, and nn others
        </p>
      </div>
    </div>
  );
}
