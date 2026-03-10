import type { Meta, StoryObj } from "@storybook/react-vite";

import { DotsPagination, DotsPaginatonLink } from "./DotsPagination";

const meta = {
  component: DotsPagination,
} satisfies Meta<typeof DotsPagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <DotsPagination {...args}>
      <DotsPaginatonLink selected={true} to="/" />
      <DotsPaginatonLink to="/" />
      <DotsPaginatonLink to="/" />
      <DotsPaginatonLink to="/" />
    </DotsPagination>
  ),
};
