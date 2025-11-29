import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { HelloWorld } from "./HelloWorld";

const meta: Meta<typeof HelloWorld> = {
  title: "Components/HelloWorld",
  component: HelloWorld,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    name: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof HelloWorld>;

export const Default: Story = {};

export const WithCustomName: Story = {
  args: {
    name: "Storybook",
  },
};
