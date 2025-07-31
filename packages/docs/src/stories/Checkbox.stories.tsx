import { type CheckboxProps, Checkbox } from "@ignite-ui/react";
import { Box, Text } from "@ignite-ui/react";
import type { Meta, StoryObj } from "@storybook/react-vite";

export default {
  title: "Form/Checkbox",
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box>
          {Story()}
          <Text size="sm">Accept terms of use</Text>
        </Box>
      );
    },
  ],
} as Meta<CheckboxProps>;

export const Primary: StoryObj<CheckboxProps> = {};
