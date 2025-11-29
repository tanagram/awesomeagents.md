export function TitleCard() {
  return (
    <div className="flex h-full flex-col justify-between border-t-4 border-solid border-t-black p-6 md:max-w-[400px] dark:border-t-white">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">awesome AGENTS.md</h1>
        <p className="text-gray-400">
          Recommended patterns, rules, and techniques across xx libraries and languages to get the best results from coding agents.
        </p>

        <p className="text-gray-400">
          <strong>Editor:</strong> Feifan Zhou
        </p>

        <p className="text-gray-400">
          <strong>Authors:</strong> x, y, and nn others
        </p>
      </div>
    </div>
  );
}
