import type { Meta, StoryObj } from "@storybook/react";

import { ButtonTW } from "./ButtonTW";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "C3/ButtonTW",
  component: ButtonTW,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    children: {
      defaultValue: "Button",
      control: {
        type: "text",
      },
    },
  },
} satisfies Meta<typeof ButtonTW>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
  },
};

