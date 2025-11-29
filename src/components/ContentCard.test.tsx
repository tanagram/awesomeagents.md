import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ContentCard } from "./ContentCard";

describe("ContentCard", () => {
  it("renders title with icon", () => {
    render(
      <ContentCard
        icon={<span data-testid="icon">🧪</span>}
        title="Elixir"
        content={<p>Test content</p>}
        pageNumber={7}
      />
    );
    expect(screen.getByText("Elixir")).toBeDefined();
    expect(screen.getByTestId("icon")).toBeDefined();
  });

  it("renders description when provided", () => {
    render(
      <ContentCard
        icon={<span>🧪</span>}
        title="Elixir"
        description="Short description of what this is"
        content={<p>Test content</p>}
        pageNumber={7}
      />
    );
    expect(screen.getByText("Short description of what this is")).toBeDefined();
  });

  it("renders page number", () => {
    render(
      <ContentCard
        icon={<span>🧪</span>}
        title="Test"
        content={<p>Content</p>}
        pageNumber={42}
      />
    );
    expect(screen.getByText("42")).toBeDefined();
  });

  it("renders copy button", () => {
    render(
      <ContentCard
        icon={<span>🧪</span>}
        title="Test"
        content={<p>Content</p>}
        pageNumber={1}
      />
    );
    expect(screen.getByText("Copy")).toBeDefined();
  });
});
