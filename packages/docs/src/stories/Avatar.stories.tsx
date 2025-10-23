import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "@chris-ignite-ui/react";
import type { AvatarProps } from "@chris-ignite-ui/react";

export default {
  title: "Data display/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  args: {
    src: "https://avatars.githubusercontent.com/u/61232440?v=4",
    alt: "Christian",
  },
  argTypes: {
    src: {
      control: {
        type: "text",
      },
    },
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};

Avatar.displayName = "Avatar";
