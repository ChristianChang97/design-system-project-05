import { Heading, type HeadingProps } from "@ignite-ui/react";
import type { Meta, StoryObj } from "@storybook/react-vite";

export default {
  title: "Typography/Heading",
  component: Heading,
  tags: ["autodocs"],
  args: {
    children: "Custom title",
  },
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: "H1 Heading",
    as: "h1",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`.",
      },
    },
  },
};

Heading.displayName = "Heading";
