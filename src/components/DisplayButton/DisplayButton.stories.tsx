import type { Meta, StoryObj } from "@storybook/react-vite";

import DisplayButton from "./DisplayButton";

const meta = {
  component: DisplayButton,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof DisplayButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => <DisplayButton {...args}>explore</DisplayButton>,
};
