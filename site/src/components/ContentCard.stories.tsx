import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ContentCard } from "./ContentCard";

const meta: Meta<typeof ContentCard> = {
  title: "Components/ContentCard",
  component: ContentCard,
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "dark" },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ height: "600px", padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ContentCard>;

export const Default: Story = {
  args: {
    icon: <span>🧪</span>,
    title: "Elixir",
    description: "Short description of what this is",
    content: (
      <div>
        <p>
          <strong>JAMES STOCKFORD:</strong> Low prices on commercially available
          software for most of the Radio Shack TRS-80 machines, some peripheral
          equipment (disk drives, printers, cables, interface cards, and CRT
          tubes), and a healthy sampling of their own software.
        </p>
        <p>
          They publish a newsletter and will develop software on a custom basis.
          Customer support and return policy is excellent.
        </p>
      </div>
    ),
    pageNumber: 7,
  },
};

export const WithCodeContent: Story = {
  args: {
    icon: <span>📄</span>,
    title: "TypeScript",
    description: "Example code snippet",
    content: (
      <pre>
        <code>{`function greet(name: string): string {
  return \`Hello, \${name}!\`;
}`}</code>
      </pre>
    ),
    pageNumber: 12,
  },
};

export const MinimalContent: Story = {
  args: {
    title: "Notes",
    content: <p>Simple content without description.</p>,
    pageNumber: 1,
  },
};
