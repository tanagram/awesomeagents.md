import fs from "fs";
import path from "path";

export type ContentCategory = "languages" | "frameworks" | "libraries";

export interface ContentEntry {
  name: string;
  category: ContentCategory;
  content: string;
}

export async function getContentEntries(): Promise<ContentEntry[]> {
  const contentDir = path.join(process.cwd(), "content");
  const categories: ContentCategory[] = [
    "languages",
    "frameworks",
    "libraries",
  ];
  const entries: ContentEntry[] = [];

  for (const category of categories) {
    const categoryPath = path.join(contentDir, category);
    try {
      const files = fs.readdirSync(categoryPath);
      for (const file of files) {
        if (file.endsWith(".md") && !file.startsWith(".")) {
          const filePath = path.join(categoryPath, file);
          const content = fs.readFileSync(filePath, "utf-8");
          entries.push({
            name: file.replace(".md", ""),
            category,
            content,
          });
        }
      }
    } catch {
      continue;
    }
  }

  return entries.sort((a, b) => a.name.localeCompare(b.name));
}
