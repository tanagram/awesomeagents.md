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
    <div className="grid min-h-screen justify-items-center">
      <div className="flex w-full flex-col gap-6 md:flex-row md:gap-0 md:overflow-x-auto">
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
  );
}
