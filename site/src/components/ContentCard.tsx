"use client";

import { useState, type ReactNode } from "react";

function PackageIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

interface ContentCardProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  content: ReactNode;
  pageNumber: number;
}

export function ContentCard({
  icon,
  title,
  description,
  content,
  pageNumber,
}: ContentCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const contentEl = document.getElementById(`content-card-${pageNumber}`);
    if (contentEl) {
      await navigator.clipboard.writeText(contentEl.innerText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex h-full flex-col justify-between border-t-4 border-solid border-t-black dark:border-t-white p-6 md:max-w-[400px]">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xl">{icon ?? <PackageIcon />}</span>
            <h2 className="text-xl font-semibold">{title}</h2>
          </div>
          {description && (
            <p className="text-sm text-gray-400">{description}</p>
          )}
        </div>

        <div className="rounded border border-gray-700">
          <div className="flex items-center justify-between border-b border-gray-700 px-3 py-2">
            <span className="text-sm text-gray-400">Content</span>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 text-sm text-gray-400 transition-colors hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
              </svg>
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
          <div
            id={`content-card-${pageNumber}`}
            className="prose prose-invert max-w-none p-4 text-sm"
          >
            {content}
          </div>
        </div>
      </div>

      <div className="text-right text-sm text-gray-500">{pageNumber}</div>
    </div>
  );
}
