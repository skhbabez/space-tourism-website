import type { Meta, StoryObj } from "@storybook/react-vite";

import { NumPagination, NumPaginationLink } from "./NumPagination";

const meta = {
  component: NumPagination,
} satisfies Meta<typeof NumPagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <NumPagination {...args}>
      <NumPaginationLink selected={true} to="/" />
      <NumPaginationLink to="/" />
      <NumPaginationLink to="/" />
    </NumPagination>
  ),
};
