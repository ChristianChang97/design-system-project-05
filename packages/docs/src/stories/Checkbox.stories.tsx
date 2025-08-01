import { type CheckboxProps, Checkbox } from "@ignite-ui/react";
import { Box, Text } from "@ignite-ui/react";
import type { Meta, StoryObj } from "@storybook/react-vite";

export default {
  title: "Form/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: "flex", flexDirection: "row", gap: "$2" }}
        >
          {Story()}
          <Text size="sm">Accept terms of use</Text>
        </Box>
      );
    },
  ],
} as Meta<CheckboxProps>;

export const Primary: StoryObj<CheckboxProps> = {};

Checkbox.displayName = "Checkbox";
