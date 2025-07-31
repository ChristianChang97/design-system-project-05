import { Box, Text, TextArea, type TextAreaProps } from "@ignite-ui/react";
import type { Meta, StoryObj } from "@storybook/react-vite";

export default {
  title: "Form/Text Area",
  component: TextArea,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box>
          <Text size="sm">Observations</Text>
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<TextAreaProps>;

export const Primary: StoryObj<TextAreaProps> = {};
