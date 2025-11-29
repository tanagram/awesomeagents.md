export interface TableOfContentsData {
  languages: string[];
  frameworks: string[];
  libraries: string[];
}

function ChevronIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-transform group-open:rotate-90"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

interface CollapsibleSectionProps {
  title: string;
  items: string[];
  defaultOpen?: boolean;
}

function CollapsibleSection({
  title,
  items,
  defaultOpen = false,
}: CollapsibleSectionProps) {
  return (
    <details
      open={defaultOpen}
      className="group border-b border-gray-700 last:border-b-0"
    >
      <summary className="flex cursor-pointer list-none items-center gap-2 px-4 py-3 font-medium transition-colors hover:bg-gray-800">
        <ChevronIcon />
        <span>{title}</span>
        <span className="ml-auto text-sm text-gray-500">({items.length})</span>
      </summary>
      <ul className="flex flex-col gap-1 px-4 pb-3 pl-10">
        {items.map((item) => (
          <li key={item} className="text-sm text-gray-400 hover:text-white">
            {item}
          </li>
        ))}
      </ul>
    </details>
  );
}

interface TableOfContentsProps {
  data: TableOfContentsData;
}

export function TableOfContents({ data }: TableOfContentsProps) {
  return (
    <div className="rounded border border-gray-700">
      <CollapsibleSection
        title="Languages"
        items={data.languages}
        defaultOpen
      />
      <CollapsibleSection title="Frameworks" items={data.frameworks} />
      <CollapsibleSection title="Libraries" items={data.libraries} />
    </div>
  );
}
