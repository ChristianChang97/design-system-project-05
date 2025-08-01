import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Text } from "@ignite-ui/react";
import type { BoxProps } from "@ignite-ui/react";

export default {
  title: "Surfaces/Box",
  component: Box,
  tags: ["autodocs"],
  args: {
    children: <Text>Testando o elemento Box</Text>,
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
