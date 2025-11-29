import fs from "fs";
import path from "path";
import type { TableOfContentsData } from "@/components/TableOfContents";

export async function getTableOfContentsData(): Promise<TableOfContentsData> {
  const contentDir = path.join(process.cwd(), "content");

  const readDirectory = (dir: string): string[] => {
    try {
      const files = fs.readdirSync(path.join(contentDir, dir));
      return files
        .filter((file) => file.endsWith(".md") && !file.startsWith("."))
        .map((file) => file.replace(".md", ""))
        .sort();
    } catch {
      return [];
    }
  };

  return {
    languages: readDirectory("languages"),
    frameworks: readDirectory("frameworks"),
    libraries: readDirectory("libraries"),
  };
}
