import Markdown from "react-markdown";
import { ContentCard } from "@/components/ContentCard";
import { TitleCard } from "@/components/TitleCard";
import { TableOfContents } from "@/components/TableOfContents";
import { getTableOfContentsData } from "@/lib/getTableOfContentsData";
import { getContentEntries } from "@/lib/getContentEntries";

export default async function Home() {
  const tocData = await getTableOfContentsData();
  const contentEntries = await getContentEntries();

  return (
    <>
      <div className="pointer-events-none fixed inset-0 bg-linear-to-r from-[#9ac5be] via-[#8dbdb5] to-[#7eb3aa]"></div>
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_40%,rgba(0,0,0,0.2)_100%)]"></div>
      <div className="relative grid min-h-screen w-fit justify-items-center">
        <div className="flex h-screen w-full flex-col gap-6 p-8 pl-0 md:flex-row md:gap-0">
          <div className="flex h-full w-full flex-col gap-6 bg-[#e8dcc8] md:flex-row md:gap-0 md:overflow-x-auto">
            <TitleCard />
            <TableOfContents data={tocData} />
            {contentEntries.map((entry, index) => (
              <ContentCard
                key={`${entry.category}-${entry.name}`}
                title={entry.name}
                content={<Markdown>{entry.content}</Markdown>}
                pageNumber={index + 1}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
