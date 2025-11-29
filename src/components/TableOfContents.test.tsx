import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { TableOfContents } from "./TableOfContents";

const mockData = {
  languages: ["TypeScript", "Terraform"],
  frameworks: ["Next.js", "React-Router"],
  libraries: ["React", "Zod", "Prisma"],
};

describe("TableOfContents", () => {
  it("renders all three sections", () => {
    render(<TableOfContents data={mockData} />);

    expect(screen.getByText("Languages")).toBeDefined();
    expect(screen.getByText("Frameworks")).toBeDefined();
    expect(screen.getByText("Libraries")).toBeDefined();
  });

  it("shows item counts for each section", () => {
    render(<TableOfContents data={mockData} />);

    expect(screen.getAllByText("(2)")).toHaveLength(2);
    expect(screen.getByText("(3)")).toBeDefined();
  });

  it("renders Languages section open by default", () => {
    render(<TableOfContents data={mockData} />);

    const languagesDetails = screen.getByText("Languages").closest("details");
    expect(languagesDetails?.hasAttribute("open")).toBe(true);
  });

  it("renders Frameworks and Libraries sections closed by default", () => {
    render(<TableOfContents data={mockData} />);

    const frameworksDetails = screen.getByText("Frameworks").closest("details");
    const librariesDetails = screen.getByText("Libraries").closest("details");

    expect(frameworksDetails?.hasAttribute("open")).toBe(false);
    expect(librariesDetails?.hasAttribute("open")).toBe(false);
  });

  it("renders all items in the DOM", () => {
    render(<TableOfContents data={mockData} />);

    expect(screen.getByText("TypeScript")).toBeDefined();
    expect(screen.getByText("React")).toBeDefined();
    expect(screen.getByText("Next.js")).toBeDefined();
  });

  it("renders empty sections gracefully", () => {
    render(
      <TableOfContents
        data={{ languages: [], frameworks: [], libraries: [] }}
      />
    );

    expect(screen.getAllByText("(0)")).toHaveLength(3);
  });
});
