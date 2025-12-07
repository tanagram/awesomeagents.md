import Markdown from "react-markdown";
import { ContentCard } from "@/components/ContentCard";
import { ScrollCard } from "@/components/ScrollCard";
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
      <div className="relative grid min-h-screen w-full justify-items-center overflow-hidden">
        <div className="flex h-screen w-full flex-col gap-6 md:flex-row md:gap-0 md:overflow-hidden">
          <div
            className="shadow-elevation-high z-10 flex h-full w-fit shrink-0 gap-6 border-4 border-[#ededd5] bg-cover md:flex-row"
            style={{ backgroundImage: "url('/cover.jpeg')" }}
          >
            <TitleCard />
            <TableOfContents data={tocData} />
          </div>
          <div className="flex h-full w-full flex-col gap-6 overflow-x-scroll pl-8 md:flex-row">
            {contentEntries.map((entry, index) => (
              <ScrollCard key={`${entry.category}-${entry.name}`}>
                <ContentCard
                  title={entry.name}
                  content={<Markdown>{entry.content}</Markdown>}
                  pageNumber={index + 1}
                />
              </ScrollCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
