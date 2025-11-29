import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { HelloWorld } from "./HelloWorld";

describe("HelloWorld", () => {
  it("renders with default name", () => {
    render(<HelloWorld />);
    expect(screen.getByText("Hello, World!")).toBeDefined();
  });

  it("renders with custom name", () => {
    render(<HelloWorld name="Feifan" />);
    expect(screen.getByText("Hello, Feifan!")).toBeDefined();
  });
});
