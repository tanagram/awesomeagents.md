import { type ReactNode } from "react";

interface ScrollCardProps {
  children: ReactNode;
}

export function ScrollCard({ children }: ScrollCardProps) {
  return (
    <div className="flex h-full w-[35vw] shrink-0">
      <div className="sticky left-0 flex h-full">{children}</div>
    </div>
  );
}
